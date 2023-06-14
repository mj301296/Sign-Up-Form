const confirm = document.querySelector(`#confirm_password`);
const submit = document.querySelector(`.submit_btn`);

function matchPassword(){
    const password = document.querySelector(`#password`);
    console.log(password.value);
    if(this.value !== password.value){
        this.style.border = `solid`;
        this.style.borderColor = `red`;
        this.classList.add(`focus`);
        submit.disabled= `true`;
    }
    else{
        console.log(`match`)
    this.classList.remove(`focus`);
    this.style.border = `hidden`;
    submit.removeAttribute("disabled");
    }
}

confirm.addEventListener('input', matchPassword);