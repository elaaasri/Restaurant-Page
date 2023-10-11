const createContact = function () {
  // creating elements :
  const divContainer = document.getElementById("content");
  const contactPhone = document.createElement("p");
  const contactContainer = document.createElement("div");
  const contactAddress = document.createElement("p");
  const addressPara = document.createElement("p");
  const contactImage = document.createElement("img");
  // adding textcontent :
  contactPhone.textContent = "Phone : 0000-0000-0000";
  contactAddress.textContent = "Address : Unknown";
  addressPara.textContent = "Eggcuse Me, Are u Searching For Something !?";
  //   adding ids :
  contactContainer.id = "contact-container";
  contactPhone.id = "contact-phone";
  contactAddress.id = "contact-address";
  addressPara.id = "contact-para";
  contactImage.id = "contact-image";
  contactImage.src = "../images/egg-contact.jpg";
  //   appengind elements :
  contactContainer.appendChild(addressPara);
  contactContainer.appendChild(contactImage);
  contactContainer.appendChild(contactPhone);
  contactContainer.appendChild(contactAddress);
  divContainer.appendChild(contactContainer);
};
export { createContact };
