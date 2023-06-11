import React from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
// import { styles } from '../Style';
const Hero = () => {
  return (
    <section className="flex flex-col  pt-[100px] mb-0  w-full h-screen mx-auto">
      <div className=" inset-0 lg:top-[100px] top-[80px] w-full lg:p-0 p-5 max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-0.5 h-40 sm:h-80  violet-gradient" />
        </div>
        <div className="">
          <h1 className=" font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 ">
            Hi , I'm <span className="text-[#915eff]">Suyash</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[21px] sm:text-[20px] xs:text-[18px] text-[16px] lg:leading-[30px] mt-2 mb-10">
            I develop appealing user <br className="sm:block hidden" />
            interfaces and full stack web applications
          </p>
        </div>
      </div>
      <div className="h-[400px] ml-[-45px] md:ml-[0px] flex items-start justify-start mt-[-200px] md:mt-[-400px] md:w-full md:h-full">
        <ComputersCanvas />
      </div>
      <div
        className=" xs:bottom-10 bottom-32 w-full flex justify-center
        items-center"
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
