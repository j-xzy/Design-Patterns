namespace Bridge {

  class Point {
    x: number;
    y: number;
  }

  // abstract factory
  abstract class WindowFactory {
    abstract makeWindowImp(): WindowImp;
    // abstract makeWindowABC(): void;
  }

  abstract class WindowImp {
    abstract open(): void;
    abstract close(): void;
    abstract DeviceRect(x1: number, y1: number, x2: number, y2: number): void;
  }

  class WindowImpXP extends WindowImp {
    open() { /* ... */ }
    close() { /* ... */ }
    DeviceRect(x1: number, y1: number, x2: number, y2: number) {
      let left = Math.min(x1, x2);
      let right = Math.max(x1, x2);
      let top = Math.min(y1, y2);
      let bottom = Math.max(y1, y2);
      this.drawRectangle(left, right, top, bottom);
    }
    drawRectangle(left: number, right: number, top: number, bottom: number) {
      /**/
    }
  }

  class WindowImp10 extends WindowImp {
    open() { /* ... */ }
    close() { /* ... */ }
    DeviceRect(x1: number, y1: number, x2: number, y2: number) {
      let left = Math.round(Math.min(x1, x2));
      let right = Math.round(Math.max(x1, x2));
      let top = Math.round(Math.min(y1, y2));
      let bottom = Math.round(Math.max(y1, y2));
      this.drawRectangle10(left, right, top, bottom);
    }
    drawRectangle10(left: number, right: number, top: number, bottom: number) {
      /**/
    }
  }

  class Window10Factory extends WindowFactory {
    makeWindowImp() {
      return new WindowImp10();
    }
  }

  class WindowXPFactory extends WindowFactory {
    makeWindowImp() {
      return new WindowImpXP();
    }
  }

  let windowFactory: WindowFactory;
  if (Math.random() < 0.5) {
    windowFactory = new Window10Factory();
  } else {
    windowFactory = new WindowXPFactory();
  }

  abstract class Window {
    private imp: WindowImp;

    open() {
      this.getWindowImp().open();
    }

    close() {
      this.getWindowImp().close();
    }

    abstract drawRect(pt1: Point, pt2: Point): void;

    // singleton
    getWindowImp() {
      if (!this.imp) {
        this.imp = windowFactory.makeWindowImp();
      }
      return this.imp;
    }
  }

  class ApplicationWindow extends Window {
    drawRect(pt1: Point, pt2: Point) {
      this.getWindowImp().DeviceRect(pt1.x, pt1.y, pt2.x, pt2.y);
    }
  }
}