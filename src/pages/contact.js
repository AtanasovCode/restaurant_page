import './contact.css';

export default function contactpage() {
    let container = document.createElement("div");
    container.classList.add("contact-container");

    let contact = document.createElement("div");
    contact.classList.add("contact-info");

    let contactHeading = document.createElement("div");
    contactHeading.classList.add("contact-heading");
    contactHeading.textContent = "Contact Us!";

    let contactInfo = document.createElement("div");
    contactInfo.classList.add("info-container");
    let info = document.createElement("div");
    let info2 = document.createElement("div");
    let info3 = document.createElement("div");

    info.textContent = "555-2335-5455";
    info2.textContent = "555-1254-6433";
    info3.textContent = "555-5213-6422";

    contactInfo.appendChild(info);
    contactInfo.appendChild(info2);
    contactInfo.appendChild(info3);

    contact.appendChild(contactHeading);
    contact.appendChild(contactInfo);

    container.appendChild(contact);


    return container;
}