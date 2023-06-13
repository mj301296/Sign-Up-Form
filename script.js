const confirm = document.querySelector(`#confirm_password`);

function matchPassword(){
    const password = document.querySelector(`#password`);
    console.log(password.value);
    if(this.value !== password.value)
        this.classList.add(`focus`);
    else
    this.classList.remove(`focus`);
}

confirm.addEventListener('input', matchPassword);