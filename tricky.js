console.log(2 + '2');//22 bcz + is concatenation operator.
console.log(2 - '2');//0 so, - is a math operator then '2' is converted into 2.


console.log(7<6<5)// true  exp= 7<6 -> true 1 <5 => true
console.log(7>6>5)//false exp =7>6-> true 1 > 5 => false

let nums = [1,2,2,3]; // remove duplicate
console.log([...new Set(nums)]);


console.log(Math.max()); //-Infinity
console.log(Math.max(2,4,5));//5 