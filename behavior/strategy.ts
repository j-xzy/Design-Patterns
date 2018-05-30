namespace Strategy {

  class Composition {
    constructor(private compositor: Compositor) { }

    private lineWidth: number;
    private lineBreak: number;
    private lineCount: number;

    repair() {
      let breaks = this.compositor.compose(this.lineWidth, this.lineBreak, this.lineCount);
    }
  }

  abstract class Compositor {
    constructor() { }
    abstract compose(lineWidth: number, lineBreak: number, lineCount: number): number;
  }

  class SimpleCompositor extends Compositor {
    compose(): any { }
  }

  class ArrayCompositor extends Compositor {
    compose(): any { }
  }

  new Composition(new SimpleCompositor());
  new Composition(new ArrayCompositor());
}