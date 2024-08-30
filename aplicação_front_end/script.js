// Seleciona os elementos do DOM
const button = document.getElementById('showMessageButton');
const message = document.getElementById('message');

// Adiciona o evento de clique ao botão
button.addEventListener('click', () => {
    // Mostra a mensagem quando o botão é clicado
    message.style.display = 'block';
});
