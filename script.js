console.log("Javascript is running");

const startScreen = document.getElementById('start-screen');
const inputScreen = document.getElementById('input-screen');
const resultScreen = document.getElementById('result-screen');

const startButton = document.getElementById('start');
const submitButton = document.getElementById('submit');
const backButton = document.getElementById('back');

startButton.addEventListener('click', () => {
    console.log("start button click");
    startScreen.classList.add('hidden');
    inputScreen.classList.remove('hidden');
});

submitButton.addEventListener('click', () => {
    console.log("submit button click");
    inputScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
});

backButton.addEventListener('click', () => {
    console.log("back button click");
    resultScreen.classList.add('hidden');
    inputScreen.classList.remove('hidden');
});
