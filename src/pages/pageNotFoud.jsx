import Footer from "../layouts/footer";
import Header from "../layouts/header";

export default function PageNotFound() {
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
    <section className="my-8 h-72 w-full bg-[url('src/assets/hero-2.jpg')] bg-cover lg:h-96">
      <div className="flex h-full w-full items-center justify-center bg-white/30 backdrop-blur-sm">
        <div className="text-center">
          <h1 className="font-sand text-5xl font-bold tracking-widest text-white opacity-70 md:text-[60px] lg:text-[80px]">
            404
          </h1>
          <h3 className="font-lato text-2xl font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Page not found
          </h3>
          <p className="mb-4 mt-2 font-lato text-sm font-medium text-slate-50 md:text-lg">
            We couldn't find the page you were looking for.
          </p>
          <a
            href="/"
            className="rounded-md border-2 border-default px-3 py-2 font-lato text-sm text-slate-100 transition duration-700 hover:bg-default hover:shadow-md active:translate-y-2 md:text-base"
          >
            Back to home
          </a>
        </div>
      </div>
    </section>
  );
}
