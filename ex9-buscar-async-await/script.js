// Seleciona o botão de busca e adiciona um evento de clique
document.getElementById("fetchUser").addEventListener("click", async function () {
  // Seleciona o elemento onde os dados do usuário serão exibidos
  const userDataElement = document.getElementById("userData");

  // Bloco try: tenta executar o código assíncrono
  try {

    // Async e await são usados em JavaScript para simplificar o trabalho com código assíncrono.

    // No exemplo:
    // async define funções como assíncronas, permitindo o uso de await.
    // await pausa a execução até que a operação assíncrona (como fetch) seja concluída e retorna o resultado.
    
    // Juntos, tornam o código mais legível, eliminando a necessidade de cadeias complexas de .then() e .catch().

    // Faz a requisição à API usando fetch e espera a resposta (await)
    // const response = await fetch('https://jsonplaceholder.typicode.com/users/5');

    // Verifica se a resposta da API foi bem-sucedida (status 200-299)

    // 1ª Digitação (Aqui)

    // Converte a resposta para JSON e espera o resultado (await)
    

    // Exibe os dados do usuário na página


  } catch (error) {
    // Bloco catch: captura e trata erros que ocorreram no bloco try
    userDataElement.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`; // Exibe a mensagem de erro
    console.error(error); // Exibe o erro no console para debugging
  }
});