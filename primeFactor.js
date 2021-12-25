console.log("object")
let factors = [];

 function primeFactor(n){   
    let div = 2;
    while(n==0 || div<n){
        if(n%div == 0){
            factors.push(div);
            n = n/div;
        }
        div++;
    }
 }

primeFactor(18);
console.log("lol",factors.length)
console.log(factors)