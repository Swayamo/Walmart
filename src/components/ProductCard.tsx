import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart, Users, Zap, Crown, Fire } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import axios from 'axios';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleAddToSharedCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const currentRoomId = new URLSearchParams(window.location.search).get('roomId');
    
    if (currentRoomId) {
      try {
        const token = localStorage.getItem('token');
        await axios.put(`http://localhost:3001/api/rooms/${currentRoomId}/cart`, {
          productId: product.id,
          quantity: 1,
          action: 'add',
          productData: {
            name: product.name,
            price: product.price,
            images: product.images || [product.imageUrl],
            description: product.description
          }
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        toast.success('Added to shared cart');
      } catch (error) {
        console.error('Error adding to shared cart:', error);
        toast.error('Failed to add to shared cart');
      }
    }
  };

  const isInRoomContext = new URLSearchParams(window.location.search).get('roomId');

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 group ${className}`}
    >
      <Link to={`/products/${product.id}`}>
        <div className="relative overflow-hidden">
          <motion.img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            whileHover={{ scale: 1.1 }}
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            {product.isOnSale && product.originalPrice && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1"
              >
                <Fire className="h-3 w-3" />
                <span>-{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%</span>
              </motion.div>
            )}
            {product.isFeatured && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1"
              >
                <Crown className="h-3 w-3" />
                <span>Featured</span>
              </motion.div>
            )}
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-lg rounded-full shadow-lg hover:bg-white transition-all duration-300 group"
          >
            <Heart className="h-5 w-5 text-gray-600 group-hover:text-red-500 transition-colors" />
          </motion.button>

          {/* Quick Actions Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute inset-x-4 bottom-4 flex space-x-2"
          >
            <motion.button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add</span>
            </motion.button>
            
            {isInRoomContext && (
              <motion.button
                onClick={handleAddToSharedCart}
                disabled={product.stock === 0}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-3 rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                title="Add to Shared Cart"
              >
                <Users className="h-4 w-4" />
              </motion.button>
            )}
          </motion.div>
        </div>
        
        <div className="p-6">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 font-medium">{product.brand}</p>
          </div>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2 font-medium">
              {product.rating.toFixed(1)} ({product.reviewCount})
            </span>
          </div>
          
          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {product.isOnSale && (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-bold"
              >
                SALE
              </motion.div>
            )}
          </div>
          
          {/* Stock Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {product.stock > 0 ? (
                <>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-green-600 font-semibold">
                    {product.stock} in stock
                  </span>
                </>
              ) : (
                <>
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  <span className="text-sm text-red-600 font-semibold">Out of stock</span>
                </>
              )}
            </div>
            
            {product.stock > 0 && product.stock <= 5 && (
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="flex items-center space-x-1 bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-bold"
              >
                <Zap className="h-3 w-3" />
                <span>Low Stock</span>
              </motion.div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;