
/*
    1. Implemente um programa em JavaScript que mostre 5 imagens randomicamente 
    (a troca de imagens pode ser implementada por meio de um botão)
*/
function alterarImg(){
    let imagens = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];
    let i = Math.floor(Math.random() * 4); 
    let imagenExibida = imagens[i];

    let imgDOM = document.getElementById("imagensGigantes");
    console.log(imgDOM);

    imgDOM.src = imagenExibida;
}

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Desenvolva um formulário Web com dois campos (e-mail, senha) e um botão.
//  Quando o usuário colocar o foco no campo e-mail a mensagem “Campo para você digitar um e-mail” deve aparacer na tela. 
//  Da mesma forma, quando o usuário colocar o foco no campo senha a mensagem “Campo para você digitar uma senha” deve ser apresentado para o usuário. 
//  Finalmente, quando o usuário pressionar o botão, 
// os valores de e-mail e senha devem ser mostrados na tela por meio de um alert de Javascript.

function selcinarInput(){
    let inputDom = document.getElementById("email");
    console.log(inputDom);
}