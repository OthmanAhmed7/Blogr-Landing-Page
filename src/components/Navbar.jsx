import { useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [arrowToggle, setArrowToggle] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
  }

  function toggleArrow() {
    setArrowToggle(!arrowToggle);
  }

  return (
    <div className="flex items-center justify-between w-full">
      <div className="z-20 flex items-center justify-between">
        <div>
          <a href="#">
            {" "}
            <img src="/assets/logo.svg" alt="logo" />
          </a>
        </div>

        <div className="hidden ml-0 cursor-pointer sm:block md:ml-5 lg:ml-7">
          <ul className="flex gap-3 mx-4 text-slate-500">
            {navLinks.map((nav) => (
              <li
                onClick={toggleArrow}
                key={nav}
                className="flex items-center justify-center gap-2 text-slate-100"
              >
                <a href={`#${nav.title}`}>{nav.title}</a>
                <img src="/assets/icon-arrow-light.svg" alt="arrow down" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="z-20 hidden text-white sm:block">
        <button className="px-3 py-2">Log In</button>
        <button className="px-5 py-2 text-red-600 bg-white rounded-full">
          Sign Up
        </button>
      </div>

      <div className="z-30 block sm:hidden">
        <img
          className="cursor-pointer"
          onClick={toggleMenu}
          src={toggle ? "/assets/icon-close.svg" : "/assets/icon-hamburger.svg"}
          alt="toggle menu"
        />
        {toggle && (
          <>
            <div className="absolute w-full max-w-md py-8 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[6px] shadow-2xl top-1/4 left-1/2">
              <div className="">
                <ul className="flex flex-col gap-3 mx-4 cursor-pointer text-[#0d253a]">
                  {navLinks.map((nav) => (
                    <li
                      onClick={toggleArrow}
                      key={nav.id}
                      className="flex items-center justify-center gap-2"
                    >
                      <a href={nav.id}>{nav.title}</a>
                      <img src="/assets/icon-arrow-dark.svg" alt="arrow down" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center justify-center gap-1 mt-4 text-slate-400">
                <button className="text-[#0d253a] py-2 w-[8rem]">Log In</button>
                <button className="w-[8rem] py-2 main-bg rounded-full text-white font-bold">
                  Sign Up
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
