"use client";
import { useState } from "react";
import BlogPreview from "../components/blog/BlogPreview";
import AddBlog from "../components/blog/AddBlog";

export default function AddBlogHome() {
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorImg, setAuthorImg] = useState("");
  const [blogImg, setBlogImg] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const handleContentChange = (reason) => {
    setContent(reason);
    setPost({
      ...post,
      content: reason,
    });
  };

  const [post, setPost] = useState({
    title,
    authorName,
    authorImg,
    blogImg,
    content,
    tags,
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "authorName":
        setAuthorName(value);
        break;
      case "authorImg":
        value = value.trim();
        value.split("").map((letter, i) => {
          if (letter === " ") {
            value = value.slice(0, i) + value.slice(i + 1);
          }
        });
        setAuthorImg(value);
        break;
      case "blogImg":
        value = value.trim();
        value.split("").map((letter, i) => {
          if (letter === " ") {
            value = value.slice(0, i) + value.slice(i + 1);
          }
        });
        setBlogImg(value);
        break;
      case "content":
        setContent(value);
        break;
      case "tags":
        let tagsSet = new Set();
        let tags = value.split(",");
        if (tags.length > 0) {
          tags.map((tag, i) => {
            tags[i] = tag.trim();
            i !== tags.length - 1 && tags[i] === ""
              ? tags.splice(i, 1)
              : tagsSet.add(tag);
          });
        }
        setTags(tags);
        value = tags;
        break;
      default:
        break;
    }
    setPost({
      ...post,
      [name]: value,
    });
  };

  return (
    <>
      <AddBlog
        handleChange={handleChange}
        previewPost={post}
        handleContentChange={handleContentChange}
      />
      <BlogPreview previewPost={post} />
    </>
  );
}
