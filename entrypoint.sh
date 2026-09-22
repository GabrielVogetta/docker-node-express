#!/bin/sh

# Sobe a API em background
node index.js &
SERVER_PID=$!

# Aguarda a API inicializar
sleep 10

# Executa seus testes para http://localhost:3000
node ./tests/test1.js &
node ./tests/test2.js &
node ./tests/test3.js &
node ./tests/test4.js &
node ./tests/test5.js

# Encerra o servidor ao finalizar
kill $SERVER_PID