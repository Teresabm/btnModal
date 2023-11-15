let btnOpen = document.querySelector('#btnOpen');
let btnClose = document.querySelector('#btnClose');
let card = document.querySelector('#card')

btnOpen.addEventListener("click",function(){
    console.log("open")
    if(card.style.display != "flex"){
        card.style.display = "flex";

    }
})

btnClose.addEventListener("click",function(){
    if(card.style.display != "none"){
        card.style.display = "none";
    }
})