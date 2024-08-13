function submit(){
    var score = 0
    if (document.getElementById("sil3").checked) {
    let p =document.getElementById("sil");
    p.style.color= "green";
    p.style.fontSize="larger"
    p.innerHTML = "CORRECT";
    score=score+1
   }else if(document.getElementById("sil1").checked|| document.getElementById("sil2").checked){
    let p1 =document.getElementById("sil");
    p1.style.color= "red";
    p1.style.fontSize="larger"
    p1.innerHTML = "INCORRECT";
   }
   if (document.getElementById("gop2").checked) {
    let p =document.getElementById("gop");
    p.style.color= "green";
    p.style.fontSize="larger"
    p.innerHTML = "CORRECT";
    score=score+1
   }else if(document.getElementById("gop1").checked|| document.getElementById("gop3").checked){
    let p1 =document.getElementById("gop");
    p1.style.color= "red";
    p1.style.fontSize="larger"
    p1.innerHTML = "INCORRECT";
   }
   if (document.getElementById("tem1").checked) {
    let p =document.getElementById("tem");
    p.style.color= "green";
    p.style.fontSize="larger"
    p.innerHTML = "CORRECT";
    score=score+1
   }else if(document.getElementById("tem3").checked|| document.getElementById("tem2").checked){
    let p1 =document.getElementById("tem");
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
   if (document.getElementById("pearl3").checked) {
    let p =document.getElementById("pearl");
    p.style.color= "green";
    p.style.fontSize="larger"
    p.innerHTML = "CORRECT";
    score=score+1
   }else if(document.getElementById("pearl2").checked|| document.getElementById("pearl1").checked){
    let p1 =document.getElementById("pearl");
    p1.style.color= "red";
    p1.style.fontSize="larger"
    p1.innerHTML = "INCORRECT";
   }
 var sc=document.getElementById("score")
 sc.innerHTML = `Your score is ${score}`
 sc.style.color = "goldenrod";
 sc.style.fontSize="larger"

}