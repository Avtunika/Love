const b = document.querySelector('button.button--no')
b.addEventListener("mouseover", moveHover)

function moveHover(){
    const i=Math.floor(Math.random()*500)+5 ;
    const j=Math.floor(Math.random()*500)+5 ;
    

     b.style.bottom=i+"px"
     b.style.top=j+"px"
}