const diaNascimento= document.querySelector('#dia');
const mesNascimento= document.querySelector('#mes');
const anoNascimento= document.querySelector('#ano');
const resultadoDia= document.querySelector('#resultado-dias');
const resultadoMes= document.querySelector('#resultado-meses');
const resultadoAno= document.querySelector('#resultado-anos');
const data= new Date();
const diaAtual= data.getDate();
const mesAtual= data.getMonth() + 1;
const anoAtual= data.getFullYear();
const botao= document.querySelector('.botao');

function calcularIdade(){
    let idade = anoAtual - Number(anoNascimento.value);
    console.log(idade);
    if(mesAtual < mesNascimento || mes === mesNascimento && dia < diaNascimento){
        idade--;
        console.log(anoNascimento);
    }
}

botao.addEventListener("click", calcularIdade);