import Board from '../../Board'
import Piece, { IPiece, PieceType } from '../Piece'

class Elephant extends Piece {
    constructor(options?: IPiece) {
        super(options)
        this.pieceType = PieceType.Elephant
        this.signature = 'B'
    }

    override isValidMove(destination: ICoordination, board: Board): Boolean {
        const isBaseValidMove = super.isValidMove(destination, board)
        if (!isBaseValidMove) return false

        const directionX = destination.x - this.coord.x
        const directionY = destination.y - this.coord.y
        const moveX = Math.abs(directionX)
        const moveY = Math.abs(directionY)

        // Cho phép đi chéo với đường chéo 2 ô
        if (moveX > 2 || moveY > 2 || moveX + moveY != 4) {
            return false
        }

        // Tượng không được phép qua sông
        if (this.isRed) {
            if (destination.x < 5) return false
        } else {
            if (destination.x > 4) return false
        }

        // Kiểm tra xem ở giữa  quân cờ và điểm đến có bị chặn không
        if (
            !!board.squares[this.coord.x + (directionX > 0 ? 1 : -1)][
                this.coord.y + (directionY > 0 ? 1 : -1)
            ]
        ) {
            return false
        }

        // TODO: Sẽ cập nhật lại khi có Xoay Bàn Cờ!
        return true
    }
}

export default Elephant
