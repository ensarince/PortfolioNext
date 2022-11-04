import React from 'react'
import {motion} from "framer-motion"
import ExperienceCard from "./ExperienceCard"
import { Experience } from '../typings'

type Props = {
  experiences: Experience[]
}

function Experience({experiences}: Props) {
  return (
    <>
    <motion.div
        initial={{
            x:-200,
            opacity:0
        }}
        whileInView={{ x: 0, opacity:1 }}
        viewport = {{once: true}}
        transition={{duration: 1.2}}
        
       className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center mt-20"
       > 
        <h3 className="absolute top-5 uppercase tracking-widest text-gray-500 text-2xl">Experience</h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
         scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-cursorColor'>
          {/* Projects */}
          {experiences.map((experience) => (
            <ExperienceCard 
              key={experience._id}
              experience={experience}
            />
          ))}
        </div>

    </motion.div>
    </>
  )
}

export default Experience