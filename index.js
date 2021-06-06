const hamburger = document.getElementById("open-nav");
const exit = document.getElementById("exit-nav");
const logo = document.getElementsByClassName("logo")[0];
console.log(logo);

hamburger.addEventListener("click", () => {
  hamburger.style.display = "none";
  exit.style.display = "block";
  logo.style.display = "none";
});

exit.addEventListener("click", () => {
  hamburger.style.display = "block";
  exit.style.display = "none";
  logo.style.display = "block";
});
