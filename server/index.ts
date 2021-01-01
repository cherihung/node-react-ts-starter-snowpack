import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import serveStatic from 'serve-static';

import {LOG_FORMAT, PORT, NODE_ENV} from './configs/constants';
import routes from './routes';

const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(morgan(LOG_FORMAT));
app.use(cors(corsOptions));

app.use(serveStatic(path.join(__dirname, '..', 'WEB_BUILD')));

app.use('/', routes);

if(NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'WEB_BUILD', 'index.html'))
  })
}

app.listen(PORT, () => console.log(`App listening on :${PORT}!`));