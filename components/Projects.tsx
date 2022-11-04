import React from 'react'
import {motion} from "framer-motion"
import { Project } from '../typings'
import { sanityClient, urlFor } from '../sanity'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'


type Props = {
  projects: Project[]
}

function Projects({projects}: Props) {
  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }
  return (
    <motion.div 
        initial={{
            opacity:0
        }}
        whileInView={{ opacity:1 }}
        viewport = {{once: true}}
        transition={{duration: 1.2}}
        className='h-screen relative flex overflow-hidden flex-col text-left items-center md:flex-row max-w-full justify-evenly mx-auto z-0'>
        <h3 className='absolute top-5 uppercase tracking-widest text-gray-500 text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
            snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-cursorColor'>
            {/* Projects */}
            {projects?.map((project, i) => (
              <div key={i} className="w-screen flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                <motion.img
                className='md:md-0 flex flex-shrink-0 w-56 object-cover
                md:rounded-lg md:w-64 md:h-95 xl:w-1/2 ' 
                  initial={{
                    y:-300,
                    opacity:0
                  }}
                  whileInView={{ y: 0, opacity:1 }}
                  viewport = {{once: true}}
                  transition={{duration: 1.2}}
                  src={urlFor(project?.image).url()} alt="" />
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="text-4xl font-semibold text-center md:text-3xl sm:text-2xl">
                    <span className="underline decoration-cursorColor/50">
                      Case study {i+1} of {projects.length}: 
                    </span>{" "}
                    <Link href={project?.linkToBuild} className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      {project?.title}
                    </Link>
                  </h4>

                  <div className='flex items-center space-x-2 justify-center'>
                    {project?.technologies.map(tech => (
                      <img
                      className='h-10 w-10 xl:w-50 xl:h-50'
                      key={tech._id} src={urlFor(tech?.image).url()} />
                      ))}
                  </div>

                  <p className="text-lg text-center md:text-left">
                    {project?.summary}
                  </p>
                </div>
              </div>
            ))}
        </div>
    
        <div className='w-full absolute top-1/3 bg-cursorColor/10 left-0 h-500 -skew-y-12 ' />
    
    </motion.div>
  )
}

export default Projects