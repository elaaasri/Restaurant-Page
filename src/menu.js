const createMenu = function () {
  const homeMain = document.getElementById("home-container");
  const divContaier = document.getElementById("content");
  if (homeMain === null) {
    return;
  }
  homeMain.remove();

  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";

  divContaier.appendChild(menuContainer);

  const itemOneDiv = document.createElement("div");
  const itemTwoDiv = document.createElement("div");
  const itemThreeDiv = document.createElement("div");
  const itemFourDiv = document.createElement("div");

  const menuItemOne = document.createElement("img");
  menuItemOne.src = "../dist/images/item-one.jpg";
  menuItemOne.id = "item-one";

  const menuItemTwo = document.createElement("img");
  menuItemTwo.src = "../dist/images/item-two.jpg";
  menuItemTwo.id = "item-two";

  const menuItemThree = document.createElement("img");
  menuItemThree.src = "../dist/images/item-three.jpg";
  menuItemThree.id = "item-three";

  const menuItemFour = document.createElement("img");
  menuItemFour.src = "../dist/images/item-four.jpg";
  menuItemFour.id = "item-four";

  const itemOnePara = document.createElement("p");
  itemOnePara.textContent = "Bread, Cabbage, Eggs, Tomato, Beef.";
  itemOnePara.id = "item-one-para";

  const itemTwoPara = document.createElement("p");
  itemTwoPara.textContent = "Eggs, Bread, Cheese, Cilantro.";
  itemTwoPara.id = "item-two-para";

  const itemThreePara = document.createElement("p");
  itemThreePara.textContent = "Rice, Eggs, Peper, Cialtro, Beef.";
  itemThreePara.id = "item-three-para";

  const itemFourPara = document.createElement("p");
  itemFourPara.textContent = "Brown Bread, Eggs, Beef, Green Cabbage.";
  itemFourPara.id = "item-four-para";

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
