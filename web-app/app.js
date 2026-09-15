const sequelize = require('./database/dbconfig');
const User = require('./schemas/UserSchema');
const server = require('./server');

async function run() {

    const port = 8080;

    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida com sucesso.');

        await sequelize.sync({ alter: true });
        console.log('Banco de dados sincronizado com sucesso.');

        server.port = port;

        server.listen();

    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

run();