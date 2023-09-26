//MORE CONDITIONAL TESTS
//Test for inequality and equality of strings
let str1: string= 'TAYYABA'
let str2: string= 'TAYYABA'
console.log(str1==str2);
let str3: string= 'Book'
let str4: string= 'pen'
console.log(str3==str4);

//Test for lowercase function
let MyName1= 'TAYYABA'
let MyName2= 'tayyaba'
console.log(MyName1.toLocaleLowerCase()==MyName2);
let MyName3= 'TAYYABA'
let MyName4= 'TAYYABA'
console.log(MyName3.toLocaleLowerCase()==MyName4);

//NUMERICAL TESTS
let num1: number= 1
let num2: number=5
console.log(num1==num2);
console.log(num1!==num2);
console.log(num1<num2);
console.log(num1>num2);
console.log(num1<=num2)
console.log(num1>=num2);

//Tests using AND operator
console.log(num1<num2 && num1==2);
//Tests using OR operator
console.log(num1<num2|| num1>=num2);

//Test wether an item is in an array
let room: string[]= ['table', 'chair', 'fan']
console.log(room.includes('table'));
console.log(room.includes('AC'));