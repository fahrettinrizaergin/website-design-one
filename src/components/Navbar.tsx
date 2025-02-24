import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 shadow-sm transition-all duration-300 hover:bg-white/95 border-b border-gray-100">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="flex items-center justify-between h-20">
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">Paythor</span>
                                <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">Beta</span>
                            </div>
                        </Link>


                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 font-medium relative group">
                                Home
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            <Link to="/features" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 font-medium relative group">
                                Features
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link> 
                            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 font-medium relative group">
                                Contact
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 font-medium">
                                Get Started
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-50"
                            >
                                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden transform transition-all duration-300 ${isMenuOpen ? 'scale-y-100 opacity-100 h-auto' : 'scale-y-0 opacity-0 h-0'} origin-top overflow-hidden`}>
                        <div className="flex flex-col space-y-4">
                            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 font-medium">Home</Link>
                            <Link to="/features" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 font-medium">Features</Link>
                            <Link to="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 font-medium">Pricing</Link>
                            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 font-medium">Contact</Link>
                            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium mx-4">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
    )
}