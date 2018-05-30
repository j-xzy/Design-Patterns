var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Visitor;
(function (Visitor) {
    var EquipmentVisitor = /** @class */ (function () {
        function EquipmentVisitor() {
        }
        EquipmentVisitor.prototype.visitDisk = function (disk) { };
        ;
        EquipmentVisitor.prototype.visitBord = function (board) { };
        ;
        return EquipmentVisitor;
    }());
    var PriceVisitor = /** @class */ (function (_super) {
        __extends(PriceVisitor, _super);
        function PriceVisitor() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.price = 0;
            return _this;
        }
        PriceVisitor.prototype.visitBord = function (board) {
            this.price += board.price() - board.discountPrice();
        };
        PriceVisitor.prototype.visitDisk = function (disk) {
            this.price += disk.price() - board.discountPrice();
        };
        PriceVisitor.prototype.getPrice = function () {
            return this.price;
        };
        return PriceVisitor;
    }(EquipmentVisitor));
    var PowerVisitor = /** @class */ (function (_super) {
        __extends(PowerVisitor, _super);
        function PowerVisitor() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.power = 0;
            return _this;
        }
        PowerVisitor.prototype.visitBord = function (board) {
            this.power += board.power();
        };
        PowerVisitor.prototype.visitDisk = function (disk) {
            this.power += disk.power();
        };
        PowerVisitor.prototype.getPower = function () {
            return this.power;
        };
        return PowerVisitor;
    }(EquipmentVisitor));
    var Equipment = /** @class */ (function () {
        function Equipment(name) {
            this.name = name;
        }
        return Equipment;
    }());
    var Disk = /** @class */ (function (_super) {
        __extends(Disk, _super);
        function Disk() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Disk.prototype.power = function () { return 231; };
        Disk.prototype.price = function () { return 500; };
        Disk.prototype.discountPrice = function () { return 200; };
        Disk.prototype.accept = function (visitor) {
            visitor.visitDisk(this);
        };
        return Disk;
    }(Equipment));
    var Board = /** @class */ (function (_super) {
        __extends(Board, _super);
        function Board() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.equiments = [];
            return _this;
        }
        Board.prototype.power = function () { return 500; };
        Board.prototype.price = function () { return 1000; };
        Board.prototype.discountPrice = function () { return 300; };
        Board.prototype.accept = function (visitor) {
            this.equiments.forEach(function (equipmet) {
                equipmet.accept(visitor);
            });
            visitor.visitBord(this);
        };
        Board.prototype.add = function (equipment) {
            this.equiments.push(equipment);
        };
        return Board;
    }(Equipment));
    var board = new Board('bord');
    board.add(new Disk('disk'));
    var priceVisitor = new PriceVisitor();
    var powerVisitor = new PowerVisitor();
    board.accept(priceVisitor);
    board.accept(powerVisitor);
    console.log(priceVisitor.getPrice());
    console.log(powerVisitor.getPower());
})(Visitor || (Visitor = {}));
