// Constantes
const inputCep = document.querySelector('#cep');
const btnBuscar = document.querySelector('#buscar');
const resultadoDiv = document.querySelector('#resultado');
const button = document.querySelector('#myButton');
const body = document.body;
const titulo = document.querySelector('#titulo');

const texto = "Busque seu Endereço";
let i = 0;

function escrever() {
  if(i < texto.length){
    titulo.innerHTML += texto.charAt(i);
    i++;
    setTimeout(escrever, 80);
  }
}

escrever();

// Verificar se há uma preferência de modo salva no localStorage
    const saveMode = localStorage.getItem('mode');
      if(saveMode === 'dark') {
        // Se o modo escuro estiver salvo, aplica a classe 'dark-mode' e atualiza o texto do botão
        body.classList.add('dark-mode');
        button.textContent = 'Modo Claro';
      }

    // Adiciona um evento de clique ao botão
    button.addEventListener('click', () => {
      // Alterna a classe 'dark-mode' no corpo da página
      body.classList.toggle('dark-mode');

      // Verifica se o modo escuro está ativo e salva a preferência no localStorage
      if(body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
        button.textContent = 'Modo Claro';
      } else {
        localStorage.setItem('mode', 'light');
        button.textContent = 'Modo Escuro';
      }
      });


// Função de clique para o botão de busca
btnBuscar.addEventListener('click', () => {
  const cep = inputCep.value.trim(); // Obtém o valor do CEP e remove espaços em branco 

// Faz a requisição para a API ViaCEP usando fetch
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        // Exibe os resultados da busca
        resultadoDiv.innerHTML = `
          <p><strong>Rua:</strong> ${data.logradouro}</p>
          <p><strong>Complemento:</strong> ${data.complemento}</p>
          <p><strong>Bairro:</strong> ${data.bairro}</p>
          <p><strong>Localidade:</strong> ${data.localidade}</p>
          <p><strong>UF:</strong> ${data.uf}</p>
          <p><strong>DDD:</strong> ${data.ddd}</p>
        `;
      })
      .catch(error => {
        console.error('Erro ao buscar CEP:', error);
        resultadoDiv.innerHTML = '<p>Erro ao buscar CEP. Por favor, tente novamente.</p>';
      });
});





