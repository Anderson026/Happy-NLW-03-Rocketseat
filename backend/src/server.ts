/* importando o express */
import express from 'express';

/* importando o path */
import path from 'path';
/* importando o cors para abrir comunicação com o frontend
 que está em outra porta de comunicação */
 import cors from 'cors'

/* importando o express async errors */
import 'express-async-errors';

/* importando a conexão com o banco de dados */
import './database/connection';

/* importando as rotas */
import routes from './routes';

/* importando o errorHandler */
import errorHandler from './errors/handler'


/* criando a aplicação */
const app = express();

/* instanciando o cors */
app.use(cors())
/* configurando a aplicação para identificar arquivos JSON */
app.use(express.json())
/* instanciando as rotas */
app.use(routes)

/* criando os links de navegação das imagens */
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
/* instanciando o errorHandler */
app.use(errorHandler);

/* porta de comunicação */
app.listen(3333);

/* Rota = conjunto
   Recurso = usuário
   Métodos HTTP = GET, POST, PUT, DELETE
   Parâmetros:
    Query Params: http://localhost:3333/users?search=anderson
    Route Params: http://localhost:3333/users/1 (identificar um recurso)
    Body: http://localhost:3333/users/1 

   GET = Buscar uma informação (lista, item) 
   POST = Criando uma informação
   PUT = Editando uma informação
   DELETE = Deletando uma informação

   Migrations
   Utilizadas como um controle de versão do banco de dados para
   as alterações que serão feitas no banco de dados nos casos
   onde tem mais de um desenvolvedor na aplicação
*/

