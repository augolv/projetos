let inputDia= document.querySelector('#dia');
let inputMes= document.querySelector('#mes');
let inputAno= document.querySelector('#ano');

document.addEventListener('input', (event) => {
    console.log(event.target.valueAsNumber);
    inputDia= event.target.valueAsNumber;
})

const resultadoDia= document.querySelector('#resultado-dias');
const resultadoMes= document.querySelector('#resultado-meses');
const resultadoAno= document.querySelector('#resultado-anos');
const diaAtual= new Date().getDate();
const mesAtual= new Date().getMonth() + 1;
const anoAtual= new Date().getFullYear();
const botao= document.querySelector('.botao');
const dataNascimento= new Date(`${Number(inputAno.value)}-${Number(inputMes.value)}-${Number(inputDia.value)} `);

function calcularIdade(){
    
    let idade = anoAtual - Number(inputAno.value);

    if(mesAtual < Number(inputMes.value) || mesAtual === Number(inputMes.value) && diaAtual < Number(inputDia.value)){
        resultadoAno.textContent= `${idade - 1}`
        resultadoMes.textContent=   12
        resultadoDia.textContent= diaAtual
    }
}

botao.addEventListener("click", calcularIdade);