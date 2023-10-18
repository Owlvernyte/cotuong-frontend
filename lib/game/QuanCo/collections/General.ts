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

        const moveX = Math.abs(this.coord.x - destination.x);
        const moveY = Math.abs(this.coord.y - destination.y);
        
        // Cho phép đi từng ô một ngang hoặc dọc
        if (moveX + moveY != 1) {
            return false;
        }
        
        // Kiểm tra Tướng phải di chuyển ở phạm vi cung 3x3
        if (![0, 1, 2, 7, 8, 9].includes(destination.x) 
        || ![3, 4, 5].includes(destination.y)) {
            return false;
        }
        
        // Kiểm tra trường hợp chống tướng đối mặt
        // Logic Phe xanh:
        if (!this.isRed)
            for (let i = this.coord.x + 1; i < board.rows; i++) {
                const piece = board.squares[i][destination.y];
                if (piece && piece.pieceType !== PieceType.General) {
                    return true;
                }
                if (piece && piece.pieceType === PieceType.General) {
                    return false;
                }
            }
        // Logic Phe đỏ:
        else 
            for (let i = this.coord.x - 1; i >= 0; i--) {
                const piece = board.squares[i][destination.y];
                if (piece && piece.pieceType !== PieceType.General) {
                    return true;
                }
                if (piece && piece.pieceType === PieceType.General) {
                    return false;
                }
            }
        // TODO: Sẽ cập nhật lại khi có Xoay Bàn Cờ!

        return true;
    }
}

export default General
