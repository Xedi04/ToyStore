//NAVBAR 
let navbar = document.querySelector("#nav");
let h4 = document.querySelector("#h4");
let aEl = document.querySelectorAll("a");
let padding = document.querySelector(".navbar");
let iEl = document.querySelectorAll("i");
let pEl = document.querySelector("#p1");
let list = document.querySelector("#list");
let green = document.querySelector("#green");

function nvbr() {
    if (window.scrollY > 35) {
        navbar.style.top = "0px"
        navbar.style.backgroundColor = "black";
        navbar.style.transition = "all 1s ease"
        h4.style.color = "white"
        padding.style.padding = "10px 0"
        pEl.style.color = "white"
        list.style.color = "white"
        green.style.display = "none"
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
        green.style.display = ""
        aEl.forEach((a) => {
            a.style.color = ""
        })
        iEl.forEach((i) => {
            i.style.color = ""
        })
    }

}


window.addEventListener("scroll", nvbr);


//MOUSE CLICK
let mouse = document.querySelector("#mouse");
let secondDiv = document.querySelector("#toys");

mouse.addEventListener("click", () => {

    secondDiv.scrollIntoView({ behavior: 'smooth' });
})


//MENU FUNKSIONALLIGI
let listIcon = document.getElementById("list");
let panel = document.querySelector(".panel");

listIcon.addEventListener("click", function () {
    panel.classList.toggle("n");
});
document.addEventListener("click", function (e) {
    if (!panel.contains(e.target) && e.target !== listIcon) {
        panel.classList.add("n");
    }
});


//STUFFED ANIMAL AND WOODEN TOYS
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



let camera = document.querySelector(".camera");
const Cute1 = [
    { Image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png", price: "$ 38.00", name: "Happy Flower" },
    { Image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png", price: "$ 24.00", name: "Lift Machine" },
    { Image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png", price: "$ 32.00", name: "Wooden Camera" },
    { Image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png", price: "$ 16.00", name: "Little Rabbit" }
]


Cute1.forEach(item => {
    const cute1 = document.createElement("div");
    cute1.classList.add("cute1");

    const img = document.createElement("img");
    img.setAttribute("src", item.Image)

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.innerHTML = item.name;

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price1");
    priceDiv.innerHTML = item.price;

    cute1.append(img);
    cute1.append(nameDiv);
    cute1.append(priceDiv);
    camera.append(cute1);
});

let body = document.querySelector("body");
let cart = document.querySelector("#p1");
let click = document.querySelector(".click");
let modal = document.querySelector(".modal");
let icon = document.querySelector(".icon");

cart.addEventListener("click", () => {
    click.style.display = "flex";
})
icon.addEventListener("click", () => {
    click.style.display = "none"
})
click.addEventListener("click", (e) => {
    if (e.target == click) {
        click.style.display = "none"
    }
})