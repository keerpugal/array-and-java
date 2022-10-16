var input = "Black horse went to jogging";
var string = "";
let res =input.split(" ");
let show = res.length-1;

for(i= show;i>=0;i--){
   string +=res[i]+" ";
}
console.log(string)

