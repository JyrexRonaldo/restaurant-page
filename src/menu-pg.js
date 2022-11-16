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
    const itemOneImage = document.createElement('img');
    const itemTwoImage = document.createElement('img');
    const itemOneDescription = document.createElement('p');
    const itemTwoDescription = document.createElement('p');
    const gitLink = document.createElement('a');
    const gitIcon = document.createElement('img');
    itemOneImage.setAttribute('src', '../src/grilled-chicken.jpg');
    itemTwoImage.setAttribute('src', '../src/chicken.jpg')
    itemOneDescription.textContent = "Grilled chicken";
    itemTwoDescription.textContent = "Chicken" 
    restaurantName.textContent = 'Thai Me Up Restaurant';
    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';
    menuButton.classList.add('selected')
    main.classList.add('menupage')
    gitLink.setAttribute('href', '#');
    gitIcon.setAttribute('src', '../src/github-icon.png')
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
  