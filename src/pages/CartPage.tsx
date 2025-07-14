@@ .. @@
               <div className="space-y-3">
                 <div className="flex justify-between">
                   <span className="text-gray-600">Subtotal</span>
                   <span className="font-medium">${getCartSubtotal().toFixed(2)}</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-600">Shipping</span>
-                  <span className="font-medium">${getShipping().toFixed(2)}</span>
+                  <span className="font-medium">
+                    {getCartSubtotal() === 0 ? '$0.00' : getShipping() === 0 ? 'FREE' : `$${getShipping().toFixed(2)}`}
+                  </span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-600">Tax</span>
                   <span className="font-medium">${getTax().toFixed(2)}</span>
                 </div>