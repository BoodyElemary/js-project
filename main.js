let currentImg = document.getElementById("currentImg");
let items = document.getElementsByClassName("items");
let imgsSource = ["./img1.jpg", "./img2.jpg", "./img3.jpg"];
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("previous");
console.log(nextBtn);
let currentImgIndex = 0;

let heroChange = () => {};

let nextImg = () => {
  currentImgIndex++;
  if (currentImgIndex >= imgsSource.length) {
    currentImgIndex = 0;
  }
  currentImg.setAttribute("src", imgsSource[currentImgIndex]);
  heroChange();
};
nextBtn.addEventListener("click", nextImg());

prevBtn.addEventListener("click", () => {
  currentImgIndex--;
  if (currentImgIndex < 0) {
    currentImgIndex = imgsSource.length - 1;
  }
  currentImg.setAttribute("src", imgsSource[currentImgIndex]);
});

//autoplay;
setInterval(() => {
  nextImg();
}, 2500);

console.log(items);

// console.log(productsArr[1].prductImg);
let productsContainer = document.getElementById("productsContainer");

function fillProducts(productsArr) {
  for (let i = 0; i < productsArr.length; i++) {
    let label;
    if (productsArr[i].productCatrgory == "Shoes") {
      label = "text-bg-success";
    } else if (productsArr[i].productCatrgory == "Shirts") {
      label = "text-bg-danger";
    } else if (productsArr[i].productCatrgory == "Switer") {
      label = "text-bg-primary";
    }

    productsContainer.innerHTML += `    
    <div class="card col-lg-3 col-md-6 col-sm-12 hover-2" >
    <img src=${productsArr[i].prductImg} class="card-img-top p-5 h-50" alt="...">
    <div class="card-body">
      <div class="d-flex align-items-baseline gap-5">       
         <h4 class="card-title">${productsArr[i].productName}</h4>
         <h6 class="text-secondary fw-bolder"> ${productsArr[i].productPrice} EGP</h6>
      </div>
      <span class="badge rounded-pill ${label}">${productsArr[i].productCatrgory}</span>
    
  
      <p class="card-text">${productsArr[i].productDescription}</p>
      <button class="btn btn-warning" id="addToCart" onclick="add()">Add to cart</button>
    </div>
  </div>`;
  }
}
fillProducts(productsArr);

console.log(productsArr.filter((items) => items.productCatrgory == "Shoes"));

for (let i = 0; i < items.length; i++) {
  let shoesProducts, shirtsProducts, allProducts, switerProducts;
  items[i].addEventListener("click", (e) => {
    productsContainer.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("active");
      items[i].classList.remove("bg-warning");
    }
    e.target.classList.add("active");
    e.target.classList.add("bg-warning");
    if (e.target.innerText == "shoes") {
      shoesProducts = productsArr.filter(
        (items) => items.productCatrgory == "Shoes"
      );
      fillProducts(shoesProducts);
    } else if (e.target.innerText == "shirts") {
      shirtsProducts = productsArr.filter(
        (items) => items.productCatrgory == "Shirts"
      );
      fillProducts(shirtsProducts);
    } else if (e.target.innerText == "switers") {
      switerProducts = productsArr.filter(
        (items) => items.productCatrgory == "Switer"
      );
      fillProducts(switerProducts);
    } else {
      fillProducts(productsArr);
    }
  });
}

//back to the top

let backToTheTopBtn = document.getElementById("backTotheTopBtn");

console.log(backToTheTopBtn);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTheTopBtn.style.display = "block";
  } else {
    backToTheTopBtn.style.display = "none";
  }
}

window.onscroll = function () {
  scrollFunction();
};

backToTheTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//add to cart
let addToCart = document.getElementById("addToCart");

let counter = document.getElementsByClassName("itemsCounter");
console.log(counter);

// // Set Item
// localStorage.setItem("lastname", "Smith");
// // Retrieve
// document.getElementById("demo").innerHTML = localStorage.getItem("lastname");

let itemsCounter;
if (!localStorage.getItem("counter")) {
  itemsCounter = 0;
  localStorage.setItem("counter", itemsCounter);
} else {
  itemsCounter = parseInt(localStorage.getItem("counter"));
  for (let i = 0; i < counter.length; i++) {
    counter[i].classList.remove("d-none");
  }
}

for (let i = 0; i < counter.length; i++) {
  counter[i].innerHTML = itemsCounter;
}
function add() {
  itemsCounter++;
  localStorage.setItem("counter", itemsCounter);
  for (let i = 0; i < counter.length; i++) {
    counter[i].innerHTML = itemsCounter;
    counter[i].classList.remove("d-none");
  }
}
