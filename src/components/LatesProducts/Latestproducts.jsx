"use client";

import React, { useEffect, useState } from "react";
import ProductsCard from "../ui/Products/ProductsCard";
import Container from "../ui/Container";
 // reuse your card component

const Latestproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_AUTH_URL}/latest-products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading latest products...</p>;
  }

  if (products.length === 0) {
    return <p className="text-center mt-10">No latest products found.</p>;
  }

  return (
   <Container>
    <h1 className="flex text-3xl font-bold justify-center items-center ">New Products</h1>
     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        
      {products.map((item) => (
        <ProductsCard key={item._id} item={item} />
      ))}
    </div>
   </Container>
  );
};

export default Latestproducts;
