const tela = document.getElementById("tela");

function mostrarNaTela(input){
    tela.value += input;
}

function limparTela() {
    tela.value = "";
}

function calcular() {
    const calculo = math.evaluate(tela.value);

}

