import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{ minHeight: "calc(100svh - 64px - 56px)" }}
      className="w-full text-center flex flex-col justify-center items-center gap-5 text-lg font-bold text-red-700"
    >
      <div className=" w-full h-full absolute top-0 left-0 -z-20 overflow-x-hidden">
        <span
          style={{ background: "linear-gradient(#fb923cae, #c084fcae)" }}
          className="absolute w-[500px] h-[500px] top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        ></span>
        <span
          style={{ background: "linear-gradient(#fb923cae, #c084fcae)" }}
          className="absolute w-[500px] h-[500px] bottom-0 right-0 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl"
        ></span>
      </div>
      <p>
        Error 404: Page Not Found! <br /> 🥺🥺🥺
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded font-bold text-md text-white bg-rose-600 hover:bg-rose-800 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}
