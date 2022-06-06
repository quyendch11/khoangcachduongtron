import { Circle } from "./circle";
function distance (circle1: Circle, circle2: Circle,a:number):number{
    let distance = Math.pow(circle1.radius - circle2.radius, 2) + Math.pow(a, 2);
    return Math.sqrt(distance);
}
let circleone = new Circle(9);
let circletwo = new Circle(5);

console.log(distance(circleone, circletwo, 24));