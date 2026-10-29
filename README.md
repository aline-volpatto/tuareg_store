# Tuareg Store

Aplicação de comércio eletrônico desenvolvida em React como projeto avaliativo final do Módulo 2 – Front-End React do programa SCTEC, do SENAI/SC.

A aplicação simula a jornada de compra completa da loja da TUAREG: vitrine de produtos, página de detalhe, carrinho, pagamento e resultado da compra. O projeto dá continuidade ao mini projeto de checkout desenvolvido durante o módulo.

> **Aviso:** este é um projeto acadêmico. A aplicação não é uma loja real e não realiza vendas. Nenhum dado de pagamento é enviado ou armazenado. A marca TUAREG é utilizada com autorização do proprietário. Os produtos oficiais estão disponíveis na [loja oficial da TUAREG](https://reserva.ink/usetuareg).

## Sumário

- [Links](#links)
- [Funcionalidades](#funcionalidades)
- [Funcionalidades adicionais](#funcionalidades-adicionais)
- [Tecnologias](#tecnologias)
- [Execução local](#execução-local)
- [Scripts](#scripts)
- [Testes](#testes)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Rotas](#rotas)
- [Acessibilidade](#acessibilidade)
- [Fluxo de trabalho](#fluxo-de-trabalho)
- [Créditos](#créditos)
- [Autoria](#autoria)

## Links

| Recurso | Endereço |
|---|---|
| Aplicação publicada | [tuareg-store.netlify.app](https://tuareg-store.netlify.app) |
| Quadro do projeto (Trello) | [Quadro no Trello](https://trello.com/b/BzcbxSxB) |
| Vídeo de apresentação | [Assistir no Google Drive](https://drive.google.com/file/d/1XOFFvB-pshVqYzuzoPAxVxbjkXQfUgg8/view?usp=sharing) |

## Funcionalidades

- Listagem de produtos com tratamento dos estados de carregamento, erro e lista vazia
- Página de detalhe do produto, com tratamento de produto inexistente
- Busca de produtos por nome
- Carrinho com inclusão, remoção e alteração de quantidade, limitada ao estoque disponível
- Cálculo do valor total e contador de itens no cabeçalho
- Formulário de pagamento com validação por esquema (React Hook Form e Zod)
- Simulação de processamento do pagamento, com páginas de compra aprovada e recusada
- Rota de pagamento protegida, acessível somente com itens no carrinho
- Rota de compra aprovada protegida, garantindo que o carrinho seja esvaziado apenas após uma compra concluída
- Página personalizada para rotas inexistentes
- Layout responsivo, desenvolvido com abordagem mobile first

## Funcionalidades adicionais

| Funcionalidade | Descrição |
|---|---|
| Carrinho persistente | Os itens do carrinho são armazenados no `localStorage` e preservados após o recarregamento da página. |
| Busca sincronizada com a URL | O termo de busca é mantido na query string por meio do `useSearchParams`, permitindo compartilhar e recarregar a pesquisa. |
| Debounce na busca | O hook `useDebounce` adia a filtragem até que o usuário conclua a digitação. |
| Filtro e ordenação | Filtro por categoria e ordenação por preço ou nome, ambos mantidos na URL. |
| Tema escuro | Alternância entre os temas claro e escuro com Context API, respeitando a preferência do sistema operacional e preservando a escolha do usuário. |
| Teste de componente | Testes do componente `CampoBusca` com Testing Library, incluindo a verificação do rótulo acessível. |
| Indicador de carregamento | Atraso simulado nas requisições e indicador animado exibido durante o carregamento dos dados. |

## Tecnologias

| Tecnologia | Finalidade |
|---|---|
| [React](https://react.dev/) e [Vite](https://vite.dev/) | Biblioteca de interface e ferramenta de build |
| [React Router](https://reactrouter.com/) | Roteamento e parâmetros de URL |
| Context API | Estado global do carrinho e do tema |
| [React Hook Form](https://react-hook-form.com/) e [Zod](https://zod.dev/) | Gerenciamento e validação do formulário de pagamento |
| [Material UI](https://mui.com/) | Componentes de interface (botões e indicador de quantidade) |
| CSS Modules | Estilização com escopo por componente |
| PropTypes | Validação das propriedades dos componentes |
| [json-server](https://github.com/typicode/json-server) | API REST local (uso opcional) |
| [Vitest](https://vitest.dev/) e [Testing Library](https://testing-library.com/) | Testes unitários e de componente |

### Bibliotecas adicionais

As bibliotecas abaixo não constam na lista sugerida e foram incluídas pelos motivos descritos:

| Biblioteca | Justificativa |
|---|---|
| `@emotion/react` e `@emotion/styled` | Dependências obrigatórias do Material UI, que utiliza o Emotion como motor de estilização dos seus componentes. |
| `@testing-library/dom` | Dependência obrigatória (peer dependency) do `@testing-library/react` a partir da versão 16. |
| `jsdom` | Fornece um ambiente de navegador simulado (`document` e `window`) ao Vitest, necessário para renderizar componentes nos testes. É ativado apenas no arquivo de teste de componente. |

## Execução local

### Pré-requisitos

- Node.js 20.19 ou superior
- npm

### Instalação

```bash
git clone https://github.com/aline-volpatto/tuareg_store.git
cd tuareg_store
npm install
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Utilização do json-server (opcional)

Por padrão, a aplicação lê os produtos diretamente do arquivo `db.json`, o que permite a publicação sem servidor de API. Para utilizar a API local:

1. Crie o arquivo `.env.local` na raiz do projeto, com base no `.env.example`:

   ```
   VITE_USAR_JSON_SERVER=true
   ```

2. Inicie a API em um terminal:

   ```bash
   npm run api
   ```

3. Inicie a aplicação em outro terminal:

   ```bash
   npm run dev
   ```

A API estará disponível em `http://localhost:3001/produtos`.

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist` |
| `npm run preview` | Serve localmente a versão de produção |
| `npm run lint` | Executa a análise estática do código com ESLint |
| `npm test` | Executa os testes com Vitest |
| `npm run api` | Inicia o json-server na porta 3001 |

## Testes

```bash
npm test
```

| Escopo | Localização | Cobertura |
|---|---|---|
| Funções utilitárias | `src/utils/__tests__` | Formatação de moeda, busca, cálculos do carrinho, filtro por categoria e ordenação |
| Componente | `src/components/__tests__` | `CampoBusca`: rótulo acessível, valor controlado e disparo da função de alteração |

## Estrutura do projeto

Os componentes estão organizados segundo a metodologia Atomic Design:

```
src/
├── assets/            Logotipos da marca
├── components/
│   ├── atoms/         Elementos básicos (CampoBusca, Carregando, BotaoTema)
│   ├── molecules/     Composições de átomos (ProdutoCard, ItemCarrinho, FiltroProdutos)
│   ├── organisms/     Blocos de interface (Header, Footer, ListaProdutos)
│   ├── templates/     Estruturas de página (Layout, PaginaMensagem)
│   └── __tests__/     Testes de componentes
├── contexts/          Contextos do carrinho e do tema
├── hooks/             Hooks personalizados
├── pages/             Páginas associadas às rotas
├── routes/            Proteção de rotas
├── services/          Comunicação com a API
└── utils/             Funções puras e respectivos testes
```

## Rotas

| Rota | Página | Observação |
|---|---|---|
| `/produtos` | Listagem de produtos | Busca, filtro e ordenação via query string |
| `/produtos/:id` | Detalhe do produto | |
| `/carrinho` | Carrinho | |
| `/pagamento` | Pagamento | Protegida: exige itens no carrinho |
| `/sucesso` | Compra aprovada | Protegida: exige compra concluída |
| `/falha` | Compra recusada | |
| `*` | Página não encontrada | |

## Acessibilidade

- Estrutura HTML semântica, idioma definido como `pt-BR` e hierarquia de títulos consistente
- Rótulos associados aos campos e mensagens de erro anunciadas com `aria-invalid`, `aria-describedby` e `role="alert"`
- Estados de carregamento anunciados com `role="status"` e `aria-live`
- Botões de ícone com `aria-label` descritivo e elementos decorativos ocultos com `aria-hidden`
- Indicador de foco visível para navegação por teclado
- Redução de animações para usuários com `prefers-reduced-motion`
- Contraste preservado nos temas claro e escuro

## Fluxo de trabalho

- Modelo de branches baseado no Git Flow: `main`, `develop` e branches de trabalho com prefixos `feature/`, `fix/`, `refactor/`, `test/` e `docs/`
- Integração na `develop` por meio de Pull Requests, com commits pequenos e descritivos
- Planejamento no Trello, com um cartão por branch contendo descrição e lista de atividades

## Créditos

- Marca, logotipos e estampas: TUAREG, utilizados com autorização do proprietário
- Imagens dos produtos: loja oficial da TUAREG na plataforma Reserva
- Dados dos produtos (`db.json`): adaptados para fins acadêmicos

## Autoria

Desenvolvido por **Aline Volpatto**.

[GitHub](https://github.com/aline-volpatto) · [LinkedIn](https://www.linkedin.com/in/aline-volpatto-95b991294)