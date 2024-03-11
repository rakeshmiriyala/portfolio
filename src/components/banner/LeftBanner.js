import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import AOS from "aos";
import "aos/dist/aos.css";

const LeftBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div
      className="w-full lgl:w-1/2 flex flex-col gap-20"
      data-aos="fade-up"
      data-aos-easing="ease-out-sine"
      data-aos-duration="800"
    >
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Rakesh Miriyala</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and guiding through each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
