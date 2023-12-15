import React from 'react'
import Link from 'next/link'


const SectionThree = () => {
  return (
    <>
      <section className='mb-16'>
          <section className='w-full h-auto'>
            <div className="flex items-center w-full h-[500px] bg-[url('/food-menu.jpg')] bg-cover bg-center bg-fixed">
              <h2 className='title w-full text-white'>Food Menu</h2>
            </div>
          </section>
        
          <section className='mx-auto pt-16 pb-6 max-w-[90%] md:mx-auto md:max-w-7xl md:flex md:flex-wrap md:justify-start lg:justify-center xl:justify-center'>
            <article className='card'>
              <h3 className='subtitle mb-12'>Breakfast</h3>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>western sunrise</h4>
                  <p className='text-xl'>$23,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Two fried eggs with cheese & two breakfast meats made to perfection</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center w-full'>
                  <h4 className="flex items-center text-xl uppercase">cornish-mackerel <p className='ml-1 py-1 px-2 text-xs text-white bg-[#c7a254] uppercase'>new</p></h4>
                  <p className='text-xl'>$20,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Cornish mackerel, marinated tomatoes, fragrant curry, tamarillo</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>roasted steak roulade</h4>
                  <p className='text-xl'>$25,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Parsley with apple cider vinegar, salt, sugar & spices</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='flex items-center text-xl uppercase'>country breakfast <span className='ml-1 py-1 px-2 text-xs text-white bg-[#c7a254] uppercase'>new</span></h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Biscuits with fresh sausage patties & country gravy</p>
              </div>
            </article>

            <article className='card'>
              <h3 className='subtitle mb-12'>Lunch</h3>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>western sunrise</h4>
                  <p className='text-xl'>$20,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Two fried eggs with cheese & two breakfast meats made to perfection</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center w-full'>
                  <h4 className="flex items-center text-xl uppercase">roasted steak roulade</h4>
                  <p className='text-xl'>$25,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Cornish mackerel, marinated tomatoes, fragrant curry, tamarillo</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>salt and pepper calamari</h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Parsley with apple cider vinegar, salt, sugar & spices</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='flex items-center text-xl uppercase'>crab congee</h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Biscuits with fresh sausage patties & country gravy</p>
              </div>
            </article>

            <article className='card'>
              <h3 className='subtitle mb-12'>Dinner</h3>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>chicken liver parfait</h4>
                  <p className='text-xl'>$23,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Chicken, onion, vegetable oil, Sour cream sauce, pepper, salt</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center w-full'>
                  <h4 className="flex items-center text-xl uppercase">italian tasting platter</h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Three Italian Favorites: Baked Clams, Fried Calamari and Stuffed Shrimp</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>crab congee</h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Biscuits with fresh sausage patties & country gravy</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='flex items-center text-xl uppercase'>salt and pepper calamari</h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Rocket, lime, chipotle aioli</p>
              </div>
            </article>

            <article className='card'>
              <h3 className='subtitle mb-12'>Dessert</h3>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>western sunrise</h4>
                  <p className='text-xl'>$23,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Two fried eggs with cheese & two breakfast meats made to perfection</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center w-full'>
                  <h4 className="flex items-center text-xl uppercase">cornish-mackerel <p className='ml-1 py-1 px-2 text-xs text-white bg-[#c7a254] uppercase'>new</p></h4>
                  <p className='text-xl'>$20,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Cornish mackerel, marinated tomatoes, fragrant curry, tamarillo</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>roasted steak roulade</h4>
                  <p className='text-xl'>$25,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Parsley with apple cider vinegar, salt, sugar & spices</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='flex items-center text-xl uppercase'>country breakfast</h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Biscuits with fresh sausage patties & country gravy</p>
              </div>
            </article>

            <article className='card'>
              <h3 className='subtitle mb-12'>Wine Card</h3>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>montague cabernet</h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Barossa Valley, South Australia</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center w-full'>
                  <h4 className="flex items-center text-xl uppercase">matfair shiraz <p className='ml-1 py-1 px-2 text-xs text-white bg-[#c7a254] uppercase'>new</p></h4>
                  <p className='text-xl'>$20,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Yarra Valley, Victoria</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>gina pinot noir</h4>
                  <p className='text-xl'>$25,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Black cherry notes, light bodied</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='flex items-center text-xl uppercase'>country breakfast</h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Biscuits with fresh sausage patties & country gravy</p>
              </div>
            </article>

            <article className='card'>
              <h3 className='subtitle mb-12'>Drinks</h3>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>sodas</h4>
                  <p className='text-xl'>$23,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Coca cola, Pepsi, Sprite, Fanta</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center w-full'>
                  <h4 className="flex items-center text-xl uppercase">juices</h4>
                  <p className='text-xl'>$20,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Orange, Apple, Vegetable, Strawberry, Blackberry, Lime</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>tea</h4>
                  <p className='text-xl'>$25,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Green, Red, Black, Yellow, White</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='flex items-center text-xl uppercase'>coffee</h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Arabica, robusta</p>
              </div>
            </article>
          </section>

          <div className='flex justify-center text-center mt-10 '>
            <Link href="/" className='px-4 py-4 uppercase font-medium text-white bg-black transition-all delay-100 hover:text-white hover:bg-[#c7a254] cursor-pointer'>view all menu</Link>
          </div>
      </section>
    </>
  )
}

export default SectionThree
