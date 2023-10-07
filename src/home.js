const createHome = function () {
  //
  const divContaier = document.getElementById("content");
  //
  const header = document.createElement("h1");
  header.id = "home-header";
  header.textContent = "Egg'cellent";
  //
  const homeMain = document.createElement("div");
  homeMain.id = "home-main";

  //
  const para = document.createElement("p");
  const smallPara = document.createElement("p");
  para.id = "home-para";
  smallPara.id = "home-small-para";
  para.textContent = "We're All About Eggs.";
  smallPara.textContent =
    "if you're a fan of eggs (and who isn't?) you're in the right place.";
  //
  const homeImage = document.createElement("img");
  homeImage.id = "home-image";
  homeImage.src = "../dist/images/home-page-egg.jpg";
  //
  const nav = document.createElement("nav");
  nav.id = "nav";
  //
  const homeContent = document.createElement("button");
  const menuContent = document.createElement("button");
  const contactContent = document.createElement("button");
  //
  homeContent.textContent = "Home";
  menuContent.textContent = "Menu";
  contactContent.textContent = "Contact";
  //
  divContaier.appendChild(header);
  divContaier.appendChild(homeMain);
  //
  nav.appendChild(homeContent);
  nav.appendChild(menuContent);
  nav.appendChild(contactContent);
  //
  header.appendChild(nav);
  //
  homeMain.appendChild(para);
  homeMain.appendChild(homeImage);
  homeMain.appendChild(smallPara);
};

export { createHome };
