"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShoppingCart,
  Search,
  User,
  Menu,
  X,
  LogOut,
  Settings,
  Package,
  Users,
  MapPin,
  ChevronDown,
  Heart,
  Bell,
  Gift,
  Zap,
  Star,
  Sparkles
} from "lucide-react"
import { useAuth } from "../contexts/AuthContext"
import { useCart } from "../contexts/CartContext"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isDepartmentMenuOpen, setIsDepartmentMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const { user, logout } = useAuth()
  const { getCartCount, getCartTotal } = useCart()
  const navigate = useNavigate()
  const userMenuRef = useRef<HTMLDivElement>(null)
  const departmentMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
      if (departmentMenuRef.current && !departmentMenuRef.current.contains(event.target as Node)) {
        setIsDepartmentMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleLogout = () => {
    logout()
    setIsUserMenuOpen(false)
    navigate("/")
  }

  const departments = [
    { name: "Electronics", href: "/products?category=electronics", icon: "📱", color: "from-blue-500 to-purple-600" },
    { name: "Fashion", href: "/products?category=clothing", icon: "👗", color: "from-pink-500 to-rose-600" },
    { name: "Home & Garden", href: "/products?category=home", icon: "🏠", color: "from-green-500 to-emerald-600" },
    { name: "Sports & Outdoors", href: "/products?category=sports", icon: "⚽", color: "from-orange-500 to-red-600" },
    { name: "Beauty & Personal Care", href: "/products?category=beauty", icon: "💄", color: "from-purple-500 to-pink-600" },
    { name: "Toys & Games", href: "/products?category=toys", icon: "🧸", color: "from-yellow-500 to-orange-600" },
    { name: "Grocery & Essentials", href: "/products?category=grocery", icon: "🛒", color: "from-teal-500 to-cyan-600" },
    { name: "Auto & Tires", href: "/products?category=auto", icon: "🚗", color: "from-gray-500 to-slate-600" },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white sticky top-0 z-50 w-full shadow-2xl backdrop-blur-lg"
    >
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-900 py-2 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4"
            >
              <div className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition-all duration-300 group">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <MapPin className="h-4 w-4 group-hover:text-yellow-400" />
                </motion.div>
                <span className="group-hover:text-yellow-300">Pickup or delivery?</span>
                <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-300" />
              </div>
            </motion.div>
            <div className="flex items-center space-x-6">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/orders" className="hover:text-yellow-300 transition-all duration-300 hidden sm:inline flex items-center space-x-1">
                  <Package className="h-4 w-4" />
                  <span>Reorder My Items</span>
                </Link>
              </motion.div>
              <div className="relative" ref={userMenuRef}>
                {user ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 hover:text-yellow-300 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-blue-900">
                        {user.firstName?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="hidden sm:inline group-hover:text-yellow-300">Hi, {user.firstName}</span>
                    <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-300" />
                  </motion.button>
                ) : (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link to="/login" className="flex items-center space-x-2 hover:text-yellow-300 transition-all duration-300 group">
                      <User className="h-4 w-4 group-hover:text-yellow-400" />
                      <span>Sign In Account</span>
                    </Link>
                  </motion.div>
                )}
                <AnimatePresence>
                  {isUserMenuOpen && user && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl py-2 z-50 border border-gray-100 backdrop-blur-lg"
                    >
                      <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-2xl">
                        <p className="text-sm font-semibold text-gray-900">Hello, {user.firstName}! 👋</p>
                        <p className="text-xs text-gray-600">{user.email}</p>
                      </div>
                      {[
                        { icon: Settings, label: "Account Settings", href: "/profile" },
                        { icon: Package, label: "Purchase History", href: "/orders" },
                        { icon: Users, label: "Shopping Rooms", href: "/rooms" },
                        { icon: Heart, label: "Wishlist", href: "/wishlist" },
                        { icon: Bell, label: "Notifications", href: "/notifications" },
                      ].map((item, index) => (
                        <motion.div
                          key={item.label}
                          whileHover={{ x: 4, backgroundColor: "#f8fafc" }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            to={item.href}
                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <item.icon className="h-4 w-4 mr-3 text-gray-500" />
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <motion.button
                          whileHover={{ x: 4, backgroundColor: "#fef2f2" }}
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:text-red-700 transition-colors"
                        >
                          <LogOut className="h-4 w-4 mr-3" />
                          Sign Out
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/cart" className="flex items-center space-x-3 hover:text-yellow-300 transition-all duration-300 relative group">
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <ShoppingCart className="h-5 w-5 group-hover:text-yellow-400" />
                    </motion.div>
                    {(getCartCount ? getCartCount() : 0) > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg"
                      >
                        {getCartCount ? getCartCount() : 0}
                      </motion.span>
                    )}
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs leading-none font-semibold">
                      ${getCartTotal ? getCartTotal().toFixed(2) : "0.00"}
                    </span>
                    <span className="text-xs leading-none opacity-75">
                      {getCartCount ? getCartCount() : 0} {(getCartCount ? getCartCount() : 0) === 1 ? "item" : "items"}
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8 w-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/" className="flex items-center space-x-3 flex-shrink-0 group">
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Sparkles className="h-6 w-6 text-blue-900" />
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full opacity-75"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-white group-hover:text-yellow-300 transition-colors duration-300">
                      Walmart
                    </span>
                    <span className="text-xs text-blue-200 font-medium -mt-1">
                      Save money. Live better.
                    </span>
                  </div>
                </Link>
              </motion.div>

              {/* Enhanced Search Bar */}
              <div className="flex-1 max-w-2xl">
                <motion.form 
                  onSubmit={handleSearch} 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`relative transition-all duration-300 ${isSearchFocused ? 'transform scale-105' : ''}`}>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                      placeholder="Search everything at Walmart online and in store"
                      className="w-full px-6 py-4 text-gray-900 bg-white rounded-full focus:outline-none focus:ring-4 focus:ring-yellow-400/50 text-base shadow-lg transition-all duration-300 border-2 border-transparent focus:border-yellow-400"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center shadow-lg"
                      >
                        <Search className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                  {isSearchFocused && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50"
                    >
                      <div className="text-sm text-gray-600 mb-2">Popular searches:</div>
                      <div className="flex flex-wrap gap-2">
                        {["iPhone", "Groceries", "Home Decor", "Clothing", "Electronics"].map((term) => (
                          <motion.button
                            key={term}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-gray-100 hover:bg-blue-100 rounded-full text-sm text-gray-700 hover:text-blue-700 transition-colors"
                            onClick={() => setSearchQuery(term)}
                          >
                            {term}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.form>
              </div>

              {/* Mobile Menu Button */}
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="lg:hidden text-white flex-shrink-0 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Bar */}
      <div className="bg-white border-t border-blue-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-3 text-sm">
            {/* Departments Dropdown */}
            <div className="relative" ref={departmentMenuRef}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsDepartmentMenuOpen(!isDepartmentMenuOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold group"
              >
                <Menu className="h-4 w-4 group-hover:text-blue-600" />
                <span>Departments</span>
                <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-300" />
              </motion.button>
              <AnimatePresence>
                {isDepartmentMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl py-4 z-50 border border-gray-100"
                  >
                    <div className="grid grid-cols-2 gap-2 px-4">
                      {departments.map((dept, index) => (
                        <motion.div
                          key={dept.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.02, x: 4 }}
                        >
                          <Link
                            to={dept.href}
                            className="flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group"
                            onClick={() => setIsDepartmentMenuOpen(false)}
                          >
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${dept.color} flex items-center justify-center text-white text-lg mr-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              {dept.icon}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {dept.name}
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { label: "Home", href: "/", icon: "🏠" },
                { label: "Grocery & Essentials", href: "/products?category=grocery", icon: "🛒" },
                { label: "Get It Fast", href: "/products?featured=true", icon: "⚡" },
                { label: "New Arrivals", href: "/products?new=true", icon: "✨" },
                { label: "Deals", href: "/products?deals=true", icon: "🔥" },
                { label: "Electronics", href: "/products?category=electronics", icon: "📱" },
                { label: "Fashion", href: "/products?category=clothing", icon: "👗" },
              ].map((link, index) => (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium flex items-center space-x-1 group"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
              {user && (
                <motion.div whileHover={{ scale: 1.05, y: -2 }}>
                  <Link
                    to="/rooms"
                    className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2 rounded-full group"
                  >
                    <Users className="h-4 w-4 group-hover:text-blue-600" />
                    <span>Shopping Rooms</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-green-400 rounded-full"
                    />
                  </Link>
                </motion.div>
              )}
            </div>

            {/* More Menu */}
            <div className="ml-auto hidden lg:block">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-blue-600 font-semibold cursor-pointer hover:text-blue-800 transition-all duration-300 flex items-center space-x-1"
              >
                <Gift className="h-4 w-4" />
                <span>More</span>
              </motion.span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-b from-white to-blue-50 border-t border-blue-200"
          >
            <div className="px-4 py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative mb-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search everything at Walmart..."
                  className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900 shadow-lg"
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              </form>

              {/* Mobile Navigation */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <span>Departments</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {departments.slice(0, 6).map((dept, index) => (
                      <motion.div
                        key={dept.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={dept.href}
                          className="flex items-center p-3 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 group"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${dept.color} flex items-center justify-center text-white text-sm mr-3 group-hover:scale-110 transition-transform duration-300`}>
                            {dept.icon}
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                            {dept.name}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>Quick Links</span>
                  </h3>
                  <div className="space-y-2">
                    {[
                      { label: "Home", href: "/", icon: "🏠" },
                      { label: "Deals", href: "/products?deals=true", icon: "🔥" },
                      { label: "New Arrivals", href: "/products?new=true", icon: "✨" },
                    ].map((link, index) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={link.href}
                          className="flex items-center py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="mr-3 text-lg">{link.icon}</span>
                          <span className="font-medium">{link.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                    {user && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Link
                          to="/rooms"
                          className="flex items-center py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Users className="h-5 w-5 mr-3 text-blue-600" />
                          <span className="font-medium">Shopping Rooms</span>
                          <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </div>

                {user && (
                  <div className="pt-4">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                      <User className="h-5 w-5 text-green-600" />
                      <span>Account</span>
                    </h3>
                    <div className="space-y-2">
                      {[
                        { label: "Account Settings", href: "/profile", icon: Settings },
                        { label: "Purchase History", href: "/orders", icon: Package },
                      ].map((link, index) => (
                        <motion.div
                          key={link.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={link.href}
                            className="flex items-center py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <link.icon className="h-5 w-5 mr-3" />
                            <span className="font-medium">{link.label}</span>
                          </Link>
                        </motion.div>
                      ))}
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        onClick={() => {
                          handleLogout()
                          setIsMenuOpen(false)
                        }}
                        className="flex items-center w-full py-3 px-4 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-300"
                      >
                        <LogOut className="h-5 w-5 mr-3" />
                        <span className="font-medium">Sign Out</span>
                      </motion.button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar