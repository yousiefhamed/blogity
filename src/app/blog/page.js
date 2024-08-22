import BlogList from "../components/blog/BlogList";

export default function BlogHome() {
  return (
    <div className="w-full px-4 py-8 flex flex-col justify-center items-start gap-10">
      <h1 className="text-3xl font-bold text-purple-800">Explore Our Blog</h1>
      <BlogList />
    </div>
  );
}
