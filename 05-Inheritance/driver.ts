import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let myShape = new Shape(5, 10);
console.log(myShape.getInfo());

let myCirlce = new Circle(3, 12, 5);
console.log(myCirlce.getInfo());

let myRectangle = new Rectangle(4, 3, 23, 14);
console.log(myRectangle.getInfo());