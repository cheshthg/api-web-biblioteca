import { Router } from 'express'; 
import { LivroController } from '../controllers/LivroController';

const routes = Router(); 
const livroController = new LivroController();

routes.post('/livros', (req, res) => livroController.create(req, res));
routes.get('/livros', (req, res) => livroController.findAll(req, res));
routes.get('/livros/:id', (req, res) => livroController.findById(req, res));
routes.put('/livros/:id', (req, res) => livroController.update(req, res));
routes.delete('/livros/:id', (req, res) => livroController.delete(req, res));

export default routes;