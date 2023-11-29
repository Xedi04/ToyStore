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
    
   firstDiv.scrollIntoView({behavior:'smooth'});
})



    let listIcon = document.getElementById("list");
    let panel = document.querySelector(".panel");

    listIcon.addEventListener("click", function () {
        panel.classList.toggle("n");
    });




    let mega = document.querySelector(".mega");
const Cute = [
    { Image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png", price: "$ 30.00", name: "Teddy Bear" },
    { Image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png", price: "$ 38.00", name: "Mega Plush Toy" },
    { Image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png", price: "$ 24.00", name: "Cute Dog" },
    { Image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png", price: "$ 27.00", name: "Little Friends" }
]


Cute.forEach(item => {
    const cute = document.createElement("div");
    cute.classList.add("cute");

    const img = document.createElement("img");
    img.setAttribute("src", item.Image)

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.innerHTML = item.name;

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");
    priceDiv.innerHTML = item.price;

    cute.append(img);
    cute.append(nameDiv);
    cute.append(priceDiv);
    mega.append(cute);
});