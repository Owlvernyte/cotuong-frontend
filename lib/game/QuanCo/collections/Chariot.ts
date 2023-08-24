import Board from '../../Board'
import Piece, { IPiece, PieceType } from '../Piece'

class Chariot extends Piece {
    constructor(options?: Partial<IPiece>) {
        super(options)
        this.pieceType = PieceType.Chariot
    }
    override isValidMove(destination: ICoordination, board: Board): Boolean {
        return true
    }
}

export default Chariot
