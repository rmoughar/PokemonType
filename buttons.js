console.log("buttons.js loaded");
document.addEventListener("DOMContentLoaded", () => {
const startScreen = document.getElementById('start-screen');
const inputScreen = document.getElementById('input-screen');
const resultScreen = document.getElementById('result-screen');

const startButton = document.getElementById('start-button');
const submitButton = document.getElementById('submit-button');
const backButton = document.getElementById('back-button');

const startMinimize = document.getElementById('start-minimize');
const startClose = document.getElementById('start-close');
const inputMinimize = document.getElementById('input-minimize');
const inputClose = document.getElementById('input-close');
const resultMinimize = document.getElementById('result-minimize');
const resultClose = document.getElementById('result-close');

startButton.addEventListener('click', () => {
    console.log("start button click");
    startScreen.classList.add('hidden');
    inputScreen.classList.remove('hidden');
});

console.log("Start button is:", startButton);


submitButton.addEventListener('click', () => {
    console.log("submit button click");
    inputScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
});

backButton.addEventListener('click', () => {
    console.log("back button click");
    resultScreen.classList.add('hidden');
    inputScreen.classList.remove('hidden');
    document.getElementById('type1').innerHTML = "";
    document.getElementById('type2').innerHTML = "";
    document.getElementById('pic').src ='';
});

//Minimize Event Listeners
startMinimize.addEventListener('click', () => {
    window.windowAPI.minimize();
});

inputMinimize.addEventListener('click', () => {
    window.windowAPI.minimize();
});

resultMinimize.addEventListener('click', () => {
    window.windowAPI.minimize();
});

//Close Event Listeners
startClose.addEventListener('click', () => {
    window.windowAPI.close();
});

inputClose.addEventListener('click', () => {
    window.windowAPI.close();
});

resultClose.addEventListener('click', () => {
    window.windowAPI.close();
});
});