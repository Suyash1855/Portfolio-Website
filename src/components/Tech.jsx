import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../Const'
import { motion } from 'framer-motion'
import { fadeIn , textVariant } from '../Utils/Motion' 

const Tech = () => {
  return (
    <>

<motion.div className='sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto mt-10 relative z-0 '>
     <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Technoloies I use</p>
      <h2 className='  text-white font-black md:text-[60px] sm:text-[50px] mb-20 xs:text-[40px] text-[30px]'>TechStack.</h2>
    <div className='flex max-w-7xl flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
      </div>
      </motion.div>
      </>
  )
}

export default Tech