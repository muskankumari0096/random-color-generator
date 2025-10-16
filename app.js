let btn=document.querySelector("button");
btn.addEventListener("click",function(){
   let h2=document.querySelector("h2");
   let random=randomcolor();
    h2.innerText=random;
    h2.style.color=random;
    let div=document.querySelector("div");
    div.style.backgroundColor=random;
   
});
function randomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let fcolor=`rgb(${red},${green},${blue})`;
    return fcolor;

}

