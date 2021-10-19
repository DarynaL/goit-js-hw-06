const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(sizeControl);
console.log(text);
function fontSizeChanger(event) {
    text.style.fontSize = event.currentTarget.value + 'px';

}

sizeControl.addEventListener('input', fontSizeChanger);
