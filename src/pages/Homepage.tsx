"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Truck, 
  Shield, 
  RefreshCw, 
  Users, 
  Search, 
  ShoppingCart, 
  Star,
  Zap,
  Gift,
  Heart,
  TrendingUp,
  Clock,
  Award,
  Sparkles,
  Crown,
  Fire
} from "lucide-react"
import { getFeaturedProducts } from "../data/products"
import ProductCard from "../components/ProductCard"
import { useAuth } from "../contexts/AuthContext"

const Homepage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState(getFeaturedProducts())
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over $35",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Your information is protected",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "90-day return policy",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "Shop Together",
      description: "Create shopping rooms with friends",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
  ]

  const categories = [
    {
      name: "Electronics",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
      href: "/products?category=electronics",
      icon: "📱",
      color: "from-blue-600 to-purple-600"
    },
    {
      name: "Fashion",
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
      href: "/products?category=clothing",
      icon: "👗",
      color: "from-pink-600 to-rose-600"
    },
    {
      name: "Home & Kitchen",
      image: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg",
      href: "/products?category=home",
      icon: "🏠",
      color: "from-green-600 to-emerald-600"
    },
    {
      name: "Sports",
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg",
      href: "/products?category=sports",
      icon: "⚽",
      color: "from-orange-600 to-red-600"
    },
  ]

  const promoCards = [
    {
      title: "Up to 50% off",
      subtitle: "Electronics",
      description: "Latest gadgets at unbeatable prices",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
      link: "/products?category=electronics",
      size: "small",
      bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
      textColor: "text-white"
    },
    {
      title: "MEGA DEALS",
      subtitle: "Save money. Live better.",
      description: "Shop millions of products at everyday low prices. Now with collaborative shopping rooms!",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      link: "/products",
      size: "large",
      bgColor: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600",
      textColor: "text-white",
      isMain: true
    },
    {
      title: "TVs up to 25% off",
      subtitle: "Latest Models",
      description: "Smart TVs with incredible picture quality",
      image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg",
      link: "/products?category=electronics",
      size: "small",
      bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600",
      textColor: "text-white"
    },
    {
      title: "Apple Products",
      subtitle: "Genius Deals!",
      description: "iPhone, iPad, MacBook and more",
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
      link: "/products?category=electronics",
      size: "small",
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      textColor: "text-white"
    },
    {
      title: "Cooking & dining up to 40% off",
      subtitle: "Kitchen Essentials",
      description: "Everything you need for your kitchen",
      image: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg",
      link: "/products?category=home",
      size: "small",
      bgColor: "bg-gradient-to-br from-green-500 to-teal-600",
      textColor: "text-white"
    },
    {
      title: "Up to 30% off",
      subtitle: "College Essentials",
      description: "Everything students need",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
      link: "/products?category=clothing",
      size: "medium",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-600",
      textColor: "text-white"
    },
    {
      title: "Up to 65% off",
      subtitle: "Outdoor Gear",
      description: "Adventure awaits with premium gear",
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg",
      link: "/products?category=sports",
      size: "medium",
      bgColor: "bg-gradient-to-br from-emerald-500 to-green-600",
      textColor: "text-white"
    },
    {
      title: "Shop Together",
      subtitle: "Create rooms with friends",
      description: "Collaborative shopping experience",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      link: user ? "/rooms/create" : "/register",
      size: "small",
      bgColor: "bg-gradient-to-br from-violet-500 to-purple-600",
      textColor: "text-white"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                Save Money.
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Live Better.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Discover millions of products at everyday low prices. Shop together with friends in collaborative rooms!
              </p>
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/products"
                className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 hover:scale-105 flex items-center space-x-2"
              >
                <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span>Start Shopping</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {user ? (
                <Link
                  to="/rooms/create"
                  className="group bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105 flex items-center space-x-2"
                >
                  <Users className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span>Create Shopping Room</span>
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="group bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105 flex items-center space-x-2"
                >
                  <Sparkles className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span>Join Walmart</span>
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Promotional Grid */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4 flex items-center justify-center space-x-3">
              <Fire className="h-10 w-10 text-red-500" />
              <span>Hot Deals</span>
              <Fire className="h-10 w-10 text-red-500" />
            </h2>
            <p className="text-xl text-gray-600">Limited time offers you can't miss!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promoCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`
                  ${card.size === "large" ? "lg:col-span-2 lg:row-span-2" : ""}
                  ${card.size === "medium" ? "lg:col-span-1" : ""}
                  ${card.size === "small" ? "lg:col-span-1" : ""}
                  ${card.bgColor} rounded-3xl overflow-hidden relative group cursor-pointer shadow-2xl hover:shadow-3xl transition-all duration-500
                  ${card.isMain ? "min-h-[400px]" : "min-h-[250px]"}
                `}
              >
                <Link to={card.link} className="block h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="relative p-8 h-full flex flex-col justify-between z-10">
                    <div>
                      <motion.h3 
                        className={`font-black mb-3 ${card.isMain ? "text-4xl" : "text-2xl"} ${card.textColor} drop-shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {card.title}
                      </motion.h3>
                      <p className={`${card.isMain ? "text-xl" : "text-lg"} ${card.textColor} mb-3 font-semibold drop-shadow-md`}>
                        {card.subtitle}
                      </p>
                      {card.description && (
                        <p className={`${card.textColor} text-sm opacity-90 drop-shadow-md`}>
                          {card.description}
                        </p>
                      )}
                    </div>
                    
                    {card.image && (
                      <div className="mt-6 flex-1 flex items-end">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-32 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    
                    <div className="mt-6">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className={`inline-flex items-center ${card.isMain ? "bg-white/20 backdrop-blur-lg px-6 py-3 rounded-2xl" : "bg-white/20 backdrop-blur-lg px-4 py-2 rounded-xl"} ${card.textColor} font-bold text-sm shadow-lg`}
                      >
                        <span>Shop Now</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-3xl mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
          <div className="relative px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4 flex items-center justify-center space-x-3">
                <Award className="h-10 w-10 text-blue-600" />
                <span>Why Choose Walmart?</span>
              </h2>
              <p className="text-xl text-gray-600">Experience the best in online shopping</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`text-center p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 ${feature.bgColor} border border-gray-100`}
                >
                  <motion.div 
                    className={`bg-gradient-to-br ${feature.color} p-6 rounded-3xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <feature.icon className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Categories Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4 flex items-center justify-center space-x-3">
              <TrendingUp className="h-10 w-10 text-green-600" />
              <span>Shop by Category</span>
            </h2>
            <p className="text-xl text-gray-600">Discover what you love</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <Link to={category.href} className="block">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="text-6xl mb-4"
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="text-white text-2xl font-black mb-2 drop-shadow-lg">
                        {category.name}
                      </h3>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full"
                      >
                        <span className="text-white font-semibold text-sm">Explore Now</span>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Products */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-2 flex items-center space-x-3">
                <Crown className="h-10 w-10 text-yellow-600" />
                <span>Featured Products</span>
              </h2>
              <p className="text-xl text-gray-600">Hand-picked favorites just for you</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/products"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2"
              >
                <span>View All</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="animate-pulse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-64 rounded-3xl mb-4"></div>
                  <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-6 rounded-xl mb-2"></div>
                  <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-6 rounded-xl w-3/4"></div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-3xl p-16 text-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl animate-pulse delay-1000" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h2 className="text-5xl font-black text-white mb-6 drop-shadow-lg">
                Ready to start shopping together?
              </h2>
              <p className="text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Create a shopping room and invite friends to shop collaboratively. Share carts, chat in real-time, and make shopping social!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {user ? (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/rooms/create"
                      className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 flex items-center space-x-3"
                    >
                      <Users className="h-7 w-7" />
                      <span>Create Your First Room</span>
                      <ArrowRight className="h-7 w-7" />
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/register"
                      className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 flex items-center space-x-3"
                    >
                      <Sparkles className="h-7 w-7" />
                      <span>Get Started Today</span>
                      <ArrowRight className="h-7 w-7" />
                    </Link>
                  </motion.div>
                )}
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/products"
                    className="bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/30 transition-all duration-300 border-2 border-white/30 flex items-center space-x-3"
                  >
                    <ShoppingCart className="h-7 w-7" />
                    <span>Browse Products</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default Homepage