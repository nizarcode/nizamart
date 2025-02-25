import { HiOutlineHeart } from "react-icons/hi";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import CardProduct from "../components/card-product";

export default function Wishlist() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
function Body() {
  let wishlists = [
    {
      name: "Organic broccoli",
      price: 8,
      img: "broccoli.jfif",
      dealPrice: 6,
      stock: "In stock",
      action: "delete",
    },
    {
      name: "Fresh Milk",
      price: 8,
      img: "milk.png",
      dealPrice: 6,
      stock: "In stock",
      action: "delete",
    },
    {
      name: "Organic Blueberry",
      price: 8,
      img: "blueberry.png",
      dealPrice: 6,
      stock: "In stock",
      action: "delete",
    },
    {
      name: "Fresh Salmon",
      price: 8,
      img: "salmon.png",
      dealPrice: 6,
      stock: "In stock",
      action: "delete",
    },
  ];
  return (
    <section className="mt-8 bg-green-100">
      <div className="container px-8 py-8">
        <div className="rounded-lg bg-white px-4 py-6 shadow-md shadow-green-200">
          <div className="mb-8 text-center">
            <HiOutlineHeart className="mx-auto text-3xl text-default" />
            <h1 className="font-sand text-2xl font-bold text-default md:text-3xl">
              My Wishlist
            </h1>
          </div>
          <div className="flex w-full flex-wrap justify-start">
            {wishlists.map((wishlist) => (
              <div className="w-full px-2 md:w-1/2 lg:w-1/4">
                <CardProduct
                  ProductImage={wishlist.img}
                  ProductName={wishlist.name}
                  DealPrice={wishlist.dealPrice}
                  ProductPrice={wishlist.price}
                  ProductStock={wishlist.stock}
                  Action={wishlist.action}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
