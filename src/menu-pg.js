import GrilledChicken from './grilled-chicken.jpg';
import Chicken from './chicken.jpg';
import GithubIcon from'./github-icon.png';
export function createMenuPage(content) {
    content.innerHTML = '';
    const div = document.createElement('div');
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    const restaurantName = document.createElement('h1');
    const buttonContainer = document.createElement('div');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    const itemOne = document.createElement('div');
    const itemTwo = document.createElement('div');
    const itemOneImage = new Image();
    const itemTwoImage = new Image();
    const itemOneDescription = document.createElement('p');
    const itemTwoDescription = document.createElement('p');
    const gitLink = document.createElement('a');
    const gitIcon = new Image()
    itemOneImage.src = GrilledChicken;
    itemTwoImage.src = Chicken;
    itemOneDescription.textContent = "Grilled chicken";
    itemTwoDescription.textContent = "Chicken" 
    restaurantName.textContent = 'Thai Me Up Restaurant';
    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';
    menuButton.classList.add('selected')
    main.classList.add('menupage')
    gitLink.setAttribute('href', '#');
    gitIcon.src = GithubIcon;
    buttonContainer.append(homeButton, menuButton, contactButton);
    header.append(restaurantName, buttonContainer);
    itemOne.append(itemOneImage, itemOneDescription);
    itemTwo.append(itemTwoImage, itemTwoDescription)
    main.append(itemOne, itemTwo);
    footer.append('Copyright © 2022 JyrexRonaldo', gitLink);
    gitLink.append(gitIcon);
    div.append(header, main, footer);
    content.append(div);
  }
  