import foodImg from './food.jpg'
// import chicken from "./chicken"

export function createHomePage(mainContent) {
    const homeContent = document.createElement('div');
    homeContent.classList.add("home-content")
    
    const textOne = document.createElement('p');
    textOne.textContent = "Best Thai foods in your country";
    
    const textTwo = document.createElement('p');
    textTwo.textContent = "Made with passion since forever";
    
    const foodImage = new Image();
    foodImage.src = foodImg;
    
    const textThree = document.createElement('p');
    textThree.textContent = "Order online or visit us!";
    
    
    homeContent.append(textOne, textTwo, foodImage, textThree);    
    mainContent.append(homeContent)

}

