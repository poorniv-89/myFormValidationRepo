const formEl = document.getElementsByTagName('input');
const userNameEl = formEl[0];
const emailEl = formEl[1];
const passwordEl = formEl[2];
const repeatPasswordEl = formEl[3];
emailEl.addEventListener('change', validateEmail);
passwordEl.addEventListener('change', validatePassword);
repeatPasswordEl.addEventListener('change', validateRepeatPassword);
let errorMessEl = document.getElementById('errorDisplay');

function validateEmail(e) {
  
    let userEmail = e.target.value;
    let domain = '';
    let isDomain = false;
    for (let char of userEmail) {
        if (char === '@') {
            isDomain = true;
            continue;
        }
        if (isDomain) {
            domain += char;
        }
    }
    if (domain.toLowerCase() === 'example.com') {
        errorMessEl.style.display = 'block';
        errorMessEl.textContent = 'Domain cannot be example.com';
    }
}

function validatePassword(e) {
    errorMessEl.style.display = 'none';
    const uppercaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const specialCharRegex = /[.*[!@#$%^&*(),.?\":{}|<>]/;
    const numberRegex = /[\d]/;
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    let hasSpecialChar = false;
    let password = e.target.value;
    if (uppercaseRegex.test(password)) {
        hasUpperCase = true;
    }
    if (lowerCaseRegex.test(password)) {
        hasLowerCase = true;
    }
    if (specialCharRegex.test(password)) {
        hasSpecialChar = true;
    }
    if (numberRegex.test(password)) {
        hasNumber = true;
    }
    if (password.toLowerCase() == userNameEl.value.toLowerCase())
    {
        errorMessEl.style.display = 'block';
        errorMessEl.textContent = 'Password scannot be the same as username';
        return;
    }
    if (hasUpperCase && hasLowerCase && hasSpecialChar && hasNumber)
    {
        console.log("Password meets the requirements ")
        errorMessEl.style.display = 'none';
        errorMessEl.textContent = '';
    }
    else
    {
        errorMessEl.style.display = 'block';
        errorMessEl.textContent = 'Password should have atleast 1 uppercase, 1 lowercase, 1 number and 1 special character';
        return;
    }
    }
function validateRepeatPassword(e)
{
    let password = passwordEl.value;
    console.log(password);
    let repeatPassword = e.target.value;
    console.log(repeatPassword);
    if(repeatPassword !== password)
    {
        errorMessEl.style.display = 'block';
        errorMessEl.textContent = 'Passwords should match!';
    }
    else
    {
        errorMessEl.style.display = 'none';
        errorMessEl.textContent = '';
    }
}