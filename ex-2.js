// Exercise #2: Loose Equality
// Start commenting here
0 == false; // true — false ถูกแปลงเป็น 0 แล้วเทียบกับ 0
null == undefined; // true — == ที่ถือว่าเท่ากัน
10 == "10"; // true — string "10" ถูกแปลงเป็น number 
[10] == 10; // true — [10] ถูกแปลงเป็น "10" แล้วกลายเป็น number 10
[1,2] == "1,2"; // true — [1,2] แปลงเป็น string "1,2" ทั้งสองด้านเป็น string 
