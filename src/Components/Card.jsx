import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Slice/cartSlice";
import ProductDetail from "./ProductDetail";
import toast from "react-hot-toast";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const [showDetails, setShowDetails] = useState(false);

  const { cart } = useSelector((state) => state.cart);

  const handleAddtoCart = (product) =>{
    if (cart.some((item) => item.id === product.id)){
      toast.error("Already Present !")
    }else{
      dispatch(
        addToCart({
          id: product.id,
          thumbnail: product.thumbnail,
          title: product.title,
          price: product.price,
          quentity: 1,
        }))
        toast.success('Succesfully Added to Cart!');
    }
  }

  return (
    <>
    <div className="shadow-lg max-w-xs mx-auto text-center font-sans p-4 border rounded-xl bg-white transition-transform duration-300 transform hover:scale-105 cursor-pointer">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded"
      />
      <h1
        className="text-xl font-bold mt-2"
        onClick={()=>setShowDetails(true)}
      >
        {product.title}
      </h1>
      <p className="text-gray-500 text-lg font-semibold">${product.price}</p>
      <p className="text-gray-700 mt-2 text-sm">{product.description}</p>
      <button
        className="mt-4 bg-gray-700 text-white w-full py-3 text-lg rounded hover:bg-gray-800 transition"
        onClick={()=>handleAddtoCart(product)}
      >
        Add to Cart
      </button><table></table>
    </div>
    {showDetails && <ProductDetail setShowDetails={setShowDetails} product={product} />}
    </>
  );
};

export default Card;
