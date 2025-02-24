import { useState, useEffect } from 'react';
import { FaShieldAlt, FaCreditCard, FaUserClock, FaLock, FaChartLine, FaCode, FaGlobe, FaBolt, FaHeadset } from 'react-icons/fa';

const Features = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features = [
        {
            icon: <FaShieldAlt size={36} />,
            title: "Advanced Security",
            description: "Bank-level encryption and security protocols to protect every transaction",
            color: "blue"
        },
        {
            icon: <FaCreditCard size={36} />,
            title: "Multiple Payment Methods",
            description: "Support for credit cards, debit cards, and various payment gateways",
            color: "indigo"
        },
        {
            icon: <FaUserClock size={36} />,
            title: "Real-time Processing",
            description: "Instant payment processing and confirmation for better user experience",
            color: "blue"
        },
        {
            icon: <FaLock size={36} />,
            title: "Fraud Protection",
            description: "Advanced fraud detection and prevention systems",
            color: "indigo"
        },
        {
            icon: <FaChartLine size={36} />,
            title: "Analytics Dashboard",
            description: "Comprehensive reporting and analytics tools for business insights",
            color: "blue"
        },
        {
            icon: <FaCode size={36} />,
            title: "Easy Integration",
            description: "Simple API integration with detailed documentation",
            color: "indigo"
        },
        {
            icon: <FaGlobe size={36} />,
            title: "Global Support",
            description: "Support for multiple currencies and international transactions",
            color: "blue"
        },
        {
            icon: <FaBolt size={36} />,
            title: "High Performance",
            description: "Fast and reliable payment processing infrastructure",
            color: "indigo"
        },
        {
            icon: <FaHeadset size={36} />,
            title: "24/7 Support",
            description: "Round-the-clock customer support and technical assistance",
            color: "blue"
        }
    ];

    return (
        <div className={`relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white pt-32 pb-24 px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} overflow-hidden`}>
            <div className="fixed inset-0 bg-grid-slate-900/[0.03] -z-10" />
            <div className="fixed -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="fixed -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />

            <div className="container mx-auto max-w-6xl relative">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                        Powerful Features for
                        <br />
                        Modern Businesses
                    </h1>
                    <p className="text-gray-600 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        Discover all the tools and features you need to process payments securely and efficiently
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
                        >
                            <div className={`text-${feature.color}-600 bg-${feature.color}-50 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className={`text-2xl font-bold mb-4 group-hover:text-${feature.color}-600 transition-colors duration-300`}>
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center">
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-bounce-subtle">
                        Get Started Now
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
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .animate-bounce-subtle {
                    animation: bounce-subtle 2s infinite;
                }
            `}</style>
        </div>
    );
};

export default Features;