import express from 'express';
import routes from './routes';
import io from 'socket.io'
import http from 'http';
import cors from 'cors';
import knex from '../src/database/connection';
const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);

const server = http.createServer(app);
const IO = io.listen(server)

IO.on("connection", socket => {
    console.log("a user connected :D");
    socket.on("chat message", msg => {
        console.log(msg);
        IO.emit("chat message", msg);
        knex('roomchat').insert({
            userID: msg.userID,
            text: msg.text,
            name: msg.name,
        }).then(e=>{
            console.log(e)
        }).catch(e=> console.log(e))
    });
})
var port = process.env.PORT || 3000;
server.listen(port, () => console.log('server running', port));