namespace Composite {
  abstract class Equipment {
    protected _name: string;
    protected _price: number;
    protected _childs: Equipment[];
    protected _parent: Equipment = null;

    set parent(p: Equipment) {
      this._parent = p;
    }

    get parent() {
      return this._parent;
    }

    get name() {
      return this._name;
    }

    get price() {
      return this._price;
    }

    getChild(i: number) {
      return this._childs[i];
    }

    abstract add(equipment: Equipment);
    abstract remove(equipment: Equipment);
  }

  class Disk extends Equipment {
    constructor() {
      super();
      this._name = 'disk';
      this._price = 100;
    }

    add(equipment: Equipment) {
    }

    remove(equipment: Equipment) {
    }
  }

  class Board extends Equipment {
    constructor() {
      super();
      this._name = 'borad';
      this._price = 300;
    }

    add(equipment: Equipment) {
      equipment.parent = this;
      this._childs.push(equipment);
    }

    remove(equipment: Equipment) {
      let idx = this._childs.indexOf(equipment);
      if (idx > -1) {
        equipment.parent = null;
        this._childs.splice(idx, 1);
      }
    }
  }

  class ComputerCase extends Equipment {
    constructor() {
      super();
      this._name = 'computerCase';
      this._price = 400;
    }

    add(equipment: Equipment) {
      equipment.parent = this;
      this._childs.push(equipment);
    }

    remove(equipment: Equipment) {
      let idx = this._childs.indexOf(equipment);
      if (idx > -1) {
        equipment.parent = null;
        this._childs.splice(idx, 1);
      }
    }
  }

  let disk = new Disk();
  let diskName = disk.name;

  let borad = new Board();
  let boradName = borad.name;
  borad.add(disk);

  let computerCase = new ComputerCase();
  computerCase.add(borad);
}