import Board from '../Board'

export interface IPiece {
    pieceType?: PieceType
    coord?: CoordinationType
    isRed: boolean
    signature?: string
}

abstract class Piece implements IPiece {
    pieceType?: PieceType
    coord?: CoordinationType
    isRed: boolean = true
    signature?: string = ''

    constructor(options?: Partial<IPiece>) {
        if (!options) {
            return
        }

        this.coord = options.coord ?? this.coord
        this.isRed = options.isRed ?? this.isRed
        this.pieceType = options.pieceType ?? this.pieceType
        this.signature = options.signature ?? this.signature
    }

    setCoord(coord?: CoordinationType) {
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
