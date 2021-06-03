"use strict";

var button = document.getElementById('input-button');
button.addEventListener('click', inputProcessing);
var findMinMaxButton = document.getElementById('find-digit');
findMinMaxButton.addEventListener('click', function () {
  findMinMax(digits);
});
var summButton = document.getElementById('digitsSumm');
summButton.addEventListener('click', function () {
  superSum(digit1, digit2);
});
var changeButton = document.getElementById('change');
changeButton.addEventListener('click', function () {
  changeVariables(a, b);
});
var findMaxButton = document.getElementById('findMax');
findMaxButton.addEventListener('click', function () {
  findMax(digits);
});
var digit1 = document.getElementById('digit1').value;
var digit2 = document.getElementById('digit2').value;
var John = {
  name: "John",
  age: 30
};
var Peter = {
  name: "Peter",
  age: 25
};
var Alex = {
  name: "Alex",
  age: 28
};
var digits = [6, 1, 3, 4, 2, 7, 8, 9, 5];
var users = [John, Peter, Alex];

function inputProcessing() {
  var inputData = document.getElementById('input-field').value;
  console.log(inputData.toLowerCase());

  if (inputData.toLowerCase() === 'google') {
    setTimeout(function () {
      return alert('Yandex круче. Но это не точно.');
    }, 3000);
  }
}

function superSum(digit1, digit2) {
  alert(Number(digit1) + Number(digit2));
}

function findMinMax(paramArray) {
  var minDigit = paramArray[0];
  var maxDigit = paramArray[0];

  for (var index = 0; index < paramArray.length; index++) {
    if (minDigit > paramArray[index]) {
      minDigit = paramArray[index];
    }

    ;

    if (maxDigit < paramArray[index]) {
      maxDigit = paramArray[index];
    }

    ;
  }

  alert('min = ' + minDigit);
  alert('max = ' + maxDigit);
}

var a = document.getElementById('variable1').value;
var b = document.getElementById('variable2').value;

function changeVariables(a, b) {
  var x = a.length;
  a = a + b;
  b = a.slice(0, x);
  a = a.slice(x, a.length);
  console.log('a' + a);
  console.log('b' + b);
  alert('a = ' + a + '; b = ' + b);
}

function findMax(paramArray) {
  var maxDigit = paramArray[0];

  for (var index = 0; index < paramArray.length; index++) {
    if (maxDigit < paramArray[index]) {
      maxDigit = paramArray[index];
    }
  }

  alert('Max: ' + maxDigit);
}