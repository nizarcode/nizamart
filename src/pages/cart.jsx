import { useState } from "react";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

export default function Cart() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
function Body() {
  return (
    <section className="mt-8">
      <div className="container bg-green-100 px-2 py-6">
        <h1 className="text-center font-sand text-2xl font-bold text-default md:text-3xl">
          My Cart
        </h1>
        <div className="my-4">
          <Cartcard
            ProductImage={"src/assets/broccoli.jfif"}
            ProductName={"Broccoli"}
            ProductPrice={7}
          />
          <Cartcard
            ProductImage={"src/assets/milk.png"}
            ProductName={"Fresh Milk"}
            ProductPrice={7}
          />
          <Cartcard
            ProductImage={"src/assets/salmon.png"}
            ProductName={"Salmon"}
            ProductPrice={7}
          />
        </div>
        <div className="flex justify-end">
          <div>
            <div className="mt-1 flex w-52 justify-between rounded-lg bg-white px-4 py-2 font-lato font-bold text-darken shadow md:w-80 lg:w-96">
              <p>Subtotal:</p>
              <p>$24.00</p>
            </div>
            <div className="mt-1 flex w-52 justify-between rounded-lg bg-white px-4 py-2 font-lato font-bold text-darken shadow md:w-80 lg:w-96">
              <p>Tax:</p>
              <p>$2.50</p>
            </div>
            <div className="mt-1 flex w-52 justify-between rounded-lg bg-white px-4 py-2 font-lato font-bold text-darken shadow md:w-80 lg:w-96">
              <p>Coupon:</p>
              <input
                type="text"
                className="h-6 w-1/2 rounded-md text-xs focus:border-default focus:ring-default"
              />
            </div>
            <div className="mt-1 flex w-52 justify-between rounded-lg bg-white px-4 py-2 font-lato font-bold text-darken shadow md:w-80 lg:w-96">
              <p>Grand Total:</p>
              <p className="text-lg font-bold text-default">$26.50</p>
            </div>
            <p className="mt-1 font-lato text-xs tracking-wide text-slate-600">
              * Free Shipping
            </p>
            <button className="mt-2 w-full rounded-md bg-default p-2 font-sand font-bold tracking-wide text-white">
              Check out now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
function Cartcard({ ProductImage, ProductName, ProductPrice }) {
  const [quantity, SetQuantity] = useState(1);
  function handleIncrement() {
    SetQuantity(quantity + 1);
  }
  function handleDecrement() {
    if (quantity == 1) {
      document.getElementById("popup").classList.toggle("hidden");
      return false;
    }
    SetQuantity(quantity - 1);
  }
  function closeModal() {
    document.getElementById("popup").classList.add("hidden");
  }
  return (
    <>
      <div className="my-2 flex items-center justify-between rounded-md bg-white p-3 font-sand shadow-sm shadow-green-400">
        <div>
          <img
            src={ProductImage}
            alt={ProductName}
            className="w-24 rounded-md"
          />
        </div>
        <div className="ml-3 w-1/3">
          <h5 className="text-lg font-bold text-darken">{ProductName}</h5>
          <p className="text-base text-slate-500">In stock</p>
          <div className="my-auto text-lg font-semibold text-default">
            ${ProductPrice}
          </div>
        </div>
        <div id="quantity" className="">
          <form class="mx-auto max-w-xs">
            <label
              for="quantity-input"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Choose quantity:
            </label>
            <div class="relative flex max-w-[8rem] items-center">
              <button
                onClick={handleDecrement}
                type="button"
                id="decrement-button"
                data-input-counter-decrement="quantity-input"
                class="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  class="h-3 w-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
                type="text"
                id="quantity-input"
                data-input-counter
                data-input-counter-min="1"
                data-input-counter-max="50"
                aria-describedby="helper-text-explanation"
                class="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="999"
                value={quantity}
                required
              />
              <button
                onClick={handleIncrement}
                type="button"
                id="increment-button"
                data-input-counter-increment="quantity-input"
                class="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  class="h-3 w-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        id="popup"
        className="fixed left-0 right-0 top-[30%] z-[9999] mx-auto hidden h-44 w-80 rounded-lg bg-white shadow-md shadow-green-300 md:h-56 md:w-96"
      >
        <div className="flex h-full items-center justify-center">
          <div>
            <h5 className="mb-2 font-lato text-xl font-bold text-darken">
              Are you want delete product ?
            </h5>
            <div className="flex justify-center">
              <button
                onClick={closeModal}
                className="mr-3 rounded-xl bg-red-500 p-2 font-lato text-sm font-bold tracking-wide text-white shadow-sm transition duration-500 hover:bg-red-800 active:scale-75"
              >
                Yes, delete product
              </button>
              <button
                onClick={closeModal}
                className="rounded-xl bg-gray-400 px-6 py-2 font-lato text-sm font-bold tracking-wide text-black shadow-sm transition duration-500 hover:bg-slate-800 active:scale-75"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
