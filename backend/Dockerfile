# Use uma imagem Node.js como base
FROM node:14-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o resto dos arquivos para o contêiner
COPY . .

# Expõe a porta 3001
EXPOSE 3001

# Comando para iniciar o servidor
CMD ["npm", "start"]
