import express, { Request, Response } from 'express';
import routes from './routes';
import cors from 'cors';
const port = process.env.PORT || 3000;
const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log('server running', port));