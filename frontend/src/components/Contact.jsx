// src/Contact.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Clear form after submission
        } catch (error) {
            alert('Error sending message.');
        }
    };

    return (
        <section className="py-12 bg-gray-100">
            <h2 className="text-3xl font-bold text-center text-gray-800">Contact Me</h2>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md"
            >
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Send
                </button>
            </form>
        </section>
    );
};

export default Contact;
