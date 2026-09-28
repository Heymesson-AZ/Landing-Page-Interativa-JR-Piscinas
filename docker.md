# 🐳 Guia de Docker e Deploy - JM Piscinas

Este projeto possui configuração completa com **Docker** e **Nginx**, pronto para testes em ambiente idêntico ao de produção ou deploy em servidores na nuvem (VPS, AWS, DigitalOcean, Railway, etc.).

---

## 🏗️ Como a Containerização Funciona

O projeto utiliza um **Dockerfile Multi-Stage**:
1. **Estágio Base:** Utiliza a imagem oficial `node:22-alpine` para instalar dependências.
2. **Estágio Build:** Executa o `npm run build` compilando os arquivos JSX e processando o CSS com Tailwind v4.
3. **Estágio Produção:** Imagem ultraleve do servidor web `nginx:alpine` que recebe os arquivos estáticos prontos de `/dist` e os entrega na porta `80`.

---

## 🚀 Comandos Rápidos

Certifique-se de que o **Docker Desktop** esteja aberto no seu Windows:

```bash
# 1. Construir e subir o container em segundo plano (http://localhost:3000)
npm run docker:up

# 2. Ver logs em tempo real do Nginx
npm run docker:logs

# 3. Encerrar e remover o container
npm run docker:down
```

---

## ⚙️ Arquivos de Configuração

- [`Dockerfile`](Dockerfile): Define o processo de compilação e a imagem final do Nginx.
- [`docker-compose.yml`](docker-compose.yml): Orquestra o container `jr-piscinas-prod` mapeando a porta `3000` (máquina local) para a porta `80` (container Nginx).
- [`nginx.conf`](nginx.conf): Habilita compressão Gzip, roteamento SPA (`try_files`) e cache com `immutable` para arquivos estáticos com hash.
- [`.dockerignore`](.dockerignore): Ignora `node_modules`, `.git` e artefatos de build para acelerar o processo.