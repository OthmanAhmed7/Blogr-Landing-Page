const Hero = () => {
  return (
    <div>
      <img
        src="/assets/bg-pattern-intro-desktop.svg"
        alt="desktop pattern"
        className="absolute scale-[250%] sm:scale-[200%] md:scale-[150%] md:translate-y-[-30%]"
      />
      <div className="pt-[6rem] max-w-[1440px]">
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
    </div>
  );
};

export default Hero;
