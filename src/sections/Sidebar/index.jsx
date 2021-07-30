import React from "react";

const sections = ["intro", "career", "projects", "blog"];

export default function Sidebar() {
  return (
    <aside className="invisible sm:visible mx-auto fixed inset-y-0 right-0 flex items-center w-24 text-right">
      <div className="flex flex-col justify-around mt-10 sm:mt-0 h-64 font-sans text-lg text-white">
        {sections.map((section) => (
          <div key={section}>
            <button
              className="rounded-full bg-white text-secondary shadow-md mr-2 p-2 my-4 flex-nowrap hover:shadow-xl transition-shadow duration-100"
              onClick={() =>
                document
                  .getElementById(section)
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              {section}
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}
