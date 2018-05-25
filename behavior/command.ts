namespace Command {

  class Application {
    open(name: string) { }
  }

  abstract class Command {
    abstract execute();
  }

  class OpenCommand extends Command {
    constructor(private application: Application) {
      super();
    }

    private fileName: string;

    setFileName(fileName: string) {
      this.fileName = fileName;
    }

    execute() {
      // do some thing
      if (this.fileName !== '') {
        this.application.open(this.fileName);
      }
      this.fileName = '';
    }
  }

  let app = new Application();
  let openCommand = new OpenCommand(app);

  openCommand.execute();
}