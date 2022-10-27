const object = { a:1, b:2};

// const a = object.a;
// const b = object.b;
const {a, b} = object; //비구조화 할당

console.log(a);
console.log(b);

const array = [1,2];
const [one, two]=array;

console.log(one);
console.log(two);