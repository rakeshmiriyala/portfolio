import React, { useState, useEffect } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import AOS from "aos";
import "aos/dist/aos.css";
import ConfettiExplosion from "react-confetti-explosion";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const [explode, setExplode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleButtonClick = () => {
    setExplode(true);
    // Reset explode state after a delay to allow confetti animation to finish
    setTimeout(() => {
      setExplode(false);
    }, 3000); // Adjust the delay as needed to match your confetti animation duration
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url =
        "https://sheet.best/api/sheets/1bzMTBWZAYvRcn5elTGr0lBn_4kZn_GJR0BBvzoHt1fw";
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Message sent successfully");
      handleButtonClick();

      // Optionally, reset form fields after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20"
      data-aos="fade-right"
      data-aos-easing="ease-out-sine"
      data-aos-duration="1000"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      {explode && <ConfettiExplosion />}
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
              onSubmit={handleSubmit}
            >
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    value={formData.name}
                    onChange={handleChange}
                    className="contactInput"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    value={formData.phone}
                    onChange={handleChange}
                    className="contactInput"
                    type="text"
                    name="phone"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  className="contactInput"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  className="contactTextArea"
                  cols="30"
                  rows="8"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
