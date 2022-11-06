import React from 'react'
import {motion} from "framer-motion"
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
}


type Props = {}

function Contact({}: Props) {

  //!react-hook-forms
  const { register, handleSubmit} = useForm();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ensrnce@gmail.com?subject={formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}
    (${formData.email})`;
  }

  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute uppercase tracking-widest text-gray-500 text-2xl top-10 sm:top-14'>Contact</h3>
       <div className='flex flex-col space-y-10'>
        <div className='space-y-10'>
           <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-cursorColor h-7 w-7 animate-pulse' />
            <p className='text-2xl sm:text-xl'>+123456789</p>
           </div>

           <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-cursorColor h-7 w-7 animate-pulse' />
            <p className='text-2xl sm:text-xl'>123 Bleicstrasse</p>
           </div>

           
           <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-cu rsorColor h-7 w-7 animate-pulse' />
            <p className='text-2xl sm:text-xl'>ensrnce@gmail.com</p>
           </div>

           <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto sm:w-3/4 '>
            <div className='flex space-x-2'>
              <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
              <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
            </div>
              <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
              <textarea {...register('message')} placeholder='Message' className='contactInput' />
              <button type='submit' className='bg-cursorColor py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
           </form>
        </div>
       </div>
    </motion.div>
  )
}

export default Contact