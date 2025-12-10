# 📚 API Web - Sistema de Biblioteca

Este projeto é uma API REST desenvolvida como trabalho universitário. O sistema realiza o gerenciamento de livros (CRUD) utilizando Node.js e TypeScript, persistindo os dados em um banco local SQLite.

---

## 🚀 Tecnologias

* **Linguagem:** TypeScript / Node.js
* **Framework:** Express
* **Banco de Dados:** SQLite
* **ORM:** TypeORM

---

## 📝 Funcionalidades

O sistema permite:
1.  **Criar** um novo livro.
2.  **Listar** todos os livros cadastrados.
3.  **Buscar** um livro específico pelo ID.
4.  **Atualizar** as informações de um livro.
5.  **Excluir** um livro do registro.

---

## 💻 Como Rodar o Projeto

Siga os passos abaixo no seu terminal:

1. **Clone o repositório:**

   ```bash
   git clone [https://github.com/cheshthg/api-web-biblioteca.git](https://github.com/cheshthg/api-web-biblioteca.git)
   ```

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

## 💻Autor

Projeto desenvolvido por **Thiago Vinícius**
