# Colorswitche (Improved)

## Shortcut icon

Umas das primeiras coisas que notei no código HTML, tanto nesse exercício, quanto no Train Counter, é que você usa o a tag `<link>` com `rel="shortcut icon"`. Sinceramente eu ainda não tinha visto esse padrão, então fui procurar um pouquinho. Isso foi o que encontrei nos forums:

>Warning: The shortcut link type is often seen before icon, but this link type is non-conforming, ignored and web authors must not use it anymore. 
>[Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)

Fonte: [https://stackoverflow.com/a/44124060](https://stackoverflow.com/a/44124060)

O *shortcut* era usado por navegadores mais antigos, como o IE. Sabendo disso então removi o *shortcut*.