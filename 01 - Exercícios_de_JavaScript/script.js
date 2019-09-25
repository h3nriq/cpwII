
//exercicio 1
function exibealerta(){
    let textField = document.getElementById("idCampoTexto");
    alert(textField.value.length);
}
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//exercicio 2
var somaTotal = 0;
function somaNumero(){
    let numeroDigitado = document.getElementById("idSoma");
    var numeroRecebido = parseInt(numeroDigitado.value);
    
    alert(somaTotal += numeroRecebido);

    if(numeroRecebido === 0){
        alert("Reiniciando o processo...")
        somaTotal = 0; 
    }
}
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//exercicio 3
function pesoNormativo(){
    let inputAltura = document.getElementById("altura");
    let altura = parseFloat(inputAltura.value);
    let pesoNormativo;
    let radioGenero = document.getElementsByName("genero");
    
    for (let i = 0; i < radioGenero.length; i++){
        if(radioGenero[i].checked){
           var genero = radioGenero[i].value;
        }
    }
    switch (genero) {
        case '0':{
            pesoNormativo =  (72.7 * altura) - 58;
            let mensagem = `A sociedade diz que teu peso como homem deve ser: ${pesoNormativo}`;
            alert(mensagem);
        } 
        break;
        case '1000':{
            pesoNormativo =  (62.1* altura) - 44.7;
            let mensagem = `O patriarcado diz que teu peso de MULHER deve ser: ${pesoNormativo}`;
            alert(mensagem);
        }
        break;
    }
}
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//exercicio 4

function legenda(){
    alert('Eu sou Akpena...')
}