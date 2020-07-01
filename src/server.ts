import express from 'express';
import routes from './routes';
import io from 'socket.io'
import http from 'http';
import knex from '../src/database/connection';
const app = express();
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
            data: String(new Date().getTime())
        }).then(e=>{
            console.log(e)
        }).catch(e=> console.log(e))
    });
})
var port = process.env.PORT || 3000;
server.listen(port, () => console.log('server running', port));