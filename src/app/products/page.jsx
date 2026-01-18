
// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";
// import ProductsCard from "@/components/ui/Products/ProductsCard";

// const ProductsPage = () => {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Route protection
//   useEffect(() => {
//     const loggedIn = Cookies.get("loggedIn");
//     if (!loggedIn) {
//       router.push("/login");
//     } else {
//       setLoading(false);
//     }
//   }, [router]);

//   // Fetch products
// useEffect(() => {
//   fetch("https://shop-nest-server-pied.vercel.app/items")
//     .then(res => res.json())
//     .then(data => {
//       if (Array.isArray(data)) {
//         setProducts(data);
//       } else if (Array.isArray(data.items)) {
//         setProducts(data.items);
//       } else {
//         setProducts([]);
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       setProducts([]);
//     });
// }, []);


//   if (loading) {
//     return <p className="text-center mt-10">Checking authentication...</p>;
//   }

//   return (
//     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr">
//       {products.length > 0 ? (
//         products.map(product => (
//           <ProductsCard key={product._id} item={product} />
//         ))
//       ) : (
//         <p className="text-center col-span-full">No products found.</p>
//       )}
//     </div>
//   );
// };

// export default ProductsPage;

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import ProductsCard from "@/components/ui/Products/ProductsCard";

export default function ProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedIn = Cookies.get("loggedIn");
    if (loggedIn !== "true") {
      router.replace("/login");
      return;
    }
    setLoading(false);
  }, [router]);

  useEffect(() => {
    fetch("https://shop-nest-server-pied.vercel.app/items")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setProducts(data);
        else if (Array.isArray(data.items)) setProducts(data.items);
        else setProducts([]);
      })
      .catch(() => setProducts([]));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.length > 0 ? (
        products.map(p => <ProductsCard key={p._id} item={p} />)
      ) : (
        <p className="col-span-full text-center">No products found</p>
      )}
    </div>
  );
}
