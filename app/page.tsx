"use client";
import { useState } from "react";
import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import NoResult from "./components/no-result"

export default function Home() {
  // State for the search input field
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle changes in the search input
  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };
  // Filter posts based on the search query
  const filteredPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
    <>
      <div className="w-full mx-auto my-8 py-0">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange} //event
          />
          {searchQuery != "" && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-black absolute end-2.5 bottom-1.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="mt-5 w-full  text-center lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <article
            key={post._id}
            className="prose dark:prose-invert bg-slate-100 px-2 py-4 rounded-md hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800"
          >
            <Link href={post.slug}>
              <h3 className="mt-1 pb-0 mb-1">{post.title}</h3>
            </Link>
            {post.description && (
              <p className="pt-0 mt-0">{post.description}</p>
            )}
          </article>
        ))}
      </div>
      {
          filteredPosts.length == 0 && 
          <NoResult/>
        }
    </>
  );
}
