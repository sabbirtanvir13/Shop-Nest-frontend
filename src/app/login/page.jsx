// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { FcGoogle } from "react-icons/fc";

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      
//       {/* Card */}
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
//         {/* Logo / Title */}
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">Welcome Back 👋</h1>
//           <p className="text-sm text-gray-500 mt-2">
//             Login to continue to <span className="font-semibold">ShopNest</span>
//           </p>
//         </div>

//         {/* Form */}
//         <form className="space-y-4">
//           <div>
//             <label className="text-sm text-gray-600">Email</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600">Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="button"
//             className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-1 h-px bg-gray-200"></div>
//           <span className="px-3 text-sm text-gray-400">OR</span>
//           <div className="flex-1 h-px bg-gray-200"></div>
//         </div>

//         {/* Google Login */}
//         <button
//           type="button"
//           className="w-full flex items-center justify-center gap-3 border py-3 rounded-xl hover:bg-gray-50 transition"
//         >
//           <FcGoogle size={22} />
//           <span className="font-medium text-gray-700">
//             Continue with Google
//           </span>
//         </button>

//         {/* Footer */}
//         <p className="text-sm text-center text-gray-500 mt-6">
//           Don’t have an account?{" "}
//          <Link href='register'> <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
//             Sign up
//           </span></Link>
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Hardcoded credentials
    const validEmail = "admin@example.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
     
      Cookies.set("loggedIn", "true", { expires: 100 }); 
      router.push("/products"); 
    } else {
      // Error
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Welcome Back 👋
        </h1>

        <p className="text-sm text-gray-500 text-center mb-6">
          Login to continue to <span className="font-semibold">ShopNest</span>
        </p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="button"
            onClick={handleLogin}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link href="/register">
            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
              Sign up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
