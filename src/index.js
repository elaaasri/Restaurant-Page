import { createHome } from "./home.js";
import { createMenu } from "./menu.js";

createHome();
const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", createMenu);

const homeButton = document.getElementById("home-button");
// homeButton.addEventListener("click", function () {
//   const menu = document.getElementById("menu-container");
//   menu.remove();
//   document.body.appendChild(createHome());
// });

// homeButton.addEventListener("click", createHome);
