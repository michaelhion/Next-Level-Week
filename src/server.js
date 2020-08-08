const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses
} = require('./pages')
//Configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{express:server,
noCache:true})

//Início e configuração do servidor

server
// Configurar arquivos estáticos (css.scripts, imagens)
.use(express.static("public"))
// Rotas da aplicação 
    .get("/",pageLanding)
    .get("/study",pageStudy)
    .get("/give-classes",pageGiveClasses)

    //Start do servidor
    .listen(5500)
