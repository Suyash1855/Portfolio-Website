import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../Utils/Motion";

import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="  text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </motion.div>
      <motion.div
        className="mt-4 flex flex-col items-center justify-center xs:flex-row xs:align-item gap-11 text-secondary text-[17px] max-w-7xl leading-[25px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        <h1 className="w-100 mb-5">
          {" "}
          <p className="mt-2">
            Welcome to my portfolio website! My name is Suyash Vishwakarma, and
            I am an aspiring developer with inclinaton towards web development.
            As a fitness enthusiast, I am passionate about pursuing a healthy
            lifestyle, and I bring this same dedication and enthusiasm to my
            work in the field of software development.
          </p>
          <p className="mt-2">
            {" "}
            I have a solid foundation as far as development is concered and I
            belive in learning and evolving constantly to stay at the forefront
            of the industry. In addition to my technical skills, I am a highly
            motivated and detail-oriented individual with a strong work ethic.
          </p>
          <p className="mt-2">
            I enjoy working collaboratively with others, and I am always looking
            for opportunities to expand my knowledge and skills through learning
            experiences. I would love to hear from you in any regard. Please
            feel free to explore my portfolio and contact me with any questions
            or opportunities. Thank you for visiting!
          </p>
        </h1>
        <motion.div className="xs:w-[300px] h-[200px] m-auto w-[200px] block">
          <Tilt className="xs:w-[220px] m-auto w-[200px]">
            <motion.div
              className="w-full green-pink-gradient p-[1px] rounded-[20px]   shadow-card"
              variants={fadeIn("right", "spring", 0.5, 0.75)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-primary rounded-[20px] py-5 px-12 min-h-[280px]"
              >
                Heloo
              </motion.div>
            </motion.div>
          </Tilt>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
