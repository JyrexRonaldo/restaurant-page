import { createHomePage, createMenuPage, createContactPage } from "./page-load";
import './reset.css';
import './style.css';



const content = document.querySelector('#content');
createHomePage(content)

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => button.addEventListener('click', () => {
    if (button.textContent === 'Home') {
        createHomePage(content)
        addPageSwitch()
    } else if (button.textContent === 'Menu') {
        createMenuPage(content);
        addPageSwitch();
    } else if (button.textContent === 'Contact') {
        createContactPage(content);
        addPageSwitch();
    }
}));

function addPageSwitch() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.addEventListener('click', () => {
        if (button.textContent === 'Home') {
            createHomePage(content)
            addPageSwitch()
        } else if (button.textContent === 'Menu') {
            createMenuPage(content);
            addPageSwitch();
        } else if (button.textContent === 'Contact') {
            createContactPage(content);
            addPageSwitch();
        }
    }));
}

