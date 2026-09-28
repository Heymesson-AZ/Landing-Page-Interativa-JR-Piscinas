# 1. Base compartilhada com Node.js
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./

# 2. Estágio de Desenvolvimento (utilizado pelo docker-compose.dev.yml)
FROM base AS development
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# 3. Estágio de Build (Compila os arquivos para produção)
FROM base AS build
RUN npm install
COPY . .
RUN npm run build

# 4. Estágio de Produção final (Nginx leve para deploy e execução em produção)
FROM nginx:alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
