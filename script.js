
const userName = document.getElementById('userName');
const userPassword = document.getElementById('user-password');
const form = document.getElementById('form');
const errorElement = documdnt.getElementById('error');

form.addEventListener('login-button', (e) => {

    let messages = [];
    if(userName.value === '' || userName.value == null) {
        messages.push('Name is required!');
    }
    if(messages.lenght > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }
});



