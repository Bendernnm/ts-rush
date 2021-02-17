type ChessColor = 'Black' | 'White';
type PositionLetter = 'A' | 'B' | 'C' | 'D' | 'F' | 'G' | 'H';
type PositionNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Game {
}

class Position {
    constructor(private pLetter: PositionLetter, private pNumber: PositionNumber) {
    }
}

abstract class Piece {
    protected position: Position;

    constructor(private readonly color: ChessColor, pLetter: PositionLetter, pNumber: PositionNumber) {
        this.position = new Position(pLetter, pNumber);
    }

    getPosition(): Position {
        return this.position;
    }

    moveTo(position: Position) {
        this.position = position;
    }
}

class King extends Piece {
}

class Queen extends Piece {
}

class Bishop extends Piece {
}

class Knight extends Piece {
}

class Rook extends Piece {
}

class Pawn extends Piece {
}
