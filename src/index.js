import './reset.css';
import './style.css';
import { loadPage, createContactPage,  createHomePage, createMenuPage } from './initial-page.js';


const content = document.querySelector("#content");

loadPage(content);

const navBtn = document.querySelector(".header div");
const mainContentDiv = document.querySelector(".main"); 

navBtn.addEventListener("click", navEventHandler)


function navEventHandler(e) {
    const buttonClicked = +e.target.id;
    switch (buttonClicked) {
        case 1:
            createHomePage(mainContentDiv);
            break;
        case 2:
            createMenuPage(mainContentDiv);
            break;
        case 3:
            createContactPage(mainContentDiv);
            break;
    }
}