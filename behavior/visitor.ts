namespace Visitor {
  abstract class EquipmentVisitor {
    visitDisk(disk: Disk) { };
    visitBord(board: Board) { };
  }

  class PriceVisitor extends EquipmentVisitor {
    private price = 0;
  
    visitBord(board: Board) {
      this.price += board.price() - board.discountPrice();
    }

    visitDisk(disk: Disk) {
      this.price += disk.price()- board.discountPrice();
    }

    getPrice() {
      return this.price;
    }
  }

  class PowerVisitor extends EquipmentVisitor {
    private power = 0;
  
    visitBord(board: Board) {
      this.power += board.power();
    }

    visitDisk(disk: Disk) {
      this.power += disk.power();
    }

    getPower() {
      return this.power;
    }
  }

  abstract class Equipment {
    constructor(private name: string) { }
    abstract power(): number;
    abstract price(): number;
    abstract discountPrice(): number;
    abstract accept(visitor: EquipmentVisitor);
  }

  class Disk extends Equipment {
    power() { return 231; }
    price() { return 500; }
    discountPrice() { return 200 }
    accept(visitor: EquipmentVisitor) {
      visitor.visitDisk(this);
    }
  }

  class Board extends Equipment {
    private equiments: Equipment[] = []; 

    power() { return 500; }
    price() { return 1000; }
    discountPrice() { return 300 }
  
    accept(visitor: EquipmentVisitor) {
      this.equiments.forEach((equipmet) => {
        equipmet.accept(visitor);
      });

      visitor.visitBord(this);
    }

    add(equipment: Equipment) {
      this.equiments.push(equipment);
    }
  }

  let board = new Board('bord');
  board.add(new Disk('disk'));

  let priceVisitor = new PriceVisitor();
  let powerVisitor = new PowerVisitor();

  board.accept(priceVisitor);
  board.accept(powerVisitor);

  console.log(priceVisitor.getPrice())
  console.log(powerVisitor.getPower())
}