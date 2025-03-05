const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.use(express.json());

const BASE_URL = "https://api.example.com/books"; // Replace with actual API

// Task 1: Get all books
app.get("/books", async (req, res) => {
    try {
        const response = await axios.get(BASE_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching books" });
    }
});

// Task 2: Get book by ISBN (Using Promises)
app.get("/books/isbn/:isbn", (req, res) => {
    const { isbn } = req.params;
    axios.get(`${BASE_URL}/isbn/${isbn}`)
        .then(response => res.json(response.data))
        .catch(error => res.status(500).json({ message: "Error fetching book by ISBN" }));
});

// Task 3: Get books by Author
app.get("/books/author/:author", async (req, res) => {
    try {
        const { author } = req.params;
        const response = await axios.get(`${BASE_URL}/author/${author}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching books by author" });
    }
});

// Task 4: Get books by Title
app.get("/books/title/:title", async (req, res) => {
    try {
        const { title } = req.params;
        const response = await axios.get(`${BASE_URL}/title/${title}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching books by title" });
    }
});

// Task 5: Get book reviews
app.get("/books/review/:isbn", async (req, res) => {
    try {
        const { isbn } = req.params;
        const response = await axios.get(`${BASE_URL}/review/${isbn}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching book review" });
    }
});

// Task 6: Register new user
app.post("/users/register", async (req, res) => {
    try {
        const response = await axios.post("https://api.example.com/users/register", req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error registering user" });
    }
});

// Task 7: Login as a registered user
app.post("/users/login", async (req, res) => {
    try {
        const response = await axios.post("https://api.example.com/users/login", req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error logging in" });
    }
});

// Task 8: Add/Modify a book review
app.post("/books/review", async (req, res) => {
    try {
        const response = await axios.post("https://api.example.com/books/review", req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error adding/modifying book review" });
    }
});

// Task 9: Delete a book review
app.delete("/books/review/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.delete(`https://api.example.com/books/review/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error deleting book review" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
