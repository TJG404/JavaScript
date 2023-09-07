for(var i=0; i<10; i++){
  var leak = "I am available outside of the loop";
}
console.log(i);
console.log(leak);

var fscope = "I am available inside this function";
var gname ='';
function myfunction(name){
  gname = name;
  console.log(name);
  console.log(fscope);
}
console.log(fscope);    //에러 발생, 함수 스코프 영역을 벗어남
console.log(gname);

myfunction('홍길동');
