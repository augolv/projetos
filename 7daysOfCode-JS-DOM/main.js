const botao= document.querySelector("#salvar");

function handleClick(event){
    const name= document.getElementById('name').value;
    const birthDate= document.getElementById('birth-date').value;

    
    console.log(name);
    console.log(birthDate);
}

botao.addEventListener('click', handleClick);