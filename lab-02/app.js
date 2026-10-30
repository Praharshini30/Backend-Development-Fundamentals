
const express = require("express");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

let db;

app.get("/books/:bookId/", async (request, response) => {
    const { bookId } = request.params;

    const getBookQuery = `
        SELECT *
        FROM book
        WHERE id = ?;
    `;

    const book = await db.get(getBookQuery, [bookId]);

    if (book === undefined) {
        response.status(404).send("Book not found");
    } else {
        response.status(200).send(book);
    }
});

app.post("/books/", async (request, response) => {
    const { title, author, price, pages } = request.body;

    const addBookQuery = `
        INSERT INTO book (title, author, price, pages)
        VALUES (?, ?, ?, ?);
    `;

    await db.run(addBookQuery, [title, author, price, pages]);

    response.status(201).send("Book Added Successfully");
});

app.put("/books/:bookId/", async (request, response) => {
    const { bookId } = request.params;
    const { title, author, price, pages } = request.body;

    const updateBookQuery = `
        UPDATE book
        SET
            title = ?,
            author = ?,
            price = ?,
            pages = ?
        WHERE id = ?;
    `;

    await db.run(updateBookQuery, [
        title,
        author,
        price,
        pages,
        bookId
    ]);

    response.send("Book Details Updated Successfully");
});

app.delete("/books/:bookId/", async (request, response) => {
    const { bookId } = request.params;

    const deleteBookQuery = `
        DELETE FROM book
        WHERE id = ?;
    `;

    await db.run(deleteBookQuery, [bookId]);

    response.send("Book Deleted Successfully");
});

const initializeDBAndServer = async () => {
    
app.get("/books/", async (request, response) => {
    const getBooksQuery = `
        SELECT *
        FROM book;
    `;

    const books = await db.all(getBooksQuery);
    response.status(200).send(books);
});

    try {
        db = await open({
            filename: path.join(__dirname, "database", "books.db"),
            driver: sqlite3.Database
        });

        console.log("Database connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });

    } catch (error) {
        console.log(`Database Error: ${error.message}`);
        process.exit(1);
    }
};

initializeDBAndServer();
