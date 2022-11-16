import GithubIcon from'./github-icon.png';
import Food from './food.jpg';
export function createHomePage(content) {
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
  const copytitle = document.createElement('p');
  const copy = document.createElement('p');
  const image = new Image();
  const callToAction = document.createElement('p');
  const gitLink = document.createElement('a');
  const gitIcon = new Image();
  restaurantName.textContent = 'Thai Me Up Restaurant';
  homeButton.textContent = 'Home';
  menuButton.textContent = 'Menu';
  contactButton.textContent = 'Contact';
  copytitle.textContent = 'Best Thai foods in your country';
  copy.textContent = 'Made with passion since forever';
  homeButton.classList.add('selected')
  main.classList.add('homepage')
  image.src = Food;
  callToAction.textContent = 'Order online or visit us!';
  gitLink.setAttribute('href', '#');
  gitIcon.src = GithubIcon;
  buttonContainer.append(homeButton, menuButton, contactButton);
  header.append(restaurantName, buttonContainer);
  main.append(copytitle, copy, image, callToAction);
  footer.append('Copyright © 2022 JyrexRonaldo', gitLink);
  gitLink.append(gitIcon);
  div.append(header, main, footer);
  content.append(div);
}
