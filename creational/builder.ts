namespace Builder {

  enum Side { North, East, South, West };

  interface MapSite {
    enter(): void;
  }

  class Maze {
    rooms: Room[];
    getRoomByNo(n: number) {
      let room = this.rooms.find((room) => {
        return room.id === n;
      });
      return room;
    }

    addRoom(r: Room) {
      this.rooms.push(r);
    }
  }

  class Wall implements MapSite {
    enter() { }
  }

  class Door implements MapSite {
    constructor(r1: Room, r2: Room) { }
    enter() { }
    isOpend: boolean;
  }

  class Room implements MapSite {
    constructor(public id: number) { }
    enter() { }
    setSide(side: Side, mapSite: MapSite) { };
  }

  abstract class MazeBuilder {
    abstract buildMaze(): void;
    abstract buildRoom(n: number): void;
    abstract buildDoor(r1: number, r2: number): void;

    abstract getMaze(): Maze;
  }

  function createMaze(mazeBuilder: MazeBuilder) {
    mazeBuilder.buildMaze();
    mazeBuilder.buildRoom(1);
    mazeBuilder.buildRoom(2);
    mazeBuilder.buildDoor(1, 2);

    return mazeBuilder.getMaze();
  }

  class StandarMazeBuilder extends MazeBuilder {
    private maze: Maze;

    buildMaze() {
      this.maze = new Maze();
    }

    buildRoom(n: number) {
      if (typeof this.maze === 'undefined') return;
      let room = new Room(n);
      this.maze.addRoom(room);

      room.setSide(Side.East, new Wall);
      room.setSide(Side.North, new Wall);
      room.setSide(Side.South, new Wall);
      room.setSide(Side.West, new Wall);
    }

    buildDoor(n1: number, n2: number) {
      if (typeof this.maze === 'undefined') return;
      let r1 = this.maze.getRoomByNo(n1);
      let r2 = this.maze.getRoomByNo(n2);

      let d = new Door(r1, r2);

      r1.setSide(Side.West, d);
      r2.setSide(Side.East, d);
    }

    getMaze() {
      return this.maze;
    }
  }

  class EnchantedRoom extends Room {
    constructor(n: number) {
      super(n);
    }
  }

  class EnchantedMazeBuilder extends MazeBuilder {
    private maze: Maze;

    buildMaze() {
      this.maze = new Maze();
    }

    buildRoom(n: number) {
      if (typeof this.maze === 'undefined') return;
      let room = new EnchantedRoom(n);
      this.maze.addRoom(room);

      room.setSide(Side.East, new Wall);
      room.setSide(Side.North, new Wall);
      room.setSide(Side.South, new Wall);
      room.setSide(Side.West, new Wall);
    }

    buildDoor(n1: number, n2: number) {
      if (typeof this.maze === 'undefined') return;
      let r1 = this.maze.getRoomByNo(n1);
      let r2 = this.maze.getRoomByNo(n2);

      let d = new Door(r1, r2);

      r1.setSide(Side.West, d);
      r2.setSide(Side.East, d);
    }

    getMaze() {
      return this.maze;
    }
  }

  let mazeBuilder1 = new StandarMazeBuilder();
  let mazeBuilder2 = new EnchantedMazeBuilder();

  createMaze(mazeBuilder1);
  createMaze(mazeBuilder2);
}