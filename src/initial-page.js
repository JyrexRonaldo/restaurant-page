import { createHomePage } from './home-page';
export {createContactPage} from './contact-page';
export {createMenuPage} from './menu-page';
export {createHomePage} from './home-page';

export function loadPage(content) {
    const header = document.createElement('div');
    header.classList.add("header");
    
    const headline = document.createElement('P');
    headline.textContent = "Thai Me Up Restaurant";
    
    const headerButtons = document.createElement('div');
    
    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    homeButton.setAttribute("id", "1")
    
    const menuButton = document.createElement('button');
    menuButton.textContent = "Menu";
    menuButton.setAttribute("id", "2")

    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact";
    contactButton.setAttribute("id", "3")

    headerButtons.append(homeButton, menuButton, contactButton)
    header.append(headline, headerButtons);

    const main = document.createElement('div');
    main.classList.add("main")
    
    createHomePage(main)
    
    const footer = document.createElement('div');
    footer.classList.add("footer");

    const footerText = document.createElement('p');
    footerText.textContent = "Copyright © 2022 JyrexRonaldo";

    footer.append(footerText);
    content.append(header, main, footer);
}