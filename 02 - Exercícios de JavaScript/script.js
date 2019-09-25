/*
    1) Escreva um código em JS que consiga recuperar os valores dos atributos hreflang, rel e href
*/

function getAttributes(){
    let importaHref = document.getElementById("w3r");

    let atributoHREFLANG = importaHref.getAttribute("hreflang");
    console.log(atributoHREFLANG);

    let atributoREL = importaHref.getAttribute("rel");
    console.log(atributoREL);

    let atributoHREF = importaHref.getAttribute("href");
    console.log(atributoHREF);
}

///////////////////////////////////////////////////////////////////

/*
3) Desenvolva um formulário dinâmico utilizando DOM que simule uma tela de pagamento. 
       O formulário deve conter um campo de selectonde o usuário escolhe um tipo de pagamento: dinheiro, cheque ou cartão. 
       
       Se o usuário selecionar a opção de dinheiro, 
       somente um campo de inputpara o usuário preencher o valor deve ser apresentado. 
       
       Porém, se o usuário escolher cheque, os campos valor, número do cheque e data do vencimentos devem ser mostrados. 
       
       Finalmente, se o usuário escolher a opção de pagamento por meio de cartão, 
       os campos de valor e código da operação devem ser apresentados
*/

function fSeleciona(valor){

  var divCamposPagamento = document.getElementById("camposPagamento");
  var inputValor = document.createElement("input");
  var labelText = document.createElement("input");

  switch(valor) {
      case "dinheiro":
        divCamposPagamento = ''
        divCamposPagamento = document.getElementById("camposPagamento");
        inputValor = document.createElement("input");
        divCamposPagamento.append(inputValor);
        break;

      case "cheque":       
        var inputNumeroCheq = document.createElement("input");
        var inputDataVenc = document.createElement("input");

        divCamposPagamento.append(inputValor);
        divCamposPagamento.append(inputNumeroCheq);
        divCamposPagamento.append(inputDataVenc);
        break;

      case "cartao":
        var inputCodOper = document.createElement("input");

        divCamposPagamento.append(inputValor);
        divCamposPagamento.append(inputCodOper);

        break;

      default:
          console.log("ERROU")
  }
}