import { Rating } from "flowbite-react";
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineTrash,
} from "react-icons/hi";
export default function CardProduct({
  ProductImage,
  ProductName,
  DealPrice,
  ProductPrice,
  ProductStock,
  Action,
}) {
  return (
    <a className="group my-4 block rounded-md py-3 shadow-lg transition duration-500 hover:scale-105 hover:cursor-pointer lg:mx-1 lg:py-0">
      <div className="w-full lg:flex lg:items-center">
        <div className="">
          <img
            src={"src/assets/" + ProductImage}
            alt={ProductName}
            className="rounded-md"
          />
        </div>
        <div className="ms-2 mt-2 px-2">
          <p className="font-lato text-sm text-slate-600">{ProductStock}</p>
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 group-hover:text-default dark:text-white">
            {ProductName}
          </h5>
          <div className="mb-5 mt-2.5 flex w-32 items-center">
            <Rating className="w-20">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
            <span className="ml-1 mr-2 rounded bg-green-200 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              5.0
            </span>
          </div>
          <div className="-mt-3 flex items-center justify-between">
            <span className="flex items-center text-xl font-bold text-green-500 dark:text-white">
              ${DealPrice}{" "}
              <span className="ms-1 text-xs font-medium text-slate-500 line-through opacity-80">
                ${ProductPrice}
              </span>
            </span>
            <span>
              {Action == "wishlist" ? (
                <button className="mx-1 rounded-md bg-orange-400 px-1 py-1 font-sans text-xs text-white transition duration-500 hover:bg-orange-700 active:scale-75 md:px-2 md:py-1">
                  <HiOutlineHeart className="-mt-[2px] inline text-lg md:text-sm" />
                </button>
              ) : (
                <button className="me-1 rounded-md bg-red-500 px-2 py-[6px] font-sans text-xs text-white transition duration-500 hover:bg-red-700 active:scale-75 md:px-2 md:py-2 lg:px-2 lg:py-1">
                  <HiOutlineTrash className="-mt-[1px] inline text-lg md:text-lg lg:text-sm" />
                </button>
              )}
              <button className="rounded-md bg-default px-1 py-1 font-sans text-xs text-white transition duration-500 hover:bg-green-700 active:scale-75 md:px-2 md:py-1">
                <HiOutlineShoppingCart className="-mt-[1px] inline text-lg md:text-sm" />
              </button>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
