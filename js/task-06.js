const input = document.querySelector('#validation-input');
const dataLength = parseInt(input.getAttribute('data-length'));
console.log(dataLength);




function checkQuantity () {
    if (input.value.length === dataLength) {
        input.classList.add('valid');
       input.classList.remove('invalid');
    }
    else {input.classList.add('invalid');
        input.classList.remove('valid');
    }
    
}

input.addEventListener('blur', checkQuantity);