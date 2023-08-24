import Piece, { IPiece, PieceType } from '../Piece'

class Horse extends Piece {
    constructor(options?: Partial<IPiece>) {
        super(options)
        this.pieceType = PieceType.Horse
    }
}

export default Horse
