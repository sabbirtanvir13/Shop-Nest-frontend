// "use client";

// import { FcGoogle } from "react-icons/fc";

// export default function RegisterPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 px-4">
      
//       {/* Card */}
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
//         {/* Header */}
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">Create Account </h1>
//           <p className="text-sm text-gray-500 mt-2">
//             Join <span className="font-semibold">ShopNest</span> today
//           </p>
//         </div>

//         {/* Form */}
//         <form className="space-y-4">
//           <div>
//             <label className="text-sm text-gray-600">Full Name</label>
//             <input
//               type="text"
//               placeholder="Your name"
//               className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600">Email</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600">Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600">Confirm Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <button
//             type="button"
//             className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
//           >
//             Register
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-1 h-px bg-gray-200"></div>
//           <span className="px-3 text-sm text-gray-400">OR</span>
//           <div className="flex-1 h-px bg-gray-200"></div>
//         </div>

//         {/* Google Register */}
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
//           Already have an account?{" "}
//           <a
//             href="/login"
//             className="text-indigo-600 font-semibold hover:underline"
//           >
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = () => {
    // Simple validation
    if (!fullName || !email || !password || !confirmPassword) {
      setError("All fields are required!");
      setSuccess("");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setSuccess("");
      return;
    }

    // Mock registration success
    setError("");
    setSuccess("Registration successful! Redirecting to Items page...");

    // Mock login after registration
    Cookies.set("loggedIn", "true", { expires: 1 });
    
    setTimeout(() => {
      router.push("/items"); // redirect to protected page
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Create Account
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Join <span className="font-semibold">ShopNest</span> today
        </p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <button
            type="button"
            onClick={handleRegister}
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
