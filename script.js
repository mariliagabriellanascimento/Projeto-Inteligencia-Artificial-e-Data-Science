const carrossel = document.querySelector(".carrossel-interno-login");
const itensCarrossel = document.querySelectorAll(".item-carrossel-login");
let indiceAtualCarrossel = 0; // Posição inicial no carrossel

function moverCarrossel() {
    // Esconde todos os itens
    itensCarrossel.forEach(item => {
        item.style.display = 'none';
    });

    // Exibe o item atual
    itensCarrossel[indiceAtualCarrossel].style.display = 'block';
}

// Botões de navegação
const botaoAnterior = document.querySelector(".carrossel-login-anterior");
const botaoProximo = document.querySelector(".carrossel-login-proximo");

// Função de navegação
if (botaoAnterior && botaoProximo) {
    botaoAnterior.addEventListener("click", () => {
        indiceAtualCarrossel--;
        if (indiceAtualCarrossel < 0) {
            indiceAtualCarrossel = itensCarrossel.length - 1; // Volta para o último item
        }
        moverCarrossel();
    });

    botaoProximo.addEventListener("click", () => {
        indiceAtualCarrossel++;
        if (indiceAtualCarrossel >= itensCarrossel.length) {
            indiceAtualCarrossel = 0; // Volta para o primeiro item
        }
        moverCarrossel();
    });
}

// Inicializar carrossel quando a página carregar
document.addEventListener("DOMContentLoaded", function () {
    moverCarrossel(); // Exibe o primeiro item
});
