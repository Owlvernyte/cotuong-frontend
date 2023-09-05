import Piece, { IPiece, PieceType } from '../Piece'

class Advisor extends Piece {
    constructor(options?: Partial<IPiece>) {
        super(options)
        this.pieceType = PieceType.Advisor
        this.signature = 'A'
    }
}

export default Advisor
