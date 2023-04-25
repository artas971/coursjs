function addtext(){
  let clicbutton = document.getElementById("btn");
  clicbutton.addEventListener("click", function() {
   let usertext= prompt("ecrivez votre message");
   let textValider=document.getElementById("p1");
   textValider.innerHTML=`${usertext}`
  });
}
let clicbutton = document.querySelectorAll("button")[1];
console.log(clicbutton)

addtext();

function mode(){ 
  let selectionbody=document.querySelectorAll("body")
  let selectionBtnMode=document.querySelectorAll("button")[1];
  console.log(selectionBtnMode)
  selectionBtnMode.addEventListener("click",function(){
    if(selectionBtnMode.id === "darkmodebtn"){
    document.body.classList.remove("bgwm");
    document.body.classList.add("bgdm");
    selectionBtnMode.innerHTML = `mode jour`;
    document.getElementsByTagName("button")[1].id = "daymodebtn";
  }else{
    document.body.classList.remove("bgdm");
    document.body.classList.add("bgwm");
    selectionBtnMode.innerHTML = `mode nuit`;
    document.getElementsByTagName("button")[1].id = "darkmodebtn";
  }

    
  })
  console.log(selectionbody)
}
mode()


