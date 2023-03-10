const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm(){
  // Using constraint Api
  isValid = form.checkValidity();
  if(!isValid){
    message.textContent = 'Please fill out all fields'
    message.style.color = 'red';
    messageContainer.style.border = '1px solid red';
    return;
  }
  if(password1El.value === password2El.value){
    passwordsMatch = true;
    password1El.style.border = '1px solid lime'
    password2El.style.border = '1px solid lime'
  }else{
    passwordsMatch = false;
    message.textContent = 'Passwords do not match'
    message.style.color = 'red';
    messageContainer.style.border = '1px solid red'
    password1El.style.border = '1px solid red'
    password2El.style.border = '1px solid red'
    return;
  }

  if(isValid && passwordsMatch){
    message.textContent = 'Registered successfully'
    message.style.color = 'green'
    messageContainer.style.border = '1px solid lime'
  }
}

function storeFormData(){
  const user = {
    name: form.name.value,
    email: form.email.value,
    website:  form.website.value,
    password: form.password.value,
  }
  // do something with the user data
  console.log(user)
}

function processFormData(e){
  e.preventDefault()
  validateForm()
  if(isValid && passwordsMatch){
    storeFormData() 
  }
}

form.addEventListener('submit', processFormData)