import 'reflect-metadata';
import App from './app';
import { connect } from './database/connection';

const PORT = 3000;

async function main() {
    try {
        await connect();
        
        App.start(PORT); 
    } catch (error) {
        console.error('Falha ao iniciar a aplicação:', error);
    }
}

main();