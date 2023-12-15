import React, { lazy } from 'react'
import Image from 'next/image'

import signature from '../assets/images/signature.png'
import slideOne from '../assets/images/menu-01.jpg'
import slideTwo from '../assets/images/menu-04.jpg'
import slideThree from '../assets/images/menu-02.jpg'
import slideFour from '../assets/images/menu-03.jpg'

const SectionTwo = () => {
  return (
    <section className='w-full h-auto'>
      <div className='mx-auto py-20 max-w-[90%]'>
        <div className='md:flex mx-auto max-w-7xl'>
          <article className='mb-6 md:w-[50%] md:px-12'>
            <p className='aboveTitle'>Welcome</p>
            <h2 className='title'>the great story of our culinary journey</h2>
            <p className='m-6 text-lg text-center font-light text-[#2e2e2e]'>Want to know the secret behind delicious food? Well, you start by taking half-century old recipes, mix in bold innovation, and top that off with good, honest quality. Yeah, it’s different, but we’re proud of that.</p>
            <div className='flex justify-center'>
              <Image 
                src={signature}
                alt='image slider'
              />
            </div>
          </article>
          <div className='flex w-full md:w-[50%] md:px-20'>
          <Image 
              className='pr-2 w-[50%]'
              src={slideTwo}
              alt='image slider'
            />
            <Image 
              className='pl-2 w-[50%]'
              src={slideOne}
              alt='image slider'
            />
          </div>
        </div>

        <div className='mt-16 md:flex mx-auto max-w-7xl'>
          <div className='flex w-full md:max-w-[50%] md:px-20'>
            <Image 
              className='pr-2 max-w-[50%]'
              src={slideThree}
              alt='image slider'
            />
            <Image 
              className='pl-2 max-w-[50%]'
              src={slideFour}
              alt='image slider'
            />
          </div>
          <article className='mt-12 md:w-[50%] md:px-12'>
            <p className='aboveTitle'>Hours</p>
            <h2 className='title'>galicia hours of operation</h2>
            <p className='m-6 text-lg text-center font-light text-[#2e2e2e]'>MONDAY – THURSDAY: <br/>9:00 am - 10:00 pm</p>
            <p className='m-6 text-lg text-center font-light text-[#2e2e2e]'>FRIDAY – SATURDAY: <br/>9:00 am - Midnight</p>
            <p className='m-6 text-lg text-center font-light text-[#2e2e2e]'>SUNDAY: <br/>11:00 am - 10:00 pm</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo