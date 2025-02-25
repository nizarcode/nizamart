import Footer from "../layouts/footer";
import Header from "../layouts/header";
import { BsFacebook, BsLine, BsInstagram, BsTwitter } from "react-icons/bs";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
} from "react-icons/hi";

export default function About() {
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
    <>
      <div className="container mt-8 px-10 md:mt-16 md:px-24">
        <section id="about" className="mb-12">
          <h1 className="text-center font-sand text-3xl font-bold tracking-wide text-darken md:text-4xl lg:text-5xl">
            About <span className="text-default">Nizamart</span>
          </h1>
          <p className="mt-6 text-justify font-sand text-base font-medium text-slate-700 md:text-lg">
            Nizamart is your convenient online marketplace for fresh, organic
            groceries delivered directly to your doorstep. We offer a diverse
            selection of vibrant fruits and vegetables, premium cuts of meat,
            and refreshing beverages, all carefully sourced for quality and
            nutritional value. We partner with local farmers and trusted
            suppliers committed to sustainable practices, ensuring you receive
            the freshest and healthiest ingredients. At Nizamart, we believe in
            making healthy living easy and accessible. Browse our extensive
            online catalog from the comfort of your home and discover a world of
            wholesome goodness. Experience the difference fresh, organic produce
            makes. Visit our apps today and let us bring the farm to your table!
            Follow us on social media for exclusive deals and healthy recipe
            inspiration !
          </p>
        </section>
      </div>
      <section id="contact" className="mb-20">
        <div className="mx-auto flex flex-wrap overflow-hidden rounded-lg shadow-lg md:w-[90%]">
          <div className="w-full bg-green-50 p-8 md:w-1/2">
            <h3 className="mb-4 font-sand text-xl font-bold text-default">
              Let's get in touch
            </h3>
            <p className="mb-6 font-lato tracking-wide text-slate-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis vero dolorem doloribus veniam cum odio architecto iusto
              inventore.
            </p>
            <div className="mt-2 flex items-center">
              <HiOutlineLocationMarker className="me-6 text-xl text-default" />
              <p className="mb-[3px] text-lg text-slate-700 md:text-base">
                02 Nizar Street, Earth 123
              </p>
            </div>
            <div className="mt-2 flex items-center">
              <HiOutlineMail className="me-6 text-xl text-default" />
              <p className="mb-[3px] text-lg text-slate-700 md:text-base">
                nizamart@gmail.com
              </p>
            </div>
            <div className="mt-2 flex items-center">
              <HiOutlinePhone className="me-6 text-xl text-default" />
              <p className="mb-[3px] text-lg text-slate-700 md:text-base">
                123-456-789
              </p>
            </div>
            <h5 className="mt-8 font-sand text-lg font-bold text-darken">
              Connect with us :
            </h5>
            <div className="mt-4 flex">
              <a
                href="#"
                className="group me-2 rounded-lg bg-default p-2 transition duration-300 hover:scale-105"
              >
                <BsFacebook className="text-lg text-white group-hover:text-green-100" />
              </a>
              <a
                href="#"
                className="group me-2 rounded-lg bg-default p-2 transition duration-300 hover:scale-105"
              >
                <BsInstagram className="text-lg text-white group-hover:text-green-100" />
              </a>
              <a
                href="#"
                className="group me-2 rounded-lg bg-default p-2 transition duration-300 hover:scale-105"
              >
                <BsLine className="text-lg text-white group-hover:text-green-100" />
              </a>
              <a
                href="#"
                className="group me-2 rounded-lg bg-default p-2 transition duration-300 hover:scale-105"
              >
                <BsTwitter className="text-lg text-white group-hover:text-green-100" />
              </a>
            </div>
          </div>
          <div className="w-full bg-default p-8 md:w-1/2">
            <h3 className="font-sand text-2xl font-bold tracking-wide text-white">
              Contact us
            </h3>
            <form>
              <div class="my-5 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    id="username"
                    class="block w-full rounded-full border-2 border-gray-50 bg-default p-2.5 text-sm text-white placeholder:font-lato placeholder:tracking-widest placeholder:text-white focus:border-green-50 focus:ring-green-50"
                    placeholder="Username"
                    required
                  />
                </div>
              </div>
              <div class="my-5 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    id="Email"
                    class="block w-full rounded-full border-2 border-gray-50 bg-default p-2.5 text-sm text-white placeholder:font-lato placeholder:tracking-widest placeholder:text-white focus:border-green-50 focus:ring-green-50"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div class="my-5 md:grid-cols-2">
                <div>
                  <textarea
                    type="textarea"
                    id="Message"
                    class="block h-32 w-full rounded-3xl border-2 border-gray-50 bg-default p-2.5 text-sm text-white placeholder:font-lato placeholder:tracking-widest placeholder:text-white focus:border-green-50 focus:ring-green-50"
                    placeholder="Message"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="rounded-full bg-gray-50 px-4 py-1 font-sand font-bold text-default transition duration-300 hover:opacity-90 hover:shadow-lg active:translate-y-1"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
