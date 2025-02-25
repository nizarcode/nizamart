import { HiOutlineArrowRight } from "react-icons/hi";

export default function CardBlog({ BlogImage, BlogTitle, BlogDate, BlogTags }) {
  return (
    <div
      id="card-blog"
      className="mb-4 rounded-md bg-white p-4 pb-6 shadow md:p-0"
    >
      <div class="md:flex md:flex-row">
        <div class="md:basis-1/4 lg:basis-1/5">
          <img src={BlogImage} className="w-full rounded-lg" alt={BlogTitle} />
        </div>
        <div class="my-auto md:basis-3/4 md:ps-6 lg:basis-4/5">
          <ul className="my-3">
            {BlogTags.map((tag) => (
              <li className="me-2 inline rounded-md bg-green-400 px-2 py-1 font-sand text-sm font-bold tracking-wider text-slate-900 md:text-xs">
                {tag}
              </li>
            ))}
          </ul>
          <h5 className="font-sand font-semibold text-slate-500 md:-mb-2 md:text-sm">
            Published {BlogDate}
          </h5>
          <h2 className="mb-2 mt-4 font-sand text-xl font-extrabold md:mb-0 md:mt-2 md:text-lg">
            {BlogTitle}
          </h2>
          <p className="mb-4 font-lato text-sm tracking-wide text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Reiciendis
            doloribus...
          </p>
          <a
            href="javascript:void(0)"
            className="rounded-md border-2 border-default bg-white px-4 py-2 font-semibold transition duration-300 hover:bg-default hover:text-white md:px-2 md:py-1 md:text-sm"
          >
            Read more
            <HiOutlineArrowRight className="ms-1 inline" />
          </a>
        </div>
      </div>
    </div>
  );
}
