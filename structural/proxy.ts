namespace ProxyFoo {
  // Virtual Proxy

  type Extend = any;

  abstract class Graphic {
    abstract draw();
    abstract handleMouse();
    abstract getExtent(): Extend;
  }

  class Image extends Graphic {
    constructor(private file: string) {
      super();
    }
    draw() { }
    handleMouse() { }
    getExtent() { }
  }

  class ImageProxy extends Graphic {
    constructor(private file: string) {
      super();
      this.extend = [0, 0];
    }

    private img: Image;
    private extend: Extend;

    getImage() {
      if (!this.img) {
        this.img = new Image(this.file);
      }
      return this.img;
    }
    draw() {
      this.getImage().draw();
    }
    handleMouse() {
      this.getImage().handleMouse();
    }
    getExtent() {
      this.getImage().getExtent();
    }
  }

  class TextDocument {
    insert(graphic: Graphic) {

    }
  }

  let textDocument = new TextDocument();
  textDocument.insert(new ImageProxy('./xxx.png'))
}