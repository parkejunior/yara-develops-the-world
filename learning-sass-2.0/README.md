# Learning Sass 2.0

## Instalação

Para instalar o Sass, é necessário o NPM e Node.js instalados. Você pode verificar isso rodando os comandos no terminal:

`node -v `

`npm -v `

Há muitas maneiras de instalar o Sass, mas npm é a mais rápida e mais fácil, e há duas forma de se instalar por ele. A primeira é instalando globalmente na maquina, assim você pode usar a mesma versão do Sass para todos os projetos. Você pode instalar usando o comando:

`npm -g install sass`

Nota: É necessário ter permissões de administrador ou de root.

A segunda forma de instalar é por projeto, assim cada um dos seus projetos pode ter uma versão diferente para o Sass. Para isso seu projeto precisa estar com o npm instalado. Para instalar um npm em um projeto você pode usar o comando:

`npm init`

O npm vai te fazer algumas perguntas como nome do projeto, versão, etc. Responda naturalmente. Após a iniciar um projeto npm, você pode instalar o Sass como dependência do seu projeto com o comando:

`npm install sass`

Feito isso o Sass aparecerá como _"dependencies"_ no seu `package.json`.

## Uso

Para usar o Sass globalmente, você só precisa rodar o comando `sass arquivo_origem.scss arquivo_destino.css` diretamente no seu terminal

Para usar o Sass em seu projeto, você precisa utilizar o comando `npx` antes dele. Então o comando se pareceria com:

`npx sass arquivo_origem.scss arquivo_destino.css`

Note que cada vez que você faz modificações nos seus arquivos, você precisa recompilar-los. Para que essa não seja uma tarefa manual, você pode usar a _flag_ `--watch` ao executar o seu comando `sass`. O comando então se pareceria com:

`npx sass --watch arquivo_origem.scss arquivo_destino.css`

Você também pode precisar compilar todos os arquivos de uma pasta caso necessário. Para isso basta colocar o caminho das pastas ao inves do nome dos aquivos e usar `:` ao inves de um espaço entre eles. Algo como:

`npx sass --watch pasta_scss_origem:pasta_css_destino`