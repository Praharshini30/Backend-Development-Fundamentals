# Backend Development Fundamentals

## Lab 03 – REST API, Query Parameters, Validation, and Debugging

### Student Details
- **Name:** Praharshini Muthyala
- **Registration Number:** 252U1R9132
- **Section:** CSE GENERATIVE AI - 2C

---

## 1. Project Description

This project implements a RESTful API for managing books using Node.js, Express.js, and SQLite.

The API supports CRUD operations, query parameters for searching and sorting books, pagination, price filtering, input validation, and appropriate HTTP status codes.

## 2. Technologies Used

- Node.js
- Express.js
- SQLite
- JavaScript
- Postman
- Visual Studio Code

## 3. Installation and Setup

1. Clone or download the repository.
2. Navigate to the `lab-03` folder.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

5. The server runs at:

   `http://localhost:3000`

## 4. API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/books/` | Get all books with search, sorting, pagination, and price filters |
| GET | `/books/:bookId/` | Get a book by ID |
| POST | `/books/` | Add a new book |
| PUT | `/books/:bookId/` | Update an existing book |
| DELETE | `/books/:bookId/` | Delete a book |

### Query Parameters

| Parameter | Description |
|---|---|
| `search_q` | Search books by title |
| `order_by` | Sort by id, title, author, price, or pages |
| `order` | Sort in ASC or DESC order |
| `limit` | Number of books to return |
| `offset` | Number of books to skip |
| `min_price` | Minimum book price |
| `max_price` | Maximum book price |

## 5. Validation and Error Handling

- Title and author are required when adding a book.
- Price must be a valid numeric value.
- Invalid query parameters return HTTP 400 Bad Request.
- Requests for nonexistent book IDs return HTTP 404 Not Found.
- Successful book creation returns HTTP 201 Created.
- Successful update and deletion return HTTP 200 OK.
- Responses are provided in JSON format.

## 6. Environment Variables and Configuration

- `PORT`: Server port (default: 3000).
- Database path: `database/books.db`.

No sensitive credentials are required for this project.

## 7. Debugging

The following debugging scenarios were covered:

- **EADDRINUSE:** Address already in use when the server port is occupied.
- **Incorrect import path:** Fixing incorrect file or database paths.
- **Table name error:** Resolving `no such table` errors by using the correct table name.
- **Missing await:** Ensuring asynchronous database operations complete before sending responses.

## 8. Screenshots

Postman screenshots demonstrating successful API requests and error-handling scenarios are included in the `screenshots` folder.

### GET Requests

- `GET_limit.png`
- `GET_offset