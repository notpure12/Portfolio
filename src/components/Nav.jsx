import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../css/Nav.css";

function Nav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("effected");
  };

  return (
    <nav>
      {/*PC Nav START*/}
      <div className=" flex justify-between py-5 px-410 items-center sm:px-5 md:px-10 lg:px-40">
        {/*Banner START*/}
        <div className=" flex flex-1 justify-center md:justify-start lg:ml-10">
          <h1 className="font-customFontSemibold text-2xl cursor-pointer">
            Portfolio
          </h1>
        </div>
        {/*Banner END*/}
        {/*PC Right Nav START*/}
        <div className=" hidden md:flex">
          <ul className=" flex flex-row md:gap-10 lg:gap-10">
            <li className="font-customFontRegular text-lg cursor-pointer">
              <a href="#Home" class="relative group">
                Home
                <div class="absolute w-[100%] h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </a>
            </li>
            <li className="font-customFontRegular text-lg cursor-pointer">
              <a href="#About" class="relative group">
                About
                <div class="absolute w-[100%] h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </a>
            </li>

            <li className="font-customFontRegular text-lg cursor-pointer">
              <a href="#Skills" class="relative group">
                Skills
                <div class="absolute w-[100%] h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </a>
            </li>

            <li className="font-customFontRegular text-lg cursor-pointer">
              <a href="#Projects" class="relative group">
                Projects
                <div class="absolute w-[100%] h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </a>
            </li>

            <li className="font-customFontRegular text-lg cursor-pointer">
              <a href="#Contract" class="relative group">
                Contract Me
                <div class="absolute w-[100%] h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </a>
            </li>
          </ul>
        </div>
        {/*PC Right Nav END*/}
        {/*OutlineMenu Hidehere START*/}
        <div className="md:hidden lg:hidden absolute right-4">
          <AiOutlineMenu onClick={handleNav} size={30} />
        </div>
        {/*OutlineMenu Hidehere END*/}
      </div>
      {/*PC Nav END*/}

      {/*Mobile Nav START*/}
      <div className="flex flex-col h-auto items-center md:hidden gap-8">
        {nav ? (
          <>
            <button className="w-[50%] h-10 mt-5">
              <a href="#Home">
                <span className="font-customFontRegular">
                  <h2>Home</h2>
                </span>
              </a>
            </button>
            <button className="w-[50%] h-10">
              <a href="#About">
                <span className="font-customFontRegular">
                  <h2>About</h2>
                </span>
              </a>
            </button>
            <button className="w-[50%] h-10">
              <a href="#Skills">
                <span className="font-customFontRegular">
                  <h2>Skills</h2>
                </span>
              </a>
            </button>
            <button className="w-[50%] h-10">
              <a href="#Projects">
                <span className="font-customFontRegular">
                  <h2>Projects</h2>
                </span>
              </a>
            </button>
            <button className="w-[50%] h-10">
              <a href="Contract">
                <span className="font-customFontRegular">
                  <h2>Contract Me</h2>
                </span>
              </a>
            </button>
          </>
        ) : (
          <div></div>
        )}
      </div>
      {/*Mobile Nav END*/}
    </nav>
  );
}
export default Nav;