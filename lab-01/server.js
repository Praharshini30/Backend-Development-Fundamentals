
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// GET / - Welcome route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to the Backend Development Fundamentals Lab!");
});

// GET /about - Student details
app.get("/about", (req, res) => {
    res.status(200).json({
        name: "Praharshini Muthyala",
        section: "CSE Generative AI- 2C"
    });
});

// GET /time - Current date and time
app.get("/time", (req, res) => {
    res.status(200).json({
        currentDateTime: new Date().toString()
    });
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send("404 - Route not found");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});
