namespace TemplateMethod {
  abstract class View {
    setFocus() {}

    doDisplay() {}

    resetFocus() {}

    display() {
      this.setFocus();
      this.doDisplay();
      this.resetFocus();
    }
  }

  class MyView extends View {
    doDisplay() {
      // ...
    }
  }
}