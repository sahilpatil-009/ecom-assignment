import React from "react";
import { useSelector } from "react-redux";

const OrderSummery = () => {
  const { cart } = useSelector((state) => state.cart);
  const originalPrice = Math.ceil(
    cart.reduce((acc, item) => item.price * item.quentity + acc, 0)
  );
  const delivery = 10;
  const tax = 15;
  return (
    <div className="w-[25%] border-2 h-max text-white rounded-lg bg-gray-700 p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Order Summery</h2>
      <div className="flex items-center justify-between">
        <h2 className="text-lg  text-zinc-200">Original Price </h2>
        <h2 className="text-[22px] font-semibold">$ {originalPrice}</h2>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg  text-zinc-200">Devliver</h2>
        <h2 className="text-[18px] font-semibold">$ {delivery}</h2>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg  text-zinc-200">Tax</h2>
        <h2 className="text-[18px] font-semibold">$ {tax}</h2>
      </div>
      <hr className="border-t border-gray-400" />
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold  text-white">Total</h2>
        <h2 className="text-2xl font-semibold">
          $ {originalPrice + delivery + tax}
        </h2>
      </div>
      <button className="border w-[100%] p-2 rounded-xl bg-gray-600 hover:bg-gray-800 border-none outline-none text-zinc-100 font-semibold text-lg mb-4">
        Process to Check Out
      </button>
    </div>
  );
};

export default OrderSummery;
