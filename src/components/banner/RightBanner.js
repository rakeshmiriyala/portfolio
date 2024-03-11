import React, { useEffect } from "react";
import { bannerImg } from "../../assets/index";
import AOS from "aos";
import "aos/dist/aos.css";

const RightBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div
      className="w-full lgl:w-1/2 flex justify-center items-center relative"
      data-aos="fade-up"
      data-aos-easing="ease-out-sine"
      data-aos-duration="800"
    >
      <img
        className="w-[300px] h-[250px] lgl:w-[500px] lgl:h-[400px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;
