var time=2000;
var step=1;
function happyClient(num,elem){
  n=0;
var l=document.getElementById("hap");
var t=Math.round(time/ (num / step));
var interval=setInterval(()=>{
  n=n+step;
  if (n==num) {
    clearInterval(interval);
  }
  l.innerHTML=n;
},t)



}
happyClient(120,"hap");
function happyClient2(num,elem){
  v=0;
var l=document.getElementById("hap2");
var t=Math.round(time/ (num / step));
var interval=setInterval(()=>{
  v=v+step;
  if (v==num) {
    clearInterval(interval);
  }
  l.innerHTML=v;
},t)



}
happyClient2(310,"hap2");
function happyClient3(num,elem){
  z=0;
var l=document.getElementById("hap3");
var t=Math.round(time/ (num / step));
var interval=setInterval(()=>{
  z=z+step;
  if (z==num) {
    clearInterval(interval);
  }
  l.innerHTML=z;
},t)



}
happyClient3(510,"hap2");
function happyClient4(num,elem){
  y=0;
var l=document.getElementById("hap4");
var t=Math.round(time/ (num / step));
var interval=setInterval(()=>{
  y=y+step;
  if (y==num) {
    clearInterval(interval);
  }
  l.innerHTML=y;
},t)



}
happyClient4(720,"hap4");