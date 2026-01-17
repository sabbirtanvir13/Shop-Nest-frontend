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
import ProductsCard from "@/components/ui/Products/ProductsCard";
import { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {products.map(item => (
        <ProductsCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Page;
