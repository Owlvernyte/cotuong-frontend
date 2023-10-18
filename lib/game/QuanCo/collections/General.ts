import Board from '../../Board'
import Piece, { IPiece, PieceType } from '../Piece'

class General extends Piece {
    constructor(options?: Partial<IPiece>) {
        super(options)
        this.pieceType = PieceType.General
        this.signature = 'K'
    }
    override isValidMove(destination: ICoordination, board: Board): Boolean {
        const isBaseValidMove = super.isValidMove(destination, board);
        if (!isBaseValidMove) return false;

        
        return true;
    }
}

export default General
