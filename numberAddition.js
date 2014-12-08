function NumberAddition(str) { 
   var sum=0;
var string =str.replace(/[^0-9]/g," ");
 var bb=string.replace(/\s+/g," ").trim();
  var ll =bb.split(" ");
  
  for(i=0;i<ll.length;i++)
   sum+=parseInt(ll[i]); 
 
  
  return sum;
        
}

