// src/Home.jsx
import React from 'react';

const Home = () => {
    const imageUrl = 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/78e88f76-29bf-4289-9624-719aec0f7bcb/e516f677-4846-4a28-9707-ba00ffa49479.png';

    return (
        <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* Left Column: Photo */}
                <div className="md:w-1/2 p-4">
                    <img 
                        src={imageUrl} 
                        alt="My Portrait" 
                        className="w-3/4 h-auto mx-auto rounded-lg shadow-lg" // Adjust width here
                    />
                </div>

                {/* Right Column: Info */}
                <div className="md:w-1/2 p-4 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome to My Portfolio</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        I am a web developer skilled in the MERN stack.
                    </p>
                    <p className="mt-4 text-md text-gray-600">
                        Passionate about building responsive and user-friendly web applications. 
                        Let's connect and collaborate!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;
