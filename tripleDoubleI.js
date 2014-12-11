function TripleDouble(num1,num2){

var numOne = num1.toString().split("");
var numTwo = num2.toString().split("");

var arr = []
arr.push(numOne,numTwo);

var eval = [];
obj = {};


var repitition =3;

for(var j=0;j<arr.length;j++){

  for(i=0;i<arr[j].length;i++){

if(!obj.hasOwnProperty(arr[j][i])){
 obj[arr[j][i]]=obj[arr[j][i]] || 0;
 obj[arr[j][i]]++;
}

for(var b=i+1;b<arr[j].length;b++){

if(arr[j][i]==arr[j][b]){
  obj[arr[j][i]]++;

if(obj[arr[j][i]]>=repitition && eval.length==j){

var insert = insert || "good";
  eval.push(insert);
  break;
}}
else {
  delete obj[arr[j][i]]
  break;
}}
}
if(eval.length==j){
  eval.push("not good");
   delete obj[arr[j][i]]
}
repitition--;
}

return eval;
}

console.log(TripleDouble(4655755,85779))