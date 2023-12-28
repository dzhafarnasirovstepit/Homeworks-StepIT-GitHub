// 24h time format

/^([01]\d|2[0-3]):[0-5]\d$/

    | // phone number of Azerbaijan

    /^\(\+994\)[ -]?(40|50|51|55|70|77)[ -]?\d{2}[ -]?\d{2}[ -]?\d{2}$/

// input

document.getElementById('passwordInput').addEventListener('input', function () {

    const filteredWordsArray = wordsArray.filter(function (word) {
        return word !== '';
    });

    const password = this.value;

    const isValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%&_])(?=.*\d)(?=.*[!?.,]).{8,16}$/.test(password);

    console.log(isValid);
});

// task 4

const originalString1 = "Hello123World456";
const replacedString1 = originalString1.replace(/\d/g, 'D');

console.log(replacedString1);

// task 5

const originalString2 = "Hello 123 World 456";
const replacedString2 = originalString2.replace(/\d+/g, 'N');

// task 6

const inputString = "Hello    World! What's    up?";

const wordsArray = inputString.split(/\s+/);