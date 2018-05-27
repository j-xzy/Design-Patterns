namespace Mediator {

  abstract class Widget {
    constructor(protected director: DialogDirector) { }
    abstract handleMouse();
    changed() {
      this.director.widgetChanged(this);
    }
  }

  abstract class DialogDirector {
    abstract showDialog();
    abstract widgetChanged(widget: Widget);
    abstract createWidgets();
  }

  class ListBox extends Widget {
    handleMouse() { }
  }

  class EntryField extends Widget {
    handleMouse() { }
  }

  class Button extends Widget {
    handleMouse() {
      super.changed();
    }
  }

  class FontDialogDirector extends DialogDirector {
    private listBox: ListBox;
    private entryField: EntryField;
    private button: Button;

    showDialog() { }

    createWidgets() {
      this.listBox = new ListBox(this);
      this.entryField = new EntryField(this);
      this.button = new Button(this);
    }

    widgetChanged(theChangedWidget: Widget) {
      if (theChangedWidget === this.listBox) {

      } else if (theChangedWidget === this.entryField) {

      } else if(theChangedWidget === this.button) {

      }
    }
  }

  let b = new Button(new FontDialogDirector());
  b.handleMouse();
}