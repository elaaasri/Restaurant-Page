import { createHome } from "./home.js";
import { createMenu } from "./menu.js";

// select main container :
const divContainer = document.getElementById("content");
// func to create header :
const createHeader = function () {
  const header = document.createElement("h1");
  header.id = "home-header";
  header.textContent = "Egg'cellent";
  divContainer.appendChild(header);
};
// func to create header buttons :
const createButtons = function () {
  // creating elements :
  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const contactButton = document.createElement("button");
  // adding ids :
  homeButton.id = "home-button";
  menuButton.id = "menu-button";
  contactButton.id = "contact-button";
  // elements textcontent :
  homeButton.textContent = "Home";
  menuButton.textContent = "Menu";
  contactButton.textContent = "Contact";
  // appending elements :
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
};
// func to create nav container :
const createNav = function () {
  const nav = document.createElement("nav");
  const header = document.querySelector("h1");
  nav.id = "nav";
  header.appendChild(nav);
};
// calling funcs :
createHeader();
createNav();
createButtons();
// initial load page :
window.onload = () => {
  createHome();
};
// func to delete other pages for home button :
function removeOtherPagesForHome() {
  const homeContainer = document.getElementById("home-container");
  const menuContainer = document.getElementById("menu-container");
  if (divContainer.contains(homeContainer)) {
    console.log("home exist");
    return;
  } else {
    createHome();
    menuContainer.remove();
  }
}
// home button event :
const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", removeOtherPagesForHome);

// func to delete other pages for menu button :
function removeOtherPagesForMenu() {
  const homeContainer = document.getElementById("home-container");
  const menuContainer = document.getElementById("menu-container");
  if (divContainer.contains(menuContainer)) {
    console.log("menu exist");
    return;
  } else {
    createMenu();
    homeContainer.remove();
  }
}
// menu button event :
const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", removeOtherPagesForMenu);
