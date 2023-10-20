import Board from '../../Board'
import Piece, { IPiece, PieceType } from '../Piece'

class Soldier extends Piece {
    constructor(options?: IPiece) {
        super(options)
        this.pieceType = PieceType.Soldier
        this.signature = 'P'
    }
    override isValidMove(destination: ICoordination, board: Board): Boolean {
        const isBaseValidMove = super.isValidMove(destination, board)
        if (!isBaseValidMove) return false

        const moveX = Math.abs(this.coord.x - destination.x)
        const moveY = Math.abs(this.coord.y - destination.y)

        // Cho phép đi từng ô một ngang hoặc dọc
        if (moveX + moveY != 1) {
            return false
        }

        // Tot do
        if (
            this.isRed &&
            // Ngăn không cho con tốt đi lùi
            (this.coord.x < destination.x ||
                // Ngăn không di ngang khi chua qua song
                (this.coord.x >= 5 && moveY != 0))
        ) {
            return false
        }

        // Tot xanh/den
        if (
            !this.isRed &&
            // Ngăn không cho con tốt đi lùi
            (this.coord.x > destination.x ||
                // Ngăn không di ngang khi chua qua song
                (this.coord.x <= 4 && moveY != 0))
        ) {
            return false
        }

        // TODO: Sẽ cập nhật lại khi có Xoay Bàn Cờ!

        return true
    }
}

export default Soldier
