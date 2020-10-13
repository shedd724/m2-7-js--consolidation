// 😋
let displayYear = document.getElementById("backgroungYear");
let buttonOne = document.getElementById("2018");
let buttonTwo = document.getElementById("2019");
let foodNumber = document.getElementById("foodNumber");
let foodItem = document.getElementById("foodItem");
let hideMe = document.getElementById("before");
let numbers = Array.from(document.getElementsByClassName("numbers"));
let yearSelected = "2018";
let numSelected = 1;
let background = document.getElementById("background");

console.log(numbers);

buttonOne.addEventListener("click", firstYearClicked);
buttonTwo.addEventListener("click", secondYearClicked);

window.onload = itemsOnLoad;

function itemsOnLoad() {
  foodNumber.style.display = "none";
  foodItem.style.display = "none";
  background.style.minHeight = "333px";
  firstYearClicked();
}

function firstYearClicked() {
  yearSelected = "2018";
  buttonOne.style.backgroundColor = "var(--ksu-purple)";
  buttonOne.style.color = "white";
  buttonTwo.style.backgroundColor = "transparent";
  buttonTwo.style.color = "var(--ksu-purple)";
  displayYear.innerText = "2018";
}

function secondYearClicked() {
  yearSelected = "2019";
  buttonTwo.style.backgroundColor = "var(--ksu-purple)";
  buttonTwo.style.color = "white";
  buttonOne.style.backgroundColor = "transparent";
  buttonOne.style.color = "var(--ksu-purple)";
  displayYear.innerText = "2019";
}

numbers.forEach((num, index) => {
  num.addEventListener("mouseover", (ev) => {
    foodNumber.innerText = ev.target.innerText;
    foodItem.innerText = topTenList[yearSelected][index].name;
    foodNumber.style.display = "block";
    foodItem.style.display = "block";
    hideMe.style.display = "none";
  });
});