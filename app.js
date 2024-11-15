import express from 'express';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// GET route
app.get('/', (req, res) => {
    res.send('Welcome to Express.js Testing!');
});

// POST route
app.post('/data', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).send('Name is required!');
    }

    res.status(201).json({ message: `Hello, ${name}!` });
});

export default app;
