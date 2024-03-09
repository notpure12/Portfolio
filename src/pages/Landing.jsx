import React from "react";
import Nav from "../components/Nav";
import imglaptop from "../assets/image/laptop.avif";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNestjs } from "react-icons/si";
import { SiVite } from "react-icons/si";

function Landing() {
  return (
    <>
      <Nav />
      <hr></hr>
      <Element name="Landing" className=""></Element>
      <section className="">
        {/*CONTAINER*/}
        <div className="flex flex-row items-center justify-center pt-44 px-5 gap-10 md:gap-32 md:mt-20">
          {/*LEFT SIDE DIV START*/}
          <div className="">
            <h1 className="font-customFontSemibold text-xl sm:text-3xl md:text-6xl">
              Hi I'm Supakan
            </h1>
            <h2 className="text-md sm:text-2xl md:text-3xl md:text-4xl">Front-End React</h2>
            <h2 className="text-md sm:text-2xl md:text-3xl md:text-4xl">Developer</h2>
            <p className="text-xs md:text-base md:text-2xl text-gray-500">
              Web Developer on a Mission!!
            </p>
            <div className="pt-2">
              <button className="bg-black text-white hover:bg-white hover:text-black border border-black py-1 px-2 md:py-2 md:px-3 lg:py-2 lg:px-4 rounded ">
                <p className="text-xs md:text-base lg:text-lg">My resume</p>
              </button>
            </div>
          </div>
          {/*LEFT SIDE DIV END*/}
          {/*RIGHT SIDE DIV START*/}
          <div className="">
            <img src={imglaptop} className="h-36 w-50 sm:h-64 lg:h-80"></img>
          </div>
        </div>
        {/*RIGHT SIDE DIV END*/}
        {/*TECH STACK START*/}
        <div className="flex justify-center">
          <div className="flex p-5 gap-5 items-center">
            <h3 className="text-lg sm:text-2xl">Tech Stack</h3>
            <div>|</div> <FaHtml5 className="text-xl sm:text-3xl" />
            <FaCss3Alt className="text-xl sm:text-3xl" />
            <IoLogoJavascript className="text-xl sm:text-3xl" />
            <SiNestjs className="text-xl sm:text-3xl" />
            <SiVite className="text-xl sm:text-3xl" />
          </div>
        </div>
        {/*TECH STACK END*/}
      </section>
    </>
  );
}

export default Landing;
