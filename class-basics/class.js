class Square {
    constructor(width) {
        this.length = width;
        this.width = width;
    }

    get area() {
        return this.length * this.width;
    }

    set area(value) {
        this.width = this.length = Math.sqrt(value);
    }
}

class RectangularPrism extends Square {
    constructor(width, height) {
        super(width);
        this.height = height;
    }

    get area() {
        return ((2 * this.length * this.width) + (2 * this.length * this.height) + (2 * this.width * this.height));
    }

    calcVolume() {
        return this.length * this.width * this.height;
    }
}


let mySquare = new Square(5);
console.log(mySquare.area);
mySquare.area = 36;
console.log(mySquare.width);

let myPrism = new RectangularPrism(5, 8);
console.log(myPrism.calcVolume());
console.log(myPrism.area);