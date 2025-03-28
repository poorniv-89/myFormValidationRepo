const formEl = document.getElementsByTagName('input');
formEl[1].addEventListener('change',validateEmail);
let errorMessEl = document.getElementById('errorDisplay');

function validateEmail(e)
{
    let userEmail = e.target.value;
    let domain ='';
    let isDomain = false;
    for (let char of userEmail)
    {
        console.log(char);
        if(char ==='@')
        {
            isDomain = true;
            continue;
        }
        if(isDomain)
        {
            domain += char;
        }
    }
    if (domain.toLowerCase() === 'example.com')
    {
        errorMessEl.style.display='block';
        errorMessEl.textContent = 'Domain cannot be example.com';
    }
}