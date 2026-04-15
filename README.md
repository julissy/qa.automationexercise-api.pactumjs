# qa.automationexercise-api.pactumjs

Este projeto utiliza [pactumJS](https://pactumjs.github.io/) para automação de testes na aplicação [ServeRest](https://serverest.dev/), com uma arquitetura moderna em **TypeScript**.

## Tecnologias Utilizadas

- **[pactumJS](https://pactumjs.github.io/):** Framework principal para automação de testes de API.
- **[TypeScript](https://www.typescriptlang.org/):** Linguagem para desenvolvimento type-safe.
- **[Chai](https://www.chaijs.com/):** Biblioteca de assertions para validação de respostas.
- **[mocha](https://mochajs.org/):** Framework de execução dos testes.
- **[mochawesome](https://www.npmjs.com/package/mochawesome):** Gerador de relatórios dos testes.
- **[tsx](https://tsx.is/):** Executor TypeScript nativo.

## Estrutura do Projeto

```
src/
├── core/              # Configurações principais
├── dataBuilder/       # Construtores de dados para testes
├── enum/              # Enumerações TypeScript
├── interface/         # Interfaces TypeScript
├── serverestDev/
│   ├── data/          # Dados de teste (createUser.data.ts)
│   ├── schemas/       # Schemas de validação
│   └── test/user/     # Testes de usuário (CT01.test.ts, etc)
├── service/           # Serviços de requisições
└── utils/
    ├── headers.ts     # Utilidades de headers
    ├── specs.ts       # Especificações reutilizáveis
    └── constants.ts   # Constantes da aplicação
```

## Requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- [npm](https://www.npmjs.com/) (normalmente já incluso com o Node.js)

## Como instalar e executar o projeto

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/julissy/qa.automationexercise-api.pactumjs.git
   cd qa.automationexercise-api.pactumjs
   ```

2. **Instale as dependências necessárias:**
   ```bash
   npm install
   ```

3. **Execute testes específicos:**
   ```bash
   npm run ct01
   ```
   Isso irá executar o teste `CT01.test.ts` localizado em `./src/serverestDev/test/user/` utilizando TypeScript, tsx e Mocha, gerando relatório com Mochawesome.

4. **Visualize o relatório dos testes:**
   Após a execução dos testes, abra o relatório HTML gerado:
   ```bash
   npm run report:open
   ```
   Isso abrirá automaticamente o arquivo `mochawesome-report/mochawesome.html` no navegador padrão.

## Exemplos

- Testes estruturados em TypeScript com type-safety
- Validação de respostas com Chai assertions
- Organização modular com services, builders e utilities
- Criação dinâmica de usuários com dataBuilder
- Relatórios visuais de resultados dos testes