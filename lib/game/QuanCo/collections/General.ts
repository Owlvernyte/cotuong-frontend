import Piece, { IPiece, PieceType } from '../Piece'

class General extends Piece {
    constructor(options?: Partial<IPiece>) {
        super(options)
        this.pieceType = PieceType.General
    }
}

export default General
