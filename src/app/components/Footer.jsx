import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import iconLinkedin from '../assets/icons/bxl-linkedin.svg'
import iconTwitter from '../assets/icons/bxl-twitter.svg'
import iconFacebbok from '../assets/icons/bxl-facebook.svg'
import logoFooter from '../assets/images/logo_footer.png'

const Footer = () => {
  return (
    <div className='w-full bg-[#191919]'>
      <section className='py-12 text-center mx-auto lg:max-w-[90%]  md:flex md:flex-row md:justify-center'>
        <div className='py-4 md:px-4 lg:mx-8 xl:mx-16'>
          <h3 className='mb-4 text-3xl font-medium text-white'>Address</h3>
          <p className='text-xl text-[#ffffff40]'>Eighth Avenue 385, <br></br>New York</p>
        </div>
        <div className='py-4 md:px-4 lg:mx-8 xl:mx-16'>
          <h3 className='mb-4 text-3xl font-medium text-white'>Follow Us</h3>
          <div className='flex items-center justify-center'>
            <p className='px-4'><Link href="https://www.linkedin.com/feed/" target='_blank'><Image src={iconLinkedin} alt="link to linkedin" /></Link></p>
            <p className='px-4'><Link href="https://twitter.com/" target='_blank'><Image src={iconTwitter} alt="link to twitter" /></Link></p>
            <p className='px-4'><Link href="https://web.facebook.com/" target='_blank'><Image src={iconFacebbok} alt="link to facebbok" /></Link></p>
          </div>
        </div>
        <div className='py-4 md:px-4 lg:mx-8 xl:mx-16'>
          <h3 className='mb-4 text-3xl font-medium text-white'>Contact Us</h3>
          <p className='text-xl text-[#ffffff40]'>example@example.com</p>
          <p className='text-xl text-[#ffffff40]'>+7 (111) 2568585</p>
        </div>
      </section>

      <section className='pt-12 pb-8 bg-[#141414]'>
        <div className="flex justify-center lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only text-black">GALICIA</span>
            <Image 
              className="h-24 w-auto"
              src={logoFooter}
              alt='logo'
            />
          </a>
        </div>
        
        <section className='flex items-center justify-center mt-8 mx-auto max-w-[90%]'>
          <p className='text-center text-[#ffffff40]'>Privacy Policy / This is a sample website - seaside-themes © 2022 / All Rights Reserved</p>
        </section>
      </section>
    </div>
  )
}

export default Footer