import { Rating, Card } from "flowbite-react";
import { HiOutlineShoppingCart } from "react-icons/hi";
export default function CardDeal({
  DealPrice,
  ProductPrice,
  ProductName,
  ProductImage,
}) {
  return (
    <Card
      className="mt-6 !max-h-full w-64 !max-w-full transition duration-500 hover:scale-105 hover:opacity-80"
      imgAlt={ProductName}
      imgSrc={ProductImage}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {ProductName}
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
        </Rating>
        <span className="ml-3 mr-2 rounded bg-green-200 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          5.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="flex items-center text-2xl font-bold text-green-400 dark:text-white">
          ${DealPrice}
          <span className="mx-2 text-base font-medium text-slate-400 line-through opacity-80">
            ${ProductPrice}
          </span>
        </span>
        <button className="rounded-lg bg-default px-5 py-2.5 text-center text-sm font-medium text-white transition duration-500 hover:bg-green-600 focus:outline-none active:scale-75 dark:bg-cyan-600 dark:hover:bg-cyan-700">
          Add to cart <HiOutlineShoppingCart className="inline" />
        </button>
      </div>
    </Card>
  );
}
