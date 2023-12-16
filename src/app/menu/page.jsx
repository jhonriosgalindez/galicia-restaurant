import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import Image from 'next/image'
import imageStart from '../../../public/pageMenu-menu-start.jpg'
import imageMain from '../../../public/pageMenu-menu-main.jpg'
import imageFollow from '../../../public/pageMenu-menu-follow.jpg'
import imageFinish from '../../../public/pageMenu-menu-finish.jpg'

const page = () => {
  return (
    <div>
      <header className='sticky top-0 z-10'>
        <Header />
      </header>

      <main className=''>
        <section className=" flex items-center justify-center w-full h-[500px] bg-[url('/pageMenu-slider-mobile-01.jpg')] md:bg-[url('/pageMenu-slider-01.jpg')] bg-cover bg-no-repeat bg-center">
          <h3 className='text-7xl italic text-white'>Menu</h3>
        </section>

        <section className='mx-auto max-w-[90%] py-16 lg:max-w-[1280px]'>
          <p className='aboveTitle'>Specials</p>
          <h2 className='title mb-6 px-6'>four course tasting menu</h2>
          <p className='text-lg text-center font-normal text-[#606060] lg:max-w-[768px] lg:mx-auto'>On the first Thursday of every month Robert is putting together a 4 course Tasting menu with the best of what theseason has to offer. This is ideal for anyone that can never decide what to order, who want to experiment but don’t</p>

          <div className='pt-16 md:flex md:flex-wrap md:justify-center gap-6'>
            <article className='max-sm:pb-6 md:max-w-[300px]'>
              <Image src={imageStart} alt='image of start' />
              <h3 className='pt-3 pb-1 text-2xl uppercase'>1. start</h3>
              <p className='text-base text-[#606060]'>Coconut Risotto, Grilled Broccoli stalk and sesame seeds</p>
            </article>
            <article className='max-sm:pb-6 md:max-w-[300px]'>
              <Image src={imageMain} alt='image to main' />
              <h3 className='pt-3 pb-1 text-2xl uppercase'>2. main</h3>
              <p className='text-base text-[#606060]'>Poached Creedy Carver Chicken Breast, Baked Ratatouille, Bath Pig Chorizo</p>
            </article>
            <article className='max-sm:pb-6 md:max-w-[300px]'>
              <Image src={imageFollow} alt='image to follow' />
              <h3 className='pt-3 pb-1 text-2xl uppercase'>3. follow</h3>
              <p className='text-base text-[#606060]'>Lemon and Elderflower Jelly, Flapjack, Vanilla Ice Cream</p>
            </article>
            <article className='max-sm:pb-6 md:max-w-[300px]'>
              <Image src={imageFinish} alt='image to finish' />
              <h3 className='pt-3 pb-1 text-2xl uppercase'>4. finish</h3>
              <p className='text-base text-[#606060]'>Wholemeal Winter Crumble, Millionaire Shortbread Cheesecake</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default page
