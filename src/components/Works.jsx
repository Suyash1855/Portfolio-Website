import React from "react";
import { motion } from "framer-motion";
import { github } from "../assets";
import { linkI } from "../assets";
import { projects } from "../Const";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../Utils/Motion";
import { Tilt } from "react-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className=" bg-tertiary p-4 rounded-2xl sm:w-[360px] w-full">
        <div className="relative  h-[230px] w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex gap-2 justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(live_link, "blank")}
              className="bg-white w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
            >
              <img
                src={linkI}
                alt="github"
                className="w-4 h-4 object-contain"
                srcset=""
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "blank")}
              className="black-gradient w-6 h-6 rounded-full gap-10 flex items-center justify-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-4 h-4 object-contain"
                srcset=""
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] text-white`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My work
        </p>
        <h2 className="  text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>
      <div className="w-full flex-col flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[17px] max-w-3xl leading-[30px] text-secondary"
        ></motion.p>

        <div className="mt-20 flex   flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
