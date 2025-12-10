````
# 📚 API Web - Biblioteca

Este projeto consiste em uma API REST desenvolvida como parte de um trabalho universitário. O objetivo é fornecer um sistema simples para o gerenciamento de livros (CRUD) utilizando Node.js e TypeScript.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Express**: Framework web para construção da API.
- **TypeORM**: ORM para manipulação do banco de dados.
- **SQLite**: Banco de dados relacional leve (arquivo local).
- **Nodemon**: Utilitário para monitorar alterações e reiniciar o servidor automaticamente.

## ⚙️ Funcionalidades

A API permite realizar as seguintes operações na entidade **Livros**:

- **Criar**: Cadastrar um novo livro.
- **Ler**: Listar todos os livros ou buscar um livro específico por ID.
- **Atualizar**: Alterar dados de um livro existente (ex: disponibilidade).
- **Deleter**: Remover um livro do banco de dados.

## 🛠️ Como Rodar o Projeto

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/cheshthg/api-web-biblioteca.git](https://github.com/cheshthg/api-web-biblioteca.git)
````

2.  **Acesse a pasta do projeto:**

    ```bash
    cd biblioteca-api-ts
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Execute o servidor:**

    ```bash
    npm run dev
    ```

O servidor iniciará na porta **3000**.

## 🔗 Endpoints da API

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/api/livros` | Cria um novo livro. |
| `GET` | `/api/livros` | Lista todos os livros. |
| `GET` | `/api/livros/:id` | Busca um livro pelo ID. |
| `PUT` | `/api/livros/:id` | Atualiza os dados de um livro. |
| `DELETE` | `/api/livros/:id` | Remove um livro. |

### Exemplo de JSON para Criação (POST):

```json
{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "isbn": "978-8535914849",
  "anoPublicacao": 1899,
  "disponivel": true
}
```
