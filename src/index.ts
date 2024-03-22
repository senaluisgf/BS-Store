import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import Log from './middleware/log.middleware';
import validateEnv from './utils/validate-env';

import homeRouter from './router/router';

dotenv.config();
validateEnv();
const PORT = process.env.PORT || 3333;
const publicPath = `${process.cwd()}/public`;

const app = express();
app.use(bodyParser.json());

app.use('/css', express.static(`${publicPath}/css`));
app.use('/js', express.static(`${publicPath}/js`));
app.use('/img', express.static(`${publicPath}/img`));

app.use(morgan('short'));
app.use(Log('completo'));

app.use(homeRouter);

// qualquer rota que não exista cai aqui
app.use(function(req, res) {
  res.statusCode = 404;
  res.end("Page not Found")
})

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
