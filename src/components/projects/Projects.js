import React, { useEffect } from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  // Define GitHub and website links for each project
  const projects = [
    {
      title: "E-commerce Website",
      des: "Made a dynamic e-commerce website with react,tailwind css and node.js for backend where we used razor pay for payment and shiprocket for shipping the orders.",
      src: projectTwo,
      githubLink: "https://github.com/rakeshmiriyala/starter-rest-api",
      websiteLink: "https://augmentedrealitywardrobe.com/",
    },
    {
      title: "Community Website Atharva",
      des: "A website for a data science community in Malla Reddy Engineering College for promoting an event. We built a static page for the Data Science community.",
      src: projectOne,
      githubLink:
        "https://github.com/rakeshmiriyala/web-development/tree/main/Final",
      websiteLink: "https://www.atharvadsc.com",
    },
    {
      title: "Shoprags Online",
      des: "In order to reduce queues in shopping malls after the shopping we have made a website at last the you can pay with any payment. In short we can say Offline shopping Online payment.",
      src: projectFour,
      githubLink:
        "https://github.com/rakeshmiriyala/web-development/tree/main/ShopRags",
      websiteLink: "https://shoprags.netlify.app/",
    },
    {
      title: "Todo List Website",
      des: "A todo app for maintaining proper track of things what we do and what we want to do and what we are doing right now.",
      src: projectThree,
      githubLink: "https://github.com/rakeshmiriyala/portfolio",
      websiteLink: "https://todolistls.netlify.app/",
    },
    {
      title: "Triveda Startup Company",
      des: "We a group of 3 people have started a startup company in which we are going to Design & Develop the webistes and also App development like E-commerce , Dynamic websites and Static websites and etc.. ",
      src: projectFive,
      githubLink: "https://github.com/rakeshmiriyala/tri",
      websiteLink: "https://agency.trivedagroup.com/",
    },
  ];

  return (
    <section id="projects" className="w-full py-20">
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          {/* Map through each project and render a ProjectsCard component */}
          {projects.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              des={project.des}
              src={project.src}
              githubLink={project.githubLink}
              websiteLink={project.websiteLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
