// "use client";
// import ProductsCard from "@/components/ui/Products/ProductsCard";
// import { useEffect, useState } from "react";


// const Page = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/items")
//       .then(res => res.json())
//       .then(data => setProducts(data));
//   }, []);

//   return (
//     <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//       {products.map(item => (
//         <ProductsCard key={item._id} item={item} />
//       ))}
//     </div>
//   );
// };

// export default Page;

"use client";

import { useEffect, useState } from "react";
import ProductsCard from "@/components/ui/Products/ProductsCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map(product => (
        <ProductsCard key={product._id} item={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
