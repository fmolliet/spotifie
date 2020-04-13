# Spotifie
App de estudo de caso para stream de Audio, recriei a interface do Spotify para o player

## App com a intenção de estudar como é feito o stream de dados de audio pelo Backend com NodeJS!

<p align="center">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/fmolliet/spotifie">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/fmolliet/spotifie">
  <a href="https://www.linkedin.com/in/fabiomolliet/"><img alt="linkedin" src="https://img.shields.io/badge/made%20by-fmolliet-brightgreen"></a>
  <img alt="NPM" src="https://img.shields.io/npm/l/express">
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/fmolliet/spotifie">
  
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/fmolliet/spotifie">
  
  <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/fmolliet/spotifie?style=social">
</p>

<p align="center">
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<h2><a href="#technologies"></a>🚀Technologies</h2>

<h3>⚙️BACK-END</h3>

<ul>
  <li><a href="https://nodejs.org/" rel="nofollow">Node.js</a></li>
  <li><a href="https://expressjs.com/" rel="nofollow">Express</a></li>
  <li><a href="https://nodemon.io/" rel="nofollow">nodemon</a></li>
  <li><a href="https://www.sqlite.org/index.html" rel="nofollow">Sqlite 3</a></li>
  <li><a href="http://knexjs.org/" rel="nofollow">KnexJS</a></li>
  <li><a href="https://github.com/expressjs/multer">Multer</a></li>
  <li><a href="https://code.visualstudio.com/" rel="nofollow">VS Code</a> with <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" rel="nofollow">ESLint</a>, <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" rel="nofollow">Prettier</a>, <a href="https://insomnia.rest/" rel="nofollow">Isomnia</a></li>
</ul>


<h3>📰FRONT-END</h3>
<ul>
  <li><a href="https://reactjs.org/" rel="nofollow">ReactJS</a></li>
  <li><a href="https://material-ui.com/" rel="nofollow">MaterialUI</a></li>
  <li><a href="https://react-icons.netlify.com/#/" rel="nofollow">React Icons</a></li>
</ul>


<h2><a href="#information_source-how-to-use"></a>ℹ️ How To Use</h2>
<p>To clone and run this application, you'll need <a href="https://git-scm.com" rel="nofollow">Git</a>, <a href="https://nodejs.org/" rel="nofollow">Node.js</a> installed on your computer.</p>
<p>From your command line:</p>

<div class="highlight highlight-source-shell"><pre><span class="pl-c"><span class="pl-c">#</span> Clone this repository</span>
$ git clone https://github.com/fmolliet/spotifie

<span class="pl-c"><span class="pl-c">#</span> Go into the repository</span>
$ <span class="pl-c1">cd</span> spotifie/backend

<span class="pl-c"><span class="pl-c">#</span> Install dependencies</span>
$ npm install

<span class="pl-c"><span class="pl-c">#</span> Run Migrates</span>
$ npx knex migrate:latest

<span class="pl-c"><span class="pl-c">#</span> Run the API</span>
$ npm start</pre></div>


<h2><a href="#memo-license"></a>📝 License</h2>
 <h2>This project is under the MIT license. See the <a href="https://github.com/danielobara/FastFeet/blob/master/LICENSE">LICENSE</a> for more information.</h2>
