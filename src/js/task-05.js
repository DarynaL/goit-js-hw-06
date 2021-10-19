const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener("input", onInputChange);

function onInputChange(event) {
    if (nameInput.value === "") {return nameOutput.textContent = "Anonymous"
    };
    return nameOutput.textContent = event.currentTarget.value;
  
}