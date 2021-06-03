let button = document.getElementById('input-button');
button.addEventListener('click', inputProcessing);

let findMinMaxButton = document.getElementById('find-digit');
findMinMaxButton.addEventListener('click', function () {
    findMinMax(digits);
});


let summButton = document.getElementById('digitsSumm');
summButton.addEventListener('click', function () {
    superSum(digit1, digit2);
})

let changeButton = document.getElementById('change');
changeButton.addEventListener('click', function () {
    changeVariables(a, b);
})

let findMaxButton = document.getElementById('findMax');
findMaxButton.addEventListener('click', function () {
    findMax(digits);
})

let digit1 = document.getElementById('digit1').value;
let digit2 = document.getElementById('digit2').value;

let John = {
    name: "John",
    age: 30
};

let Peter = {
    name: "Peter",
    age: 25
};

let Alex = {
    name: "Alex",
    age: 28
};

let digits = [6, 1, 3, 4, 2, 7, 8, 9, 5];

let users = [John, Peter, Alex];

function inputProcessing() {
    let inputData = document.getElementById('input-field').value;
    console.log(inputData.toLowerCase());

    if (inputData.toLowerCase() === 'google') {
        setTimeout(() => alert('Yandex круче. Но это не точно.'), 3000);
    }
}

function superSum(digit1, digit2) {
    alert(Number(digit1) + Number(digit2));
}

function findMinMax(paramArray) {
    let minDigit = paramArray[0];
    let maxDigit = paramArray[0];
    for (let index = 0; index < paramArray.length; index++) {
        if (minDigit > paramArray[index]) {
            minDigit = paramArray[index]
        };
        if (maxDigit < paramArray[index]) {
            maxDigit = paramArray[index]
        };
    }
    alert('min = ' + minDigit);
    alert('max = ' + maxDigit);
}

let a = document.getElementById('variable1').value;
let b = document.getElementById('variable2').value;

function changeVariables(a, b) {
    let x = a.length;
    a = a + b;
    b = a.slice(0, x);
    a = a.slice(x, a.length);
    console.log('a' + a);
    console.log('b' + b);

    alert('a = ' + a + '; b = ' + b);
}

function findMax(paramArray) {
    let maxDigit = paramArray[0];
    for (let index = 0; index < paramArray.length; index++) {
        if (maxDigit < paramArray[index]) {
            maxDigit = paramArray[index];
        }
    }
    alert('Max: ' + maxDigit);
}