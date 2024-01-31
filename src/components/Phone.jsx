const Phone = () => {
  return (
    <div>
      <img
        src="/assets/illustration-phones.svg"
        alt="phones photo"
        className="mb-[-17rem] z-30 relative"
      />

      <div className="w-[100%] phone-bg padding rounded-tr-[6rem] rounded-bl-[6rem] relative overflow-hidden text-center">
        <div className="max-w-[1440px]">
          <img
            src="../../public/assets/bg-pattern-circles.svg"
            alt="circles pattern"
            className="absolute inset-0 w-[25rem] top-[-30%] scale-[150%] z-10"
          />

          <h1 className="pt-[13rem] text-white text-5xl font-normal relative mb-10 z-40">
            State of the art Infrastructure
          </h1>

          <p className="relative z-40 pb-16 text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            autem magni delectus maiores in dignissimos eius ab sit consequatur,
            quam modi explicabo aspernatur ipsa libero beatae molestias cumque
            omnis, expedita esse impedit ullam! Dolores voluptatum non esse nam
            commodi tempore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Phone;
