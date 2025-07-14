@@ .. @@
               <div className="space-y-3">
                 <div className="flex justify-between">
                   <span className="text-gray-600">Subtotal</span>
                   <span className="font-medium">${getCartSubtotal().toFixed(2)}</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-600">Shipping</span>
                   <span className="font-medium">
                     {getCartSubtotal() === 0 ? '$0.00' : getShipping() === 0 ? (
                       <span className="text-green-600 font-bold">FREE</span>
                     ) : `$${getShipping().toFixed(2)}`}
                   </span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-600">Tax</span>
                   <span className="font-medium">${getTax().toFixed(2)}</span>
                 </div>
                 <div className="border-t pt-3">
                   <div className="flex justify-between">
                     <span className="text-lg font-semibold text-gray-900">Total</span>
                     <span className="text-lg font-semibold text-gray-900">
                       ${getCartTotal().toFixed(2)}
                     </span>
                   </div>
                 </div>
               </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckout}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                {user ? 'Proceed to Checkout' : 'Sign In to Checkout'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>