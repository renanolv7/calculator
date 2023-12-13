let valorTela = "";
let valorAnterior = "";
let operacao = "";
let operacaoPendente = false;

function insert(numero) {
    valorTela += numero;
    document.getElementById("tela").value = valorTela;
}

function click_sinal(operador) {
    if (valorTela) {
        if (!operacaoPendente) {
            valorAnterior = valorTela;
        } else {
            // Se já houver uma operação pendente, execute a operação
            executa_igual();
        }

        operacao = operador;
        valorTela = "";
        operacaoPendente = true;
        document.getElementById("tela").value = valorTela;
    }
}

function executa_igual() {
    if (valorTela && operacaoPendente) {
        let resultado;

        switch (operacao) {
            case "+":
                resultado = parseFloat(valorAnterior) + parseFloat(valorTela);
                break;
            case "-":
                resultado = parseFloat(valorAnterior) - parseFloat(valorTela);
                break;
            case "*":
                resultado = parseFloat(valorAnterior) * parseFloat(valorTela);
                break;
            case "/":
                resultado = parseFloat(valorAnterior) / parseFloat(valorTela);
                break;

            default:
                break;
        }

        valorTela = resultado.toString(); // Atualizar valorTela com o resultado
        operacao = "";
        valorAnterior = valorTela; // Atualizar valorAnterior para a próxima operação
        operacaoPendente = false;
        document.getElementById("tela").value = valorTela;;
    }
}


function reset() {
    valorTela = "";
    valorAnterior = "";
    operacao = "";
    operacaoPendente = false;
    document.getElementById("tela").value = valorTela;
}