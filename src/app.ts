import express from 'express';
import { Application } from 'express';

// Usamos 'require' para forçar a importação do objeto routes
const routesModule = require('./routes');
const routes = routesModule.default; // Acessamos a exportação padrão

class App { 
    private app: Application;
    
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }
    
    private middlewares(): void {
        this.app.use(express.json());
    }
    
    private routes(): void {
        this.app.use('/api', routes);
    }
    
    public start(port: number): void {
        this.app.listen(port, () => {
            console.log(`🚀 Servidor rodando na porta ${port}`);
        });
    }
}

export default new App();