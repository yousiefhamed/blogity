"use client";
import { useState, useEffect } from "react";
import Loading from "../../loading";
import ErrorMessage from "../ErrorMessage";
import Image from "next/image";

export default function BlogPost({ params }) {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/blogs/${params._id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [params._id]);

  return (
    <div>
      {isLoading ? (
        <Loading /> // You can show a loading indicator here
      ) : error ? (
        <ErrorMessage
          messages={[
            "Error While Fetching the Post",
            "🫣🫣🫣",
            "",
            "please, Try Again!",
            "🥺🥺🥺",
          ]}
          button={{ title: "Back to Blogs", link: "/blog" }}
          decor={true}
        />
      ) : (
        <>
          {post && (
            <div className="w-full flex flex-col justify-center items-center gap-10 p-4">
              <Image
                src={post.blogImg}
                alt={post.title}
                width={1024}
                height={685}
                className="w-full inline-block rounded-lg"
              />
              <div className="w-full flex flex-col justify-center items-start gap-3">
                <h2 className="text-purple-800 font-bold text-2xl">
                  {post.title}
                </h2>
                <div className="flex justify-center items-center gap-2">
                  <Image
                    src={post.authorImg}
                    alt={post.authorName}
                    width={30}
                    height={30}
                    className="w-10 h-10 rounded-full overflow-hidden"
                  />
                  <span style={{ color: "#7C00FE" }}>{post.authorName}</span>
                </div>
              </div>
              <div
                className="post w-full text-black"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <div className="w-full flex flex-wrap justify-start items-center gap-x-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-bold text-sm"
                    style={{ color: "#F5004F" }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
