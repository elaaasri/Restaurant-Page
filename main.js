(()=>{"use strict";!function(){const e=document.getElementById("content"),t=document.createElement("h1");t.id="home-header",t.textContent="Egg'cellent";const n=document.createElement("div");n.id="home-container";const d=document.createElement("p"),o=document.createElement("p");d.id="home-para",o.id="home-small-para",d.textContent="We're All About Eggs.",o.textContent="if you're a fan of eggs (and who isn't?) you're in the right place.";const m=document.createElement("img");m.id="home-image",m.src="../dist/images/home-page-egg.jpg";const i=document.createElement("nav");i.id="nav";const c=document.createElement("button");c.id="home-button";const a=document.createElement("button");a.id="menu-button";const p=document.createElement("button");p.id="contact-button",c.textContent="Home",a.textContent="Menu",p.textContent="Contact",e.appendChild(t),e.appendChild(n),i.appendChild(c),i.appendChild(a),i.appendChild(p),t.appendChild(i),n.appendChild(d),n.appendChild(m),n.appendChild(o),console.log(n)}(),document.getElementById("menu-button").addEventListener("click",(function(){const e=document.getElementById("home-container"),t=document.getElementById("content");if(null===e)return;e.remove();const n=document.createElement("div");n.id="menu-container",t.appendChild(n);const d=document.createElement("div"),o=document.createElement("div"),m=document.createElement("div"),i=document.createElement("div"),c=document.createElement("img");c.src="../dist/images/item-one.jpg",c.id="item-one";const a=document.createElement("img");a.src="../dist/images/item-two.jpg",a.id="item-two";const p=document.createElement("img");p.src="../dist/images/item-three.jpg",p.id="item-three";const l=document.createElement("img");l.src="../dist/images/item-four.jpg",l.id="item-four";const r=document.createElement("p");r.textContent="Bread, Cabbage, Eggs, Tomato, Beef.",r.id="item-one-para";const u=document.createElement("p");u.textContent="Eggs, Bread, Cheese, Cilantro.",u.id="item-two-para";const s=document.createElement("p");s.textContent="Rice, Eggs, Peper, Cialtro, Beef.",s.id="item-three-para";const g=document.createElement("p");g.textContent="Brown Bread, Eggs, Beef, Green Cabbage.",g.id="item-four-para",d.appendChild(c),d.appendChild(r),o.appendChild(a),o.appendChild(u),m.appendChild(p),m.appendChild(s),i.appendChild(l),i.appendChild(g),n.appendChild(d),n.appendChild(o),n.appendChild(m),n.appendChild(i)})),document.getElementById("home-button")})();