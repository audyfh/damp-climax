import { blogData } from "..";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const handleGetDetail = (id) => {
    navigate(`/ecolearn/${id}`);
  };

  return (
    <div className="bg-white flex flex-col items-center justify-between">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto md:mx-30 text-center text-xl md:text-2xl ">
          <h2 className=" text-gray-900 text-sm md:text-2xl">
            <span className="text-climax-green font-bold text-3xl">
              EcoLearn
            </span>
            <br className="md:hidden" />
            <span className="hidden md:inline">:</span> A blog that provides
            educational content on climate change and practical ways to
            <span className="text-climax-green font-bold">
              {" "}
              protect the Earth.
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action="#" className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="Search">
                <div className="relative">
                  <input
                    type="text"
                    id="Search"
                    placeholder="Search for eco-friendly tips"
                    className="mt-1 w-full rounded-full border-gray-500 bg-white pe-10 shadow-md sm:text-base py-3 px-4 
                        focus:outline-none focus:border-climax-green focus:ring focus:ring-climax-green"
                  />
                  <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                    <button
                      type="button"
                      aria-label="Submit"
                      className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-5">
        {blogData.map((item, index) => {
          return (
            <BlogCard
              key={index}
              data={item}
              onClickCard={() => handleGetDetail(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
