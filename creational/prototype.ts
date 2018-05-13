namespace Prototype {

  abstract class Prototype {
    clone() {
      return Object.assign({}, this);
    }
  }
  enum Side { North, East, South, West };

  interface MapSite {
    enter(): void;
  }

  class Maze extends Prototype { }

  class Wall extends Prototype implements MapSite {
    enter() { }
  }

  class Room extends Prototype implements MapSite {
    constructor();
    constructor(id: number);
    constructor(private id?: number) { super() }
    enter() { }
    setSide(side: Side, mapSite: MapSite) { };
    initialize(n: number) {
      this.id = n;
    }
  }

  var room = new Room();

  class Door extends Prototype implements MapSite {
    constructor();
    constructor(r1?: Room, r2?: Room) { super(); }
    enter() { }
    isOpend: boolean;
    initialize(r1: Room, r2: Room) { }
  }

  class MazePrototypeFactory {
    constructor(private maze: Maze, private wall: Wall, private room: Room, private door: Door) {
    }

    makeMaze() {
      return this.maze.clone();
    }

    makeDoor(r1: Room, r2: Room) {
      let door = this.door.clone();
      door.initialize(r1, r2);
      return door;
    }

    makeWall() {
      return this.wall.clone();
    }

    makeRoom(n: number) {
      let room = this.room.clone();
      room.initialize(n);
      return this.room.clone();
    }
  }

  function createMaze(mazePrototypeFactory: MazePrototypeFactory) {
    let maze = mazePrototypeFactory.makeMaze();
    let r1 = mazePrototypeFactory.makeRoom(1);
    let r2 = mazePrototypeFactory.makeRoom(2);
    let door = mazePrototypeFactory.makeDoor(r1, r2);

    r1.setSide(Side.North, mazePrototypeFactory.makeWall());
    r1.setSide(Side.East, door);
    r1.setSide(Side.South, mazePrototypeFactory.makeWall());
    r1.setSide(Side.West, mazePrototypeFactory.makeWall());

    r1.setSide(Side.North, mazePrototypeFactory.makeWall());
    r1.setSide(Side.East, mazePrototypeFactory.makeWall());
    r1.setSide(Side.South, mazePrototypeFactory.makeWall());
    r1.setSide(Side.West, door);

    return maze;
  }

  let mazePrototypeFactory1 = new MazePrototypeFactory(new Maze, new Wall, new Room, new Door);
  createMaze(mazePrototypeFactory1);

  class RoomWithABomb extends Room {
    constructor();
    constructor(id: number);
    constructor(id?: number) { super(id) }
  }

  class BombWall extends Wall {
    constructor() {
      super();
    }
  }

  let mazePrototypeFactory2 = new MazePrototypeFactory(new Maze, new BombWall, new RoomWithABomb, new Door);
  createMaze(mazePrototypeFactory2);
}