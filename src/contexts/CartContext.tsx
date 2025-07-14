@@ .. @@
   const getShipping = () => {
     const subtotal = getCartSubtotal();
-    return subtotal > 35 ? 0 : 5.99; // Free shipping over $35
+    return subtotal > 0 && subtotal <= 35 ? 5.99 : 0; // Free shipping over $35, no shipping on empty cart
   };
 
   const getCartTotal = () => {