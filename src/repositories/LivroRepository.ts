import { getRepository, Repository } from 'typeorm';
import { Livro } from '../entities/Livro';

export class LivroRepository {
    private ormRepository: Repository<Livro>;

    constructor() {
        this.ormRepository = getRepository(Livro);
    }

    async save(livro: Livro): Promise<Livro> {
        return this.ormRepository.save(livro);
    }

    async findAll(): Promise<Livro[]> {
        return this.ormRepository.find();
    }

// READ BY ID
    async findById(id: number): Promise<Livro | undefined> {
        const livro = await this.ormRepository.findOne({ where: { id: id } });
        return livro || undefined;
    }

    async delete(id: number): Promise<void> {
        await this.ormRepository.delete(id);
    }
}