const Hero = () => {
  return (
    <div className="pt-[6rem]">
      <div className="z-10 flex flex-col items-center justify-center">
        <h1 className="z-10 mb-6 text-5xl font-normal text-center text-white poppins">
          A modern publishing platform
        </h1>

        <p className="z-10 text-slate-200">
          Grow you audience and your online brand
        </p>

        <div className="z-10 flex gap-3 pb-10 mt-10">
          <button className="px-6 py-2 text-red-600 bg-white rounded-full">
            Start for Free
          </button>
          <button className="px-6 py-2 text-white border rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
