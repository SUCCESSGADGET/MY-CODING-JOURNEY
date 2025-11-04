// Day 6 — First JavaScript Script by Success John

// Get the current hour
let currentHour = new Date().getHours();

// Set an empty message
let greetingMessage = "";

// Decide which greeting to show
if (currentHour < 12) {
  greetingMessage = "Good morning 🌞";
} else if (currentHour < 18) {
  greetingMessage = "Good afternoon ☀";
} else {
  greetingMessage = "Good evening 🌙";
}

// Create a new element to show the greeting
let greetingElement = document.createElement("p");
greetingElement.textContent = greetingMessage;

// Style it a bit
greetingElement.style.fontSize = "20px";
greetingElement.style.color = "#444";
greetingElement.style.fontWeight = "bold";
greetingElement.style.marginTop = "10px";

// Add it to the top of the main content
let main = document.querySelector("main");
if (main) {
  main.prepend(greetingElement);
}
// Button to change background color
let colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", function() {
  // Generate random color
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
// Dark Mode Toggle
let darkModeBtn = document.getElementById("darkModeBtn");
let isDark = false;

darkModeBtn.addEventListener("click", function() {
  if (!isDark) {
    document.body.style.backgroundColor = "#1e1e1e";
    document.body.style.color = "white";
    darkModeBtn.textContent = "☀ Light Mode";
    isDark = true;
  } else {
    document.body.style.backgroundColor = "#f4f4f4";
    document.body.style.color = "#333";
    darkModeBtn.textContent = "🌙 Dark Mode";
    isDark = false;
  }
});