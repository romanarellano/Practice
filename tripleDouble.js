function tripleDouble(num1,num2){

  var arr1 =num1.toString().split("")
  var arr2 =num2.toString().split("")

  var total_array = [arr1,arr2]
  var push=[];
  var bench = 3;

  for(var i=0;i<total_array.length;i++){
arrOne={};

  for(var j=0;j<total_array[i].length;j++){

arrOne[total_array[i][j]]=arrOne[total_array[i][j]] || 0;
arrOne[total_array[i][j]]++
}

for(var val in arrOne){
   if(arrOne[val]>=bench){
   push.push("ok");
   break;
   }
 }
if(push.length==i)push.push("not ok")
 bench--;

}
 
 for(n=0;n<push.length;n++)
if(push[n]=='not ok')return 0;

  
  return 1;
}

console.log(tripleDouble(451999277,41177722899))