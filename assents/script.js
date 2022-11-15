
/*let alturaa = window.document.getElementById('alturra');
let pesoo = window.document.getElementById('peso')
document.write(peso.inneer)

let imc = alturaa + pesoo;
console.log(pesoo);*/
/*
function clicar (){
    return 2+2;
}
console.log(clicar())*/


const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resul = document.getElementById('resul');

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';
        if( valorIMC < 18.5){
            classificacao = 'abaixo do peso 😬! É recomendado a prática de exercícios físicos 🚴🏽, consuma um pouco mais de calorias de forma saudável 🍓🍉'
        } else if (valorIMC < 25 ){
            classificacao = 'com peso ideal 😌, Parabéns!!!!! mantenha o foco.🤌🏼💪🏽🎯'

        }else if(valorIMC < 30){
            classificacao = 'levemente acima do peso 🤡. É recomendado a prática de exercícios físicos 🚴🏽 ⛹🏼‍♂️.Vamos lá, mantenha o foco que você vai conseguir vestir aquela calça que "teima" em não subir👖'
        }  else if(valorIMC < 35){
            classificacao = 'com obesidade grau 1 🙄! É recomendado a prática de exercícios físicos 🚴🏽 ⛹🏼‍♂️. Na alimentação, diminua o consumo de fast-food 🌭🍔🍟🍕, consuma mais frutas e alimentos ricos em fibras. Na dúvida, procure por um profissional.'
        }else if(valorIMC < 40){
            classificacao = 'com obesidade grau 2 🚨🚨! É recomendado a prática de exercícios físicos 🚴🏽 ⛹🏼‍♂️. Você precisará fazer uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista👩🏼‍⚕️ e consultar um médico especialista (endócrino 👨🏽‍⚕️🩺)'
        }else {
            classificacao = 'com obesidade grau 3. Cuidado🚨🚨🚨🚨👨🏽‍⚕️🩺!! Em casos extremos, como aqueles de obesidade mórbida e grau 3, o médico especialista pode indicar uma cirurgia bariátrica (ou gastroplastia) como tratamento para o excesso de peso'
        }

        resul.textContent = ` ${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
    }else{
        resul.textContent = 'Preencha todos os campo!!'
    }


    


}

calcular.addEventListener('click', imc);



