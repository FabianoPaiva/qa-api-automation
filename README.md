# 🧪 QA API Automation with TypeScript

Projeto de automação de testes de API REST desenvolvida em **TypeScript**, seguindo boas práticas de Garantia de Qualidade (QA), tipagem estrita para validação de contrato (*Schema Validation*), verificação de *Status Codes* HTTP e observabilidade com métricas de tempo de resposta.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (v5+)
- **Runtime Executável:** [Node.js](https://nodejs.org/) (v18+)
- **Execução TS em Desenvolvimento:** [tsx](https://github.com/privatenumber/tsx)
- **API Pública para Testes:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18.0.0 ou superior)
- **npm** (gerenciador de pacotes do Node)

Você pode verificar se possui os pré-requisitos instalados rodando no terminal:
```bash
node -v
npm -v
```

---

## 🚀 Passo a Passo para Criação e Configuração do Projeto

Caso esteja configurando o projeto do zero, siga as instruções abaixo:

### 1. Inicializar o Projeto
```bash
mkdir qa-api-automation
cd qa-api-automation
npm init -y
```

### 2. Instalar as Dependências de Desenvolvimento
```bash
npm install -D typescript tsx @types/node
```

### 3. Configurar o TypeScript (`tsconfig.json`)
Crie o arquivo `tsconfig.json` na raiz do projeto com o seguinte conteúdo:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

### 4. Configurar os Scripts no `package.json`
Adicione o script de teste ao seu `package.json`:

```json
{
  "name": "qa-api-automation",
  "version": "1.0.0",
  "description": "Projeto de testes automatizados de API com TypeScript",
  "type": "module",
  "scripts": {
    "test:api": "tsx src/get-post.test.ts",
    "build": "tsc"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "tsx": "^4.0.0",
    "typescript": "^5.0.0"
  }
}
```

---

## 📁 Estrutura de Diretórios

```text
qa-api-automation/
├── dist/                  # Código JavaScript compilado (após npm run build)
├── src/
│   └── get-post.test.ts   # Script de teste e requisição da API
├── package.json           # Dependências e scripts do projeto
├── tsconfig.json          # Configurações do compilador TypeScript
└── README.md              # Documentação do projeto
```

---

## 💻 Como Executar o Projeto

### 1. Clonar/Baixar e Instalar Dependências
Se você baixou este repositório, instale todas as dependências rodando:

```bash
npm install
```

### 2. Executar os Testes da API
Para rodar a suíte de testes da requisição GET:

```bash
npm run test:api
```

### 3. Compilar o Código para Produção (Opcional)
Para compilar o código TypeScript para JavaScript na pasta `./dist`:

```bash
npm run build
```

---

## 📊 Saída Esperada no Terminal

Ao executar `npm run test:api`, você deverá visualizar um log formatado semelhante ao exemplo abaixo:

```text
[QA Automation] Iniciando requisição GET para: https://jsonplaceholder.typicode.com/posts/1
[QA Metric] Status Code recebido: 200 (OK) | Tempo de resposta: 142ms
[QA Assertion Passed] Contrato validado com sucesso! Dados íntegros.
┌─────────┬──────────────────────────────────┐
│ (index) │ Values                           │
├─────────┼──────────────────────────────────┤
│ ID      │ 1                                │
│ UserId  │ 1                                │
│ Title   │ 'sunt aut facere repellat pro...'│
└─────────┴──────────────────────────────────┘
```

---

## 🎯 Boas Práticas de QA Implementadas

1. **Validação Estrita de Contrato (Type Assertions):** Garantia em tempo de execução de que os campos do payload correspondem aos tipos definidos no TypeScript.
2. **Métricas de Performance:** Medição do tempo de resposta da API para monitorar a latência da requisição.
3. **Tratamento de Exceções:** Blocos `try/catch` para captura de falhas de rede e formatação de logs de erro amigáveis.
4. **Asserção de Status Code:** Validação explícita de retorno HTTP 200 OK antes do processamento dos dados.