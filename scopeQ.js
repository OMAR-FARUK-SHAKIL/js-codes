// const  func = function()
// {
//     {
//         let l = "let";
//         var v = "var";
//     }

//     console.log(v);// var
//     console.log(l);// error- l is undefined.
// }
// func();


// if i want to access l from outside the bloc scope.then i need immediate function call.


const  func = function()
{
    {  (function(){
        let l = "let";
        var v = "var";
    })();
      
    }

    // console.log(v);// var
    console.log(l);// error- l is undefined.
}
func();
