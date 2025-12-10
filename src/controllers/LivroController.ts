import { Request, Response } from 'express';
import { LivroRepository } from '../repositories/LivroRepository';
import { Livro } from '../entities/Livro';

export class LivroController {

    private getRepository(): LivroRepository {
        return new LivroRepository(); 
    }

    // POST /api/livros - CREATE
    async create(req: Request, res: Response): Promise<Response> {
        const { titulo, autor, isbn, anoPublicacao } = req.body;
        if (!titulo || !autor || !isbn || !anoPublicacao) {
            return res.status(400).json({ error: 'Título, Autor, ISBN e Ano de Publicação são obrigatórios.' });
        }
        
        try {
            const repository = this.getRepository();
            const novoLivro = await repository.save(req.body);
            return res.status(201).json(novoLivro);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao cadastrar o livro. Verifique os dados.' });
        }
    }

    // GET /api/livros - READ ALL
    async findAll(req: Request, res: Response): Promise<Response> {
        const repository = this.getRepository();
        const livros = await repository.findAll();
        return res.status(200).json(livros);
    }

    // GET /api/livros/:id - READ BY ID
    async findById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const repository = this.getRepository();
        const livro = await repository.findById(id);

        if (!livro) {
            return res.status(404).json({ message: 'Livro não encontrado.' });
        }
        return res.status(200).json(livro);
    }

    // PUT/PATCH /api/livros/:id - UPDATE
    async update(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const repository = this.getRepository();
        let livro = await repository.findById(id);

        if (!livro) {
            return res.status(404).json({ message: 'Livro não encontrado para atualização.' });
        }
        
        Object.assign(livro, req.body);
        
        const livroAtualizado = await repository.save(livro);
        return res.status(200).json(livroAtualizado);
    }
    
    // DELETE /api/livros/:id - DELETE
    async delete(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const repository = this.getRepository();
        const livro = await repository.findById(id);
        
        if (!livro) {
            return res.status(404).json({ message: 'Livro não encontrado para exclusão.' });
        }
        
        await repository.delete(id);
        return res.status(204).send();
    }
}