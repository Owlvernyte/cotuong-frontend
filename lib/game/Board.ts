import Piece, { PieceType } from './QuanCo/Piece'
import Horse from './QuanCo/collections/Horse'
import Cannon from './QuanCo/collections/Cannon'
import Advisor from './QuanCo/collections/Advisor'
import Soldier from './QuanCo/collections/Soldier'
import Elephant from './QuanCo/collections/Elephant'
import General from './QuanCo/collections/General'
import Chariot from './QuanCo/collections/Chariot'

export interface IBoard {
    columns: number
    rows: number
    squares: Matrix<Piece | null>
}

class Board implements IBoard {
    columns: number = 9
    rows: number = 10
    squares: Matrix<Piece | null> = new Array(this.rows).fill(
        new Array<Piece | null>(this.columns).fill(null)
    )

    constructor(options?: Partial<IBoard>) {
        if (!options) {
            return
        }

        this.columns = options.columns ?? this.columns
        this.rows = options.rows ?? this.rows
        this.squares = options.squares ?? this.squares
    }

    setSquares(matrix: Matrix<Piece | null>) {
        return new Board({ ...this, squares: this._parseMatrix(matrix) })
    }

    _parseMatrix(matrix: Matrix<Piece | null>) {
        return matrix.map((row) =>
            row.map((cell) => {
                if (!cell) return null
                switch (cell.pieceType) {
                    case PieceType.Advisor:
                        return new Advisor({
                            ...cell,
                        })
                    case PieceType.Cannon:
                        return new Cannon({
                            ...cell,
                        })
                    case PieceType.Chariot:
                        return new Chariot({
                            ...cell,
                        })
                    case PieceType.Elephant:
                        return new Elephant({
                            ...cell,
                        })
                    case PieceType.General:
                        return new General({
                            ...cell,
                        })
                    case PieceType.Horse:
                        return new Horse({
                            ...cell,
                        })
                    case PieceType.Soldier:
                        return new Soldier({
                            ...cell,
                        })
                    default:
                        return null
                }
            })
        )
    }

    getInitBoard(): Board {
        return new Board({ ...this, squares: this.getInitSquares() })
    }

    getBoard(): Board {
        return new Board({ ...this })
    }

    movePiece(piece: Piece, destination: CoordinationType): Board {
        if (this.squares[piece.coord!.x][piece.coord!.y] != null) {
            this.squares[piece.coord!.x][piece.coord!.y] = null
        }
        this.squares[destination.x][destination.y] = piece
        piece.setCoord(destination)

        return new Board({ ...this })
    }

    move(source: CoordinationType, destination: CoordinationType) {
        const piece = this.squares[source.x][source.y]
        if (!piece) return this
        return this.movePiece(piece, destination)
    }

    getInitSquares(): Matrix<Piece | null> {
        return this.squares.map((rows, i) => {
            return rows.map((_, j) => {
                const coord: CoordinationType = {
                    x: i,
                    y: j,
                }
                switch (i) {
                    case 3:
                    case 6:
                        if (j % 2 != 0) {
                            return null
                        }

                        return new Soldier({ coord, isRed: i === 3 })
                    case 0:
                    case 9:
                        switch (j) {
                            case 0:
                            case 8:
                                return new Chariot({ coord, isRed: i === 0 })
                            case 4:
                                return new General({ coord, isRed: i === 0 })
                            case 3:
                            case 5:
                                return new Advisor({ coord, isRed: i === 0 })
                            case 2:
                            case 6:
                                return new Elephant({ coord, isRed: i === 0 })
                            case 1:
                            case 7:
                                return new Horse({ coord, isRed: i === 0 })
                        }
                    case 2:
                    case 7:
                        if (j !== 1 && j !== 7) return null
                        return new Cannon({ coord, isRed: i === 2 })
                    default:
                        return null
                }
            })
        })
    }

    isPieceBetweenGenerals(piece: Piece) {
        let hasGeneralAbove = false
        let hasGeneralBelow = false
        for (let i = piece.coord.x - 1; i >= 0; i--) {
            const oPiece = this.squares[i][piece.coord.y]
            if (!oPiece) continue
            if (oPiece.pieceType !== PieceType.General) return false
            hasGeneralAbove = true
        }
        for (let i = piece.coord.x + 1; i < this.rows; i++) {
            const oPiece = this.squares[i][piece.coord.y]
            if (!oPiece) continue
            if (oPiece.pieceType !== PieceType.General) return false
            hasGeneralBelow = true
        }
        return hasGeneralAbove && hasGeneralBelow
    }

    init() {
        this.squares = this.getInitSquares()
    }
}

export default Board
