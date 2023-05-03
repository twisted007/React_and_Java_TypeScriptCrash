"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var myCircle = new circle_1.Circle(3, 12, 5);
var myRectangle = new rectangle_1.Rectangle(4, 3, 23, 14);
// declare an array of shapes ...initially empty.
var theShapes = [];
// Add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var shape = theShapes_1[_i];
    console.log(shape.getInfo());
    console.log("The area of the shape is: ".concat(shape.calculateArea()));
}
