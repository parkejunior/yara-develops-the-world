# Time of the day (Improved)

## *img/* folder

[*commit #9dc5908*](https://github.com/parkejunior/yara-develops-the-world/commit/9dc590863541370b3d2c73654eeea05b1b5b7f9a)

Por questão de organização, coloquei as imagens dentro da pasta *img*.

## *index.html* is better

Como os projetos estão sempre separadinhos, cada um na sua pasta, o melhor mesmo é sempre manter o arquivo HTML principal como `index.html`, então eu renomeei de `modelo.html` para `index.html`. Não só pelo padrão, mas também é mais fácil do navegador encontrar o arquivo.

## `<figure>` tag

Sabe `<img>` que você usa para colocar a sua imagem de "greeting"? Em volta dele tinha um `<div id="foto">` que eu sinceramente acho que fica bem anti-semântico, então eu coloquei um `<figure>` no lugar.

## UI Placeholders

Se lembra que um tempo atras eu te mostrei uma função nova do Bootstrap 5 que acrescenta [placeholders](https://getbootstrap.com/docs/5.1/components/placeholders/) que são aquelas partes cinzas onde o conteúdo vai ser carregado? 

Bem, eu acho um elemento UI extremamente util hoje em dia com o carregamento assincrono das coisas em uma página, então eu resolvi adiciona-lo também.

Basicamente fiz duas *divs* com a classe `.time-placeholder` que basicamente recebe uma cor cinza de fundo, a borda arredondada, e uma animação para ficar piscando como se estivesse carregando.


## Function `changeTime`

Outra coisa que você pode ter notado é que eu mudei a função `carregar` para `changeTime`. Acho que *changeTime* fica mais explicativo do que apenas carregar.

Note que no changeTime eu coloquei para receber um parametro chamado `date` que pode ser a data e hora o qual você quer que seja definida, ao invés de pegar a data e hora atual. 


## Function `autoUpdateTime`

Essa função é extremamente simples, mas extremamente util para seu exemplo. Basicamente ela executa o `changeTime` e depois executa o `setTimeout()` depois de 1 segundo (1000 ms) que chama ela propria novamente. Basicamente isso é um loop de 1 segundo para verificar a hora atual.


## Function `twoDigits`

Essa é uma função privada, basicamente ela arredonda os numeros para dois numerais (Ao invés da hora aparecer como *5:2:0* aparece como *05:02:00*).

## Object *timer*

Basicamente eu criei uma função auto-invocada que retorna um objeto que é passado para a constante `timer`.

**Mas por que não criar um objeto direto para a constante `timer` assim:?**

```js
const timer = {
    changeTime() {
        // ...
    }
    autoUpdateTime() {
        // ...
    }
    twoDigits() {
        // ...
    }
}
```

Bom, é bem simples: porque eu não quero que a função `twoDigits` seja acessada de fora. 

Quando eu uso uma função auto-invocada para criar um objeto eu posso criar quantas funções, variáveis, constantes, etc. eu quiser, mas se eu não retornar essas funções, elas não poderão ser acessadas de fora do timer. Isso quer dizer que se eu fizer algo assim:

```js 
const timer = (function() {
    var variavelPrivada = ''
    const constantePrivada = ''
    
    function changeTime() {
        // ...
    }

    function autoUpdateTime() {
        // ...
    }

    function twoDigits() {
        // ...
    }

    function outraFuncao() {

    }
    
    return {
        changeTime,
        autoUpdateTime
    }
})()
```

Basicamente, eu estarei criando um objeto que será passado para timer apenas com as funções `changeTime` e `autoUpdateTime`, e todo o resto não ficará acessível. 

## setTimeout no *index.html*

Você também deve ter notado que coloquei um `setTimeout` no `index.html`. Na verdade, ele é apenas para simular um carregamento mais demorado da página, então ele finge estar carregando por 2 segundos (2000 ms) e depois executa o que tem que executar.


## Document ready

Notei que você colocou na tag `<body>` um evento de `onload`. Na realidade não usamos mais evento de onload dessa forma, já que muitas vezes usamos no lugar a função `addEventListener`. Porém no seu exercicio, não há nada muito pesado que precise usar necessariamente o `onload` para esperar o `body` ficar pronto, então não há necessidade de colocar `onload` neste caso.

Mas acho importante te passar como fazemos isso de uma maneira mais "moderna".

No jQuery, temos uma função chamada `$(document).ready()`, onde passamos uma função como parametro para a função `ready()` que vai ser executada quando o nosso DOM terminar de carregar. Por exemplo:

```js
$(document).ready(function() {
    // executar qualquer coisa que vai ser executado 
    // assim que o DOM terminar de carregar
})
```

No javaScript nativo tem uma forma até mais simples de fazer essa mesma função. Ela funciona assim:

```js
(function() {
    // executar qualquer coisa assim que o navegador 
    // encontrar a essa função e estiver pronto para 
    // executar JavaScript
})()
```

Basicamente esse código cria uma função anonima e a executa assim que ela for lida pelo navegador.

Tecnicamente o `$(document).ready` é bem mais eficiente do que usar a função de auto-invocação já que ele utiliza vários recursos do navegador para saber se todo o DOM já foi carregado mesmo ou não, mas para isso você precisa ter o jQuery.

Porém, se você colocar os seus códigos javaScript no final do seu arquivo HTML, antes do `</body>`, o navegador já terá carregado o seu DOM, já que ele lê um documento HTML de cima para baixo.

Note que eu mesmo nem precisei acrescentar a função de auto-invocação no arquivo HTML, já que os scripts já se encontram no final do arquivo, porém você pode usar a função de auto-invocação sempre que quiser deixar seu código menos "global".