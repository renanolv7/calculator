let valorTela = "";
let valorAnterior = "";
let operacao = "";
let operacaoPendente = false;

function insert(numero) {
    valorTela += numero;
    document.getElementById("tela").value = valorTela;
}

function click_sinal(operador) {
    if (valorTela && !operacaoPendente) {
        valorAnterior = valorTela;
        operacao = operador;
        valorTela = "";
        operacaoPendente = true;
        document.getElementById("tela").value = valorTela;
    }
}

function executa_igual() {
    if (valorTela && operacaoPendente) {
        valorTela = eval(`${parseFloat(valorAnterior)} ${operacao} ${parseFloat(valorTela)}`);
        operacao = "";
        valorAnterior = "";
        operacaoPendente = false;
        document.getElementById("tela").value = valorTela;
    }
}

function reset() {
    valorTela = "";
    valorAnterior = "";
    operacao = "";
    operacaoPendente = false;
    document.getElementById("tela").value = valorTela;
}