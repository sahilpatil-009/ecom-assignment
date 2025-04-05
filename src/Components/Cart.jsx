import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import { removeFromCart, updateQuentity } from "../Slice/cartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const originalPrice = Math.ceil(cart.reduce((acc, item) => item.price * item.quentity + acc , 0));
  const delivery = 10;
  const tax = 15;

    if (cart.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
          <h2 className="text-3xl font-semibold text-gray-600">
            Your Cart is Empty 🛒
          </h2>
          <button className="bg-gray-800 hover:bg-gray-700  text-white px-6 py-2 rounded-lg transition duration-200" onClick={()=>navigate("/")}>
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
          {cart &&
            cart.map((item) => (
              <div
                key={item.id}
                className="flex w-[100%] h-[140px] items-start justify-start gap-6 border rounded p-4 bg-gray-100"
              >
                <img
                  className="w-[20%] h-[100%] object-contain border rounded"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <div className="border h-[100%] w-[100%] flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h1 className="text-xl font-medium">{item.title}</h1>
                    <button
                      className="bg-gray-500 flex items-center justify-center text-md text-white rounded-md p-2 hover:bg-gray-700"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <IoTrashBin />
                    </button>
                  </div>
                  <h2 className="text-xl font-medium">$ {item.price}</h2>
                  <div className="flex items-start justify-start gap-4">
                    <button
                      className="w-[30px] h-[30px] bg-gray-500 flex items-center justify-center text-xl text-white rounded-md hover:bg-gray-700"
                      onClick={() =>
                        dispatch(
                          updateQuentity({ id: item.id, type: "increase" })
                        )
                      }
                    >
                      <FaPlus />
                    </button>
                    <h2 className="text-xl">{item.quentity}</h2>
                    <button
                      className="w-[30px] h-[30px] bg-gray-500 flex items-center justify-center text-xl text-white rounded-md hover:bg-gray-700"
                      onClick={() =>
                        dispatch(
                          updateQuentity({ id: item.id, type: "decrease" })
                        )
                      }
                    >
                      <FaMinus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
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
            <h2 className="text-2xl font-semibold">$ { originalPrice + delivery + tax}</h2>
          </div>
          <button className="border w-[100%] p-2 rounded-xl bg-gray-600 hover:bg-gray-800 border-none outline-none text-zinc-100 font-semibold text-lg mb-4">Process to Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
