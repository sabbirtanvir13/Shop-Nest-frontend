// "use client";

// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="bg-white border-b shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
//         {/* Left: Logo */}
//         <Link href="/" className="text-xl font-bold text-blue-600">
//       ShopNest
//         </Link>

//         {/* Center: Navigation */}
//         <div className="flex gap-6 absolute left-1/2 -translate-x-1/2">
//           <Link href="/" className="hover:text-blue-600 font-medium">
//             Home
//           </Link>
//           <Link href="/products" className="hover:text-blue-600 font-medium">
//            Product
//           </Link>
//           <Link href="/about" className="hover:text-blue-600 font-medium">
//             About
//           </Link>
//           <Link href="/contact" className="hover:text-blue-600 font-medium">
//             Contact
//           </Link>
//           <Link href="/Add_Products" className="hover:text-blue-600 font-medium">
//             Add Products
//           </Link>
//         </div>

//         {/* Right: Login */}
//         <Link
//           href="/login"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </Link>
//       </div>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Navbar() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isLogged = Cookies.get("loggedIn");
    setLoggedIn(!!isLogged);
  }, []);

  const handleLogout = () => {
    Cookies.remove("loggedIn");
    setLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          ShopNest
        </Link>

        {/* Center: Navigation */}
        <div className="flex gap-6 absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600 font-medium">
            Product
          </Link>
          <Link href="/about" className="hover:text-blue-600 font-medium">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600 font-medium">
            Contact
          </Link>
          <Link href="/Add_Products" className="hover:text-blue-600 font-medium">
            Add Products
          </Link>
        </div>

        {/* Right: Login / Logout */}
        {loggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
