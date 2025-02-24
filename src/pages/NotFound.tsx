import { FaHome, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NotFound = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white flex items-center justify-center px-4 transition-all duration-1000 transform overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
            <div className="fixed inset-0 bg-grid-slate-900/[0.03] -z-10" />
            <div className="fixed -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="fixed -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
            
            <div className="bg-white/80 backdrop-blur-md p-12 rounded-2xl shadow-xl max-w-2xl w-full mx-auto border border-gray-100 hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden">
                <h1 className="text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient">404</h1>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Page Not Found</h2>
                <p className="text-gray-600 text-lg mb-12 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 group">
                        <FaHome className="group-hover:scale-110 transition-transform duration-300" />
                        Go Home
                    </Link>
                    <button onClick={() => window.history.back()} className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 group">
                        <FaArrowLeft className="group-hover:scale-110 transition-transform duration-300" />
                        Go Back
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient 4s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default NotFound;