namespace Flyweight {
  abstract class Font { }

  type Char = any;

  class SomeFont extends Font { }

  class OhterFont extends Font { }

  class Glyph {
    constructor(private char: Char) {
    }
    draw(context: GlyphContext) { }
  }

  class GlyphContext {
    private index: number;

    next(step = 1) { }

    setFont(font: Font) { }
  }

  // flyweight factory
  class GlyphFactory {
    private characters: Map<Char, Glyph>;
    constructor() {
      this.characters = new Map();
    }

    creatChar(char: Char) {
      if(!this.characters.has(char)) {
        this.characters.set(char,new Glyph(char));
      }
      return this.characters.get(char);
    }
  }

  let glyphFactory = new GlyphFactory();
  let charA = glyphFactory.creatChar('a');
  let charAA = glyphFactory.creatChar('a');
  charAA === charA; // true
}