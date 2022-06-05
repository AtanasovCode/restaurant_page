import nav from '../src/navigation/nav.js';
import homepage from '../src/pages/home.js';
import menupage from '../src/pages/menu.js'
import contactpage from '../src/pages/contact.js';

let container = document.querySelector("#content");
container.classList.add("home");

container.appendChild(nav());
container.appendChild(homepage());

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");


home.addEventListener("click", () => {
    container.removeChild(container.children[1]);
    container.classList.remove("menu");
    container.classList.remove("contact");
    container.classList.add("home");
    container.appendChild(homepage());
})

menu.addEventListener("click", () => {
    container.classList.add("menu");
    container.classList.remove("home");
    container.classList.remove("contact");
    container.removeChild(container.children[1]);
    container.appendChild(menupage());
    container.classList.remove("active");
})

contact.addEventListener("click", () => {
    container.classList.add("contact");
    container.classList.remove("menu");
    container.classList.remove("home");
    container.removeChild(container.children[1]);
    container.appendChild(contactpage());
    container.classList.remove("active");
})

