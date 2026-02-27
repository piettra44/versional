// Selecionando o botão via JS (Vamos usar ID "MyButton")
// const button = document.getElementById('myButton');
const button = document.querySelector('#myButton');


// Selecionando o texto via JS (Vamos usar ID "MyText")
const text = document.getElementById('myText');

// Adicionando um "ouvinte" de evento para disparar uma ação (Colocar o mause em cima)
button.addEventListener('mouseover', () => {
    // Troca o texto para "Olá, Mundo!"
    text.textContent = 'Olá, Mundo!';
})

// Adicionando um "ouvinte" de evento para disparar uma ação (Tirar o mause de cima)
button.addEventListener('mouseout', () => {
    // Troca o texto para "Texto inicial"
    text.textContent = 'Texto inicial';
})

// Adicionando um "ouvinte" de evento para disparar uma ação (Click duplo)
button.addEventListener('dblclick', () => {
    // Troca o texto para "O mundo está acabando!"
    text.textContent = 'O mundo está acabando!';
})