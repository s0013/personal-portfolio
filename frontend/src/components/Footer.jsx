// src/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                <div className="mt-2">
                    <a href="https://github.com" className="hover:underline mx-2">GitHub</a>
                    <a href="https://linkedin.com" className="hover:underline mx-2">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
