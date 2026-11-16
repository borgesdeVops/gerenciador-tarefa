# Gerenciador de Tarefas

Aplicação feita em React para gerenciar tarefas do dia a dia. Dá para adicionar tarefas, marcá-las como concluídas e filtrar a lista por status.

## Funcionalidades

- Adicionar tarefas por um campo de texto e um botão
- Marcar tarefas como concluídas com uma caixa de seleção (checkbox)
- Filtrar a lista por status: Todas, Concluídas e Pendentes
- Estado global compartilhado entre os componentes com Context API

## Tecnologias

- React 18
- Vite
- JavaScript (JSX)
- CSS

## Estrutura do projeto

```
src/
├── App.jsx                     # Tela principal (input, botões e filtros)
├── App.css                     # Estilos
├── main.jsx                    # Ponto de entrada da aplicação
├── context/
│   └── TarefasContext.jsx      # Estado global (tarefas e filtro)
└── components/
    ├── ListaDeTarefas.jsx      # Lista as tarefas de acordo com o filtro
    └── Tarefa.jsx              # Uma tarefa com checkbox
```

## Conceitos praticados

- Criação de componentes reutilizáveis
- `useState` para o estado local e para o estado global
- `useContext` com `createContext` para compartilhar dados entre componentes
- Atualização de estado de forma imutável (spread e `map`)
- Eventos (`onClick`, `onChange`) e renderização de listas com `key`

## Como executar

Pré-requisitos: [Node.js](https://nodejs.org/) e [Yarn](https://yarnpkg.com/) instalados.

```bash
# clone o repositório
git clone <url-do-repositorio>

# entre na pasta
cd gerenciador-de-tarefas

# instale as dependências
yarn

# inicie o servidor de desenvolvimento
yarn dev
```

Depois, abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Scripts

| Comando | O que faz |
|---|---|
| `yarn dev` | Inicia o servidor de desenvolvimento |
| `yarn build` | Gera a versão de produção na pasta `dist` |
| `yarn preview` | Visualiza a versão de produção localmente |
