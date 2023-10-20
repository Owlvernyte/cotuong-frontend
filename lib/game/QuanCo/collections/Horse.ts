import Board from '../../Board'
import Piece, { IPiece, PieceType } from '../Piece'

class Horse extends Piece {
    constructor(options?: Partial<IPiece>) {
        super(options)
        this.pieceType = PieceType.Horse
        this.signature = 'N'
    }
    override isValidMove(destination: ICoordination, board: Board): Boolean {
        const isBaseValidMove = super.isValidMove(destination, board);
        if (!isBaseValidMove) return false;

        const moveX = Math.abs(this.coord.x - destination.x);
        const moveY = Math.abs(this.coord.y - destination.y);
        
        // Kiểm tra điều kiện di chuyển của Mã
        if (!((moveX == 1 && moveY == 2) || (moveX == 2 && moveY == 1))) {
            return false;
        }

        // Kiểm tra trường hợp bị cản trở
        if (moveX == 2) {
            const piece = board.squares[this.coord.x + (destination.x - this.coord.x) / 2][this.coord.y];
            if (piece) {
                return false;
            }
        } else {
            const piece = board.squares[this.coord.x][this.coord.y + (destination.y - this.coord.y) / 2];
            if (piece) {
                return false;
            }
        }

         // TODO: Sẽ cập nhật lại khi có Xoay Bàn Cờ!
         return true
        }
}

export default Horse;