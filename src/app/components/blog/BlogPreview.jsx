"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BlogPost({ previewPost }) {
  const [post, setPost] = useState(previewPost);

  useEffect(() => {
    setPost(previewPost);
  }, [previewPost]);

  return (
    <div className="w-full col-span-2">
      <>
        {post && (
          <div className="w-full flex flex-col justify-center items-center gap-10 p-4">
            <Image
              src={
                (post.blogImg.trim().startsWith("https://") &&
                  post.blogImg.trim().length > 8) ||
                post.blogImg.trim().startsWith("/")
                  ? post.blogImg
                  : "/exessive_blinking.jpg"
              }
              alt={post.title}
              width={1024}
              height={685}
              className="w-full inline-block rounded-lg"
            />
            <div className="w-full flex flex-col justify-center items-start gap-3">
              <h2 className="text-purple-800 font-bold text-2xl">
                {post.title ? post.title : "Title Goes Here..."}
              </h2>
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={
                    (post.authorImg.trim().startsWith("https://") &&
                      post.authorImg.trim().length > 8) ||
                    post.authorImg.trim().startsWith("/")
                      ? post.authorImg
                      : "/light-bulb.jpg"
                  }
                  alt={post.authorName}
                  width={30}
                  height={30}
                  className="w-10 h-10 rounded-full overflow-hidden"
                />
                <span style={{ color: "#7C00FE" }}>
                  {post.authorName
                    ? post.authorName
                    : "author name goes here..."}
                </span>
              </div>
            </div>
            <div
              className="post w-full text-gray-500"
              dangerouslySetInnerHTML={{
                __html: post.content ? post.content : "content goes here...",
              }}
            />
            <div className="w-full flex flex-wrap justify-start items-center gap-x-2">
              <p className="font-bold text-sm" style={{ color: "#F5004F" }}>
                #{post.tags.join(" #")}
              </p>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
