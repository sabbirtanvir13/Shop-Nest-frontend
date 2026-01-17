// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";

// const ProductDetailsPage = () => {
//   const { slug } = useParams(); // useParams থেকে slug নাও

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!slug) return;

//     fetch(`http://localhost:5000/items/${slug}`)
//       .then(res => {
//         if (!res.ok) throw new Error("Product not found");
//         return res.json();
//       })
//       .then(data => {
//         setProduct(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setProduct(null);
//         setLoading(false);
//       });
//   }, [slug]);

//   if (loading)
//     return <p className="text-center mt-20 text-gray-500">Loading product...</p>;
//   if (!product)
//     return <p className="text-center mt-20 text-red-500">Product not found!</p>;

//   return (
//     <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row gap-10">
//       {/* Image */}
//       <div className="relative w-full md:w-1/2 h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
//         <Image
//           src={product.image}
//           alt={product.name}
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="flex-1 flex flex-col justify-between">
//         <div>
//           <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//           <p className="text-gray-600 mb-6">{product.description}</p>
//           <p className="text-2xl font-semibold mb-6 text-blue-600">
//             ৳ {product.price}
//           </p>
//         </div>

//         <button className="py-3 px-6 w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:opacity-90 transition">
//           Buy Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsPage;


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

    fetch(`http://localhost:5000/items/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setProduct(null);
        setLoading(false);
      });
  }, [slug]);

  if (loading)
    return <p className="text-center mt-20 text-gray-500 animate-pulse">Loading product...</p>;
  if (!product)
    return <p className="text-center mt-20 text-red-500">Product not found!</p>;

  return (
    <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row gap-10">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        {/* Price Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-2xl font-semibold shadow-lg">
          ৳ {product.price}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between  rounded-3xl p-6 md:p-10 space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{product.name}</h1>
          <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

          {/* Additional Info */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 mb-6">
            <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
              <p className="font-semibold">Category</p>
              <p>{product.category}</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
              <p className="font-semibold">Brand</p>
              <p>{product.brand}</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
              <p className="font-semibold">Rating</p>
              <p>{product.rating} ⭐</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
              <p className="font-semibold">Stock</p>
              <p className={product.stock ? "text-green-600" : "text-red-600"}>
                {product.stock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
              <p className="font-semibold">Discount</p>
              <p>{product.discount}%</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
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
