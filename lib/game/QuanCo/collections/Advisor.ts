import Board from '../../Board';
import Piece, { IPiece, PieceType } from '../Piece'

class Advisor extends Piece {
    constructor(options?: Partial<IPiece>) {
        super(options)
        this.pieceType = PieceType.Advisor
        this.signature = 'A'
    }
    override isValidMove(destination: ICoordination, board: Board): Boolean {
        const isBaseValidMove = super.isValidMove(destination, board);
        if (!isBaseValidMove) return false;

        const moveX = Math.abs(this.coord.x - destination.x);
        const moveY = Math.abs(this.coord.y - destination.y);

        //Kiểm tra điều kiện di chuyển quân Sĩ
        if(moveX + moveY !=2 || moveX != moveY)
            return false;

        // Kiểm tra Sĩ phải di chuyển ở phạm vi cung 3x3
        if (![0, 1, 2, 7, 8, 9].includes(destination.x) 
        || ![3, 4, 5].includes(destination.y))
            return false;

        return true;
    }
}

export default Advisor
