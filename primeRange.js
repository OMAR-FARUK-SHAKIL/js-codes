let lower = 34;
let upper = 90;
primes = [];
let low = lower
let divisor = 2;
while(upper>lower){
  
      if(isPrime(lower) == true){
        primes.push(lower);
        lower++;
      }
      else lower++;
      
   }


function isPrime(n){
    div = 2;
    while(div < n/2 ){
        if(n%div == 0)
        return false;
        else
        {
            div++;
            continue;
        }
    }
    return true;
}

console.log("The range "+ low +" to "+upper +" have "+ primes.length+" prime numbers.")
console.log(primes)
