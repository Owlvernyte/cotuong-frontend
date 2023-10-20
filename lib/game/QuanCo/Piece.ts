import Board from '../Board'

export interface IPiece {
    pieceType?: PieceType
    coord?: CoordinationType
    isRed: boolean
    signature?: string
}

abstract class Piece implements IPiece {
    pieceType?: PieceType
    coord: CoordinationType = {
        x: -1,
        y: -1,
    }
    isRed: boolean = true
    signature?: string = ''
    _basePiecePath = '/assets/game/pieces1'

    constructor(options?: Partial<IPiece>) {
        if (!options) {
            return
        }

        this.coord = options.coord ?? this.coord
        this.isRed = options.isRed ?? this.isRed
        this.pieceType = options.pieceType ?? this.pieceType
        this.signature = options.signature ?? this.signature
    }

    get id() {
        return `${this.pieceChars}_${this.coord.x}_${
            this.coord.y
        }`
    }

    get pieceChars() {
        return `${this.isRed ? 'r' : 'b'}${this.signature}`
    }

    get imgSrc() {
        return `${this._basePiecePath}/${this.pieceChars}.svg`
    }

    setCoord(coord: CoordinationType) {
        this.coord = coord
    }

    getAvailableMoves(): Array<CoordinationType> {
        return []
    }
    isValidMove(destination: CoordinationType, board: Board): Boolean {
        // if (!notthingBetwen) {
        //     false
        // }
        // if (!desc.red) {
        //     false
        // }
        return true
    }
}

export default Piece

export enum PieceType {
    General,
    Advisor,
    Elephant,
    Horse,
    Chariot,
    Cannon,
    Soldier,
}
