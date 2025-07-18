// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); // false — ค่าไม่เท่ากัน
Object.is(0, -0); // false — Object.is แยก 0 และ -0 ออกจากกัน
Object.is(NaN, 100); // false — NaN ไม่เท่ากับค่าอื่น
Object.is("one", "two"); // false — string ไม่เท่ากัน
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); // false — object มีค่าเหมือนกันแต่คนละ reference
Object.is(null, undefined); // false — คนละประเภท

10 === 20; // false — ตัวเลขไม่เท่ากัน
10 === "10" 
3.14 !== 3.14; // false — ค่าตัวเลขเท่ากันไม่เข้าเงื่อนไข !==
"TechUp" !== "TechUp"; // false — string เหมือนกัน
NaN === NaN;  // false — NaN ไม่เท่ากับ NaN ด้วย ===
0 !== -0; // false — === และ !== มอง 0 กับ -0 ว่าเท่ากัน

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; // false — เป็นคนละ object reference แม้ค่าภายในเหมือนกัน
