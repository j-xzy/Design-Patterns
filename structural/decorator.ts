namespace Decorator {

  abstract class VisualComponent {
    abstract draw();
    abstract resieze();
    // ...
  }

  abstract class Decorator extends VisualComponent {
    constructor(protected visualComponent: VisualComponent) {
      super();
    }

    draw() {
      this.visualComponent.draw();
    }

    resieze() {
      this.visualComponent.resieze();
    }
  }

  class BorderDecorator extends Decorator {
    constructor(visualComponent: VisualComponent, private borderWidth: number) {
      super(visualComponent);
    }

    private drawBorder() { }

    draw() {
      this.drawBorder();
      super.draw();
    }
  }

  class FooComponent extends VisualComponent {
    draw() { }
    resieze() { }
  }

  let fooComponent = new FooComponent();
  fooComponent.draw();
  fooComponent.resieze();

  let fooComponentWithBorder = new BorderDecorator(new FooComponent(), 20);
  fooComponentWithBorder.draw();
  fooComponentWithBorder.resieze();
}