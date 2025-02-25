import CardProduct from "../components/card-product";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

export default function Product() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

function Body() {
  let products = [
    {
      name: "Organic Orange",
      price: 8,
      img: "orange.jfif",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
    {
      name: "Blueberry",
      price: 8,
      img: "blueberry.jfif",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
    {
      name: "Organic broccoli",
      price: 8,
      img: "broccoli.jfif",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
    {
      name: "Fresh Milk",
      price: 8,
      img: "milk.png",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
    {
      name: "Blueberry",
      price: 8,
      img: "blueberry.png",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
    {
      name: "Fresh Salmon",
      price: 8,
      img: "salmon.png",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
    {
      name: "Organic Tomato",
      price: 8,
      img: "tomato.jfif",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
    {
      name: "Watermelon",
      price: 8,
      img: "watermelon.png",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
    {
      name: "Organic Orange",
      price: 8,
      img: "orange.jfif",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
    {
      name: "Blueberry",
      price: 8,
      img: "blueberry.jfif",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
    {
      name: "Organic broccoli",
      price: 8,
      img: "broccoli.jfif",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
    {
      name: "Fresh Milk",
      price: 8,
      img: "milk.png",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
    {
      name: " Blueberry",
      price: 8,
      img: "blueberry.png",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
    {
      name: "Fresh Salmon",
      price: 8,
      img: "salmon.png",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
    {
      name: "Organic Tomato",
      price: 8,
      img: "tomato.jfif",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
    {
      name: "Watermelon",
      price: 8,
      img: "watermelon.png",
      dealPrice: 6,
      stock: "In stock",
      action: "wishlist",
    },
  ];

  return (
    <div className="container mb-24">
      <div className="mt-16">
        <h1 className="text-center font-sand text-2xl font-bold text-darken after:mx-auto after:mt-2 after:block after:h-1 after:w-40 after:rounded-full after:bg-default after:content-[''] md:text-4xl md:after:w-56">
          Our Fresh <span className="text-default">Products</span>
        </h1>
        <section id="products" className="mx-4 mt-9">
          <div className="flex flex-wrap">
            {products.map((product) => (
              <div className="w-1/2 p-2 md:w-1/3 lg:w-1/4">
                <CardProduct
                  ProductImage={product.img}
                  ProductName={product.name}
                  DealPrice={product.dealPrice}
                  ProductPrice={product.price}
                  ProductStock={product.stock}
                  Action={product.action}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
