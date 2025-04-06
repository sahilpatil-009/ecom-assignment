import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import OrderSummery from "./OrderSummery";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
        <h2 className="text-3xl font-semibold text-gray-600">
          Your Cart is Empty 🛒
        </h2>
        <button
          className="bg-gray-800 hover:bg-gray-700  text-white px-6 py-2 rounded-lg transition duration-200"
          onClick={() => navigate("/")}
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 w-[100%]">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="flex justify-between gap-4  w-[100%]">
        <div className="flex flex-col justify-between gap-6 w-[70%]">
          {cart && cart.map((item) => <CartItem key={item.id} item={item} />)}
        </div>
        <OrderSummery />
      </div>
    </div>
  );
};

export default Cart;
