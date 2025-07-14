@@ .. @@
               <Link
                 to="/products?category=clothing"
                 className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
               >
                 Fashion
               </Link>
+              <Link
+                to="/"
+                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
+              >
+                Home
+              </Link>
               {user && (
                 <Link
                   to="/rooms"
               )
               }