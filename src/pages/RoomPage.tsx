@@ .. @@
                     <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                       <div className="flex justify-between items-center mb-4">
                         <span className="text-lg font-semibold text-gray-900">Total: ${getSharedCartTotal().toFixed(2)}</span>
                         <div className="flex space-x-3">
                          <button 
                            onClick={() => navigate(`/products?roomId=${id}`)}
                            className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
                          >
                            <Package className="h-4 w-4" />
                            <span>Add More Items</span>
                          </button>
                           <button 
                             onClick={proceedToSplitCheckout}
                            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
                           >
                            <Users className="h-4 w-4" />
                            <span>Split Payment</span>
                           </button>
                           <button 
                             onClick={proceedToFullCheckout}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
                <div className="mt-2 flex space-x-2">
                  <button
                    onClick={proceedToSplitCheckout}
                    className="flex-1 bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700 transition-colors"
                  >
                    Split Pay
                  </button>
                  <button
                    onClick={proceedToFullCheckout}
                    className="flex-1 bg-white text-blue-600 border border-blue-600 px-3 py-1 rounded text-xs hover:bg-blue-50 transition-colors"
                  >
                    Full Checkout
                  </button>
                </div>
                           >
                            <CreditCard className="h-4 w-4" />
                            <span>Full Checkout</span>
                           </button>
                         </div>
                       </div>
                     </div>