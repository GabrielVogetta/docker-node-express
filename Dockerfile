# Especifica a versão do Node para aplicação
FROM node:24

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# replace this with your application's default port
EXPOSE 3000

# Rodar aplicação com expressjs
CMD ["node", "index.js"]

# Como buildar e rodar?
## Para buildar e gerar imagem
   ### docker build -t my-nodejs-app .
## Para rodar
   ### docker run -it --rm -p 3000:3000 --name my-running-app my-nodejs-app 