import Piece, { IPiece, PieceType } from '../Piece'

class Cannon extends Piece {
    constructor(options?: Partial<IPiece>) {
        super(options)
        this.pieceType = PieceType.Cannon
        this.signature = 'C'
    }
}

export default Cannon
