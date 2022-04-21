const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

const userList = document.querySelector('#users');
const btn1= document.querySelector('#btn1');
const password = document.querySelector('#password');
var verify1 = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
myForm.addEventListener('submit', onSubmit);
var i=2;
function onSubmit(e) {
    if(password.value.length<=8 || !password.value.match(verify1)){
            const msg2 = document.createElement("text");
        
        msg2.classList.add("error");
            msg.appendChild(msg2);
        msg2.innerText = 'Enter Valid password';
    
        setTimeout(() => msg2.remove(), 3000);
    }
    else{
    const li = document.createElement('li');
    const text = document.createTextNode(`${nameInput.value}: ${emailInput.value}`);
    li.appendChild(text);
    userList.appendChild(li); 
    nameInput.value = '';
    emailInput.value = '';
    password.value = '';}
}
