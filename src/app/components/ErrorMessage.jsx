import Link from "next/link";
import GradientDecor from "./GradientDecor";

const ErrorMessage = ({ messages, button, decor }) => {
  return (
    <div
      style={decor && { minHeight: "calc(100vh - 64px - 56px)" }}
      className="w-full text-center flex flex-col justify-center items-center gap-5 text-lg font-bold text-red-700"
    >
      {decor && <GradientDecor />}
      <p>
        {messages.map((msg) => (
          <span key={msg}>
            {msg}
            <br />
          </span>
        ))}
      </p>
      {button && (
        <Link
          href={button.link}
          className="py-2 px-4 rounded-md text-white bg-purple-800 hover:bg-purple-900"
        >
          {button.title}
        </Link>
      )}
    </div>
  );
};

export default ErrorMessage;
