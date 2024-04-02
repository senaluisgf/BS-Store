import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import { v4 as uuidv4 } from 'uuid';

import cors from 'cors';
import Log from './middleware/log.middleware';
import setLangCookie from './middleware/setLangCookie.middleware';
import homeRouter from './router/router';

declare module 'express-session' {
  interface SessionData {
    uid: string;
    tipoUsuarioId: string;
    carrinho: string[];
  }
}

dotenv.config({path: ['../.env']});
const PORT = process.env.BACKEND_PORT!;
const SESSION_SECRET = process.env.SESSION_SECRET!;
const publicPath = `${process.cwd()}/public`;

const app = express();
app.use(cors({origin:'http://localhost:3000', credentials: true}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(setLangCookie);

app.use(session({
  genid: (req) => uuidv4(),
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

app.use('/css', express.static(`${publicPath}/css`));
app.use('/js', express.static(`${publicPath}/js`));
app.use('/img', express.static(`${publicPath}/img`));

app.use(morgan('short'));
app.use(Log('completo'));

app.use(homeRouter);

// qualquer rota que não exista cai aqui
app.use(function (req, res) {
  res.statusCode = 404;
  res.end("Page not Found")
})

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
