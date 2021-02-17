let a = true;
let b: true = true;
let c: false = false;

console.log(a);
console.log(b);
console.log(c);

a = false;
b = true;
c = false;
// c = true; // TS2322: Type 'true' is not assignable to type 'false'.

console.log(a);
console.log(b);
console.log(c);
