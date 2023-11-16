require('dotenv').config(); 
//importando a biblioteca dotenv que auxilia na literatura de arquivo
// para controle de variaveis de ambiente
const express = require('express');
//instancia o framework express, que auxilia no deploy do servidor http
const cors = require('cors');
//instancia configura permissoes para navegadores para codigos javascript
const apiRoutes = require('./src/routes');
//modulo (arquivo js) que contem as rotas (enderecos) para requisicoes

const mongodb = require('./src/database/mongodb');
//modulo (arquivo js) que contem a conexao com o banco de dados nosql
 
mongodb();
 //inicializa conexao com o banco de dados mongo

const server = express();
//instancia o servidor express
 
server.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'PUT', 'UPDATE', 'PATCH'],
        allowedHeaders: ['Content-Type']
    }
));
//servidor esta injetando o uso do cors permitindo acesso de qualquer origem e especificando
//os metodos de requisicoes permitidos

server.use(express.json());
server.use(express.urlencoded({extended: true}));
 //fazer uso do json no formato das requisicoes

server.use('/', apiRoutes);
 //definindo o uso das rotas no servidor exepress

server.listen(process.env.PORT, () => {
    console.log(`- Rodando no porta: ${process.env.PORT}.`);
}); //criando uma porta que vai ficar ouvindo as requisicoes http e iniciando o servidor