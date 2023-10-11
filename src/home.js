const createHome = function () {
  // creating elements :
  const divContainer = document.getElementById("content");
  const homeContainer = document.createElement("div");
  const para = document.createElement("p");
  const smallPara = document.createElement("p");
  const homeImage = document.createElement("img");
  // adding ids :
  homeContainer.id = "home-container";
  para.id = "home-para";
  smallPara.id = "home-small-para";
  homeImage.id = "home-image";
  homeImage.src = "images/gif-egg.gif";
  // adding textcontent :
  para.textContent = "We're All About Eggs.";
  smallPara.textContent =
    "if you're a fan of eggs (and who isn't?) you're in the right place.";
  // appending elements :
  homeContainer.appendChild(para);
  homeContainer.appendChild(homeImage);
  homeContainer.appendChild(smallPara);
  divContainer.appendChild(homeContainer);
};

export { createHome };
