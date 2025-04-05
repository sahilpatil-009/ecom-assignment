import React from "react";
import { addToCart } from "../Slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const ProductDetail = ({ setShowDetails, product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const handleAddtoCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      toast.error("Already Present !")
    } else {
      dispatch(
        addToCart({
          id: product.id,
          thumbnail: product.thumbnail,
          title: product.title,
          price: product.price,
          quentity: 1,
        })
      )
      toast.success('Succesfully Added to Cart!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white shadow-lg p-6 rounded-lg w-[80%] h-[90%] transform transition-transform duration-300 overflow-auto flex">
        <div className="w-[80%]">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-fll h-[90%] object-contain rounded"
          />
        </div>
        <div className="flex flex-col p-6 w-full gap-4">
          <h1 className="text-[28px] font-semibold">{product.title}</h1>
          <hr className="border-t border-gray-400" />
          <p className="text-lg">
            <span className="text-xl font-semibold">Description:</span> <br />
            <span className="text-zinc-600 text-[16px]">
              {product.description}
            </span>
          </p>
          <h1 className="text-xl font-semibold">Price : $ {product.price}</h1>
          <button
            className="border w-[100%] p-2 rounded-xl bg-gray-600 hover:bg-gray-800 border-none outline-none text-zinc-100 font-semibold text-lg mb-4"
            onClick={() => [handleAddtoCart(product), setShowDetails(false)]}
          >
            Add to Cart
          </button>
          <h1 className="text-xl font-semibold">Reviews:</h1>
          <div className="overflow-auto flex flex-col gap-4">
            {product.reviews &&
              product.reviews.map((rev, index) => (
                <div className="w-full border-2 shadow-lg p-4 rounded-md bg-zinc-300">
                  <p>
                    {" "}
                    <span className="font-semibold">Customer Name:</span>{" "}
                    {rev.reviewerName}
                  </p>
                  <p>Email: {rev.reviewerEmail}</p>
                  <p key={index}>Rating: {rev.rating}</p>
                  <p key={index} className="text-lg font-semibold">
                    {" "}
                    Comment: {rev.comment}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <button
          onClick={() => setShowDetails(false)}
          className=" w-[100px] ml-auto mb-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 absolute top-2 left-0 right-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
