import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
      host : 'mysql669.umbler.com',
      port: 41890,
      user : 'radiocampus',
      password : '3llcb233',
      database : 'radioifac'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
};

