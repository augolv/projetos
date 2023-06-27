const diaNascimento = document.querySelector('#dia');
const mesNascimento = document.querySelector('#mes');
const anoNascimento = document.querySelector('#ano');
const botao = document.querySelector('.botao')

function handlleClick() {
    if (diaNascimento && mesNascimento && anoNascimento) {

        const nascimento = new Date(anoNascimento.value, mesNascimento.value - 1, diaNascimento.value)
        const agora = new Date();
        
        console.log(agora, nascimento);
    } else {
        throw 'Dados Inválidos'
    }
}

botao.addEventListener('click', handlleClick);