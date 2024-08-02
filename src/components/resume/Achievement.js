import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Ligovis"
            subTitle="Full Stack Developer"
            result="May 2024 to Present"
            des="Working on developing a comprehensive cybersecurity-focused website. The project involves creating a full-stack solution to effectively express and manage the range of cybersecurity services offered. Responsibilities include designing and implementing secure, scalable features, integrating backend and frontend components, and ensuring robust protection against cyber threats. Focused on delivering a user-friendly interface and providing detailed information about cybersecurity services to enhance client engagement and trust."
            
          />
          <ResumeCard
            title="Triveda"
            subTitle="Doctor Booking Appointments"
            result="April-2024 to May-2024"
            des="Developed a user-friendly doctor booking platform, focusing on delivering a seamless and efficient appointment scheduling experience. Implemented a modern, responsive design to ensure accessibility across devices. Integrated features such as real-time availability checking, secure user authentication, and automated reminders to enhance user convenience and streamline the booking process."
            
          />
          <ResumeCard
            title="DKDevops"
            subTitle="Frontend Developer"
            result="Aug-2023 Dec-2023"
            des="Developed a sophisticated e-commerce website, focusing on creating a modern, responsive user interface. Leveraged contemporary design principles to ensure a seamless and intuitive user experience, optimizing for performance across various devices and screen sizes. Implemented key features such as dynamic product listings, secure payment processing, and user-friendly navigation to drive engagement and sales."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
