namespace FactoryMethod {

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


  class MazeGame {
    // factory method
    makeMaze() {
      return new Maze();
    }

    makeRoom(n: number) {
      return new Room(n);
    }

    makeWall() {
      return new Wall();
    }

    makeDoor(r1: Room, r2: Room) {
      return new Door(r1, r2);
    }

    // creator
    createMaze() {
      let maze = this.makeMaze();
      let r1 = this.makeRoom(1);
      let r2 = this.makeRoom(2);

      let door = this.makeDoor(r1, r2);
      maze.addRoom(r1);
      maze.addRoom(r2);

      r1.setSide(Side.North, this.makeWall());
      r1.setSide(Side.East, door);
      r1.setSide(Side.South, this.makeWall());
      r1.setSide(Side.West, this.makeWall());
  
      r1.setSide(Side.North, this.makeWall());
      r1.setSide(Side.East, this.makeWall());
      r1.setSide(Side.South, this.makeWall());
      r1.setSide(Side.West, door);
    }
  }

  class RoomWithABomb extends Room {
    constructor(n: number) {
      super(n);
    }
  }

  class BombMazeGame extends MazeGame {
    // factory method
    makeRoom(n: number) {
      return new RoomWithABomb(n);
    }
  }

  let mazeGame1 = new MazeGame();
  let mazeGame2= new BombMazeGame();
  mazeGame1.createMaze();
  mazeGame2.createMaze();
}