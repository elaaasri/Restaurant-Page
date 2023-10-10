import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

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
function renderHome() {
  deleteCurrentElement();
  createHome();
}
// home button event :
const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", renderHome);

// func to delete other pages for menu button :
function renderMenu() {
  deleteCurrentElement();
  createMenu();
}
// menu button event :
const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", renderMenu);

// func to delete other pages for contact button :
function renderContact() {
  deleteCurrentElement();
  createContact();
}
// menu button event :
const contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", renderContact);

// func to delete the current element :
function deleteCurrentElement() {
  const targetElement = divContainer.children[1];
  targetElement.remove();
}
