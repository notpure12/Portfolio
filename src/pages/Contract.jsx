import React from "react";
import { Element } from "react-scroll";

export const Contract = () => {
  return (
    <section className="h-auto bg-gray-200 p-5">
      <Element name="Contract">
        <div className="flex flex-col gap-5 lg:gap-0 items-center jusstify-center">
          <div className="flex items-center justify-center">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-customFontSemibold pt-5 lg:p-10">
              Contract
            </h1>
          </div>
          {/*CONTENT CONTAINER*/}
          <div className="flex flex-col items-center justify-center gap-5 pb-10">
            <h1 className="tracking-tight">
              Shoot me an email if you want to contact. You can also text me via{" "}
              <a
                href="https://web.facebook.com/profile.php?id=100011269307661"
                target="_blank"
                className="underline"
              >
                Facebook
              </a>
              , and you can spy on me on my{" "}
              <a
                href="https://github.com/notpure12"
                target="_blank"
                className="underline"
              >
                GitHub
              </a>
              .
            </h1>
            <h1 className="font-customFontRegular tracking-wider">
              notwannasee@gmail.com
            </h1>
          </div>
        </div>
      </Element>
    </section>
  );
};
