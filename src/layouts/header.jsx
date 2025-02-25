import { Dropdown } from "flowbite-react";
import {
  HiOutlineX,
  HiMenu,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlinePhone,
} from "react-icons/hi";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  function handleOpenSidebar() {
    document.getElementById("sidebar").classList.remove("sidebar-off");
    document.getElementById("sidebar").classList.add("sidebar-on");
    document.getElementById("mask").classList.toggle("hidden");
  }
  function handleCloseSidebar() {
    document.getElementById("sidebar").classList.remove("sidebar-on");
    document.getElementById("sidebar").classList.add("sidebar-off");
    document.getElementById("mask").classList.toggle("hidden");
  }

  let lastScrollTop = 50;
  window.addEventListener("scroll", function () {
    document.getElementById("sidebar").classList.add("sidebar-off");
    document.getElementById("mask").classList.add("hidden");

    const navbar = this.document.getElementById("navbar");
    if (this.scrollY >= 45) {
      navbar.classList.remove("navbar-absolute");
      navbar.classList.add("navbar-fixed");
    } else {
      navbar.classList.add("navbar-absolute");
      navbar.classList.remove("navbar-fixed");
    }
    let scrollTop = this.window.scrollY;
    if (scrollTop >= lastScrollTop) {
      navbar.classList.add("-translate-y-24");
      navbar.classList.remove("translate-y-0");
      lastScrollTop = scrollTop;
    } else {
      navbar.classList.remove("-translate-y-24");
      navbar.classList.add("translate-y-0");
    }
    if (scrollTop > 50) {
      lastScrollTop = scrollTop;
    }
  });
  return (
    <>
      <TopNavigate />
      <Mask />
      <Sidebar onCloseSidebar={handleCloseSidebar} />
      <Navbar onOpenSidebar={handleOpenSidebar} />
    </>
  );
}

