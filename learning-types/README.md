# Learning Types
Exemplo do uso de Data Types (string, integer, float, object...) no PHP e Typescript e a ausência no JavaScript. 

## Types in PHP
Exemplos de tipagem em PHP. 
*Necessário PHP instalado

Para executar os scripts você precisa rodas os comandos no seu terminal:
```sh
php correct.php

php wrong.php
```

## Types in Javascript
Exemplos de tipagem em Javascript com `Node.js`. 
*Necessário Node.js instalado

Para executar os scripts você precisa rodas os comandos no seu terminal:
```sh
node example.js
```


## Types in Typescript
Exemplos de tipagem em Typescript com `tsc`. 
*Necessário Node.js instalado

Primeiro, é necessário instalar as dependências do `npm`:
```sh
npm ci
```

Para executar os códigos Typescript com o Node.js ou nos navegadores é necessário compilar os scripts para JavaScript. Você pode compilar utilizando o comando `tsc`:
```sh
tsc *.ts --module es6 --outDir dist
```

Caso não esteja com o typescript instalado globalmente na maquina você pode executar o `tsc` utilizando o `npx`:
```sh
npx tsc *.ts --module es6 --outDir dist
```

Depois executar o comando para compilar os scripts para JavaScript, serão gerados os mesmo arquivos `.ts` mas com extensão `.js` dentro da pasta *dist/*.

Para executar os scripts você precisa rodas os comandos no seu terminal:
```sh
node dist/correct.js

node dist/correct.js
```