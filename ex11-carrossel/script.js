// Seleciona todos os slides e os botões de navegação
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentSlide = 0; // Índice do slide atual
let autoSlideInterval; // Variável para armazenar o intervalo de transição automática

// Função para exibir um slide específico
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index); // Adiciona a classe "active" ao slide atual e remove dos outros
  });
}

// Função para avançar para o próximo slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Incrementa o índice e volta ao início se ultrapassar o número de slides
  showSlide(currentSlide); // Exibe o slide atual
}

// Função para voltar ao slide anterior
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Decrementa o índice e volta ao final se for menor que zero
  showSlide(currentSlide); // Exibe o slide atual
}


// Função para iniciar a transição automática de slides
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos
}

// Função para parar a transição automática de slides
function stopAutoSlide() {
  clearInterval(autoSlideInterval); // Limpa o intervalo
}

// Adiciona um evento de clique ao botão "Anterior"
prevButton.addEventListener('click', () => {
  prevSlide(); // Exibe o slide anterior
  stopAutoSlide(); // Pausa a transição automática
  startAutoSlide(); // Reinicia a transição automática
});


// Adiciona um evento de clique ao botão "Próximo"
nextButton.addEventListener('click', () => {
  nextSlide(); // Exibe o próximo slide
  stopAutoSlide(); // Pausa a transição automática
  startAutoSlide(); // Reinicia a transição automática
});

// Inicializa o carrossel com a primeira imagem visível
showSlide(currentSlide); // Exibe o slide inicial
startAutoSlide(); // Inicia a transição automática de slides

