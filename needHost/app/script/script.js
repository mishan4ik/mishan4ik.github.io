var hour=56;
var minute=60;
var second=60;

function func(){
document.getElementById("hour");
hour--;
if (hour==0) {
  clearInterval(func);
}

}
setInterval(func,3600000);
function func1(){
var m=document.getElementById("min");
minute--;
m.innerHTML=minute;

if (minute<=0) {
  minute=60;
}
if (minute<=9) {
  m.innerHTML="0"+minute;
}
if (hour==0) {
  clearInterval(func1);
}
}
setInterval(func1,60000);
function func2(){
var s=document.getElementById("sec");
second--;
s.innerHTML=second;
if (second<=0) {
  second=60;
}
if (second<=9) {
  s.innerHTML="0"+second;
}
if (hour==0) {
  clearInterval(func2);
}
}
setInterval(func2,1000);
var time=1000;
var step=100;
function happyClient(num,elem){
  n=0;
var l=document.getElementById("client");
var t=Math.round(time/ (num / step));
var interval=setInterval(()=>{
  n=n+step;
  if (n==num) {
    clearInterval(interval);
  }
  l.innerHTML=n;
},t)



}
happyClient(1000,"client");
var time1=1000;
var step1=100;
function themeFunc(num1,elem){
  v=0;
var l=document.getElementById("theme");
var t=Math.round(time1/ (num1 / step1));
var interval1=setInterval(()=>{
  v=v+step1;
  if (v==num1) {
    clearInterval(interval1);
  }
  l.innerHTML=v;
},t)



}
themeFunc(1200,"theme");
var time2=1000;
var step2=100;
function SupportFunc(num2,elem){
  sup=0;
var l=document.getElementById("support");
var t=Math.round(time2/ (num2 / step2));
var interval2=setInterval(()=>{
  sup=sup+step2;
  if (sup==num2) {
    clearInterval(interval2);
  }
  l.innerHTML=sup;
},t)



}
SupportFunc(9000,"support");
var time3=1000;
var step3=100;
function SendFunc(num3,elem){
  send=0;
var l=document.getElementById("send");
var t=Math.round(time3/ (num3 / step3));
var interval3=setInterval(()=>{
  send=send+step3;
  if (send==num3) {
    clearInterval(interval3);
  }
  l.innerHTML=send;
},t)



}
SendFunc(1800,"send");
