import React from 'react'
import {motion} from "framer-motion"
import Skill from "./Skill"
import {Skill as SkillType} from "../typings"
 
type Props = {
  skills: SkillType[]
}

function Skills({skills}: Props) {
  return (
    <motion.div 
        initial={{
            opacity:0
        }}
        whileInView={{ x: 0, opacity:1 }}
        viewport = {{once: true}}
        transition={{duration: 1.5}}

        className='flex relative flex-col text-center md:text-left
        xl:flex-row max-w-2000 min-h-screen justify-center xl:space-y-0 mx-auto items-center mt-20'>
        <h3 className='absolute uppercase tracking-widest text-gray-500 text-2xl top-10'>Skills</h3>
        <h3 className='absolute top-24 uppercase tracking-small text-gray-500 text-sm'>Hover over a skill for current profficiency</h3>
        <div className='grid grid-cols-5 gap-5'>
          {/* Half of the skills come from right other come from left */}
          {skills.slice(0, skills.length/2).map((skill) => (
             <Skill key={skill._id} skill={skill} />
          ))}

          {skills.slice(skills.length/2, skills.length).map((skill) => (
             <Skill key={skill._id} skill={skill} directionLeft />
          ))}

        </div>
    </motion.div>
  )
}

export default Skills