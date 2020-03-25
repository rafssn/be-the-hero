const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
- Métodos http:
GET: Buscar alguma informação no Back-end
POST: Criar uma informação no Back-end
PUT: Alterar uma informação no Back-end
DELETE: Deletar uma informação no Back-end
*/
/* 
Tipos de parâmetros:
QUERY PARAMS: parâmetros nomeados, enviados na rota após o "?" (filtros, paginação...)
ROUTE PARAMS: Parâmetros utilizados para identificar recursos
REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos
*/
/*
Comunicação com o banco de dados:
Driver: SELECT * FROM users
Query builder: table('users').select('*').where()
*/

app.listen(3333);
