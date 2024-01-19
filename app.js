let secretNumber = 0;
let attempts = 0;
let listDrawnNumbers = [];
let maxNumber = 10;



function assignTextElement(element, text) {
    let elementoHTML = document.querySelector(element);
    elementoHTML.innerHTML = text;
    return;
}

function checkAttempt() {
    let userNumber = parseInt(document.getElementById('userValue').value);
    
    if (userNumber === secretNumber) {
        assignTextElement('p',`Correct! You guessed the number in ${attempts} ${(attempts === 1) ? 'attempt' : 'attempts'}`);
        document.getElementById('restart').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (userNumber > secretNumber) {
            assignTextElement('p','The secret number is lower');
        } else {
            assignTextElement('p','The secret number is higher');
        }
        attempts++;
        clearBox();
    }
    return;
}

function clearBox() {
    document.querySelector('#userValue').value = '';
}

function generateSecretNumber() {
    let generatedNumber =  Math.floor(Math.random()*maxNumber)+1;

    console.log(generatedNumber);
    console.log(listDrawnNumbers);
    //Si ya sorteamos todos los números
    if (listDrawnNumbers.length == maxNumber) {
        assignTextElement('p','All possible numbers have already been drawn');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listDrawnNumbers.includes(generatedNumber)) {
            return generateSecretNumber();
        } else {
            listDrawnNumbers.push(generatedNumber);
            return generatedNumber;
        }
    }
}

function initialConditions() {
    assignTextElement('h1','Secret Number\nThe Game!');
    assignTextElement('p',`Enter a number from 1 to ${maxNumber}.`);
    secretNumber = generateSecretNumber();
    attempts = 1;
    console.log(secretNumber);
}

function resetGame() {
    //limpiar caja
    clearBox();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    initialConditions();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#restart').setAttribute('disabled','true');
    
}

initialConditions();