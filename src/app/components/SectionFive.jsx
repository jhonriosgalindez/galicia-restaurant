import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import imageEvent1 from '../assets/images/events-01.jpg'
import imageEvent2 from '../assets/images/events-02.jpg'
import imageEvent3 from '../assets/images/events-03.jpg'
import imageEvent4 from '../assets/images/events-04.jpg'

const SectionFive = () => {
  return (
    <section className='w-full h-auto mb-6 md:mb-16'>
      <div className='mx-auto py-10 max-w-[90%] lg:flex lg:max-w-7xl'>
        <article className='lg:w-1/2 md:grid grid-cols-2 grid-rows-2 gap-4'>
          <div>
            <Image src={imageEvent1} className='mb-4 md:mb-0' alt='image event' />
          </div>
          <div>
            <Image src={imageEvent2} className='mb-4 md:mb-0' alt='image event' />
          </div>
          <div>
            <Image src={imageEvent3} className='mb-4 md:mb-0' alt='image event' />
          </div>
          <div>
            <Image src={imageEvent4} alt='image event' />
          </div>
        </article>
        <article className='flex flex-col py-10 lg:w-1/2 lg:px-8 lg:py-0 lg:justify-center xl:px-16'>
          <p className='aboveTitle'>Events</p>
          <h2 className='title'>private dining & events</h2>
          <p className='m-6 text-lg text-center font-light text-[#2e2e2e]'>There are four private spaces available for lunch, dinner or indeed at any other time like receptions, presentations or brainstorms. In addition the restaurant is available for breakfast & private hire as are all the other spaces.</p>
          <div className='flex justify-center text-center mt-10 '>
            <Link href="https://api.whatsapp.com/send?phone=15551234567&text=I want to like know more about the menu" className='px-4 py-4 uppercase font-medium text-white bg-black transition-all delay-100 hover:text-white hover:bg-[#c7a254] cursor-pointer'>whatsapp</Link>
          </div>
        </article>
      </div>
    </section>
  )
}

export default SectionFive