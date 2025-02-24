import { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
   
    useEffect(() => {
        setIsVisible(true);
    }, []);
 
    return (
        <div className={`relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white pt-32 pb-24 px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} overflow-hidden`}>
            <div className="fixed inset-0 bg-grid-slate-900/[0.03] -z-10" />
            <div className="fixed -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="fixed -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />

            <div className="container mx-auto max-w-6xl relative">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                        Get in Touch
                        <br />
                        With Us
                    </h1>
                    <p className="text-gray-600 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        Have questions? We're here to help and would love to hear from you
                    </p>
                </div>

                <div className=""> 

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Cards */}
                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="flex items-center space-x-4">
                                <div className="text-blue-600 bg-blue-50 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <FaEnvelope size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                                    <p className="text-gray-600">support@paythor.com</p>
                                    <p className="text-gray-600">sales@paythor.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="flex items-center space-x-4">
                                <div className="text-blue-600 bg-blue-50 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <FaPhone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                    <p className="text-gray-600">Mon - Fri, 9am - 6pm</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="flex items-center space-x-4">
                                <div className="text-blue-600 bg-blue-50 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <FaMapMarkerAlt size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
                                    <p className="text-gray-600">123 Payment Street</p>
                                    <p className="text-gray-600">San Francisco, CA 94105</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                            <div className="w-full h-48 bg-gray-200 rounded-lg relative overflow-hidden group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977731876877!2d-122.39568388441547!3d37.78794977975504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807abad77c31%3A0x9cdf39d36484be8c!2sFinancial%20District%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v164584183601!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    className="group-hover:scale-105 transition-transform duration-300"
                                ></iframe>
                            </div>
                        </div>
                    </div>
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

export default Contact;