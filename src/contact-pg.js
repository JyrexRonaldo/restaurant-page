export function createContactPage(content) {
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
    const contact = document.createElement('p');
    const location = document.createElement('p');
    const map = document.createElement('img'); 
    const gitLink = document.createElement('a');
    const gitIcon = document.createElement('img');
    contact.textContent = "📞 123 456 789";
    location.textContent = "🏠 Hollywood Boulevard 42, Los Santos, Grand Rapides"
    restaurantName.textContent = 'Thai Me Up Restaurant';
    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';
    contactButton.classList.add('selected')
    main.classList.add('contactpage')
    map.setAttribute('src', '../src/map.jpg');
    gitLink.setAttribute('href', '#');
    gitIcon.setAttribute('src', '../src/github-icon.png')
    buttonContainer.append(homeButton, menuButton, contactButton);
    header.append(restaurantName, buttonContainer);
    main.append(contact, location, map);
    footer.append('Copyright © 2022 JyrexRonaldo', gitLink);
    gitLink.append(gitIcon);
    div.append(header, main, footer);
    content.append(div);
  }
  