// Pega o botão pelo ID "botaomudar" e guarda numa variável chamada botao
let botao = document.getElementById("botaomudar");

// Pega o parágrafo pelo ID "mensagem" para podermos mudar o texto dele
let texto = document.getElementById("mensagem");

// Adiciona um "escutador" para quando o botão for clicado
botao.addEventListener("click", function() {
    // Quando o botão for clicado, muda o texto do parágrafo
    texto.innerText = "O texto mudou!";

    // Muda a cor do texto para roxo escuro
    texto.style.color = "#9400d3";
});
