// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20);//f
Object.is(0, -0);//t
Object.is(NaN, 100);//f
Object.is("one", "two");//f
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 });//t
Object.is(null, undefined); //f

10 === 20; //f
10 === "10" //f
3.14 !== 3.14; //f
"TechUp" !== "TechUp"; //f
NaN === NaN; //f
0 !== -0; //t

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; //f
