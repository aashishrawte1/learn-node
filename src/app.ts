import express from 'express';
import { router } from './utils/router.utils';
import bodyParser from 'body-parser';
import cors from 'cors'
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001;

app.use(router);
app.use(cors);

// var corsOptions = {
//   origin: 'http://localhost:3200',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.post('/', (req, res) => {
  res.send(req.body);
  console.log(req.body)
} )

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


