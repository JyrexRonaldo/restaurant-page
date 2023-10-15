import grilledChicken from "./grilled-chicken.jpg"
import chicken from "./chicken.jpg"

export function createMenuPage(mainContent) {
    const menuContent = document.createElement("div")
    menuContent.classList.add("menu-content")
    
    const firstFoodImg = new Image();
    firstFoodImg.src =  grilledChicken;
    
    const firstFoodText = document.createElement('p');
    firstFoodText.textContent = "Grilled chicken";
    
    const secondFoodImg = new Image();
    secondFoodImg.src = chicken;

    const secondFoodText = document.createElement('p');
    secondFoodText.textContent = "Chicken";

    menuContent.append(firstFoodImg, firstFoodText, secondFoodImg, secondFoodText)
    mainContent.innerHTML = "";
    mainContent.append(menuContent)

}

