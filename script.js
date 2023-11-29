let navbar = document.querySelector("#nav");
let h4 = document.querySelector("#h4");
let aEl = document.querySelectorAll("a");
let padding = document.querySelector(".navbar");
let iEl = document.querySelectorAll("i");
let pEl = document.querySelector("#p1");
let list = document.querySelector("#list");
let green=document.querySelector("#green");

function nvbr() {
    if (window.scrollY > 35) {
        navbar.style.top = "0px"
        navbar.style.backgroundColor = "black";
        navbar.style.transition = "all 1s ease"
        h4.style.color = "white"
        padding.style.padding = "10px 0"
        pEl.style.color = "white"
        list.style.color = "white"
        green.style.display="none"
        aEl.forEach((a) => {
            a.style.color = "white"
        })
        iEl.forEach((i) => {
            i.style.color = "white"
        })
    }
    else {
        navbar.style.backgroundColor = ""
        navbar.style.transition = "all 1s ease"
        h4.style.color = ""
        padding.style.padding = ""
        pEl.style.color = ""
        list.style.color = ""
        navbar.style.top = ""
        green.style.display=""
        aEl.forEach((a) => {
            a.style.color = ""
        })
        iEl.forEach((i) => {
            i.style.color = ""
        })
    }

}


window.addEventListener("scroll", nvbr);


let mouse=document.querySelector("#mouse");
let firstDiv=document.querySelector("#first");


mouse.addEventListener("click", ()=>{
    
   firstDiv.scrollHeight({behavior:'smooth'});
})
