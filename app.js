/* Created by Tivotal */

let colorSwitch = document.querySelector(".color-switcher");
let switchHeader = document.querySelector(".switch-header");
let buttons = document.querySelectorAll(".btn");
let darkBtn = document.querySelector(".dark");
let root = document.querySelector(":root");

switchHeader.addEventListener("click", () => {
  colorSwitch.classList.toggle("open");
});

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let element = e.target;

    let openElement = document.querySelector(".open");
    if (openElement) openElement.classList.remove("open");

    //removing active class from btn
    document.querySelector(".active").classList.remove("active");

    //adding active class to clicked btn
    element.classList.add("active");

    //code to switch the colors
    //getting color data from each button
    let colorData = element.getAttribute("data-color");

    //splitting each color
    let color = colorData.split(" ");

    //passing colors to root variable
    root.style.setProperty("--color-theme", color[0]);
    root.style.setProperty("--color-navbar", color[1]);
    root.style.setProperty("--color-primary", color[2]);
    root.style.setProperty("--switch-bg", color[3]);
    root.style.setProperty("--color-bg", color[4]);
    root.style.setProperty("--color-logo", color[5]);
    root.style.setProperty("--text-color", color[6]);

    if (element.classList.contains("fa-moon")) {
      colorSwitch.style.display = "none";
      element.classList.replace("fa-moon", "fa-sun");
    } else if (element.classList.contains("fa-sun")) {
      colorSwitch.style.display = "block";
      element.classList.replace("fa-sun", "fa-moon");
      document.querySelector(".btn.white").click();
    }
  });
});
