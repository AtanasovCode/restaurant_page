import './menu.css';
import '../navigation/nav.css';
import food1 from '../images/hamburger.jpg';
import food2 from '../images/cheeseburger.jpg';
import food3 from '../images/hotdog.jpg';
import food4 from '../images/burger_fries.jpg';
import food5 from '../images/cheeseburger_fries.jpg';
import food6 from '../images/fries.jpg';
import food7 from '../images/lavacake.jpg';
import food8 from '../images/cheesecake.jpg';
import food9 from '../images/icecream.jpg';
import food10 from '../images/pudding.jpg';


export default function menupage() {
    let container = document.createElement("div");
    container.classList.add("container-grid");

    let hamburger = new Image();
    hamburger.src = food1;
    hamburger.classList.add("icon-food");

    let cheeseburger = new Image();
    cheeseburger.src = food2;
    cheeseburger.classList.add("icon-food");

    let hotdog = new Image();
    hotdog.src = food3;
    hotdog.classList.add("icon-food");

    let burgerFries = new Image();
    burgerFries.src = food4;
    burgerFries.classList.add("icon-food");

    let cheeseburgerFries = new Image();
    cheeseburgerFries.src = food5;
    cheeseburgerFries.classList.add("icon-food");

    let fries = new Image();
    fries.src = food6;
    fries.classList.add("icon-food");

    let lavacake = new Image();
    lavacake.src = food7;
    lavacake.classList.add("icon-food");

    let cheesecake = new Image();
    cheesecake.src = food8;
    cheesecake.classList.add("icon-food");

    let icecream = new Image();
    icecream.src = food9;
    icecream.classList.add("icon-food");

    let pudding = new Image();
    pudding.src = food10;
    pudding.classList.add("icon-food");

    let hamburgerContainer = document.createElement("div");
    hamburgerContainer.classList.add("menu-item");
    let hamburgerInfo = document.createElement("div");
    hamburgerInfo.classList.add("food-info");
    hamburgerInfo.textContent = "Hamburger $7.99";
    hamburgerContainer.appendChild(hamburger);
    hamburgerContainer.appendChild(hamburgerInfo);

    let cheeseburgerContainer = document.createElement("div");
    cheeseburgerContainer.classList.add("menu-item");
    let cheeseburgerInfo = document.createElement("div");
    cheeseburgerInfo.classList.add("food-info");
    cheeseburgerInfo.textContent = "Cheeseburger $11.00";
    cheeseburgerContainer.appendChild(cheeseburger);
    cheeseburgerContainer.appendChild(cheeseburgerInfo);

    let hotdogContainer = document.createElement("div");
    hotdogContainer.classList.add("menu-item");
    let hotdogInfo = document.createElement("div");
    hotdogInfo.classList.add("food-info");
    hotdogInfo.textContent = "Hot Dog $4.99";
    hotdogContainer.appendChild(hotdog);
    hotdogContainer.appendChild(hotdogInfo);

    let burgerFriesContainer = document.createElement("div");
    burgerFriesContainer.classList.add("menu-item");
    let burgerFriesInfo = document.createElement("div");
    burgerFriesInfo.classList.add("food-info");
    burgerFriesInfo.textContent = "Burger & Fries $12.99";
    burgerFriesContainer.appendChild(burgerFries);
    burgerFriesContainer.appendChild(burgerFriesInfo);

    let cheeseburgerFriesContainer = document.createElement("div");
    cheeseburgerFriesContainer.classList.add("menu-item");
    let cheeseburgerFriesInfo = document.createElement("div");
    cheeseburgerFriesInfo.classList.add("food-info");
    cheeseburgerFriesInfo.textContent = "Cheeseburger & Fries $14.49";
    cheeseburgerFriesContainer.appendChild(cheeseburgerFries);
    cheeseburgerFriesContainer.appendChild(cheeseburgerFriesInfo);

    let friesContainer = document.createElement("div");
    friesContainer.classList.add("menu-item");
    let friesInfo = document.createElement("div");
    friesInfo.classList.add("food-info");
    friesInfo.textContent = "Fries $3.33";
    friesContainer.appendChild(fries);
    friesContainer.appendChild(friesInfo);

    let lavacakeContainer = document.createElement("div");
    lavacakeContainer.classList.add("menu-item");
    let lavaInfo = document.createElement("div");
    lavaInfo.classList.add("food-info");
    lavaInfo.textContent = "Lava Cake $6.49";
    lavacakeContainer.appendChild(lavacake);
    lavacakeContainer.appendChild(lavaInfo);

    let cheesecakeContainer = document.createElement("div");
    cheesecakeContainer.classList.add("menu-item");
    let cheeseInfo = document.createElement("div");
    cheeseInfo.classList.add("food-info");
    cheeseInfo.textContent = "Cheesecake $6.99";
    cheesecakeContainer.appendChild(cheesecake);
    cheesecakeContainer.appendChild(cheeseInfo);

    let iceCreamContainer = document.createElement("div");
    iceCreamContainer.classList.add("menu-item");
    let iceCreamInfo = document.createElement("div");
    iceCreamInfo.classList.add("food-info");
    iceCreamInfo.textContent = "Ice Cream $4.49";
    iceCreamContainer.appendChild(icecream);
    iceCreamContainer.appendChild(iceCreamInfo);

    let puddingContainer = document.createElement("div");
    puddingContainer.classList.add("menu-item");
    let puddingInfo = document.createElement("div");
    puddingInfo.classList.add("food-info");
    puddingInfo.textContent = "Pudding $2.99";
    puddingContainer.appendChild(pudding);
    puddingContainer.appendChild(puddingInfo);

    container.appendChild(hamburgerContainer);
    container.appendChild(cheeseburgerContainer);
    container.appendChild(hotdogContainer);
    container.appendChild(burgerFriesContainer);
    container.appendChild(cheeseburgerFriesContainer);
    container.appendChild(friesContainer);
    container.appendChild(lavacakeContainer);
    container.appendChild(cheesecakeContainer);
    container.appendChild(iceCreamContainer);
    container.appendChild(puddingContainer);


    return container;
}