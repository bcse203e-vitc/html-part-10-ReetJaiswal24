const lightButton = document.getElementById('lightBtn');
const darkButton = document.getElementById('darkBtn');
function setLightMode() {
    document.body.style.backgroundColor = "#f4f4f4"; 
    document.body.style.color = "#333"; 
    document.body.style.fontSize = "16px"; 
}
function setDarkMode() {
    document.body.style.backgroundColor = "#333"; 
    document.body.style.color = "#f4f4f4";
    document.body.style.fontSize = "18px";
}
lightButton.addEventListener('click', setLightMode);
darkButton.addEventListener('click', setDarkMode);

setLightMode();
