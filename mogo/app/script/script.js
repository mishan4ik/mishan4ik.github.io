var time=2000;
var step=1;
function ProjectRes(num,elem){
  n=0;
var l=document.getElementById("projectRes");
var t=Math.round(time/ (num / step));
var interval=setInterval(()=>{
  n=n+step;
  if (n==num) {
    clearInterval(interval);
  }
  l.innerHTML=n;
},t)



}
ProjectRes(42,"projectRes");
var time1=2000;
var step1=1;
function clients(num,elem){
  n1=0;
var l=document.getElementById("clientRes");
var t=Math.round(time1/ (num / step1));
var interval=setInterval(()=>{
  n1=n1+step1;
  if (n1==num) {
    clearInterval(interval);
  }
  l.innerHTML=n1;
},t)



}
clients(123,"projectRes");
function winner(num,elem){
  v=0;
var l=document.getElementById("winnerRes");
var t=Math.round(time1/ (num / step1));
var interval=setInterval(()=>{
  v=v+step1;
  if (v==num) {
    clearInterval(interval);
  }
  l.innerHTML=v;
},t)



}
winner(15,"winnerRes");
function cupRes(num,elem){
  v1=0;
var l=document.getElementById("cupRes");
var t=Math.round(time1/ (num / step1));
var interval=setInterval(()=>{
  v1=v1+step1;
  if (v1==num) {
    clearInterval(interval);
  }
  l.innerHTML=v1;
},t)



}
cupRes(99,"winnerRes");
function membersRes(num,elem){
  v2=0;
var l=document.getElementById("membersRes");
var t=Math.round(time1/ (num / step1));
var interval=setInterval(()=>{
  v2=v2+step1;
  if (v2==num) {
    clearInterval(interval);
  }
  l.innerHTML=v2;
},t)



}
membersRes(24,"winnerRes");