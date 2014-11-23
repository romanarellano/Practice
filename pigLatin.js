function pigLatin(string){
  


var arr = string.map(function(a){ 
   var ab = a
     result="";
    for(var i=0;/[^aeiou]/.test(ab[i]);i++){

       result+=ab[i];
     
   
    }
   
   return  ab.substring(i,ab.length)+result+'ay'

 });
    return arr;
}

console.log(sumOfAMultiple(["chicken","anter"]))