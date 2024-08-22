import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <Link
      href={`/blog/${blog.id}`}
      className="w-full flex justify-start items-center gap-5 bg-white shadow-lg rounded-lg overflow-hidden hover:-rotate-3 hover:shadow-xl transition-all cursor-pointer sm:flex-row flex-col"
    >
      <div className="sm:min-w-[350px] lg:min-w-[500px] min-w-full w-[350px] md:w-[500px] h-60">
        <Image
          src={blog.blogImg}
          alt={blog.title}
          width={300}
          height={200}
          className="sm:min-w-[350px] lg:min-w-[500px] min-w-full w-[350px] md:w-[500px] h-60 object-cover inline-block"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-3">
        <h2 className="text-purple-800 font-bold text-2xl">{blog.title}</h2>
        <div className="flex flex-wrap justify-start items-center gap-x-2">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="font-bold text-sm"
              style={{ color: "#F5004F" }}
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image
            src={blog.authorImg}
            alt={blog.authorName}
            width={30}
            height={30}
            className="w-10 h-10 rounded-full object-cover overflow-hidden"
          />
          <span style={{ color: "#7C00FE" }}>{blog.authorName}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
