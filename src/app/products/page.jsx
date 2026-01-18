
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import ProductsCard from "@/components/ui/Products/ProductsCard";

const ProductsPage = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Route protection
  useEffect(() => {
    const loggedIn = Cookies.get("loggedIn");
    if (!loggedIn) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  // Fetch products
  useEffect(() => {
    fetch(`${process.env.NEXT_AUTH_URL}/items`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Checking authentication...</p>;
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr">
      {products.length > 0 ? (
        products.map(product => (
          <ProductsCard key={product._id} item={product} />
        ))
      ) : (
        <p className="text-center col-span-full">No products found.</p>
      )}
    </div>
  );
};

export default ProductsPage;
