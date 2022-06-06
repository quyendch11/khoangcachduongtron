"use strict";
exports.__esModule = true;
var circle_1 = require("./circle");
function distance(circle1, circle2, a) {
    var distance = Math.pow(circle1.radius - circle2.radius, 2) + Math.pow(a, 2);
    return Math.sqrt(distance);
}
var circleone = new circle_1.Circle(9);
var circletwo = new circle_1.Circle(5);
console.log(distance(circleone, circletwo, 24));
