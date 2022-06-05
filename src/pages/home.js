import './home.css';


export default function makeHomepage() {
    let container = document.createElement("div");
    container.classList.add("main-container");

    let containerHeading = document.createElement("div");
    containerHeading.classList.add("main-heading");

    let heading = document.createElement("div");
    heading.classList.add("heading");
    heading.textContent = "Welcome to the Odin Project!";

    let date = document.createElement("div");
    date.classList.add("date");
    date.textContent = "The best service since 1987!";

    containerHeading.appendChild(heading);
    containerHeading.appendChild(date);

    let containerInfo = document.createElement("div");
    containerInfo.classList.add("container-info");

    let hoursContainer = document.createElement("div");
    hoursContainer.classList.add("hours-container");

    let weekHours = document.createElement("div");
    weekHours.textContent = "Mon - Fri: 6AM - 9PM"
    
    let weekendHours = document.createElement("div");
    weekendHours.textContent = "Sat - Sun: 10AM - 3PM";

    hoursContainer.appendChild(weekHours);
    hoursContainer.appendChild(weekendHours);

    containerHeading.appendChild(hoursContainer);
    container.appendChild(containerHeading);

    return container;
}