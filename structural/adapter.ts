namespace Adapter {

  class Point {
    constructor(public x, public y) {
    }
  }

  class Coord {
    constructor(public x, public y) {
    }
  }

  class Shape {
    boundingBox(bottomLeft: Point, topRight: Point) {
    }

    isEmpty() {
    }
  }

  class TextView {
    setOrigin(x: Coord, y: Coord) {
    }

    setExtent(width: number, height: number) {

    }

    isEmpty() {
    }
  }

  // class adapter
  class AdapterClass extends TextView implements Shape {
    boundingBox(bottomLeft: Point, topRight: Point) {
      let coord1 = new Coord(bottomLeft.x, bottomLeft.y);
      let coord2 = new Coord(bottomLeft.x, bottomLeft.y);
      super.setExtent(Math.abs(coord1.x - coord2.y), Math.abs(coord1.y - coord2.y));
      super.setOrigin(coord1, coord2);
    }

    isEmpty() {
      return super.isEmpty();
    }
  }

  class AdapterObject implements Shape {
    constructor(private textView: TextView) {
    }

    boundingBox(bottomLeft: Point, topRight: Point) {
      let coord1 = new Coord(bottomLeft.x, bottomLeft.y);
      let coord2 = new Coord(bottomLeft.x, bottomLeft.y);
      this.textView.setExtent(Math.abs(coord1.x - coord2.y), Math.abs(coord1.y - coord2.y));
      this.textView.setOrigin(coord1, coord2);
    }

    isEmpty() {
      return this.textView.isEmpty();
    }
  }
}