@@ .. @@
                 <div className="flex justify-between text-sm">
                   <span className="text-gray-600">Shipping</span>
-                  <span className="font-medium">${shipping.toFixed(2)}</span>
+                  <span className="font-medium">
+                    {getCartTotal() === 0 ? '$0.00' : shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
+                  </span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-gray-600">Tax</span>
                   <span className="font-medium">${tax.toFixed(2)}</span>
                 </div>