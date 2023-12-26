const socialLinks = document.getElementById('socialLinks');
const socialLinksItems = socialLinks.getElementsByTagName('li');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function handleMouseOver(event) {
    event.target.style.color = getRandomColor();
}

function handleClick(event) {
    event.preventDefault();
    alert('Link clicked: ' + event.target.dataset.href);
}

for (const item of socialLinksItems) {
    item.addEventListener('mouseover', handleMouseOver);
    item.addEventListener('click', handleClick);
}

const showNumbersButton = document.getElementById('showNumbersButton');

for (let i = 1; i <= 10; i++) {
    showNumbersButton.addEventListener('click', function () {
        console.log(i);
    });
}

function getValidNumber() {
    let userInput;
    do {
        userInput = prompt('Введите число от 1 до 10:');
    } while (!isValidNumber(userInput));

    return parseInt(userInput);
}

function isValidNumber(value) {
    const parsedValue = parseInt(value);
    return !isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 10;
}

showNumbersButton.addEventListener('click', function () {
    const selectedNumber = getValidNumber();

    for (let i = 1; i <= selectedNumber; i++) {
        alert(i);
    }
});
