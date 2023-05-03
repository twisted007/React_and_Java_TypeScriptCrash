"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var myShape = new shape_1.Shape(5, 10);
var myCirlce = new circle_1.Circle(3, 12, 5);
var myRectangle = new rectangle_1.Rectangle(4, 3, 23, 14);
// declare an array of shapes ...initially empty.
var theShapes = [];
// Add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCirlce);
theShapes.push(myRectangle);
theShapes.push(277);
