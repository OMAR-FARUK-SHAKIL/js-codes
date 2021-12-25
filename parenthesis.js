//find out the odd parenthesis that stays in your string which you take as an input
//suppose [()]({(])} is input
//then 2 is your output

let brackets = "[(}{){]"
let len = brackets.length;
let brac = [];
let a = brackets.split('');
let overflow = 0 ;

for(i=0;i<a.length;i++)
{
    if(a[i] == "(" || a[i] == "{"  || a[i] == "["){
        brac.push(a[i]);
    }
    else if(a[i] == ")" || a[i] == "}"  || a[i] == "]"){
       brac.length == 0 ? overflow++ : brac.pop();
    }

}
let ans = (overflow == 0)? "Balanced" : `Non-Balanced,overflow ${overflow}`


console.log(brac.length)
console.log(a)
console.log(ans)