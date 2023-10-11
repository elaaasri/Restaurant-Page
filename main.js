(() => {
  "use strict";
  const e = function () {
      const e = document.getElementById("content"),
        t = document.createElement("div"),
        n = document.createElement("p"),
        d = document.createElement("p"),
        o = document.createElement("img");
      (t.id = "home-container"),
        (n.id = "home-para"),
        (d.id = "home-small-para"),
        (o.id = "home-image"),
        (o.src = "../images/gif-egg.gif"),
        (n.textContent = "We're All About Eggs."),
        (d.textContent =
          "if you're a fan of eggs (and who isn't?) you're in the right place."),
        t.appendChild(n),
        t.appendChild(o),
        t.appendChild(d),
        e.appendChild(t);
    },
    t = document.getElementById("content");
  function n() {
    t.children[1].remove();
  }
  !(function () {
    const e = document.createElement("h1");
    (e.id = "home-header"), (e.textContent = "Egg'cellent"), t.appendChild(e);
  })(),
    (function () {
      const e = document.createElement("nav"),
        t = document.querySelector("h1");
      (e.id = "nav"), t.appendChild(e);
    })(),
    (function () {
      const e = document.createElement("button"),
        t = document.createElement("button"),
        n = document.createElement("button");
      (e.id = "home-button"),
        (t.id = "menu-button"),
        (n.id = "contact-button"),
        (e.textContent = "Home"),
        (t.textContent = "Menu"),
        (n.textContent = "Contact"),
        nav.appendChild(e),
        nav.appendChild(t),
        nav.appendChild(n);
    })(),
    (window.onload = () => {
      e();
    }),
    document
      .getElementById("home-button")
      .addEventListener("click", function () {
        n(), e();
      }),
    document
      .getElementById("menu-button")
      .addEventListener("click", function () {
        n(),
          (function () {
            const e = document.getElementById("content"),
              t = document.createElement("div"),
              n = document.createElement("div"),
              d = document.createElement("div"),
              o = document.createElement("div"),
              c = document.createElement("div"),
              i = document.createElement("img"),
              a = document.createElement("img"),
              m = document.createElement("img"),
              p = document.createElement("img"),
              l = document.createElement("p"),
              r = document.createElement("p"),
              u = document.createElement("p"),
              g = document.createElement("p");
            (t.id = "menu-container"),
              (i.id = "item-one"),
              (a.id = "item-two"),
              (m.id = "item-three"),
              (p.id = "item-four"),
              (l.id = "item-one-para"),
              (r.id = "item-two-para"),
              (u.id = "item-three-para"),
              (g.id = "item-four-para"),
              (i.src = "../images/item-one.jpg"),
              (a.src = "../images/item-two.jpg"),
              (m.src = "../images/item-three.jpg"),
              (p.src = "../images/item-four.jpg"),
              (l.textContent = "Bread, Cabbage, Eggs, Tomato, Beef."),
              (r.textContent = "Eggs, Bread, Cheese, Cilantro."),
              (u.textContent = "Rice, Eggs, Peper, Tomato, Cialtro, Beef."),
              (g.textContent = "Brown Bread, Eggs, Beef, Green Cabbage."),
              e.appendChild(t),
              n.appendChild(i),
              n.appendChild(l),
              d.appendChild(a),
              d.appendChild(r),
              o.appendChild(m),
              o.appendChild(u),
              c.appendChild(p),
              c.appendChild(g),
              t.appendChild(n),
              t.appendChild(d),
              t.appendChild(o),
              t.appendChild(c);
          })();
      }),
    document
      .getElementById("contact-button")
      .addEventListener("click", function () {
        n(),
          (function () {
            const e = document.getElementById("content"),
              t = document.createElement("p"),
              n = document.createElement("div"),
              d = document.createElement("p"),
              o = document.createElement("p"),
              c = document.createElement("img");
            (t.textContent = "Phone : 0000-0000-0000"),
              (d.textContent = "Address : Unknown"),
              (o.textContent = "Eggcuse Me, Are u Searching For Something !?"),
              (n.id = "contact-container"),
              (t.id = "contact-phone"),
              (d.id = "contact-address"),
              (o.id = "contact-para"),
              (c.id = "contact-image"),
              (c.src = "../images/egg-contact.jpg"),
              n.appendChild(o),
              n.appendChild(c),
              n.appendChild(t),
              n.appendChild(d),
              e.appendChild(n);
          })();
      });
})();
