import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let myShape = new Shape(5, 10);
let myCirlce = new Circle(3, 12, 5);
let myRectangle = new Rectangle(4, 3, 23, 14);

// declare an array of shapes ...initially empty.
let theShapes: Shape[] = [];

// Add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCirlce);
theShapes.push(myRectangle);

