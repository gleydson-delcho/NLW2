const { pageLanding, pageStudy, pageGiveClasses, saveClasses} = 
    require('./pages')

const express = require('express');
const server = express();
const nunjucks =require('nunjucks');

nunjucks.configure('src/views', {
    express: server,
    nocache: true,

})

// Receber dados
server
    .use(express.urlencoded({ extended: true }))
    // Arquivos estáticos
    .use(express.static("public"))
    // Rotas
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-class", saveClasses)
    .listen(5500);