// Component Section
function Navbar({ onOpenSidebar }) {
  return (
    <section
      id="navbar"
      className="navbar-absolute top-0 z-[99999] w-full py-2 transition duration-500"
    >
      <div className="container">
        <header className="left-0 flex w-full items-center bg-transparent">
          <div className="container">
            <div className="mx-5 flex items-center justify-between">
              <div className="block lg:hidden">
                <div className="px-4 pt-1">
                  <button
                    id="hamburger"
                    name="hamburger"
                    type="button"
                    className="block"
                    onClick={onOpenSidebar}
                  >
                    <HiMenu className="text-3xl text-darken transition duration-300 active:scale-90 active:opacity-75" />
                  </button>
                </div>
              </div>
              <a className="flex lg:mr-0" href="/">
                <div className="w-12 opacity-90 md:w-14">
                  <img src="src/assets/grocery-bag.png" alt="" />
                </div>
                <div>
                  <h3 className="font-sand text-5xl font-bold text-default">
                    Niza{" "}
                    <span className="-mt-1 ms-[0.20rem] block w-full font-lato text-[0.6rem] font-bold tracking-widest text-darken">
                      MART & GROCERY
                    </span>
                  </h3>
                </div>
              </a>
              <NavMenu />
              <div className=" ">
                <ul className="flex flex-wrap items-center justify-center">
                  <li>
                    <div className="mr-2 hidden lg:block">
                      <SearchBar />
                    </div>
                  </li>
                  <li>
                    <a
                      href="/wishlist"
                      className="group relative my-1 flex items-center transition hover:scale-105 md:mx-1"
                    >
                      <HiOutlineHeart className="-mt-[2px] me-[6px] text-2xl font-bold text-darken group-hover:text-default md:text-3xl" />
                      <span className="absolute left-4 top-0 h-4 w-4 rounded-full bg-default text-center font-lato text-xs text-white md:left-5">
                        4
                      </span>
                      <div className="">
                        <p className="hidden font-lato font-medium text-darken group-hover:text-green-700 md:text-sm lg:block lg:text-base">
                          Wishlist
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cart"
                      className="group relative my-1 flex items-center transition hover:scale-105 md:mx-1"
                    >
                      <HiOutlineShoppingCart className="me-[6px] text-[22px] text-darken group-hover:text-default md:text-[28px]" />
                      <span className="absolute left-4 top-0 h-4 w-4 rounded-full bg-default text-center font-lato text-xs text-white md:left-5">
                        3
                      </span>
                      <div>
                        <p className="hidden font-lato font-medium text-darken group-hover:text-green-700 lg:block">
                          Cart
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
function Sidebar({ onCloseSidebar }) {
  document.addEventListener("click", function (e) {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.getElementById("hamburger");
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove("sidebar-on");
      sidebar.classList.add("sidebar-off");
      document.getElementById("mask").classList.add("hidden");
    }
  });
  return (
    <>
      <section
        id="sidebar"
        className="sidebar-off fixed left-0 top-0 z-[999999] min-h-screen w-72 translate-x-0 bg-green-100 transition duration-500"
      >
        <div className="container">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between">
              <h5 className="font-sand text-3xl font-bold tracking-wide text-slate-700">
                Niza<span className="text-default">mart</span>
              </h5>
              <button className="group" onClick={onCloseSidebar}>
                <HiOutlineX className="text-2xl font-bold text-slate-700 transition duration-300 active:scale-90" />
              </button>
            </div>
            <div className="mt-4">
              <SearchBar />
            </div>
            <ul className="mt-5 justify-center font-sand text-base font-bold">
              <li className="nav-child">
                <a href="/">Home</a>
              </li>
              <li className="nav-child">
                <a href="#" className="group">
                  <Dropdown label="Dropdown" inline>
                    <Dropdown.Item href="product">Vegetable</Dropdown.Item>
                    <Dropdown.Item href="product">Fruit</Dropdown.Item>
                    <Dropdown.Item href="product">
                      Meat and Seafood
                    </Dropdown.Item>
                    <Dropdown.Item href="product">Snack</Dropdown.Item>
                    <Dropdown.Item href="product">Drink</Dropdown.Item>
                    <Dropdown.Item href="product">Fast Food</Dropdown.Item>
                  </Dropdown>
                </a>
              </li>
              <li className="nav-child">
                <a href="product">Product</a>
              </li>
              <li className="nav-child">
                <a href="about">About</a>
              </li>
              <li className="nav-child">
                <HashLink to="/about#contact" onClick={onCloseSidebar}>
                  Contact
                </HashLink>
              </li>
              <li className="nav-child">
                <a href="blogs">Blog</a>
              </li>
              <li className="nav-child">
                <a href="login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
function TopNavigate() {
  return (
    <div className="static top-0 z-[9999] mb-24 flex w-full justify-between bg-green-100 px-2 md:px-6">
      <div className="relative flex h-9 items-center font-lato text-slate-600">
        <a className="text-xs font-normal" href="/login">
          Sign in
        </a>
        <div class="divider"></div>
        <a href="/tracking" className="text-xs font-normal">
          Order Tracking
        </a>
        <div class="divider hidden md:block"></div>
        <div className="-mt-1 hidden md:block">
          <Dropdown
            label="Language"
            dismissOnClick={false}
            renderTrigger={() => (
              <span className="text-xs hover:cursor-pointer">Language</span>
            )}
          >
            <Dropdown.Item className="transition duration-500 hover:text-default">
              English
            </Dropdown.Item>
            <Dropdown.Item className="transition duration-500 hover:text-default">
              日本語
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <div className="flex items-center font-lato text-xs font-bold tracking-wider text-slate-800 md:tracking-widest">
        <HiOutlinePhone className="" />
        <p className="">+123-456-789</p>
      </div>
    </div>
  );
}
function SearchBar() {
  return (
    <section id="search-bar" className="">
      <form class="mx-auto max-w-lg">
        <div class="flex">
          <div class="relative w-full overflow-hidden">
            <input
              type="search"
              id="search-dropdown"
              class="z-20 block w-full rounded-full border-2 border-green-300 p-1.5 text-sm text-gray-900 focus:border-default focus:ring-green-200"
              placeholder="Search . . ."
            />
            <button
              type="submit"
              class="absolute end-0 top-0 h-full rounded-e-full border border-default bg-default p-2.5 text-sm font-medium text-white transition duration-300 hover:bg-green-600 focus:outline-none"
            >
              <svg
                class="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
function NavMenu() {
  return (
    <nav className="hidden p-4 lg:block">
      <ul className="flex flex-wrap justify-center font-sand text-base font-bold">
        <li className="nav-child">
          <a href="/">Home</a>
        </li>
        <li className="nav-child">
          <a className="group">
            <Dropdown label="Dropdown" inline>
              <Dropdown.Item href="/product">Vegetable</Dropdown.Item>
              <Dropdown.Item href="/product">Fruit</Dropdown.Item>
              <Dropdown.Item href="/product">Meat and Seafood</Dropdown.Item>
              <Dropdown.Item href="/product">Snack</Dropdown.Item>
              <Dropdown.Item href="/product">Drink</Dropdown.Item>
              <Dropdown.Item href="/product">Fast Food</Dropdown.Item>
            </Dropdown>
          </a>
        </li>
        <li className="nav-child">
          <a href="/product">Product</a>
        </li>
        <li className="nav-child">
          <a href="/about">About</a>
        </li>
        <li className="nav-child">
          <HashLink to="/about#contact">Contact</HashLink>
        </li>
        <li className="nav-child">
          <a href="/blogs">Blog</a>
        </li>
      </ul>
    </nav>
  );
}
function Mask() {
  return (
    <div
      id="mask"
      className="fixed top-0 z-10 hidden h-screen w-screen translate-x-3 bg-black opacity-60"
    ></div>
  );
}
