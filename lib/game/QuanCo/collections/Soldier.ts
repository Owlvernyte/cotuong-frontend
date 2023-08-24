import Piece, { IPiece, PieceType } from '../Piece'

class Soldier extends Piece {
    constructor(options?: IPiece) {
        super(options)
        this.pieceType = PieceType.Soldier
    }
}

export default Soldier
