import Piece, { IPiece, PieceType } from '../Piece'

class Elephant extends Piece {
    constructor(options?: IPiece) {
        super(options)
        this.pieceType = PieceType.Elephant
        this.signature = 'B'
    }
}

export default Elephant
