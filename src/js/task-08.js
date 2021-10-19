const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);
function handleSubmit (event) {
    event.preventDefault();


    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

     if (email.value === "" || password.value === "") {
        return window.alert('Заполните все поля формы');
     }
    
    const formData = {
        email,
        password,
    };
    
    
    console.log(formData);
  event.currentTarget.reset();
}

