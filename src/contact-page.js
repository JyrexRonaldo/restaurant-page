import mapImg from './map.jpg'

export function createContactPage(mainContent) {
    const contactContent = document.createElement('div');
    contactContent.classList.add("contact-content");
    
    const telNum = document.createElement('p');
    telNum.textContent = "📞 123 456 789";
    
    const address = document.createElement('p');
    address.textContent = "🏠 Hollywood Boulevard 42, Los Santos, Grand Rapides";
    
    const mapImage = new Image();
    mapImage.src = mapImg;
    
    contactContent.append(telNum, address, mapImage);
    mainContent.innerHTML = "";    
    mainContent.append(contactContent);

}