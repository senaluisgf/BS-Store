# Use a imagem base
FROM node:20-alpine

# Instala o cliente MySQL para usar no script de espera (Ajuste conforme necessário)
# RUN apk add --no-cache mysql-client

# Define o diretório de trabalho
WORKDIR /app

# Copia o script de espera para o container
# COPY wait-for-db.sh /wait-for-db.sh
# RUN chmod +x /wait-for-db.sh

# Copia os arquivos do projeto e instala as dependências
COPY package.json ./
RUN npm install

COPY . .

# Modifica o comando para usar o script de espera
# CMD ["npm", "start"]
CMD ["sh", "start.sh"]
