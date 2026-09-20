# Estrutura de Pastas em Projetos React

O React não impõe uma estrutura de pastas rígida, mas a comunidade adotou convenções que ajudam a manter o código organizado, escalável e fácil de dar manutenção. 

Para a maioria dos projetos modernos, a estrutura ideal baseada em boas práticas segue este formato:

```text
meu-projeto-react/
├── public/                 
│   ├── favicon.ico
│   └── index.html          
├── src/                    
│   ├── assets/             
│   ├── components/         
│   ├── contexts/           
│   ├── hooks/              
│   ├── pages/              
│   ├── services/           
│   ├── styles/             
│   ├── utils/              
│   ├── App.jsx             
│   └── main.jsx            
├── .gitignore
├── package.json            
└── vite.config.js          
```

## O que vai em cada pasta?

### A raiz do projeto
*   **`public/`**: Contém arquivos estáticos que não passam pelo processamento (bundler) do projeto. O `index.html` principal vive aqui, além de favicons.
*   **`package.json`**: Lista todas as dependências (bibliotecas) instaladas e os scripts para rodar ou "buildar" o projeto.

### A pasta principal: `src/` (Source)
É aqui que a maior parte do código-fonte da aplicação fica.

*   **`assets/`**: Imagens, ícones (SVGs), fontes e mídias globais que são importadas diretamente dentro dos seus componentes.
*   **`components/`**: Peças de interface genéricas e reutilizáveis (que não gerenciam regras de negócio complexas). Exemplos: `Button`, `Header`, `Modal`, `Input`.
*   **`pages/` (ou `views/`)**: Componentes que representam uma tela ou rota inteira da aplicação. Uma página geralmente agrupa vários arquivos da pasta `components/`. Exemplos: `Home`, `Login`, `Dashboard`.
*   **`services/` (ou `api/`)**: Arquivos responsáveis por comunicar com APIs ou banco de dados. Aqui ficam as requisições (Fetch/Axios) e endpoints.
*   **`hooks/`**: Onde você guarda seus Custom Hooks (funções reutilizáveis do React). Exemplo: `useAuth` ou `useWindowSize`.
*   **`contexts/` (ou `store/`)**: Arquivos de gerenciamento de estado global da aplicação (Context API, Redux, Zustand). Onde dados como informações de usuário e temas são armazenados.
*   **`utils/` (ou `helpers/`)**: Funções JavaScript genéricas e puras para tarefas de apoio. Exemplos: formatação de data, validação de e-mail, conversões.
*   **`styles/`**: Estilos globais (CSS, SCSS) ou arquivos de configuração do seu framework de estilização.
*   **`App.jsx`**: O componente raiz principal, frequentemente usado para definir as rotas do projeto.
*   **`main.jsx` (ou `index.js`)**: O ponto de entrada que renderiza o `App.jsx` dentro do `index.html` (DOM).

---

### Dica Avançada: Arquitetura Baseada em Features
Para projetos muito grandes, é comum agrupar os arquivos por funcionalidade em uma pasta `features/`. 
Por exemplo: `features/auth/` conteria seus próprios componentes, hooks e serviços exclusivamente relacionados à autenticação do sistema.