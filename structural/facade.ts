namespace Facade {

  type Stream = any;
  type Token = any;

  class Scanner {
    constructor(private stream: Stream) {
    }

    scan() {
      let foo: Token;
      return foo;
    }
  }

  class ProgramNodeBuilder {
    /** do some thing **/
  }

  class Parser {
    constructor() {
    }

    parse(scanner: Scanner, builer: ProgramNodeBuilder) { }

    /** do some thing **/

  }

  // Facade
  class Compiler {
    constructor(private stream: Stream) {
      this.scanner = new Scanner(stream);
    }

    private builder = new ProgramNodeBuilder();
    private parser: Parser = new Parser();
    private scanner: Scanner;

    compile() {
      this.parser.parse(this.scanner, this.builder);
    }

  }
}