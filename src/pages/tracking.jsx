import Footer from "../layouts/footer";
import Header from "../layouts/header";
import {
  HiCheck,
  HiOutlineClipboardCheck,
  HiOutlineCube,
  HiOutlineTruck,
} from "react-icons/hi";
export default function Tracking() {
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
    <section className="mt-8 bg-green-100">
      <div className="container">
        <div className="w-full bg-green-600 px-4 py-2">
          <h5 className="font-lato text-base text-white">
            Order Tracking - NZR782AXX
          </h5>
        </div>
        <div className="flex w-full justify-between bg-green-400 px-4 py-2">
          <div>
            <h5 className="font-sand text-sm sm:text-base text-white">Status</h5>
            <p className="font-sand text-xs sm:text-sm text-white">In Transit</p>
          </div>
          <div>
            <h5 className="font-sand text-sm sm:text-base text-white">Expected Arrival</h5>
            <p className="font-sand text-xs sm:text-sm text-white">01/05/2025</p>
          </div>
        </div>
        <div className="bg-green-50 px-10 py-14">
          <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div className="flex w-full justify-between">
              <HiCheck className="-mt-1 rounded-full bg-default text-xl text-white" />
              <HiCheck className="-mt-1 rounded-full bg-default text-xl text-white" />
              <HiCheck className="-mt-1 rounded-full bg-default text-xl text-white" />
              <HiCheck className="-mt-1 rounded-full bg-gray-500 text-xl text-white" />
            </div>
            <div className="-mt-4 h-2.5 w-2/3 rounded-full bg-default"></div>
          </div>
          <div className="mt-6 flex -ml-6 sm:ml-0 justify-between">
            <div className="flex items-center px-1">
              <HiOutlineClipboardCheck className="me-1 text-2xl text-default md:text-3xl lg:text-4xl" />
              <h5 className="font-sand text-[10px] font-bold md:text-base">
                Order <br /> Processed
              </h5>
            </div>
            <div className="flex items-center px-1">
              <HiOutlineCube className="me-1 text-2xl text-default md:text-3xl lg:text-4xl" />
              <h5 className="font-sand text-[10px] font-bold md:text-base">
                Order <br /> Shipped
              </h5>
            </div>
            <div className="flex items-center px-1">
              <HiOutlineTruck className="me-1 text-2xl text-default md:text-3xl lg:text-4xl" />
              <h5 className="font-sand text-[10px] font-bold md:text-base">
                In <br /> Transit
              </h5>
            </div>
            <div className="flex items-center px-1">
              <HiCheck className="me-1 text-2xl text-default md:text-3xl lg:text-4xl" />
              <h5 className="font-sand text-[10px] font-bold md:text-base">
                Order <br /> Arrived
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
