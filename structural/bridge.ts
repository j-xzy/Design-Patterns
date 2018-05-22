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
    abstract DeviceRect(left: number, right: number, top: number, bottom: number): void;
  }

  class WindowImpXP extends WindowImp {
    open() { /* ... */ }
    close() { /* ... */ }
    DeviceRect(left: number, right: number, top: number, bottom: number) {/* ... */ }
  }

  class WindowImp10 extends WindowImp {
    open() { /* ... */ }
    close() { /* ... */ }
    DeviceRect(left: number, right: number, top: number, bottom: number) {/* ... */ }
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
      let left = Math.min(pt1.x, pt2.x);
      let right = Math.max(pt1.x, pt2.x);
      let top = Math.min(pt1.y, pt2.y);
      let bottom = Math.max(pt1.y, pt2.y);
      this.getWindowImp().DeviceRect(left, right, top, bottom);
    }
  }

  class IconWindow extends Window {
    drawRect(pt1: Point, pt2: Point) {
      let left = Math.round(Math.min(pt1.x, pt2.x));
      let right = Math.round(Math.max(pt1.x, pt2.x));
      let top = Math.round(Math.min(pt1.y, pt2.y));
      let bottom = Math.round(Math.max(pt1.y, pt2.y));
      this.getWindowImp().DeviceRect(left, right, top, bottom);
    }
  }
}