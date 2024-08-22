"use client";
import { useRouter } from "next/navigation";
import Tiptap from "../tiptap/Tiptap";

const AddNewPost = ({ previewPost, handleChange, handleContentChange }) => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !previewPost.title ||
      !previewPost.authorName ||
      !previewPost.authorImg ||
      !previewPost.blogImg ||
      !previewPost.content ||
      !previewPost.tags.length > 0
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (
      !(
        previewPost.authorImg.trim().startsWith("/") ||
        previewPost.authorImg.trim().startsWith("https://")
      )
    ) {
      alert("Please enter a valid URL for the author image");
      return;
    }
    if (
      !(
        previewPost.blogImg.trim().startsWith("/") ||
        previewPost.blogImg.trim().startsWith("https://")
      )
    ) {
      alert("Please enter a valid URL for the blog image");
      return;
    }

    let newPost = {
      ...previewPost,
    };

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then(() => {
        alert("Post added successfully!");
        router.push("/blog");
      })
      .catch((err) => {
        console.error("Error adding post:", err);
        alert("Failed to add post. Please try again.");
      });
  };

  return (
    <div
      style={{ minHeight: "calc(100svh - 64px - 56px)" }}
      className="md:sticky md:top-[64px] w-full flex justify-start items-center flex-col py-10 gap-5"
    >
      <h2 className="text-yellow-400 font-bold text-2xl">Add New Post</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 justify-center items-center"
      >
        <label className="max-w-full px-2 flex flex-col justify-center items-start gap-1">
          <p className="text-purple-800 font-bold">Title:</p>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={previewPost.title}
            onChange={(e) => handleChange(e)}
            className="w-[350px] max-w-full border border-gray-300 rounded p-2 pr-10 focus:outline-none focus:shadow-lg transition-all focus:border focus:border-yellow-300"
          />
        </label>
        <label className="max-w-full px-2 flex flex-col justify-center items-start gap-1">
          <p className="text-purple-800 font-bold">Author Name:</p>
          <input
            type="text"
            placeholder="Author Name"
            name="authorName"
            value={previewPost.authorName}
            onChange={(e) => handleChange(e)}
            className="w-[350px] max-w-full border border-gray-300 rounded p-2 pr-10 focus:outline-none focus:shadow-lg transition-all focus:border focus:border-yellow-300"
          />
        </label>
        <label className="max-w-full px-2 flex flex-col justify-center items-start gap-1">
          <p className="text-purple-800 font-bold">Author Profile URL:</p>
          <input
            type="text"
            placeholder="Author Image URL"
            name="authorImg"
            value={previewPost.authorImg}
            onChange={(e) => handleChange(e)}
            className="w-[350px] max-w-full border border-gray-300 rounded p-2 pr-10 focus:outline-none focus:shadow-lg transition-all focus:border focus:border-yellow-300"
          />
        </label>
        <label className="max-w-full px-2 flex flex-col justify-center items-start gap-1">
          <p className="text-purple-800 font-bold">Blog Thumbnail URL:</p>
          <input
            type="text"
            placeholder="Blog Post Image URL"
            name="blogImg"
            value={previewPost.blogImg}
            onChange={(e) => handleChange(e)}
            className="w-[350px] max-w-full border border-gray-300 rounded p-2 pr-10 focus:outline-none focus:shadow-lg transition-all focus:border focus:border-yellow-300"
          />
        </label>
        <label className="max-w-full px-2 flex flex-col justify-center items-start gap-1">
          <p className="text-purple-800 font-bold">Content</p>
          <Tiptap
            content={previewPost.content}
            onChange={(newContent) => handleContentChange(newContent)}
          />
        </label>
        <label className="max-w-full px-2 flex flex-col justify-center items-start gap-1">
          <p className="text-purple-800 font-bold">
            Tags <small>(comma seperated)</small>
          </p>
          <input
            type="text"
            placeholder="Tags separated by commas..."
            name="tags"
            value={previewPost.tags.join(", ")}
            onChange={(e) => handleChange(e)}
            className="w-[350px] max-w-full border border-gray-300 rounded p-2 pr-10 focus:outline-none focus:shadow-lg transition-all focus:border focus:border-yellow-300"
          />
        </label>
        <button
          type="submit"
          style={{ color: "#FFF" }}
          className="px-4 py-2 rounded font-bold text-md mt-5 bg-rose-600 hover:bg-rose-800 transition-all"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddNewPost;
