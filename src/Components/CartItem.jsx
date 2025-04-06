import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import { removeFromCart, updateQuentity } from "../Slice/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div
      key={item.id}
      className="shadow-lg flex w-[100%] h-[140px] items-start justify-start gap-6 rounded p-4 bg-gray-200"
    >
      <img
        className="w-[20%] h-[100%] object-contain  rounded"
        src={item.thumbnail}
        alt={item.title}
      />
      <div className=" h-[100%] w-[100%] flex flex-col gap-2">
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
              dispatch(updateQuentity({ id: item.id, type: "increase" }))
            }
          >
            <FaPlus />
          </button>
          <h2 className="text-xl">{item.quentity}</h2>
          <button
            className="w-[30px] h-[30px] bg-gray-500 flex items-center justify-center text-xl text-white rounded-md hover:bg-gray-700"
            onClick={() =>
              dispatch(updateQuentity({ id: item.id, type: "decrease" }))
            }
          >
            <FaMinus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
