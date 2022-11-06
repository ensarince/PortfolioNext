import Link from 'next/link'
import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import { urlFor, sanityClient } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'
import imageUrlBuilder from '@sanity/image-url'


type Props = {
    pageInfo?: PageInfo[]
}

export default function Hero({pageInfo}: Props) {

    const builder = imageUrlBuilder(sanityClient)

    function urlFor(source) {
      return builder.image(source)
    }
  
    const [text] = useTypewriter({
         words: [`Hi, I am ${(pageInfo as any).name}`, "<developer/>", "climber🧗‍♂️"],
         loop: true,
         delaySpeed: 2000,
      })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src={urlFor((pageInfo as any)?.heroImage).url()} alt="" />
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-widest">{(pageInfo as any)?.role}</h2>
            <h1 className="text-5xl lg:text-6xl font-semibold px-10 mb-10">
                <span>{text}</span>
                <Cursor cursorColor='#A80B44' />
            </h1>

            <div>
                <Link href="#about">
                    <button className="heroButton hover:border-cursorColor">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton  hover:border-cursorColor">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton  hover:border-cursorColor">Skills</button>
                </Link> 
                <Link href="#projects">
                    <button className="heroButton  hover:border-cursorColor">Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}