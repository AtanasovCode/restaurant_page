import logo from '../images/logo.png';
import '../global.css';
import './nav.css';

export default function myNav() {

     let container = document.createElement("nav");

     let pages = document.createElement("ul");
     let home = document.createElement   ("li");
     let menu = document.createElement("li");
     let contact = document.createElement("li");

     //home.textContent = "Home";
     home.classList.add("nav-items");
     home.id = "home";
     //menu.textContent = "Menu";
     menu.classList.add("nav-items");
     menu.id = "menu";
     //contact.textContent = "Contact";
     contact.classList.add("nav-items");
     contact.id = "contact";

     pages.appendChild(home);
     pages.appendChild(menu);
     pages.appendChild(contact);

     const icon = new Image();
     icon.src = logo;
     icon.classList.add("logo");
     icon.alt = "logo";

     container.appendChild(icon);
     container.appendChild(pages);

     return container;
}