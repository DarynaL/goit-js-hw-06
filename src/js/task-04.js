const decrementButton = document.querySelector('button[data-action="decrement"]');
console.log(decrementButton.dataset.action);

const incrementButton = document.querySelector('button[data-action="increment"]');
console.log(incrementButton.dataset.action);

const valueEl = document.querySelector('#value');

let counterValue = 0;


const increment = () => {
    counterValue += 1;
    return valueEl.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    return valueEl.textContent = counterValue;
};

incrementButton.addEventListener('click', increment);

decrementButton.addEventListener('click', decrement);