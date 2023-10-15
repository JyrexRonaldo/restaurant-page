import grilledChicken from "./grilled-chicken"
import chicken from "./chicken"

export function createMenuPage(mainContent) {
    const menuContent = document.createElement("div")
    menuContent.classList.add("menu-content")
    
    const firstFoodImg = new Image();
    firstFood.src =  grilledChicken;
    
    const firstFoodText = document.createElement('p');
    firstFoodText.textContent = "Grilled chicken";
    
    const secondFoodImg = new Image();
    secondFood.src = chicken;

    const secondFoodText = document.createElement('p');
    secondFoodText.textContent = "Chicken";

    menuContent.append(firstFoodImg, firstFoodText, secondFoodImg, secondFoodText)
    mainContent.append(menuContent)

}

