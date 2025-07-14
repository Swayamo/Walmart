import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Sparkles,
  Heart,
  Shield,
  Truck,
  RefreshCw,
  Award,
  Star
} from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Youtube, href: "#", color: "hover:text-red-600" },
  ];

  const quickLinks = [
    { name: "All Products", href: "/products" },
    { name: "Electronics", href: "/products?category=electronics" },
    { name: "Fashion", href: "/products?category=clothing" },
    { name: "Home & Kitchen", href: "/products?category=home" },
    { name: "Sports", href: "/products?category=sports" },
    { name: "Beauty", href: "/products?category=beauty" },
  ];

  const customerService = [
    { name: "Help Center", href: "#" },
    { name: "Track Your Order", href: "/orders" },
    { name: "Return Policy", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Size Guide", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const features = [
    { icon: Truck, text: "Free shipping on orders over $35" },
    { icon: Shield, text: "Secure checkout & data protection" },
    { icon: RefreshCw, text: "90-day hassle-free returns" },
    { icon: Award, text: "Price match guarantee" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white mt-auto relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Features Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-white/10 py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-200">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Sparkles className="h-7 w-7 text-blue-900" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-black text-white">Walmart</h3>
                  <p className="text-sm text-blue-200">Save money. Live better.</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your one-stop shop for everything you need. Experience the future of collaborative shopping with friends and family.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 ${social.color} transition-all duration-300 hover:bg-white/20`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>Quick Links</span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-yellow-400 transition-colors" />
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Customer Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-400" />
                <span>Customer Service</span>
              </h3>
              <ul className="space-y-3">
                {customerService.map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a 
                      href={service.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-yellow-400 transition-colors" />
                      <span>{service.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-400" />
                <span>Contact Us</span>
              </h3>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10"
                >
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-lg">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">1-800-WALMART</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-2 rounded-lg">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">help@walmart.com</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-2 rounded-lg">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">Bentonville, AR</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © 2024 Walmart. All rights reserved. Made with{' '}
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-red-400"
                  >
                    ❤️
                  </motion.span>
                  {' '}for amazing shopping experiences.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;