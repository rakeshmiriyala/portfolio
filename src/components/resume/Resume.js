import React, { useState, useEffect } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <section
      id="resume"
      className="w-full"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setAchievementData(false);
            }}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setAchievementData(false);
            }}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setAchievementData(true);
            }}
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
    </section>
  );
};

export default Resume;
