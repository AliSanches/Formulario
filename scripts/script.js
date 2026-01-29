const btn = document.querySelector('#btn');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const birthday = document.querySelector('#birthday');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const rpassword = document.querySelector('#rpassword');

const cVa1 = document.querySelector('#v-fname');    // firstName
const cVa2 = document.querySelector('#v-flast');    // lastName
const cVa3 = document.querySelector('#v-birth');    // birthday
const cVa4 = document.querySelector('#v-mail');     // email
const cVa5 = document.querySelector('#v-pass');     // password
const cVa6 = document.querySelector('#v-rpass');    // rpassword

function captureValue(inp) {
    inp.addEventListener('input', (event) => {
        
        console.log(event.target.value);
        return event.target.value;
    });
}

const validInf = async () => {
    if (firstName === '') {
        cVa1.classList.add('cl-red');
        cVa1.innerHTML('Nome invalido!');         
    }

    if (lastName === '') {

    }

    if (birthday === '') {

    }

    if (birthday === '') {
        
    }

    if (email === '') {

    }

    if (password === '') {

    }

    if (rpassword === '') {

    } 
}

btn.addEventListener('click', validInf);