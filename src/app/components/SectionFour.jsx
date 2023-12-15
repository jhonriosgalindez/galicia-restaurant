import React from 'react'
import Image from 'next/image'

import imageGallery1 from '../assets/images/gallery-01.jpg'
import imageGallery2 from '../assets/images/gallery-02.jpg'
import imageGallery3 from '../assets/images/gallery-03.jpg'
import imageGallery4 from '../assets/images/gallery-04.jpg'
import imageGallery5 from '../assets/images/gallery-05.jpg'

const SectionFour = () => {
  return (
    <section className='w-full h-auto'>
      <div className='mx-auto py-20 max-w-[90%]'>
        <p className='aboveTitle'>Gallery</p>
        <h2 className='title mb-14'>warm atmosphere</h2>
        <article className='md:grid grid-cols-2 gap-4'>
          <div className='max-md:mb-4 overflow-hidden'>
            <Image src={imageGallery1} alt='image gallery' width={1000} className='hover:scale-110 ease-in duration-300' />
          </div>
          <div className='max-md:mb-4 overflow-hidden'>
            <Image src={imageGallery2} alt='image gallery' className='hover:scale-110 ease-in duration-300' />
          </div>
          <div className='max-md:mb-4 overflow-hidden'>
            <Image src={imageGallery3} alt='image gallery' className='hover:scale-110 ease-in duration-300' />
          </div>
          <div className='grid grid-rows-2 gap-4'>
            <div className='overflow-hidden'>
              <Image src={imageGallery4} alt='image gallery' className='hover:scale-110 ease-in duration-300' />
            </div>
            <div className='overflow-hidden'>
              <Image src={imageGallery5} alt='image gallery' className='hover:scale-110 ease-in duration-300' />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default SectionFour
