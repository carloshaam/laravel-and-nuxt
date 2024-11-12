# Utilizar a imagem Node.js
FROM node:18

# Definir o diretório de trabalho
WORKDIR /app

# Instalar dependências do Nuxt.js
COPY package*.json ./
RUN npm install

# Copiar código fonte
COPY . .

# Expor a porta padrão do Nuxt.js
EXPOSE 3000

# Iniciar o servidor de desenvolvimento Nuxt.js
CMD ["npm", "run", "dev", "--", "-o"]
