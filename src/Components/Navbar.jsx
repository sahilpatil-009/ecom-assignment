import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../Slice/searchSlice";

const Navbar = () => {

  const [search , setSearch] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(searchData(search));
  }, [search]);

  const { cart } = useSelector((state)=> state.cart)

  return (
    <div className="sticky top-0 z-10">
      <nav className="bg-white dark:bg-gray-800 antialiased w-full">
        <div className="max-w-screen mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-start space-x-5 text-white">
              <h2 className="text-[30px] font-semibold ">Shoply</h2>

              <ul className="flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                <NavLink
                  className="transition duration-150 ease-out hover:ease hover:underline "
                  to={"/"}
                >
                  All Products
                </NavLink>
                <NavLink
                  className="transition duration-150 ease-out hover:ease hover:underline "
                  to={"/beauty"}
                >
                  Beauty
                </NavLink>
                <NavLink
                  className="transition duration-150 ease-out hover:ease hover:underline "
                  to={"/fragrances"}
                >
                  Fragrance
                </NavLink>
                <NavLink
                  className="transition duration-150 ease-out hover:ease hover:underline "
                  to={"/furniture"}
                >
                  Furniture
                </NavLink>
                <NavLink
                  className="transition duration-150 ease-out hover:ease hover:underline "
                  to={"/groceries"}
                >
                  Grocery
                </NavLink>
              </ul>
            </div>

            <div className="flex items-center w-[30%] h-[40px] bg-white rounded-xl p-3">
              <IoSearch size={22} color="#000" />
              <input
                type="search"
                className="w-[90%] h-[100%] bg-white outline-none text-lg text-black p-3"
                onChange={(e)=> (setSearch(e.target.value))}
              />
            </div>

            <div className="flex items-center justify-between  w-[200px] gap-4">
                <button
                  id="myCartDropdownButton1"
                  type="button"
                  onClick={()=> navigate("/cart")}
                  className="inline-flex w-[100%] gap-1 justify-center items-center rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 font-[400] leading-none text-gray-900 dark:text-white text-[18px]"
                >
                  <IoCartSharp size={23} />
                  <span>MyCart</span>
                  <span className="px-1">{cart.length}</span>
                </button>
              <div className="border p-2 rounded-full bg-white cursor-pointer">
                <FaUser size={25} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
