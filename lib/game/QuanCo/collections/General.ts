import Piece, { IPiece, PieceType } from '../Piece'

class General extends Piece {
    constructor(options?: Partial<IPiece>) {
        super(options)
        this.pieceType = PieceType.General
        this.signature = 'K'
    }
}

export default General
