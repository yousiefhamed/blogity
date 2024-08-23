"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/users/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to login");
      }

      const data = await res.json();
      alert(data.message);

      resetForm();
      router.push("/blog");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Failed to login. Please try again.");
    }
  };

  return (
    <div
      style={{ minHeight: "calc(100vh - 64px - 56px" }}
      className="flex justify-center items-center"
    >
      <div className="flex justify-center items-center flex-col gap-10 bg-white shadow-2xl rounded-lg p-10 w-[500px] max-w-full">
        <h1 className="text-3xl text-purple-800 font-bold pb-1 relative after:bg-yellow-400 after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-2/3 after:h-1">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center gap-5"
        >
          <label className="w-full">
            <p>Email:</p>
            <input
              type="text"
              placeholder="Enter your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-100 w-full h-14 px-5 rounded-lg"
            />
          </label>
          <label className="w-full">
            <p>Password:</p>
            <input
              type="password"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-zinc-100 w-full h-14 px-5 rounded-lg"
            />
          </label>
          <button
            type="submit"
            className="mt-5 bg-purple-800 text-white px-5 py-2 rounded-lg hover:bg-purple-950 transition-all"
          >
            Login
          </button>
        </form>
        <p className="text-sm">
          Don&aps;t have an account?{" "}
          <a
            href="/auth/signup"
            className="text-purple-800 font-bold text-base hover:text-purple-950"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
