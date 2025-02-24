import { FaShieldAlt, FaCreditCard, FaUserClock, FaCheckCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const LandingPage = () => { 
    const [isVisible, setIsVisible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const websites = [
        {label: "Batiteknoloji", url: "https://batiteknoloji.com", logo: "https://batiteknoloji.com/img/batiteknolojicom-logo-1565007015.jpg"},
        {label: "Batimarine", url: "https://batimarine.com", logo: "https://batimarine.com/img/logo-1687201008.jpg"},
        {label: "Compel", url: "https://compel.com.tr", logo: "https://compel.com.tr/img/logo-1648372358.jpg"},
        {label: "Architab", url: "https://architab.net", logo: "https://architab.net/img/logo-1688658133.webp"},
        {label: "Raftabul", url: "https://raftabul.com", logo: "https://raftabul.com/img/rafta-bul-logo-1568619849.jpg"},
        {label: "Filderi", url: "https://www.filderi.com", logo: "https://www.filderi.com/wp-content/uploads/2023/01/cropped-filderi-logo.png"},
        {label: "ozelturkkoleji", url: "https://itkstore.ozelturkkoleji.com", logo: "https://itkstore.ozelturkkoleji.com/wp-content/uploads/2020/07/logo-2.png"},
        {label: "fisjenerator", url: "https://fisjenerator.com", logo: "https://fisjenerator.com/img/logo-1685716316.jpg"},
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
        {/* Hero Section */}
        <section className={`pt-32 pb-24 px-4 relative overflow-hidden transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="absolute inset-0 bg-grid-slate-900/[0.03] -z-10" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
                
                {/* Left Side Decorative Images */}
                <div className="absolute left-0 top-0 h-full w-48 overflow-hidden pointer-events-none">
                    <img 
                        src="https://www.ipara.com.tr/assets/img/ipara-logo.svg" 
                        alt="Decorative" 
                        className="absolute w-auto h-10 left-4 top-1/4 transform -rotate-12 transition-all duration-1000 hover:scale-110"
                        style={{
                            transform: `rotate(${Math.random() * 30 - 15}deg) translateX(${-scrollPosition * 0.5}px)`,
                            opacity: Math.max(0, 0.8 - scrollPosition * 0.001)
                        }}
                    />
                    <img 
                        src="https://www.posfix.com.tr/assets/img/logo.png" 
                        alt="Decorative" 
                        className="absolute w-auto h-10 left-12 top-1/2 transform rotate-6 transition-all duration-1000 hover:scale-110"
                        style={{
                            transform: `rotate(${Math.random() * 30 - 15}deg) translateX(${-scrollPosition * 0.7}px)`,
                            opacity: Math.max(0, 0.8 - scrollPosition * 0.001)
                        }}
                    />
                    <img 
                        src="https://bo.moka.com/uploads/Microsoft_Teams_image_3_7e7ff10829.png" 
                        alt="Decorative" 
                        className="absolute w-auto h-10 left-8 top-3/4 transform -rotate-3 transition-all duration-1000 hover:scale-110"
                        style={{
                            transform: `rotate(${Math.random() * 30 - 15}deg) translateX(${-scrollPosition * 0.9}px)`,
                            opacity: Math.max(0, 0.8 - scrollPosition * 0.001)
                        }}
                    />
                </div>

                {/* Right Side Decorative Images */}
                <div className="absolute right-0 top-0 h-full w-48 overflow-hidden pointer-events-none">
                    <img 
                        src="https://unitedpayment.com/_assets/images/logo.svg?v=tWSPBOyrN2Tp7RFr12dyastApW4WErdbDRMROmjugwk" 
                        alt="Decorative" 
                        className="absolute w-auto h-10 right-4 top-1/4 transform rotate-12 transition-all duration-1000 hover:scale-110"
                        style={{
                            transform: `rotate(${Math.random() * 30 - 15}deg) translateX(${scrollPosition * 0.5}px)`,
                            opacity: Math.max(0, 0.8 - scrollPosition * 0.001)
                        }}
                    />
                    <img 
                        src="https://www.ideasoft.com.tr/wp-content/uploads/2024/02/paratikalogo-1.png" 
                        alt="Decorative" 
                        className="absolute w-auto h-10 right-12 top-1/2 transform -rotate-6 transition-all duration-1000 hover:scale-110"
                        style={{
                            transform: `rotate(${Math.random() * 30 - 15}deg) translateX(${scrollPosition * 0.7}px)`,
                            opacity: Math.max(0, 0.8 - scrollPosition * 0.001)
                        }}
                    />
                    <img 
                        src="https://mypayz.com/assets/img/logo.svg" 
                        alt="Decorative" 
                        className="absolute w-32 h-32 right-8 top-3/4 transform rotate-3 transition-all duration-1000 hover:scale-110"
                        style={{
                            transform: `rotate(${Math.random() * 30 - 15}deg) translateX(${scrollPosition * 0.9}px)`,
                            opacity: Math.max(0, 0.8 - scrollPosition * 0.001)
                        }}
                    />
                </div>
                <div className="container mx-auto max-w-6xl relative">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                            Make Your Business Payment Fast
                            <br />
                            and Secure, with <span className="text-blue-600 hover:scale-110 inline-block transition-transform duration-300">Paythor</span>
                        </h1>
                        <p className="text-gray-600 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            Process payments quickly and securely for your business needs
                        </p>
                        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-bounce-subtle">
                            Get Started
                        </button>
                    </div>

                    {/* Payment Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-blue-600 bg-blue-50 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"><FaCreditCard size={28} /></div>
                                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">$3,050.00</span>
                            </div>
                            <p className="text-gray-600 font-medium group-hover:text-blue-600 transition-colors duration-300">Total Processed Payments</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-blue-600 bg-blue-50 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"><FaUserClock size={28} /></div>
                                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">99.9%</span>
                            </div>
                            <p className="text-gray-600 font-medium group-hover:text-blue-600 transition-colors duration-300">System Uptime</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-blue-600 bg-blue-50 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"><FaShieldAlt size={28} /></div>
                                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Secure</span>
                            </div>
                            <p className="text-gray-600 font-medium group-hover:text-blue-600 transition-colors duration-300">Payment Protection</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Companies */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-900/[0.02] -z-10" />
                <div className="container mx-auto max-w-6xl px-4">
                    <h2 className="text-center text-3xl font-bold mb-12">
                        Trusted By More Than <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">+10,000</span> Users
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 hover:opacity-100 transition-opacity duration-500">
                        {
                            websites.map((item: any, index: number) => (
                                <a href={item.url} key={index}>
                                    <img src={item.logo} alt={item.label} className="h-8 hover:scale-125 transition-transform duration-300 cursor-pointer" />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-900/[0.03] -z-10" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="container mx-auto max-w-6xl relative">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold mb-6">
                            Get The Most Powerful and
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient">Easy to Use</span> Payment Software
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                            <div className="text-blue-600 bg-blue-50 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300"><FaShieldAlt size={36} /></div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">Secure Payments</h3>
                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">Your transactions are protected with bank-level security</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                            <div className="text-blue-600 bg-blue-50 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300"><FaCreditCard size={36} /></div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">Fast Processing</h3>
                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">Process payments quickly and efficiently</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                            <div className="text-blue-600 bg-blue-50 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300"><FaUserClock size={36} /></div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">24/7 Support</h3>
                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">Get help whenever you need it</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* System Information Section */}
            <section id="system-info" className="py-24 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-900/[0.02] -z-10" />
                <div className="container mx-auto max-w-6xl relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">
                            System
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient">Performance Metrics</span>
                        </h2>
                        <p className="text-gray-600 text-xl max-w-2xl mx-auto">Real-time statistics about our payment processing system</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Starter Plan */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                                <div className="text-4xl font-bold mb-4">
                                    <span className="text-gray-900">$29</span>
                                    <span className="text-gray-500 text-base font-normal">/month</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-gray-600">
                                    <FaCheckCircle className="text-green-500 mr-2" /> 100 Monthly Transactions
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FaCheckCircle className="text-green-500 mr-2" /> Basic Analytics
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FaCheckCircle className="text-green-500 mr-2" /> Email Support
                                </li>
                            </ul>
                            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                                Get Started
                            </button>
                        </div>

                        {/* Professional Plan */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-500 relative">
                            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">Popular</div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                                <div className="text-4xl font-bold mb-4">
                                    <span className="text-gray-900">$99</span>
                                    <span className="text-gray-500 text-base font-normal">/month</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-gray-600">
                                    <FaCheckCircle className="text-green-500 mr-2" /> Unlimited Transactions
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FaCheckCircle className="text-green-500 mr-2" /> Advanced Analytics
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FaCheckCircle className="text-green-500 mr-2" /> 24/7 Support
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FaCheckCircle className="text-green-500 mr-2" /> Custom Integration
                                </li>
                            </ul>
                            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                                Get Started
                            </button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                                <div className="text-4xl font-bold mb-4">
                                    <span className="text-gray-900">$299</span>
                                    <span className="text-gray-500 text-base font-normal">/month</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-gray-600">
                                    <FaCheckCircle className="text-green-500 mr-2" /> Unlimited Everything
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FaCheckCircle className="text-green-500 mr-2" /> Custom Solutions
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FaCheckCircle className="text-green-500 mr-2" /> Dedicated Support
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <FaCheckCircle className="text-green-500 mr-2" /> Priority Features
                                </li>
                            </ul>
                            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-900/[0.02] -z-10" />
                <div className="container mx-auto max-w-6xl relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">
                            What Our
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient"> Customers </span>
                            Say
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="flex flex-col justify-between bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <p className="text-gray-600 mb-6 italic">"Sanalpos pro eklentisi ile onlarca sitede kullanıyorum. Wordpress dünyasına kazandırılmış en yararlı ücretsiz eklentiye sahipler bu açıdan ne kadar takdir etsek az."</p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                        <span className="text-xl font-semibold">SB</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Sedat BEŞDOK</h4>
                                    <p className="text-gray-500 text-sm flex gap-1">
                                        <FaRegStar className="text-yellow-500 mr-1" />
                                        <FaRegStar className="text-yellow-500 mr-1" />
                                        <FaRegStar className="text-yellow-500 mr-1" />
                                        <FaRegStar className="text-yellow-500 mr-1" />
                                        <FaRegStar className="text-yellow-500 mr-1" />
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="flex flex-col justify-between bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <p className="text-gray-600 mb-6 italic">"Modül gerçekten mükemmel çalışıyor. Destek kısmı da hızlı ve güvenilir bir şekilde cevap veriyor. Tavsiye edeceğim güzel bir yazılım firması."</p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                        <span className="text-xl font-semibold">BÖ</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Berker Özgökcen</h4>
                                    <p className="text-gray-500 text-sm flex gap-1">
                                        <FaRegStar className="text-yellow-500 mr-1" />
                                        <FaRegStar className="text-yellow-500 mr-1" />
                                        <FaRegStar className="text-yellow-500 mr-1" />
                                        <FaRegStar className="text-yellow-500 mr-1" />
                                        <FaRegStar className="text-yellow-500 mr-1" />
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="flex flex-col justify-between bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <p className="text-gray-600 mb-6 italic">"Ücretsiz Sanalpos hizmeti aldım ve bu kadar ilgili ve hızlı bir şekilde dönüş oldukları için ayrıca çok teşekkür ederim."</p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                        <span className="text-xl font-semibold">AY</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Aygün Yıldız</h4>
                                    <p className="text-gray-500 text-sm flex gap-1">
                                        <FaRegStar className="text-yellow-500 mr-1" />
                                        <FaRegStar className="text-yellow-500 mr-1" />
                                        <FaRegStar className="text-yellow-500 mr-1" />
                                        <FaRegStar className="text-yellow-500 mr-1" />
                                        <FaRegStar className="text-yellow-500 mr-1" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-900/[0.02] -z-10" />
                <div className="container mx-auto max-w-6xl relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">
                            Get in
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient"> Touch </span>
                            With Us
                        </h2>
                        <p className="text-gray-600 text-xl max-w-2xl mx-auto">Have questions? We'd love to hear from you.</p>
                    </div>

                    <div className="">
                        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
                            <div className="flex items-center space-x-4 group">
                                <div className="bg-blue-50 p-4 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                                    <FaEnvelope className="text-blue-600 text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                                    <p className="text-gray-600">support@paythor.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="bg-blue-50 p-4 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                                    <FaPhone className="text-blue-600 text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="bg-blue-50 p-4 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                                    <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                                    <p className="text-gray-600">123 Payment Street, San Francisco, CA 94105</p>
                                </div>
                            </div>
                        </div> 

                    </div>
                </div>
            </section>

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
        </>
    );
};

export default LandingPage;