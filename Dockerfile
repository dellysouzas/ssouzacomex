# Etapa 1: Construir o aplicativo
FROM node:20 AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração e dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install --force

# Copia o restante do código-fonte
COPY . .

# Cria a build de produção
RUN npm run build

# Etapa 2: Servir os arquivos estáticos com Nginx
FROM nginx:alpine

# Copia os arquivos de build para o diretório padrão do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia uma configuração personalizada do Nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
