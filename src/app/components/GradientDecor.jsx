const GradientDecor = () => {
  return (
    <div className=" w-full h-screen fixed top-0 left-0 -z-20 overflow-hidden">
      <span
        style={{ background: "linear-gradient(#fb923cae, #c084fcae)" }}
        className="absolute w-[500px] h-[500px] top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      ></span>
      <span
        style={{ background: "linear-gradient(#fb923cae, #c084fcae)" }}
        className="absolute w-[500px] h-[500px] bottom-0 right-0 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl"
      ></span>
    </div>
  );
};

export default GradientDecor;
