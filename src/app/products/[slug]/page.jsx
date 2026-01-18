

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProductDetailsPage = () => {
  const { slug } = useParams(); 

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://shop-nest-server-pied.vercel.app/items/${slug}`);
        if (!res.ok) throw new Error("Product not found");

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading)
    return (
      <p className="text-center mt-20 text-gray-500 animate-pulse">
        Loading product...
      </p>
    );

  if (!product)
    return (
      <p className="text-center mt-20 text-red-500">
        Product not found!
      </p>
    );

  return (
    <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row gap-10">
      {/* Image */}
      <div className="relative w-full md:w-1/2 h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-2xl font-semibold shadow-lg">
          ৳ {product.price}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between rounded-3xl p-6 md:p-10 space-y-6 b">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 mb-6">
            <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
              <p className="font-semibold">Category</p>
              <p>{product.category || "General"}</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
              <p className="font-semibold">Brand</p>
              <p>{product.brand || "Unknown"}</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
              <p className="font-semibold">Rating</p>
              <p>{product.rating || 0} ⭐</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
              <p className="font-semibold">Stock</p>
              <p
                className={product.stock ? "text-green-600" : "text-red-600"}
              >
                {product.stock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
              <p className="font-semibold">Discount</p>
              <p>{product.discount || 0}%</p>
            </div>
          </div>
        </div>

        <button
          disabled={!product.stock}
          className={`py-3 px-6 w-full md:w-auto text-lg font-semibold rounded-xl text-white transition ${
            product.stock
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transform shadow-lg"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {product.stock ? "Buy Now" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;


// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import { CheckCircle } from "lucide-react";

// export default function ProductDetailsPage() {
//   const { _id } = useParams(); // URL থেকে MongoDB _id নেওয়া হচ্ছে
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!_id) return;

//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/items/${_id}`);
        
//         if (res.status === 404) {
//           console.warn("Product not found on server");
//           setProduct(null);
//           return;
//         }

//         if (!res.ok) throw new Error("Server error");

//         const data = await res.json();
//         setProduct(data);
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct(); // ✅ ফাংশন কল করা জরুরি
//   }, [_id]);

//   // Loading state
//   if (loading)
//     return (
//       <p className="text-center mt-20 text-gray-500 animate-pulse">
//         Loading product...
//       </p>
//     );

//   // Product not found
//   if (!product)
//     return (
//       <p className="text-center mt-20 text-red-500">
//         Product not found!
//       </p>
//     );

//   // Product data destructure
//   const {
//     name,
//     description,
//     image,
//     price,
//     category,
//     brand,
//     stock,
//     rating,
//     discount,
//     features
//   } = product;

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       {/* Top Section */}
//       <div className="grid md:grid-cols-2 gap-10">
//         {/* Product Image */}
//         <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
//           <Image
//             src={image || "/fallback-image.png"}
//             alt={name || "Product Image"}
//             width={600}
//             height={420}
//             className="w-full h-[420px] object-cover"
//             priority
//           />
//           {/* Price Badge */}
//           <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-2xl font-semibold shadow-lg">
//             ৳ {price}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="flex-1 flex flex-col justify-between rounded-3xl p-6 md:p-10 space-y-6 bg-white shadow-md">
//           <div>
//             <span className="inline-block mb-3 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
//               {category || "General"}
//             </span>
//             <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{name}</h1>
//             <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

//             {/* Additional Info */}
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 mb-6">
//               <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
//                 <p className="font-semibold">Brand</p>
//                 <p>{brand || "Unknown"}</p>
//               </div>
//               <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
//                 <p className="font-semibold">Rating</p>
//                 <p>{rating || 0} ⭐</p>
//               </div>
//               <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
//                 <p className="font-semibold">Stock</p>
//                 <p className={stock ? "text-green-600" : "text-red-600"}>
//                   {stock ? "In Stock" : "Out of Stock"}
//                 </p>
//               </div>
//               <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
//                 <p className="font-semibold">Discount</p>
//                 <p>{discount || 0}%</p>
//               </div>
//             </div>
//           </div>

//           {/* Buy Button */}
//           <button
//             disabled={!stock}
//             className={`py-3 px-6 w-full md:w-auto text-lg font-semibold rounded-xl text-white transition ${
//               stock
//                 ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transform shadow-lg"
//                 : "bg-gray-400 cursor-not-allowed"
//             }`}
//           >
//             {stock ? "Buy Now" : "Out of Stock"}
//           </button>
//         </div>
//       </div>

//       {/* Features Section */}
//       {features?.length > 0 && (
//         <div className="mt-14">
//           <h2 className="text-2xl font-semibold mb-6">Product Features</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {features.map((f, i) => (
//               <div key={i} className="flex gap-3 p-5 border rounded-xl">
//                 <CheckCircle className="text-blue-600 mt-1" />
//                 <p>{f}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
