// src/Projects.jsx
import React from 'react';

const Projects = () => {
    return (
        <section className="py-12 bg-white">
            <h2 className="text-3xl font-bold text-center text-gray-800">My Projects</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Example Project Card */}
                <div className="border rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-semibold">E-Commerce Website</h3>
                    <p className="mt-2 text-gray-600">A full-featured e-commerce application built with the MERN stack.</p>
                    <a 
                        href="https://s0013.github.io/ecom/" // Replace with your project URL
                        className="mt-4 inline-block text-blue-500 hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View Project
                    </a>
                </div>

                {/* Project Card for Resume Builder */}
                <div className="border rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-semibold">Resume Builder</h3>
                    <p className="mt-2 text-gray-600">An interactive tool to create professional resumes.</p>
                    <a 
                        href="https://shraddhasonawane-resume-builder.vercel.app/" // Replace with your project URL
                        className="mt-4 inline-block text-blue-500 hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View Project
                    </a>
                </div>

                {/* Project Card for Money Saver */}
                <div className="border rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-semibold">Money Saver</h3>
                    <p className="mt-2 text-gray-600">A budgeting app to help track and manage expenses.</p>
                    <a 
                        href="https://shraddhasonawane-expense-tracker.vercel.app/" // Replace with your project URL
                        className="mt-4 inline-block text-blue-500 hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
