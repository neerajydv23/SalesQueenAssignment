var btn = document.querySelector("#nav-2 #part-3 h4");
var scr = document.querySelector("#full-scr");
var flag =0;
btn.addEventListener("click",function(){
  
if(flag==0){
    scr.style.top = 0;   
    btn.innerHTML="<i class=ri-close-line></i>"
    flag=1;
}
else{
    scr.style.top = "-100%";   
    btn.innerHTML="<i class=ri-menu-line></i>"
    flag=0;
}
})