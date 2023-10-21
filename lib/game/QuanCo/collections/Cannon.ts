import Board from '../../Board'
import Piece, { IPiece, PieceType } from '../Piece'

class Cannon extends Piece {
    constructor(options?: Partial<IPiece>) {
        super(options)
        this.pieceType = PieceType.Cannon
        this.signature = 'C'
    }

    override isValidMove(destination: ICoordination, board: Board): Boolean {
        const isBaseValidMove = super.isValidMove(destination, board)
        if (!isBaseValidMove) return false

        const directionX = destination.x - this.coord.x
        const directionY = destination.y - this.coord.y
        const moveX = Math.abs(directionX)
        const moveY = Math.abs(directionY)

        // Khong cho phep di cheo
        if (moveX > 0 && moveY > 0) return false

        const isOverPiece = board.squares[destination.x][destination.y] != null
        let count = 0

        // Kiem tra cot
        if (moveY == 0) {
            const headIndex = directionX > 0 ? this.coord.x : destination.x
            const tailIndex = directionX < 0 ? this.coord.x : destination.x
            for (let i = headIndex + 1; i < tailIndex; i++) {
                if (board.squares[i][this.coord.y] !== null) count++
            }
        }

        // Kiem tra dong
        if (moveX == 0) {
            const headIndex = directionY > 0 ? this.coord.y : destination.y
            const tailIndex = directionY < 0 ? this.coord.y : destination.y
            for (let j = headIndex + 1; j < tailIndex; j++) {
                if (board.squares[this.coord.x][j] !== null) count++
            }
        }

        if ((!isOverPiece && count != 0) || (isOverPiece && count != 1))
            return false

        // TODO: Sẽ cập nhật lại khi có Xoay Bàn Cờ!
        return true
    }
}

export default Cannon
