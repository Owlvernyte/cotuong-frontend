import Board from '../../Board'
import Piece, { IPiece, PieceType } from '../Piece'

class Cannon extends Piece {
    constructor(options?: Partial<IPiece>) {
        super(options)
        this.pieceType = PieceType.Cannon
        this.signature = 'C'
    }
    CheckRow(destinationCoordinate: ICoordination, board: Board): boolean {
        if (this.coord.x < destinationCoordinate.x) {
            for (let i = this.coord.x + 1; i < destinationCoordinate.x; i++) {
                if (board.squares[i][destinationCoordinate.y] !== null)
                    return false;
            }
            return true;
        }
        for (let i = this.coord.x - 1; i >= destinationCoordinate.x; i--) {
            if (board.squares[i][destinationCoordinate.y] !== null)
                return false;
        }
        return true;
    }

    CheckColumns(destinationCoordinate: ICoordination, board: Board): boolean {
        if (this.coord.y < destinationCoordinate.y) {
            for (let i = this.coord.y + 1; i <= destinationCoordinate.y; i++) {
                if (board.squares[destinationCoordinate.x][i] !== null)
                    return false;
            }
            return true;
        }
        for (let i = this.coord.y - 1; i >= destinationCoordinate.y; i--) {
            if (board.squares[destinationCoordinate.x][i] !==null)
                return false;
        }
        return true;
    }
    CheckRemoveDesRow(destinationCoordinate: ICoordination, board: Board): boolean {
        let count = 0;
        if (this.coord!.x < destinationCoordinate.x) {
            for (let i = this.coord!.x + 1; i < destinationCoordinate.x; i++) {
                if (board.squares[i][destinationCoordinate.y] !== null)
                    count++;
            }
        }
        else {
            for (let i = this.coord!.x - 1; i > destinationCoordinate.x; i--) {
                if (board.squares[i][destinationCoordinate.y] !== null)
                    count++;
            }
        }
        if(count == 1)
            return true;
        return false;
    }

    CheckRemoveDesColumns(destinationCoordinate: ICoordination, board: Board): boolean {
        let count = 0;
        if (this.coord!.y < destinationCoordinate.y) {
            for (let i = this.coord!.y + 1; i < destinationCoordinate.y; i++) {
                if (board.squares[this.coord!.x][i] !== null)
                    count++;
            }
        }
        else {
            for (let i = this.coord!.y - 1; i > destinationCoordinate.y; i--) {
                if (board.squares[destinationCoordinate.x][i] !== null)
                    count++;
            }
        }
        if(count == 1)
            return true;
        return false;
    }
    override isValidMove(destination: ICoordination, board: Board): Boolean {
        const isBaseValidMove = super.isValidMove(destination, board);
        if (!isBaseValidMove)
            return false;
        if(destination.x != this.coord.x && destination.y != this.coord.y)
            return false;
        if (!board.squares[destination.x][destination.y]) {
            if (destination.x != this.coord.x)
                return this.CheckRow(destination, board);
            if (destination.y != this.coord!.y)
                return this.CheckColumns(destination, board);
        }
           else {
            if (destination.x !== this.coord!.x)
                return this.CheckRemoveDesRow(destination, board);
            if (destination.y !== this.coord!.y)
                return this.CheckRemoveDesColumns(destination, board);
        }
        return false;
    }
}

export default Cannon
