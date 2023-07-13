//Task 3.0
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// Task 1.0 Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector("main");

//Task 1.1 Set the background color of mainElto the value stored in the --main-bgCSS custom property.

mainEl.style.backgroundColor = "var(--main-bg)";

//Task 1.2 Set the content of mainElto <h1>SEI Rocks!</h1>.
const h1 = document.createElement("h1");
h1.textContent = "SEI Rocks!";

mainEl.appendChild(h1);

//Task 1.3 Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

//Task 2.0 Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

const topMenuEl = document.getElementById("top-menu");

//Task 2.1 Set the height topMenuElelement to be 100%.
topMenuEl.style.height = "100%";

//Task 2.2 Set the background color of topMenuElto the value stored in the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//Task 2.3 Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// Task 3.1
// Iterate over the entire menuLinksarray and for each "link" object:

// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the topMenuElelement.

// menuLinks.forEach(function (text, href) {
//     const a = document.createElement('a');
//     a.setAttribute("href", href.href);
//     a.textContent = text.text;
//     topMenuEl.appendChild(a);
// });

for (const link of menuLinks) {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
}
