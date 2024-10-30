const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Log the MongoDB URI for debugging
console.log('MongoDB URI:', process.env.MONGO_URI);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });

    try {
        await newContact.save();
        res.status(201).send('Message sent successfully!');
    } catch (error) {
        res.status(500).send('Error sending message.');
    }
});
