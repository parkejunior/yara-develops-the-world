# Colorswitche (Improved)

## Shortcut icon

Umas das primeiras coisas que notei no código HTML, tanto nesse exercício, quanto no Train Counter, é que você usa o a tag `<link>` com `rel="shortcut icon"`. Sinceramente eu ainda não tinha visto esse padrão, então fui procurar um pouquinho. Isso foi o que encontrei nos forums:

>Warning: The shortcut link type is often seen before icon, but this link type is non-conforming, ignored and web authors must not use it anymore. 
>[Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)

Fonte: [https://stackoverflow.com/a/44124060](https://stackoverflow.com/a/44124060)

O *shortcut* era usado por navegadores mais antigos, como o IE. Sabendo disso então removi o *shortcut*.


## Espaços em branco na *index.html*

Para melhor leitura do código, removi alguns espaços em branco e arrumei a tabulação da tag `<script>`.


## Index.html

Por padrão, se você só tem um único arquivo HTML dentro do projeto, é melhor manter o nome dele como *index.html* mesmo ao invés do nome do projeto. Isso ajuda inclusive o navegador encontrar o arquivo HTML que o projeto é, já que o *index.html* é o arquivo padrão para os navegadores. Renomeei o arquivo, antes como *colorswitche.html* para *index.html*.


## `getElementById` ?

Esse eu vou te dizer que achei engraçado :sweat_smile:. Mas não se preocupe, não é nada de mais também. Acontece que você "pegou" o elemento `input#blue`, adicionou na variavel `back1`, e não fez mais nada com ele. Ele literalmente não faz nada, então o removi.


## Apenas `document.`

Você não precisa usar o objeto `window.` antes do `document.`, apenas escrever algo como `document.getElementById()` já irá funcionar.

Referência: [JavaScript Window - W3Schools](https://www.w3schools.com/js/js_window.asp)


## Use `<button>`

Se lembra o motivo do Guanabara ensinar usar a tag `<strong>` no lugar da tag `<s>` ? Aqui é quase a mesma coisa.


Além do fato que é muito mais agradável ler `<button></button>` ao invés de `<input type="button">`, com a tag `<button>` você consegue adicionar HTML dentro do botão. Por exemplo, imagine que você queira que dentro do mesmo botão tenha 2 textos com cores diferentes. Ficaria algo assim:


```html
<button>
    <div style="color: red;">Texto vermelho</div>
    <div style="color: blue;">Texto azul</div>
</button>
```


Nesse exemplo você conseguiria ver os dois texto em cores diferentes dentro do botão. Com o `<input type="button">`, você não conseguiria esse resultado, já que você não pode passar HTML para o atributo `value`. Apenas seria possível com uma gambiarra usando JavaScript.


>Note: While `<input>` elements of type button are still perfectly valid HTML, the newer `<button>` element is now the favored way to create buttons. Given that a `<button>`’s label text is inserted between the opening and closing tags, you can include HTML in the label, even images.

Referência: [\<input type="button"> - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button)


## Espacamentos no *style.css*

Para melhor leitura do código, removi a tabulação das declarações pois elas não estão sendo declaradas dentro de outra declaração, então você não precisa tabular elas. Um exemplo é quando usado Scss (Sass), ele nos permite fazer declarações dentro de declarações:

```scss
.btn {
    .btn-blue {

    }
}
```

Nesse caso faz sentido o uso da tabulação para o `.btn-blue`, mas não tem necessidade do `.btn` também estar com tabulação.

Outra coisa (Que até meu VSCode fez sozinho) é adicionar um espaço entre o seletor e a declaração. Isso é uma das [boas práticas](https://google.github.io/styleguide/htmlcssguide.html#Declaration_Block_Separation) para melhor leitura. Então ao invés de:

```css
.btn{
    /**/
}
```

Ficaria assim:
```css
.btn {
    /**/
}
```

Outra coisa que meu VSCode fez é mudar de 4 para 2 espaços para as tabulações. Isso não é regra, nem da pra chamar de boas práticas, já que isso é puro gosto pessoal. Eu particularmente uso 2 espaços mais com JavaScript, e com PHP eu uso 4, e outros devs usam o oposto que eu. 

Você não tem que se preocupar com isso, apenas com a constância. Se você usar 4 espaços, então use 4 espaços ate o final do seu arquivo. Se você usar 2, use 2 espaços ate o final do seu arquivo. 