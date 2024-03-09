import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

function Nav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav>
      {/*PC Nav START*/}
      <div className="fixed w-[100%] bg-white">
        <div className="flex justify-between py-5 px-410 items-center sm:px-5 md:px-10 lg:px-40">
          {/*Banner START*/}
          <div className=" flex flex-1 justify-center md:justify-start">
            <h1 className="font-customFontSemibold text-2xl cursor-pointer md:text-3xl">
              Supakan
            </h1>
          </div>
          {/*Banner END*/}
          {/*PC Right Nav START*/}
          <div className="hidden md:flex">
            <ul className="flex flex-row md:gap-10 lg:gap-10">
              <li className="font-customFontRegular text-lg cursor-pointer font-customFontSemibold">
                <Link
                  activeClass="active"
                  to="Landing"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="relative group"
                >
                  Home
                  <div className="absolute w-[100%] h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </Link>
              </li>
              <li className="font-customFontRegular text-lg cursor-pointer font-customFontSemibold">
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="relative group"
                >
                  About
                  <div className="absolute w-[100%] h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </Link>
              </li>

              <li className="font-customFontRegular text-lg cursor-pointer font-customFontSemibold">
                <Link
                  activeClass="active"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="relative group"
                >
                  Projects
                  <div className="absolute w-[100%] h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </Link>
              </li>

              <li className="font-customFontRegular text-lg cursor-pointer font-customFontSemibold">
                <Link
                  activeClass="active"
                  to="Contract"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="relative group"
                >
                  Contract
                  <div className="absolute w-[100%] h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </Link>
              </li>
            </ul>
          </div>
          {/*PC Right Nav END*/}
          {/*OutlineMenu Hidehere START*/}
          <div className="md:hidden lg:hidden absolute right-4 cursor-pointer">
            <AiOutlineMenu onClick={handleNav} size={30} />
          </div>
          {/*OutlineMenu Hidehere END*/}
        </div>
      </div>
      {/*PC Nav END*/}

      {/*Mobile Nav START*/}
      {nav ? (
        <>
          <div className="fixed bg-white w-[100%] top-16 h-52">
            <ul className="flex flex-col items-center md:hidden gap-8">
              <li className="cursor-pointer">
                <Link
                  activeClass="active"
                  to="Landing"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={handleNav}
                >
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={handleNav}
                >
                  About 
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  activeClass="active"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={handleNav}
                >
                  Projects
                </Link>
              </li>
              <li className="cursor-pointer" onClick={handleNav}>
                <Link
                  activeClass="active"
                  to="Contract"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={handleNav}
                >
                  Contract 
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div></div>
      )}
      {/*Mobile Nav END*/}
    </nav>
  );
}
export default Nav;
