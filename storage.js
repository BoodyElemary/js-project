let counter = document.getElementsByClassName("itemsCounter");

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
