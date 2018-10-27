/**
 * countTheHoles()
 *
 * Write a `countTheHoles` function that takes an intenteger and counts the
 * number of holes for each number.
 *
 * For example: the number 8042 would have 4 holes:
 *  - 2 holes in the 8
 *  - 1 hole in the 0, 4, 6, 9
 *
 *
**/

var countTheHoles = function(numList){
   var cntHol = 0;
   // // console.log(typeof num);
   //  console.log(num);
   var numH = numList.toString();
   // console.log(typeof numH)
   var count = 0;
   var totHol = 0;

   for(var i = 0; i < numH.length; i++){
     // console.log(typeof(numH[i]));
     var nu = parseInt(numH[i]);
     // console.log(typeof nu);
       // console.log(nu);
    if(nu === 8){
       totHol = 2;
    } else if(nu === 0 || nu === 4 || nu === 6 || nu === 9){
        totHol = 1;
    } else{
      totHol = 0;
    }
       count = count + totHol
    }
    console.log(count);
    return count
}


//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
console.assert(  countTheHoles(301923) === 2  )
console.assert(  countTheHoles(880216) === 6  )
console.assert(  countTheHoles(40442) === 4 )
console.assert(  countTheHoles(808) === 5  )
