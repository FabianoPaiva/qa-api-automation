/**
 * Interface que representa o contrato esperado da resposta da API (Contrato de Dados).
 */
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/**
 * Função utilitária para validar o contrato (Schema Validation) dos dados recebidos.
 */
function validatePostContract(data: unknown): asserts data is Post {
  if (!data || typeof data !== 'object') {
    throw new Error('[QA Failure] A resposta da API não é um objeto válido.');
  }

  const post = data as Record<string, unknown>;

  if (typeof post.userId !== 'number' || 
      typeof post.id !== 'number' || 
      typeof post.title !== 'string' || 
      typeof post.body !== 'string') {
    throw new Error('[QA Contract Violation] O schema do payload difere do esperado!');
  }
}

/**
 * Executa a requisição GET para a API pública de testes.
 * @param id ID do post a ser buscado.
 */
async function testGetPostApi(id: number): Promise<void> {
  const endpoint = `https://jsonplaceholder.typicode.com/posts/${id}`;
  
  console.info(`[QA Automation] Iniciando requisição GET para: ${endpoint}`);

  try {
    const startTime = performance.now();
    const response = await fetch(endpoint);
    const duration = Math.round(performance.now() - startTime);

    // 1. Validação de Status Code HTTP
    console.info(`[QA Metric] Status Code recebido: ${response.status} (${response.statusText}) | Tempo de resposta: ${duration}ms`);

    if (response.status !== 200) {
      console.error(`[QA Assertion Failed] Esperado status 200, mas obteve ${response.status}.`);
      return;
    }

    // 2. Extração do JSON
    const responseBody: unknown = await response.json();

    // 3. Validação de Contrato (Schema)
    validatePostContract(responseBody);
    console.info('[QA Assertion Passed] Contrato validado com sucesso! Dados íntegros.');

    // 4. Exibição do resultado simulando um log de testes
    console.table({
      ID: responseBody.id,
      UserId: responseBody.userId,
      Title: responseBody.title.substring(0, 30) + '...'
    });

  } catch (error) {
    if (error instanceof Error) {
      console.error(`[QA Test Error] Falha na execução do teste de API: ${error.message}`);
    } else {
      console.error('[QA Test Error] Erro desconhecido ocorreu.', error);
    }
  }
}

// Execução da suíte de teste simulada
(async () => {
  await testGetPostApi(1);
})();