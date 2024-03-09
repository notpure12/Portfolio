import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { FaGraduationCap } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

export const About = () => {
  return (
    <Element name="About" className="">
      <section className="h-auto bg-gray-200">
        {/*HEADER START*/}
        <h2 className="bg-gray-200 flex items-center justify-center text-xl sm:text-3xl md:text-4xl lg:text-6xl font-customFontSemibold pt-5 lg:p-20">
          Who Am I
        </h2>
        {/*HEADER END*/}
        {/*CONTAINER*/}
        <div className="p-7 lg:flex bg-gray-200">
          <div className="lg:flex lg:px-20">
            {/*Hidden PROFILE START*/}
            <div className="flex items-center w-[100%] h-[100%]">
              <VscAccount className="text-9xl h-80 w-[100%] hidden lg:block" />
            </div>
            {/*Hidden PROFILE END*/}
            {/*INNER CONTAINER*/}
            <div className="grid w-[100%] gap-5 px-5">
              <div className="border-2 border-black rounded-xl p-2 ">
                <FaGraduationCap className="text-2xl sm:text-4xl" />
                <h1 className="font-customFontSemibold sm:text-2xl">
                  Education
                </h1>
                <div className="text-base sm:text-lg">
                  <li>B.eng Bachelor</li>
                  <li>
                    Currently second year of software engineering at Phayao
                    University
                  </li>
                </div>
              </div>
              <div className="">
                <p className="text-sm sm:text-base justify-start tracking-wide">
                  Hello, I'm Supakan Wannasee, also known as Nott. I find
                  immense satisfaction in successfully solving challenges, and I
                  thrive on pushing myself to code in most of my free time. As a
                  self-taught enthusiast, I'm passionate about continuous
                  learning and improvement. My ultimate goal is to be a
                  successful and healthy individual, someone my family can rely
                  on. Through my dedication to personal growth and coding
                  excellence, I am working towards building a future where I can
                  contribute positively to both my professional and personal
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
