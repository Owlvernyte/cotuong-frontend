import Piece, { IPiece, PieceType } from '../Piece'

class Advisor extends Piece {
    constructor(options?: Partial<IPiece>) {
        super(options)
        this.pieceType = PieceType.Advisor
    }
}

export default Advisor
