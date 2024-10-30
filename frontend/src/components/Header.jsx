// src/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="bg-black text-white py-4 sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
                <nav>
                    <ul className="flex space-x-4 mr-6">
                        <li>
                            <a href="#home" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:underline">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
