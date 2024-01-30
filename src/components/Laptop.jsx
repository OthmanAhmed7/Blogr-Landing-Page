const Laptop = () => {
  return (
    <div className="flex flex-col justify-between gap-10 md:flex-row-reverse mt-[5rem]">
      <img
        src="/assets/illustration-laptop-mobile.svg"
        alt="editor illustration"
        className="block mb-8 md:hidden scale-[115%]"
      />

      <div className="flex flex-col gap-10 m-auto text-center md:text-left">
        <div>
          <h1 className="text-[#0d253a] text-2xl font-semibold mb-5">
            Free, Open, Simple.
          </h1>

          <p className="text-slate-600 w-[25rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            nesciunt saepe, deserunt delectus voluptatibus itaque dignissimos
            voluptatem harum quae consequatur assumenda iure vitae ipsum minima
            provident incidunt. Fugiat, delectus enim! consequatur assumenda
            iure vitae ipsum minima provident incidunt. Fugiat, delectus enim!
          </p>
        </div>

        <div>
          <h1 className="text-[#0d253a] text-2xl font-semibold mb-5">
            Powerful tooling
          </h1>

          <p className="text-slate-600 w-[25rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            nesciunt saepe, deserunt delectus voluptatibus itaque dignissimos
            voluptatem harum quae
          </p>
        </div>
      </div>

      <img
        src="/assets/illustration-laptop-desktop.svg"
        alt="editor illustration"
        className="hidden md:block w-[450px] h-[40%] lg:w-[600px] lg:h-[50%] md:w-[650px]"
      />
    </div>
  );
};

export default Laptop;
