"use client"

import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Testimonials = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <section className="py-12 w-full h-auto bg-[url('/testimonials.jpg')] bg-cover bg-center bg-no-repeat lg:py-24">
      <h2 className='title text-white lg:text-7xl'>testimonials</h2>
      <div className='mx-auto max-w-[90%] md:max-w-[450px] lg:max-w-[600px]'>
        <Slider {...settings} className="max-sm:max-w-[80%] max-sm:mx-auto">
          <article>
            <blockquote className='mx-auto pt-12 pb-8 px-6 text-lg italic font-normal text-center text-white lg:text-2xl'>"The main success of the restaurateur lies in the ability to make people happy.Personal contact with people who love your cuisine is very important"</blockquote>
            <p className='uppercase text-white text-center text-xl font-medium'>laura marano</p>
            <p className='text-white text-sm text-center'>Designer</p>
          </article>
          <article>
            <blockquote className='mx-auto pt-12 pb-8 px-6 text-lg italic font-normal text-center text-white lg:text-2xl'>"The main success of the restaurateur lies in the ability to make people happy.Personal contact with people who love your cuisine is very important"</blockquote>
            <p className='uppercase text-white text-center text-xl font-medium'>John Doe</p>
            <p className='text-white text-sm text-center'>Customer</p>
          </article>
          <article>
            <blockquote className='mx-auto pt-12 pb-8 px-6 text-lg italic font-normal text-center text-white lg:text-2xl'>"The main success of the restaurateur lies in the ability to make people happy.Personal contact with people who love your cuisine is very important"</blockquote>
            <p className='uppercase text-white text-center text-xl font-medium'>Maria Stone</p>
            <p className='text-white text-sm text-center'>Customer</p>
          </article>
          <article>
            <blockquote className='mx-auto pt-12 pb-8 px-6 text-lg italic font-normal text-center text-white lg:text-2xl'>"The main success of the restaurateur lies in the ability to make people happy.Personal contact with people who love your cuisine is very important"</blockquote>
            <p className='uppercase text-white text-center text-xl font-medium'>Paul River</p>
            <p className='text-white text-sm text-center'>Engineer</p>
          </article>
        </Slider>  
      </div>
    </section>
  )
}

export default Testimonials
