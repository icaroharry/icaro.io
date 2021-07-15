import React from "react";

export default function Sidebar() {
  return (
    <aside className="invisible sm:visible mx-auto fixed inset-y-0 right-0 flex items-center w-24 text-right">
      <div className="flex flex-col justify-around mt-10 sm:mt-0 h-64 font-sans text-lg text-white">
        <div>
          <button
            className="rounded-full focus:outline-none bg-green-600 cursor-pointer text-white shadow-md mr-2 p-2 my-4 flex-nowrap hover:shadow-xl transition-shadow duration-100"
            onClick={() =>
              document
                .getElementById("intro")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            intro
          </button>
        </div>
        <div>
          <button
            className="rounded-full focus:outline-none bg-green-600 cursor-pointer text-white shadow-md mr-2 p-2 my-4 flex-nowrap hover:shadow-xl transition-shadow duration-100"
            onClick={() =>
              document
                .getElementById("career")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            career
          </button>
        </div>
        <div>
          <button
            className="rounded-full focus:outline-none bg-green-600 cursor-pointer text-white shadow-md mr-2 p-2 my-4 flex-nowrap hover:shadow-xl transition-shadow duration-100"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            projects
          </button>
        </div>
        <div>
          <button
            className="rounded-full focus:outline-none bg-green-600 cursor-pointer text-white shadow-md mr-2 p-2 my-4 flex-nowrap hover:shadow-xl transition-shadow duration-100"
            onClick={() =>
              document
                .getElementById("blog")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            blog
          </button>
        </div>
      </div>
    </aside>
  );
}
