"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/users/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const data = await res.json();

      if (!res.ok) {
        alert(`${res.status} ${data.message}`);
        return;
      }

      alert(data.message);

      resetForm();
      router.push("/blog");
    } catch (error) {
      alert(`${error.message}`);
    }
  };

  return (
    <div
      style={{ minHeight: "calc(100vh - 64px - 56px" }}
      className="flex justify-center items-center"
    >
      <div className="flex justify-center items-center flex-col gap-10 bg-white shadow-2xl rounded-lg p-10 w-[500px] max-w-full">
        <h1 className="text-3xl text-purple-800 font-bold pb-1 relative after:bg-yellow-400 after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-2/3 after:h-1">
          Sing Up
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center gap-5"
        >
          <label className="w-full">
            <p>Name:</p>
            <input
              type="text"
              placeholder="Enter your Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-zinc-100 w-full h-14 px-5 rounded-lg"
            />
          </label>
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
            Sign Up
          </button>
        </form>
        <p className="text-sm">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="text-purple-800 font-bold text-base hover:text-purple-950"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
