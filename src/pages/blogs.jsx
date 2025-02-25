// "use client";
import CardBlog from "../components/card-blog";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import { Pagination } from "flowbite-react";
import { useState } from "react";

const customTheme = {
  pages: {
    selector: {
      active:
        "bg-green-100 text-green-600 hover:bg-green-100 hover:text-green-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
    },
  },
};

export default function Blogs() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

function Body() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  let blogs = [
    {
      tags: ["Healthy", "Food", "Fruit"],
      img: "src/assets/watermelon.png",
      title: "Vitamin From Watermelon",
      date: "22 January 2025",
    },
    {
      tags: ["Healthy", "Food"],
      img: "src/assets/milk.png",
      title: "Our Fresh Milk",
      date: "22 January 2025",
    },
    {
      tags: ["Healthy", "Food", "Recipe"],
      img: "src/assets/salmon.png",
      title: "How To Cook Salmon",
      date: "22 January 2025",
    },
    {
      tags: ["Healthy", "Food", "Vegetables"],
      img: "src/assets/tomato.jfif",
      title: "Vitamin C In Tomato",
      date: "22 January 2025",
    },
    {
      tags: ["Healthy", "Food", "Vegetables"],
      img: "src/assets/watermelon.png",
      title: "Broccoli: A Nutritional Powerhouse",
      date: "22 January 2025",
    },
  ];
  return (
    <section id="news" className="mt-10 p-6">
      <div className="container">
        <div className="mb-8 mt-4 text-center">
          <h3 className="font-sand text-3xl  font-bold">Our articles
          </h3>
        </div>
        <div className="my-7 flex overflow-x-auto justify-center">
        <Pagination layout="table" currentPage={currentPage} totalPages={50} onPageChange={onPageChange} />
        </div>
        {blogs.map((blog) => (
          <CardBlog
            BlogTags={blog.tags}
            BlogImage={blog.img}
            BlogTitle={blog.title}
            BlogDate={blog.date}
          />
        ))}
      </div>
    </section>
  );
}
