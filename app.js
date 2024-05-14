//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entra 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirtextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    limparCampo();
    if (chute == numeroSecreto) {
        exibirtextoNaTela('h1', 'Acertou Miserável!');
        document.querySelector('button').setAttribute('disabled', true);
        document.getElementById('reiniciar').removeAttribute('disabled');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você precisou de ${tentativas} ${palavraTentativa}!`;
        exibirtextoNaTela('p', mensagemTentativas);
    }else {
        tentativas++
        if (chute > numeroSecreto) {
            exibirtextoNaTela('p', `O número secreto é menor que ${chute}`);
        }else {
            exibirtextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
    }
}

function mensagemInicial(){
    exibirtextoNaTela('h1', 'Jogo do número secreto!');
    exibirtextoNaTela('p', 'Escolha um número entre 1 e 10!');
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.querySelector('button').removeAttribute('disabled');
}

mensagemInicial();