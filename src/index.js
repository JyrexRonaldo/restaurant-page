import './reset.css';
import './style.css';
import { loadPage, createContactPage,  createHomePage, createMenuPage } from './initial-page.js';


const content = document.querySelector("#content");

loadPage(content);

const navBtnContainer = document.querySelector(".header div");
const mainContentDiv = document.querySelector(".main"); 
const navBtns = document.querySelectorAll(".header div button");

navBtnContainer.addEventListener("click", navEventHandler)


function navEventHandler(e) {

    navBtns.forEach((navBtn) => {
        navBtn.classList.remove("selected")
    })
    
    if (Boolean(e.target.id)) {
        e.target.classList.add("selected");
    }
    
    const buttonClicked = +e.target.id;
    console.log(navBtns)
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