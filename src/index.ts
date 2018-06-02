import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`tabelada server listening port ${port}`);
});