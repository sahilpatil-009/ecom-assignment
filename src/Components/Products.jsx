import React, { useState } from "react";
import { useGetAllProductsQuery } from "../Slice/producetsSlice";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Products = () => {
  const { category } = useParams();
  const { data, error, isLoading } = useGetAllProductsQuery();
  const products = Array.isArray(data) ? data : data?.products || [];
  const filterProducts = category
    ? products.filter(
        (product) => product.category?.toLowerCase() === category.toLowerCase()
      )
    : products;

  const { searchData } = useSelector((state) => state.search);

  if (isLoading)
    return <p className="text-center text-gray-500">Loading products...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading products</p>;

  console.log(filterProducts);
  
  return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          {category ? category.toUpperCase() : "All Products"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts &&
            filterProducts
              .filter((ele) => {
                if (searchData.length === 0) {
                  return ele;
                } else {
                  return ele.title
                    .toLowerCase()
                    .includes(searchData.toLowerCase());
                }
              })
              .map((product) => <Card key={product.id} product={product} />)}
        </div>
      </div>
  );
};

export default Products;
