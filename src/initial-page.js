import foodImg from './food.jpg'


export function loadPage(content) {
    const header = document.createElement('div');
    header.classList.add("header");
    
    const headline = document.createElement('P');
    headline.textContent = "Thai Me Up Restaurant";
    
    const headerButtons = document.createElement('div');
    
    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    
    const menuButton = document.createElement('button');
    menuButton.textContent = "Menu";
    
    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact";
    
    headerButtons.append(homeButton, menuButton, contactButton)
    header.append(headline, headerButtons);

    const main = document.createElement('div');
    main.classList.add("main")
    
    const mainContent = document.createElement('div');
    
    const textOne = document.createElement('p');
    textOne.textContent = "Best Thai foods in your country";
    
    const textTwo = document.createElement('p');
    textTwo.textContent = "Made with passion since forever";
    
    const foodImage = new Image();
    foodImage.src = foodImg;
    
    const textThree = document.createElement('p');
    textThree.textContent = "Copyright © 2022 JyrexRonaldo";
    
    
    mainContent.append(textOne, textTwo, foodImage, textThree);
    main.append(mainContent)
    
    const footer = document.createElement('div');
    footer.classList.add("footer");

    const footerText = document.createElement('p');
    footerText.textContent = "Copyright © 2022 JyrexRonaldo";

    footer.append(footerText);
    content.append(header, main, footer);
}