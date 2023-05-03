import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let myCircle = new Circle(3, 12, 5);
let myRectangle = new Rectangle(4, 3, 23, 14);

// declare an array of shapes ...initially empty.
let theShapes: Shape[] = [];

// Add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let shape of theShapes){
    console.log(shape.getInfo());
    console.log(`The area of the shape is: ${shape.calculateArea()}`);
}