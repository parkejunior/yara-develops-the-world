# Yara Develops the World
Aqui está armazenado os excercícios e projetinhos feitos por Yara enquanto ela aprende ser uma das melhores em código!

## [Harry Potter Quiz](harry-potter-quiz)
Pequena página de um Quiz sobre Harry Potter, onde o usuário pode ver as respostas ao passar o mouse sobre um determinado trecho.  

Código original criado em *[index.html](harry-potter-quiz/index.html)*. Modificações estão no arquivo *[index-melhorado.html](harry-potter-quiz/index-melhorado.html)* onde fiz algumas melhorias no código para melhor legibilidade e organização. Algumas das mudanças são:

- Remoção dos `font-family` em várias propriedades do mesmo elemento
- Definição do elemento `<div id="main">` como `<main>`
- Remoção da propriedade `height` no `.card`
- Troca da propriedade `width` por `max-width` no `.card`
- Correção da tabulação
- Organização dos `@import` no inicio do `<style>`
- Nomeação de várias classes para melhor leitura

## [Train Counter](train-counter)
Página que contem um contador para o usuário clicar no botão toda vez que um passageiro entrar dentro do trem em ordem de saber o numero total de passageiros sem ter que contá-los.
Essa página foi criada usando o evento `onclick` para saber cada vez que o usuário clicou no botão.
Essa página tem uma função que incrementa `1+` cada vez que o usuário preciona novamente o botão.


## [Color Wheel Switche](colorswitche)
Página criada com o intuito de exercitar os conceitos sobre DOM. A página possui diversos botões que quando clicados mudam as cores do background da página. Nesse exercício foi usado `getElementById()` para acessar o id elementos que queriamos acessar. 


**Versão melhorada com documentação das modificações:**
[Colorswitche (Improved)](colorswitche/improved)


## [Learning Sass 2.0](learning-sass-2.0)
Básico do pré-processador Sass. 
- Exemplos de usos do Sass para criação de botões e textos coloridos.
- Exemplos de uso de Variables, Nesting, Import, Partials e Modules definidos no [guia do Sass](https://sass-lang.com/guide).
- Documentação para instalação e uso do Sass

## [Time of the day](time-of-day)
Página para mostrar a hora atual, com cor baseada no momento do dia e uma imagem com mensagem de saudações que varia dependendo do horário do dia.

**Versão melhorada com documentação das modificações:**
[Time of the day (Improved)](time-of-day/improved)

Algumas das modificações são:

- Organização do código
- Adiciona placeholders de carregamento
- Adiciona função para simular carregamento mais demorado da página
- Adiciona função para auto atualizar a hora a cada segundo
- Adiciona pequena transição quando troca o momento do dia
- Corrige o valor inteiro para exibir dois numerais quando tiver zero

## [Parallax Fixed](parallax-fixed)
Dois exemplos de Parallax com fundo fixado: 
1. Exemplo de Parallax com `height` do tamanho do conteúdo.
2. Exemplo de Parallax com `height` do tamanho do viewport usando a unidade de medida `vh`.
