function validarForm(){
    
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    const nomeErro = document.getElementById('erro-nome');
    const emailErro = document.getElementById('erro-email');
    const senhaErro = document.getElementById('erro-senha');

    nomeErro.textContent = '';
    emailErro.textContent = '';
    senhaErro.textContent = '';



    let eValido = true

    if(nome.value.trim() === ''){
        nomeErro.textContent = 'Por favor, insira seu nome.'
        eValido = false;
    }

    const emailValido =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim() === ''){
     emailErro.textContent = 'Por favor, insira seu e-mail'
     eValido = false
    }else if(!emailValido.test(email.value)){
        emailErro.textContent = 'Por favor, insira um email válido'
        eValido = false
    }

    if(senha.value.length < 6){
        senhaErro.textContent = 'A senha deve ter no mínimo 6 caracteres'
        eValido = false
    }

    return eValido

}

const form = document.getElementById('form')

form.addEventListener('submit', (event) =>{
    event.preventDefault();


    if(validarForm()){
        alert('Formulário enviado com sucesso!')
        form.reset()
    }
})


//Menu mobile

let btnMenu = document.getElementById('btn-menu-mobile');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

