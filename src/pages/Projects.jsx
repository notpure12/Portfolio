import React from "react";
import { Element } from "react-scroll";
import { myProjects } from "../assets/myProjects";
import { FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

export const Projects = () => {
  return (
    <section className="grid h-auto gap-5 px-10">
      <Element name="Projects" className=""></Element>
      <h2 className="flex items-center justify-center text-xl sm:text-3xl md:text-4xl lg:text-6xl font-customFontSemibold pt-5 lg:p-20">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {myProjects.map((myProjects) => (
          <>
            <div className="p-5 grid border-black ">
              <a href={myProjects.url} target="_blank" className="cursur-pointer">
                <img src={myProjects.pic} className="w-[100%] hover:scale-95 transition-all duration-500"></img>
              </a>
              <h1 className="font-customFontSemibold text-xl">
                {myProjects.title}
              </h1>
              <p className="text-base md:text-lg">
                Tech used :{myProjects.tech}
              </p>
              <div>
                <a className="flex gap-5" href={myProjects.url} target="_blank">
                  <button className="flex gap-1 items-center justify-center bg-black text-white w-24 h-6 border border-black rounded-sm hover:bg-white hover:text-black py-2 px-2">
                    <FaGithub /> GITHUB
                  </button>
                  <button className="flex gap-1 items-center justify-center bg-black text-white w-32 h-6 border rounded border-black rounded-sm hover:bg-white hover:text-black  py-2 px-2">
                    <FaPlay className="text-sm" /> LIVE DEMO
                  </button>
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};
