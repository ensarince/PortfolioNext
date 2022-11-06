import React from 'react'
import {motion} from "framer-motion"
import { Experience } from '../typings'
import { sanityClient, urlFor } from '../sanity'
import imageUrlBuilder from '@sanity/image-url'

type Props = {
  experience: Experience
}

function ExperienceCard({experience}: Props) {

  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-500 md:w-650 xl:w-900 snap-center
      bg-darkGray p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden'>
      <motion.img 
         initial={{
          y:-100,
          opacity:0
        }}
        whileInView={{ y: 0, opacity:1 }}
        viewport = {{once: true}}
        transition={{duration: 1.2}}
        src={urlFor(experience?.companyImage).url()}
        className="w-32 h-32 rounded-full xl:w-200 xl:h-200 object-cover object-center" alt=""
      />
      <div className='px-20 md:px-10'>
        <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
        <p className='font-bold mt-1 text-2x '>{experience.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies.map(technology => ( 
          <img 
          key={technology._id}
          src={urlFor(technology.image).url()}  
          className='h-10 w-10 rounded-full' 
          alt="" />
          ))}

        </div>
        <p className='uppercase py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()} - {" "}{new Date(experience.dateStarted).toDateString()}</p>
        <ul className='list-disc space-y-4 ml-5 text-lg h-80 w-4/5 overflow-scroll scrollbar-thin pr-5 scrollbar-track-black scrollbar-thumb-cursorColor'>
          {experience.points && experience.points.map((point,i) => (
          <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard