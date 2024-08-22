"use client";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import SearchBlogs from "./SearchBlogs";
import ErrorMessage from "./../ErrorMessage";
import Loading from "./../../loading";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API}/blogs`
        );
        const data = await response.json();
        data.sort((a, b) => b.createdAt - a.createdAt);
        setError(null);
        setBlogs(data);
        setFilteredBlogs(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredBlogs(blogs);
      return;
    }
    const oldBlogs = [...blogs];
    const filteredBlogs = oldBlogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filteredBlogs);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-start gap-10">
        <SearchBlogs
          blogsLength={filteredBlogs.length}
          onSearch={handleSearch}
        />
        {isLoading ? (
          <div className="w-full">
            <Loading />
          </div>
        ) : (
          <>
            {blogs.length > 0 &&
              filteredBlogs.length > 0 &&
              filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            {error ? (
              <ErrorMessage
                messages={[
                  "Error While Fetching Blogs:",
                  `${error}`,
                  "🫣🫣🫣",
                  "",
                  "Please, Try Again!",
                  "🥺🥺🥺",
                ]}
                button={{ title: "Back to Home", link: "/" }}
              />
            ) : (
              filteredBlogs.length === 0 && (
                <ErrorMessage
                  messages={[
                    "No blogs found. Try searching with different keywords!",
                    "🫣🫣🫣",
                    "",
                    "Or, let's create some new ones!",
                    "🥺🥺🥺",
                  ]}
                  button={{ title: "Create New Blog", link: "/add" }}
                />
              )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogList;
