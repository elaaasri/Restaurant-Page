const createMenu = function () {
  // creating elements :
  const divContaier = document.getElementById("content");
  const menuContainer = document.createElement("div");
  const itemOneDiv = document.createElement("div");
  const itemTwoDiv = document.createElement("div");
  const itemThreeDiv = document.createElement("div");
  const itemFourDiv = document.createElement("div");
  const menuItemOne = document.createElement("img");
  const menuItemTwo = document.createElement("img");
  const menuItemThree = document.createElement("img");
  const menuItemFour = document.createElement("img");
  const itemOnePara = document.createElement("p");
  const itemTwoPara = document.createElement("p");
  const itemThreePara = document.createElement("p");
  const itemFourPara = document.createElement("p");
  // adding ids :
  menuContainer.id = "menu-container";
  menuItemOne.id = "item-one";
  menuItemTwo.id = "item-two";
  menuItemThree.id = "item-three";
  menuItemFour.id = "item-four";
  itemOnePara.id = "item-one-para";
  itemTwoPara.id = "item-two-para";
  itemThreePara.id = "item-three-para";
  itemFourPara.id = "item-four-para";
  // adding textcontent :
  menuItemOne.src = "../dist/images/item-one.jpg";
  menuItemTwo.src = "../dist/images/item-two.jpg";
  menuItemThree.src = "../dist/images/item-three.jpg";
  menuItemFour.src = "../dist/images/item-four.jpg";
  itemOnePara.textContent = "Bread, Cabbage, Eggs, Tomato, Beef.";
  itemTwoPara.textContent = "Eggs, Bread, Cheese, Cilantro.";
  itemThreePara.textContent = "Rice, Eggs, Peper, Cialtro, Beef.";
  itemFourPara.textContent = "Brown Bread, Eggs, Beef, Green Cabbage.";
  // appending elements :
  divContaier.appendChild(menuContainer);
  itemOneDiv.appendChild(menuItemOne);
  itemOneDiv.appendChild(itemOnePara);
  itemTwoDiv.appendChild(menuItemTwo);
  itemTwoDiv.appendChild(itemTwoPara);
  itemThreeDiv.appendChild(menuItemThree);
  itemThreeDiv.appendChild(itemThreePara);
  itemFourDiv.appendChild(menuItemFour);
  itemFourDiv.appendChild(itemFourPara);
  menuContainer.appendChild(itemOneDiv);
  menuContainer.appendChild(itemTwoDiv);
  menuContainer.appendChild(itemThreeDiv);
  menuContainer.appendChild(itemFourDiv);
};

export { createMenu };
