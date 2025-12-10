import { createConnection, Connection } from 'typeorm';
import { Livro } from '../entities/Livro';

export async function connect(): Promise<Connection> {
    const connection = await createConnection({
        type: 'sqlite',
        database: 'biblioteca.sqlite',
        entities: [Livro],
        synchronize: true,
        logging: false,
    });

    console.log('Conexão com o banco de dados estabelecida.');
    return connection;
}