// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // Ensure Tailwind styles are applied

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <div id="home"><Home /></div>
                <div id="projects"><Projects /></div>
                <div id="contact"><Contact /></div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
