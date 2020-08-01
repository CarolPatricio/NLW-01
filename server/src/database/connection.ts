import knex from 'knex'; 
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection:{
        filename: path.resolve(__dirname, 'database.sqlite') //__dirname: variável global que retorna o diretório do arquivo que está executando essa variável, no caso ele retorna o caminho do diretório database onde está localizado este arquivo conecction.ts.

    },
    useNullAsDefault:true,
})

export default connection;