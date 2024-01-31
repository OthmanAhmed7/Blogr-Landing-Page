const Product = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="max-w-[1440px]">
        <h1 className="z-10 text-[#0d253a] text-2xl font-semibold lg:mb-20 lg:mt-10 text-center">
          Designed for the Future
        </h1>

        <div className="flex flex-col md:flex-row">
          <img
            src="/assets/illustration-editor-mobile.svg"
            alt="editor illustration"
            className="block mb-8 md:hidden"
          />

          <div className="flex flex-col gap-10 m-auto text-center md:text-left">
            <div>
              <h1 className="text-[#0d253a] text-2xl font-semibold mb-5">
                Introducing an extensible editor
              </h1>

              <p className="text-slate-600 w-[25rem]">
                Lorem ipsum dolor sit amet conremsectetur adipisicing elit.
                Natus nesciunt saepe, deserunt delectus voluptatibus itaque
                dignissimos voluptatem harum quae consequatur assumenda iure
                vitae ipsum minima provident incidunt. Fugiat, delectus enim!
              </p>
            </div>

            <div>
              <h1 className="text-[#0d253a] text-2xl font-semibold mb-5">
                Robust content management
              </h1>

              <p className="text-slate-600 w-[25rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                nesciunt saepe, deserunt delectus voluptatibus itaque
                dignissimos voluptatem harum quae consequatur assumenda iure
                vitae ipsum minima provident incidunt. Fugiat, delectus enim!
              </p>
            </div>
          </div>

          <img
            src="/assets/illustration-editor-desktop.svg"
            alt="editor illustration"
            className="hidden md:block w-[450px] h-[40%] lg:w-[600px] lg:h-[50%] md:w-[650px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
