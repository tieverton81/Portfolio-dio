var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

let adicionar = document.querySelector('#adicionar');
let subtrair = document.querySelector('#subtrair');

adicionar.addEventListener('click', (increment));
subtrair.addEventListener('click', (decrement));






function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0 ) {
        subtrair.disabled = false;
    }
     
    
}


function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber <= 0 ) {
            subtrair.disabled = true;
    } else {
        subtrair.disabled = false;
    }
}

