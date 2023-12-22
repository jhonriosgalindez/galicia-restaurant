import React from "react";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

import pageAbout1 from "../../../public/pageAboutImage1.jpg";
import image1 from "../../../public/2-2.jpg";
import image2 from "../../../public/3-2.jpg";
import image3 from "../../../public/4-2.jpg";
import image4 from "../../../public/5.jpg";

const page = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <section className=" flex items-center justify-center w-full h-[500px] bg-[url('/pageMenu-slider-mobile-01.jpg')] md:bg-[url('/pageMenu-slider-01.jpg')] bg-cover bg-no-repeat bg-center">
          <h3 className="text-7xl italic text-white">About Us</h3>
        </section>

        <section className="py-20 flex flex-col justify-center items-center">
          <p className="aboveTitle">Story</p>
          <h2 className="title">galicia restaurant</h2>
          <p className="m-6 pb-12 text-lg text-center font-light text-[#2e2e2e] md:max-w-[768px] md:mx-auto">
            Galicia is an American restaurant tucked away in the Noble Square
            neighborhood. The NY Tribune calls us “the most New York restaurant
            in New York”. We believe that our food is a reflection of our
            terroir, and our terroir is made up of the local environment where
            our product comes from, and most importantly the different peoples
            and cultures that make up our city and kitchen.
          </p>
          <p className="text-center pb-4">
            RESTAURANT OF THE YEAR <br /> The Morning Herald Good Food Guide
            2016
          </p>
          <p className="text-center pb-4">
            AWARDED THREE HATS <br /> The Morning Herald Good Food Guide 2016
          </p>
          <p className="text-center pb-4">
            PLACED AT NUMBER FOUR <br /> Gourmet Traveller Top 100 Restaurants
            2016
          </p>
          <p className="text-center">
            AWARDED THREE STARS <br /> Gourmet Traveller Restaurant Awards 2016
          </p>
        </section>

        <div>
          <Image src={pageAbout1} alt="image of about us" />
        </div>

        <section className="w-full h-auto">
          <div className="mx-auto py-20 max-w-[90%]">
            <div className="md:flex mx-auto max-w-7xl">
              <article className="mb-6 md:w-[50%] md:px-12">
                <p className="aboveTitle">Special</p>
                <h2 className="title">
                  four course tasting menu - thurs 6th july
                </h2>
                <p className="m-6 text-lg text-center font-light text-[#2e2e2e]">
                  On the first Thursday of every month Robert is putting
                  together a 4 course Tasting menu with the best of what the
                  season has to offer. This is ideal for anyone that can never
                  decide what to order.
                </p>
              </article>
              <div className="flex w-full md:w-[50%] md:px-20">
                <Image
                  className="pr-2 w-[50%] md:object-cover"
                  src={image1}
                  alt="image slider"
                />
                <Image
                  className="pl-2 w-[50%] md:object-cover"
                  src={image2}
                  alt="image slider"
                />
              </div>
            </div>

            <div className="mt-16 md:flex mx-auto max-w-7xl">
              <div className="flex w-full md:max-w-[50%] md:px-20">
                <Image
                  className="pr-2 max-w-[50%] md:object-cover"
                  src={image3}
                  alt="image slider"
                />
                <Image
                  className="pl-2 max-w-[50%] md:object-cover"
                  src={image4}
                  alt="image slider"
                />
              </div>
              <article className="mt-12 md:w-[50%] md:px-12">
                <p className="aboveTitle">Events</p>
                <h2 className="title">book a private party or event</h2>
                <p className="m-6 text-lg text-center font-light text-[#2e2e2e]">
                  Want to host your special event at Galicia? We can accommodate
                  parties from 25 to 150 guests, be it a business event, an
                  anniversary, a birthday or just an excuse to spend some time
                  with friends and family.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default page;
