// index.js

// Get the title element
const title = document.getElementById("title");
// Set the text content of the title element
title.textContent = "Welcome to my website";

// Get the alert button element
const alertButton = document.getElementById("alert-button");
// Add a click event listener to the alert button
alertButton.addEventListener("click", function () {
  alert("Hello, World!");
});

const changePageTitle = document.getElementById("change-title");
changePageTitle.addEventListener(
  "click",
  () => (title.innerHTML = "page title changed!")
);
changePageTitle.addEventListener(
  "dblclick",
  () => (title.innerHTML = title.textContent = "Welcome to my")
);

// Get the form elements
const nameInput = document.getElementById("name-input");
const submitButton = document.getElementById("submit-button");
// Add a submit event listener to the form

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  // Get the value of the name input
  const name = nameInput.value;
  // Get the name display element
  const nameDisplay = document.getElementById("name-display");
  // Set the text content of the name display element
  nameDisplay.textContent = "Hello, " + name + "!";
});
