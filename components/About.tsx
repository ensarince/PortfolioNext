import React from 'react'
import {motion} from "framer-motion"
import { PageInfo } from '../typings'
import { sanityClient, urlFor } from '../sanity'
import imageUrlBuilder from '@sanity/image-url'


type Props = {
  pageInfo: PageInfo
}

function About({pageInfo}: Props) {

  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <motion.div 
        initial={{
            x:-200,
            opacity:0
        }}
         whileInView={{ x: 0, opacity:1 }}
        viewport = {{once: true}}
        transition={{duration: 1.2}}

        className="relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl
        px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-widest text-gray-500 text-2xl top-10">About</h3>
    
        <motion.img 
            src={urlFor(pageInfo?.profilePic).url()} 
            className="-mb-20 md:md-0 flex-shrink-0 w-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-650 xl:h-650 "
            />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold ml-5 mt-20">Here is a{" "}
            <span className="underline decoration-cursorColor">little</span>  
            {" "}background</h4>
            <p className="text-sm ">
            {pageInfo?.backgroundInformation}
            </p>
        </div>
            
    </motion.div>
  ) 
}

export default About 