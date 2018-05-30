namespace ChainOfResponsibility {
  type Topic = number;
  const NO_HELP_TOPIC = -1;

  abstract class HelpHandler {
    constructor(private successor: HelpHandler = null, private topic = NO_HELP_TOPIC) { }

    hasHelp() {
      return this.topic !== NO_HELP_TOPIC;
    }

    handleHelp() {
      if (this.successor !== null) {
        this.successor.handleHelp();
      }
    }
  }

  abstract class Widget extends HelpHandler {
    constructor(private parent: Widget = null, topic = NO_HELP_TOPIC) {
      super(parent, topic);
    }
  }

  class Button extends Widget {
    handleHelp() {
      if(this.hasHelp()) {
        // offer help on the button
        console.log('button help');
      } else {
        super.handleHelp();
      }
    }
  }

  class Dialog extends Widget {
    handleHelp() {
      if(this.hasHelp()) {
        // offer help on the dialog
        console.log('dialog help');
      } else {
        super.handleHelp();
      }
    }
  }

  const PRINT_TOPIC : Topic = 1;
  const DIALOG_TOPIC : Topic = 2;
  
  let dialog = new Dialog(null, PRINT_TOPIC);
  let button = new Button(dialog, DIALOG_TOPIC);

  button.handleHelp();
}