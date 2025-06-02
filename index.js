let indahName = 'Indah';
let age = 27;
let isMarried = "No";
const fullInfo = `My name is ${indahName}, I am ${age} years old. Am I married? ${isMarried}. I love spending time with Ali and building our future together.`;

let AliName = 'Ali';
let AliAge = 27;
let AliIsMarried = "No";
const AliInfo = `My name is ${AliName}, I am ${AliAge} years old. Am I married? ${AliIsMarried}. I'm working hard to achieve my goals before marrying the love of my life, Indah.`;

function Indah() {
    document.getElementById('descripe').innerHTML = fullInfo;
}

function Ali() {
    document.getElementById('descripe').innerHTML = AliInfo;
}