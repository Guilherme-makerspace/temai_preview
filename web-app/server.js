const express = require('express');
const router = require('./mvc/routes/config')

class Server
{

    app
    port

    constructor(port)
    {
        this.app = express();
        this.port = port;
        this.app.use(express.json());
        this.app.use(router);
        this.app.use(express.urlencoded({ extended: true }));
        this.app.set('view engine', 'ejs');
        this.app.set('views', './mvc/views');
    }

    listen()
    {
        this.app.listen(this.port, () => {
            console.log(`Servidor rodando na porta ${this.port}`);
        });
    }

}

module.exports = new Server();