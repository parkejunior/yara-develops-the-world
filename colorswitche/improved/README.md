# Colorswitche (Improved)

## Shortcut icon

Umas das primeiras coisas que notei no código HTML, tanto nesse exercício, quanto no Train Counter, é que você usa o a tag `<link>` com `rel="shortcut icon"`. Sinceramente eu ainda não tinha visto esse padrão, então fui procurar um pouquinho. Isso foi o que encontrei nos forums:

>Warning: The shortcut link type is often seen before icon, but this link type is non-conforming, ignored and web authors must not use it anymore. 
>[Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)

Fonte: [https://stackoverflow.com/a/44124060](https://stackoverflow.com/a/44124060)

O *shortcut* era usado por navegadores mais antigos, como o IE. Sabendo disso então removi o *shortcut*.


## Espaços em branco

Para melhor leitura do código, removi alguns espaços em branco e arrumei a tabulação da tag `<script>`.


## Index.html

Por padrão, se você só tem um único arquivo HTML dentro do projeto, é melhor manter o nome dele como *index.html* mesmo ao invés do nome do projeto. Isso ajuda inclusive o navegador encontrar o arquivo HTML que o projeto é, já que o *index.html* é o arquivo padrão para os navegadores. Renomeei o arquivo, antes como *colorswitche.html* para *index.html*.


## `getElementById` ?

Esse eu vou te dizer que achei engraçado :sweat_smile:. Mas não se preocupe, não é nada de mais também. Acontece que você "pegou" o elemento `input#blue`, adicionou na variavel `back1`, e não fez mais nada com ele. Ele literalmente não faz nada, então o removi.


## Apenas `document.`

Você não precisa usar o objeto `window.` antes do `document.`, apenas escrever algo como `document.getElementById()` já irá funcionar.

Referência: [JavaScript Window - W3Schools](https://www.w3schools.com/js/js_window.asp)