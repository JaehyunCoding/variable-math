let x1 = 20;
let y1 = 32;
let x2 = 16;
let y2 = 29;

let ph1 = 0;
let ph2 = 0;

ph1 = x1;
x1 = x2;
x2 = ph1;

ph2 = y1;
y1 = y2;
y2 = ph2;

console.log("x1 is" + " " + x1);
console.log("y1 is" + " " + y1);
console.log(`x2 is ${x2}`);
console.log(`y2 is ${y2}`);

console.log()

console.log("Math.sqrt((x2-x1)**2 + (y2-y1)**2)");
console.log(Math.sqrt((x2-x1)**2 + (y2-y1)**2));
console.log("Math.sqrt((x2-x1)**2 + Math.pow(y2-y1,2))")
console.log(Math.sqrt((x2-x1)**2 + Math.pow(y2-y1,2)));
console.log("Math.pow(Math.sqrt((x2-x1)**2 + (y2-y1)**2),2)")
console.log(Math.pow(Math.sqrt((x2-x1)**2 + (y2-y1)**2),2))

