const burger=document.querySelector(".header__burger"),menu=document.querySelector(".header__menu"),body=document.querySelector("body");burger.addEventListener("click",()=>{burger.classList.toggle("active"),menu.classList.toggle("active"),body.classList.toggle("lock")},!1);