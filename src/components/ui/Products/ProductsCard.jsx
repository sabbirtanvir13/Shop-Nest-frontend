// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";

// // export default function ProductsCard({ item }) {
// //     return (
// //         <div className="w-full max-w-sm bg-white rounded-3xl shadow-md overflow-hidden group">

// //             {/* Image */}
// //             <div className="relative h-60 w-full overflow-hidden">
// //                 <Image
// //                     src={item.image}
// //                     alt={item.name}
// //                     fill
// //                     className="object-cover group-hover:scale-110 transition-transform duration-500"
// //                 />

// //                 {/* Price Badge */}
// //                 <span className="absolute top-4 left-4 bg-black/70 text-white text-sm px-4 py-1 rounded-full">
// //                     ৳ {item.price}
// //                 </span>
// //             </div>

// //             {/* Content */}
// //             <div className="p-6 space-y-3">
// //                 <h3 className="text-xl font-semibold text-gray-800">
// //                     {item.name}
// //                 </h3>

// //                 <p className="text-sm text-gray-500 leading-relaxed">
// //                     {item.description}
// //                 </p>

// //                 {/* Divider */}
// //                 <div className="h-px bg-gray-100 my-4"></div>
// //                 {/*  href={`/services/${service.slug}`} */}
// //                 {/* Action */}
// //                 <Link href={`/products/${item.slug}`}>  <button className="w-full py-3 cursor-pointer rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:opacity-90 transition">
// //                     View Details
// //                 </button></Link>
// //             </div>
// //         </div>
// //     );
// // }


// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function ProductsCard({ item }) {
//     return (
//         <div className="w-full max-w-sm bg-white rounded-3xl shadow-md overflow-hidden group">

//             {/* Image */}
//             <div className="relative h-60 w-full overflow-hidden">
//                 <Image
//                     src={item.image}
//                     alt={item.name}
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-500"
//                 />

//                 {/* Price Badge */}
//                 <span className="absolute top-4 left-4 bg-black/70 text-white text-sm px-4 py-1 rounded-full">
//                     ৳ {item.price}
//                 </span>

//                 {/* Discount Badge */}
//                 {item.discount && (
//                     <span className="absolute top-4 right-4 bg-red-600 text-white text-sm px-3 py-1 rounded-full">
//                         {item.discount}% Off
//                     </span>
//                 )}
//             </div>

//             {/* Content */}
//             <div className="p-6 space-y-3">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                     {item.name}
//                 </h3>

//                 <p className="text-sm text-gray-500 leading-relaxed">
//                     {item.description}
//                 </p>

//                 {/* Category & Brand */}
//                 <div className="flex justify-between items-center text-sm text-gray-600">
//                     <span>Category: {item.category || "General"}</span>
//                     <span>Brand: {item.brand || "Unknown"}</span>
//                 </div>

//                 {/* Rating */}
//                 {item.rating && (
//                     <div className="text-yellow-500">
//                         {"⭐".repeat(Math.round(item.rating))} ({item.rating})
//                     </div>
//                 )}

//                 {/* Stock */}
//                 <div className={`text-sm font-medium ${item.stock ? "text-green-600" : "text-red-600"}`}>
//                     {item.stock ? "In Stock" : "Out of Stock"}
//                 </div>

//                 {/* Divider */}
//                 <div className="h-px bg-gray-100 my-4"></div>

//                 {/* Action */}
//                 <Link href={`/products/${item.slug}`}>
//                     <button className="w-full py-3 cursor-pointer rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:opacity-90 transition">
//                         View Details
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// }


"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductsCard({ item }) {
    return (
        <div className="bg-white rounded-3xl shadow-md overflow-hidden group flex flex-col ">
            {/* Image */}
            <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Price Badge */}
                <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm px-3 py-1 rounded-full shadow-lg">
                    ৳ {item.price}
                </span>
                {/* Discount */}
                {item.discount && (
                    <span className="absolute top-3 right-3 bg-red-600 text-white text-sm px-3 py-1 rounded-full shadow-lg">
                        {item.discount}% Off
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500 truncate">{item.description}</p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Category: {item.category || "General"}</span>
                        <span>Brand: {item.brand || "Unknown"}</span>
                    </div>
                    {item.rating && (
                        <div className="text-yellow-500 text-sm">
                            {"⭐".repeat(Math.round(item.rating))} ({item.rating})
                        </div>
                    )}
                    <div className={`text-sm font-medium ${item.stock ? "text-green-600" : "text-red-600"}`}>
                        {item.stock ? "In Stock" : "Out of Stock"}
                    </div>
                </div>

                <Link href={`/products/${item.slug}`}>
                    <button className="w-full py-2 mt-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:opacity-90 transition">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
}
