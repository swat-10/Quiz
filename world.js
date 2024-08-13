 function submit(){
    var score = 0
    if (document.getElementById("water3").checked) {
    let p =document.getElementById("water");
    p.style.color= "green";
    p.style.fontSize="larger"
    p.innerHTML = "CORRECT";
    score=score+1
   }else if(document.getElementById("water1").checked|| document.getElementById("water2").checked){
    let p1 =document.getElementById("water");
    p1.style.color= "red";
    p1.style.fontSize="larger"
    p1.innerHTML = "INCORRECT";
   }
   if (document.getElementById("eiffel2").checked) {
    let p =document.getElementById("eiffel");
    p.style.color= "green";
    p.style.fontSize="larger"
    p.innerHTML = "CORRECT";
    score=score+1
   }else if(document.getElementById("eiffel1").checked|| document.getElementById("eiffel3").checked){
    let p1 =document.getElementById("eiffel");
    p1.style.color= "red";
    p1.style.fontSize="larger"
    p1.innerHTML = "INCORRECT";
   }
   if (document.getElementById("taxis3").checked) {
    let p =document.getElementById("taxis");
    p.style.color= "green";
    p.style.fontSize="larger"
    p.innerHTML = "CORRECT";
    score=score+1
   }else if(document.getElementById("taxis1").checked|| document.getElementById("taxis2").checked){
    let p1 =document.getElementById("taxis");
    p1.style.color= "red";
    p1.style.fontSize="larger"
    p1.innerHTML = "INCORRECT";
   }
   if (document.getElementById("cur1").checked) {
    let p =document.getElementById("cur");
    p.style.color= "green";
    p.style.fontSize="larger"
    p.innerHTML = "CORRECT";
    score=score+1
   }else if(document.getElementById("cur2").checked|| document.getElementById("cur3").checked){
    let p1 =document.getElementById("cur");
    p1.style.color= "red";
    p1.style.fontSize="larger"
    p1.innerHTML = "INCORRECT";
   }
   if (document.getElementById("cap3").checked) {
    let p =document.getElementById("cap");
    p.style.color= "green";
    p.style.fontSize="larger"
    p.innerHTML = "CORRECT";
    score=score+1
   }else if(document.getElementById("cap2").checked|| document.getElementById("cap1").checked){
    let p1 =document.getElementById("cap");
    p1.style.color= "red";
    p1.style.fontSize="larger"
    p1.innerHTML = "INCORRECT";
   }
 var sc=document.getElementById("score")
 sc.innerHTML = `Your score is ${score}`
 sc.style.color = "blue";
 sc.style.fontSize="larger"

}