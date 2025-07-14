@@ .. @@
                     <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                       <div className="flex justify-between items-center mb-4">
                         <span className="text-lg font-semibold text-gray-900">Total: ${getSharedCartTotal().toFixed(2)}</span>
                         <div className="flex space-x-3">
+                          <button 
+                            onClick={() => navigate(`/products?roomId=${id}`)}
+                            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
+                          >
+                            Add More Items
+                          </button>
                           <button 
                             onClick={proceedToSplitCheckout}
-                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
+                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                           >
                             Split Payment
                           </button>
                           <button 
                             onClick={proceedToFullCheckout}
-                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
+                            className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
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
                             Full Checkout
                           </button>
                         </div>
                       </div>
                     </div>