import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


import titleImage from '../assets/images/slide-h2-01.png'

const SectionOne = () => {
  return (
    <section className="w-full h-[700px] bg-[url('./assets/images/slide-01.jpg')] bg-cover bg-no-repeat bg-center">
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <Image 
          className='mb-8 px-12'
          src={titleImage}
          alt='image slider'
        />
        <p className='mb-1 text-xl text-white font-medium'>234TH AVENUE, NEW YORK</p>
        <p className='text-xl text-white font-medium'>TEL: +7 (111) 2474536</p>
        <div className="mt-10 px-4 py-4 uppercase font-medium text-black bg-white transition-all delay-100 hover:text-white hover:bg-[#c7a254] cursor-pointer">
          <Link href="/">book a table</Link>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
