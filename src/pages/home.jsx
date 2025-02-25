import { Card, Carousel } from "flowbite-react";
import CardBlog from "../components/card-blog";
import CardProduct from "../components/card-product";
import CardDeal from "../components/card-deal";
import {
  HiOutlineTruck,
  HiOutlineClipboardCheck,
  HiOutlineCube,
  HiOutlinePhone,
} from "react-icons/hi";

export default function Home() {
  return (
    <>
      <Hero />
      <CardTagline />
      <ProductDeal />
      <BestProduct />
      <SpecialBanner />
      <Benefit />
      <Blog />
    </>
  );
}
function Hero() {
  return (
    <section id="Hero" className="mb-10 mt-14 min-w-full">
      <div className="container">
        <div className="static h-80 w-full rounded-none sm:h-72 xl:h-[30rem]">
          <Carousel
            slideInterval={2500}
            indicators={false}
            leftControl=" "
            rightControl=" "
            className="rounded-none"
          >
            <div className="">
              <div className="absolute flex h-full w-full items-center justify-center text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                <div>
                  <h1 className="text-center font-sand text-3xl font-extrabold tracking-widest drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-4xl lg:text-5xl">
                    Niza<span className="text-default">mart</span>
                  </h1>
                  <h2 className="mt-2 font-sand text-xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:mt-3 md:text-2xl lg:mt-6 lg:text-3xl">
                    "The best online shop <br />
                    selling groceries in town"
                  </h2>
                </div>
              </div>
              <img
                src="src/assets/hero-2.jpg"
                alt="nizamart hero banner 1"
                className="rounded-none lg:h-full"
              />
            </div>
            <div className="">
              <div className="absolute flex h-full w-full items-center justify-center text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                <div>
                  <h1 className="text-center font-sand text-3xl font-extrabold tracking-widest drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-4xl lg:text-5xl">
                    Niza<span className="text-default">mart</span>
                  </h1>
                  <h2 className="mt-2 font-sand text-xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:mt-3 md:text-2xl lg:mt-6 lg:text-3xl">
                    "We guarantee to always provide
                    <br />
                    high quality products and fast service"
                  </h2>
                </div>
              </div>
              <img
                src="src/assets/hero-1.jpg"
                alt="nizamart hero banner 2"
                className="h-72 w-full rounded-none object-cover lg:h-full"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function CardTagline() {
  return (
    <section id="card-tagline" className="mx-2 my-10 font-sand lg:p-6">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <Card className="mx-4 my-4 h-52 w-full bg-[url('assets/tagline-1.jpg')] bg-cover py-2 text-left shadow-md transition duration-500 hover:scale-105 hover:shadow-xl lg:mx-2 lg:w-[17rem] xl:mx-6 xl:w-80">
            <h5 className="mt-8 text-xl font-bold tracking-tight text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Naturally Fresh & <br />
              Naturally Organic
            </h5>
            <a href="product" className="btn-default w-28">
              Shop now
            </a>
          </Card>
          <Card className="mx-4 my-4 h-52 w-full bg-[url('assets/tagline-2.jpg')] bg-cover py-2 text-left shadow-md transition duration-500 hover:scale-105 hover:shadow-xl lg:mx-2 lg:w-[17rem] xl:mx-6 xl:w-80">
            <h5 className="mt-8 text-xl font-bold tracking-tight text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Fuel Your Body With <br />
              Organic Goodness
            </h5>
            <a href="product" className="btn-default w-28">
              Shop now
            </a>
          </Card>
          <Card className="mx-4 my-4 h-52 w-full bg-[url('assets/tagline-3.jpg')] bg-cover py-2 text-left shadow-md transition duration-500 hover:scale-105 hover:shadow-xl lg:mx-2 lg:w-[17rem] xl:mx-6 xl:w-80">
            <h5 className="mt-8 text-xl font-bold tracking-tight text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Fresh Food and <br />
              Healthy Life
            </h5>
            <a href="product" className="btn-default w-28">
              Shop now
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ProductDeal() {
  var today = new Date().getTime();
  var countDownDate = today + 259200000;

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML =
      days + "days " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
  return (
    <section
      id="product-deal"
      className="bg-green-100 px-2 py-14 shadow-inner lg:px-8"
    >
      <div className="container w-full">
        <div className="flex w-full justify-between sm:px-6 px-2">
          <div className="font-sand">
            <h2 className="text-lg font-bold text-darken md:text-3xl">
              Day Of The <span className="text-default">Deal</span>
            </h2>
          </div>
          <div className="flex rounded-lg border-gray-900 bg-gray-200 px-2 py-1 lg:px-3 lg:py-2">
            <h5 className="font-lato text-sm font-medium tracking-wide text-slate-700 md:text-base">
              <span
                className="font-sand text-xs text-darken md:text-sm md:font-bold"
                id="demo"
              ></span>
            </h5>
          </div>
        </div>
        <h5 className="mx-6 mt-2 text-sm font-medium text-slate-500 md:text-lg">
          25% OFF
        </h5>
        <div className="mt-10 flex flex-wrap justify-center font-sand">
          <div className="flex w-full justify-center md:w-1/2 xl:w-1/4">
            <CardDeal
              DealPrice={"8"}
              ProductPrice={"12"}
              ProductName={"Fresh Watermelon"}
              ProductImage={"src/assets/watermelon.png"}
            />
          </div>
          <div className="flex w-full justify-center md:w-1/2 xl:w-1/4">
            <CardDeal
              DealPrice={"4"}
              ProductPrice={"6"}
              ProductName={"Fresh Milk"}
              ProductImage={"src/assets/milk.png"}
            />
          </div>
          <div className="flex w-full justify-center md:w-1/2 xl:w-1/4">
            <CardDeal
              DealPrice={"6"}
              ProductPrice={"10"}
              ProductName={"Organic Blueberry"}
              ProductImage={"src/assets/blueberry.png"}
            />
          </div>
          <div className="flex w-full justify-center md:w-1/2 xl:w-1/4">
            <CardDeal
              DealPrice={"9"}
              ProductPrice={"12"}
              ProductName={"Premium Salmon"}
              ProductImage={"src/assets/salmon.png"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BestProduct() {
  return (
    <section id="best-product" className="mx-8 my-10 p-6 md:my-16 lg:my-16">
      <div className="container mt-5">
        <div className="flex flex-wrap justify-center">
          <div id="recent-product" className="mx-1 mb-4 w-full md:w-[30%]">
            <h4 className="text-center font-sand text-2xl font-bold tracking-wide text-darken lg:text-3xl">
              Recently <span className="text-default">Added</span>
            </h4>
            <div className="mx-2 mt-2 lg:mt-6">
              <div className="px-4 py-2 font-sand">
                <CardProduct
                  ProductImage={"orange.jfif"}
                  ProductName={"Organic Orange"}
                  DealPrice={"6"}
                  ProductPrice={"8"}
                  Action={"wishlist"}
                />
                <CardProduct
                  ProductImage={"watermelon.png"}
                  ProductName={"Watermelon"}
                  DealPrice={"6"}
                  ProductPrice={"8"}
                  Action={"wishlist"}
                />
                <CardProduct
                  ProductImage={"milk.png"}
                  ProductName={"Fresh Milk"}
                  DealPrice={"6"}
                  ProductPrice={"8"}
                  Action={"wishlist"}
                />
              </div>
            </div>
          </div>
          <div id="top-product" className="mx-1 mb-4 w-full md:w-[30%]">
            <h4 className="flex justify-center font-sand text-2xl font-bold tracking-wide text-darken lg:text-3xl">
              Top <span className="px-1 text-default">Selling</span>
            </h4>
            <div className="mx-2 mt-2 lg:mt-6">
              <div className="px-4 py-2 font-sand">
                <CardProduct
                  ProductImage={"broccoli.jfif"}
                  ProductName={"Organic Broccoli"}
                  DealPrice={"6"}
                  ProductPrice={"8"}
                  Action={"wishlist"}
                />
                <CardProduct
                  ProductImage={"blueberry.png"}
                  ProductName={"Organic BlueBerry"}
                  DealPrice={"6"}
                  ProductPrice={"8"}
                  Action={"wishlist"}
                />
                <CardProduct
                  ProductImage={"watermelon.png"}
                  ProductName={"Watermelon"}
                  DealPrice={"6"}
                  ProductPrice={"8"}
                  Action={"wishlist"}
                />
              </div>
            </div>
          </div>
          <div id="trending-product" className="mx-1 mb-4 w-full md:w-[30%]">
            <h4 className="flex justify-center font-sand text-2xl font-bold tracking-wide text-darken lg:text-3xl">
              Trending<span className="px-1 text-default"> Product</span>
            </h4>
            <div className="mx-2 mt-2 lg:mt-6">
              <div className="px-4 py-2 font-sand">
                <CardProduct
                  ProductImage={"blueberry.png"}
                  ProductName={"Organic BlueBerry"}
                  DealPrice={"6"}
                  ProductPrice={"8"}
                  Action={"wishlist"}
                />
                <CardProduct
                  ProductImage={"tomato.jfif"}
                  ProductName={"Organic Tomato"}
                  DealPrice={"6"}
                  ProductPrice={"8"}
                  Action={"wishlist"}
                />
                <CardProduct
                  ProductImage={"salmon.png"}
                  ProductName={"Fresh Salmon"}
                  DealPrice={"6"}
                  ProductPrice={"8"}
                  Action={"wishlist"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecialBanner() {
  return (
    <section
      id="special-banner"
      className="bg-green-100 px-2 py-14 shadow-inner lg:mt-16"
    >
      <div className="container font-sand">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 w-full px-4 md:w-1/2 lg:w-1/4">
            <Card
              className="group text-center transition duration-500 hover:opacity-90 hover:shadow-lg lg:h-[30rem]"
              imgAlt="juice"
              imgSrc="src/assets/orange.jpg"
            >
              <h5 className="font-sand text-xl font-bold tracking-tight text-darken group-hover:text-default">
                Healthy & Refresh Drink
              </h5>
              <p className="font-lato text-sm tracking-wide text-darken">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                dolore!
              </p>
              <div className="flex items-center justify-center">
                <a
                  href="product"
                  className="rounded-lg bg-default px-3 py-2 text-center text-sm font-medium text-white transition duration-500 hover:bg-green-600 focus:outline-none dark:bg-cyan-600 dark:hover:bg-cyan-700"
                >
                  Shop now
                </a>
              </div>
            </Card>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <Card
              className="group text-center transition duration-500 hover:opacity-90 hover:shadow-lg lg:h-[30rem]"
              imgAlt="fruits"
              imgSrc="src/assets/fruits.jpg"
            >
              <h5 className="font-sand text-xl font-bold tracking-tight text-darken group-hover:text-default">
                Our Fresh Organic Fruits
              </h5>
              <p className="font-lato text-sm tracking-wide text-darken">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                dolore!
              </p>
              <div className="flex items-center justify-center">
                <a
                  href="product"
                  className="rounded-lg bg-default px-3 py-2 text-center text-sm font-medium text-white transition duration-500 hover:bg-green-600 focus:outline-none dark:bg-cyan-600 dark:hover:bg-cyan-700"
                >
                  Shop now
                </a>
              </div>
            </Card>
          </div>
          <div className="mx-4 my-6 flex h-[30rem] w-full items-center rounded-lg bg-[url('assets/right-side-banner.jpg')] bg-cover px-4 text-white shadow-md transition duration-500 hover:opacity-90 hover:shadow-lg md:text-slate-700 lg:mx-0 lg:my-0 lg:w-2/4">
            <div className="w-full text-end">
              <p className="mt-2 text-3xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-4xl md:drop-shadow-none">
                Organic &
              </p>
              <p className="mt-2 text-3xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-4xl md:drop-shadow-none">
                Fresh
              </p>
              <p className="mt-2 text-3xl font-bold text-lime-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-4xl">
                Vegetables
              </p>
              <p className="my-3 text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:drop-shadow-none">
                15% <span className="text-base">OFF</span>
              </p>
              <a href="product" className="btn-default">
                Get now !
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit() {
  return (
    <section id="benefit" className="mb-10 mt-16">
      <div className="container">
        <div className="mx-4 flex flex-wrap">
          <div className="w-full md:w-1/2 md:px-2 lg:w-1/4">
            <div className="mb-4 rounded-md bg-green-50 px-2 py-6 text-center shadow shadow-default transition duration-500 hover:scale-105">
              <HiOutlineTruck className="mx-auto h-9 w-8 text-center text-default" />
              <h3 className="font-sand text-lg font-bold">Free Shipping</h3>
              <p className="font-lato text-sm text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:px-2 lg:w-1/4">
            <div className="mb-4 rounded-md bg-green-50 px-2 py-6 text-center shadow shadow-default transition duration-500 hover:scale-105">
              <HiOutlinePhone className="mx-auto h-9 w-8 text-center text-default" />
              <h3 className="font-sand text-lg font-bold">24 x 7 Support</h3>
              <p className="font-lato text-sm text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:px-2 lg:w-1/4">
            <div className="mb-4 rounded-md bg-green-50 px-2 py-6 text-center shadow shadow-default transition duration-500 hover:scale-105">
              <HiOutlineCube className="mx-auto h-9 w-8 text-center text-default" />
              <h3 className="font-sand text-lg font-bold">Product Packing</h3>
              <p className="font-lato text-sm text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:px-2 lg:w-1/4">
            <div className="mb-4 rounded-md bg-green-50 px-2 py-6 text-center shadow shadow-default transition duration-500 hover:scale-105">
              <HiOutlineClipboardCheck className="mx-auto h-9 w-8 text-center text-default" />
              <h3 className="font-sand text-lg font-bold">Guaranteed Fresh</h3>
              <p className="font-lato text-sm text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="mt-20 bg-green-100 p-6 shadow-inner">
      <div className="container">
        <div className="mb-8 mt-4 text-center">
          <h3 className="font-sand text-3xl font-bold">
            Latest <span className="text-default">Articles</span>
          </h3>
        </div>
        <CardBlog
          BlogTags={["Healthy", "Food", "Fruit"]}
          BlogImage={"src/assets/watermelon.png"}
          BlogTitle={"Vitamin From Watermelon"}
          BlogDate={"22 January 2025"}
        />
        <CardBlog
          BlogTags={["Healthy", "Food"]}
          BlogImage={"src/assets/milk.png"}
          BlogDate={"22 January 2025"}
          BlogTitle={"Our Fresh Milk"}
        />
        <CardBlog
          BlogTags={["Healthy", "Food", "Recipe"]}
          BlogImage={"src/assets/salmon.png"}
          BlogDate={"22 January 2025"}
          BlogTitle={"How To Cook Salmon"}
        />
      </div>
    </section>
  );
}
