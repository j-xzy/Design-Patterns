enum Side { North, East, South, West };

interface MapSite {
    enter(): void;
}

class Maze { }

class Wall implements MapSite {
    enter() { }
};

class Door implements MapSite {
    constructor(r1: Room, r2: Room) { }
    enter() { }
    isOpend: boolean;
};

class Room implements MapSite {
    constructor(n: number) { }
    enter() { }
    setSide(side: Side, mapSite: MapSite) { };
}

abstract class MazeFactory {
    makeMaze() {
        return new Maze();
    }
    makeWall() {
        return new Wall();
    };
    makeDoor(r1: Room, r2: Room) {
        return new Door(r1, r2);
    };
    makeRoom(n: number) {
        return new Room(n);
    }
}

function createMaze(mazeFactory: MazeFactory) {
    let maze = mazeFactory.makeMaze();
    let r1 = mazeFactory.makeRoom(1);
    let r2 = mazeFactory.makeRoom(2);
    let door = mazeFactory.makeDoor(r1, r2);

    r1.setSide(Side.North, mazeFactory.makeWall());
    r1.setSide(Side.East, door);
    r1.setSide(Side.South, mazeFactory.makeWall());
    r1.setSide(Side.West, mazeFactory.makeWall());

    r1.setSide(Side.North, mazeFactory.makeWall());
    r1.setSide(Side.East, mazeFactory.makeWall());
    r1.setSide(Side.South, mazeFactory.makeWall());
    r1.setSide(Side.West, door);

    return maze;
}

class EnchantedRoom extends Room {
    constructor(n: number) {
        super(n);
    }
    setSide(side: Side, mapSite: MapSite) { }
    enter() { }
}


class EnchantedDoor extends Door {
    constructor(r1: Room, r2: Room) {
        super(r1, r2);
    }
}

class EnchantedMazeFactory extends MazeFactory {
    makeRoom(n: number) {
        return new EnchantedRoom(n);
    }

    makeDoor(r1: Room, r2: Room) {
        return new EnchantedDoor(r1, r2);
    }
}

class RoomWithABomb extends Room {
    constructor(n: number) {
        super(n);
    }
}

class BombWall extends Wall {
    constructor() {
        super();
    }
}

class BombMazeFactory extends MazeFactory {
    makeRoom(n: number) {
        return new RoomWithABomb(n);
    }

    makeWall() {
        return new BombWall();
    }
}


let mazeFactory1: MazeFactory = new EnchantedMazeFactory();
let mazeFactory2: MazeFactory = new BombMazeFactory();

createMaze(mazeFactory1);

createMaze(mazeFactory2);