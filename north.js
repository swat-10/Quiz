
function submit(){
  var score = 0
  if (document.getElementById("hol1").checked) {
  let p =document.getElementById("hol");
  p.style.color= "green";
  p.style.fontSize="larger"
  p.innerHTML = "CORRECT";
  score=score+1
 }else if(document.getElementById("hol2").checked|| document.getElementById("hol3").checked){
  let p1 =document.getElementById("hol");
  p1.style.color= "red";
  p1.style.fontSize="larger"
  p1.innerHTML = "INCORRECT";
 }
 if (document.getElementById("city2").checked) {
  let p =document.getElementById("city");
  p.style.color= "green";
  p.style.fontSize="larger"
  p.innerHTML = "CORRECT";
  score=score+1
 }else if(document.getElementById("city1").checked|| document.getElementById("city3").checked){
  let p1 =document.getElementById("city");
  p1.style.color= "red";
  p1.style.fontSize="larger"
  p1.innerHTML = "INCORRECT";
 }
 if (document.getElementById("crop2").checked) {
  let p =document.getElementById("crop");
  p.style.color= "green";
  p.style.fontSize="larger"
  p.innerHTML = "CORRECT";
  score=score+1
 }else if(document.getElementById("crop3").checked|| document.getElementById("crop1").checked){
  let p1 =document.getElementById("crop");
  p1.style.color= "red";
  p1.style.fontSize="larger"
  p1.innerHTML = "INCORRECT";
 }
 if (document.getElementById("riv1").checked) {
  let p =document.getElementById("riv");
  p.style.color= "green";
  p.style.fontSize="larger"
  p.innerHTML = "CORRECT";
  score=score+1
 }else if(document.getElementById("riv2").checked|| document.getElementById("riv3").checked){
  let p1 =document.getElementById("riv");
  p1.style.color= "red";
  p1.style.fontSize="larger"
  p1.innerHTML = "INCORRECT";
 }
 if (document.getElementById("river1").checked) {
  let p =document.getElementById("river");
  p.style.color= "green";
  p.style.fontSize="larger"
  p.innerHTML = "CORRECT";
  score=score+1
 }else if(document.getElementById("river2").checked|| document.getElementById("river3").checked){
  let p1 =document.getElementById("river");
  p1.style.color= "red";
  p1.style.fontSize="larger"
  p1.innerHTML = "INCORRECT";
 }
var sc=document.getElementById("score")
sc.innerHTML = `Your score is ${score}`
sc.style.color = "green";
sc.style.fontSize="larger"

}