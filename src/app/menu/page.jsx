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

        <section className='w-full h-auto'>
            <div className="flex items-center w-full h-[500px] bg-[url('/pageMenu-lunch.jpg')] bg-cover bg-center bg-fixed">
              <h2 className='title w-full text-white'>Lunch</h2>
            </div>
        </section>
        <section className='mx-auto py-20 max-w-[90%] md:mx-auto md:max-w-7xl md:flex md:flex-wrap md:justify-start lg:justify-center xl:justify-center'>
          <article className='card lg:max-w-[600px]'>
              <h3 className='subtitle mb-12'>Mains</h3>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>GARLIC SHRIMP & TONNARELLI PASTA</h4>
                  <p className='text-xl'>$23,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center w-full'>
                  <h4 className="flex items-center text-xl uppercase">GRILLED HANGER STEAK</h4>
                  <p className='text-xl'>$20,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Pan-crisp red bliss potatoes, charred red onions, watercress salad</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>PAN ROASTED ‘FLORIDA KEYS’ MAHI MAHI</h4>
                  <p className='text-xl'>$25,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Yukon gold potato puree, fennel pico de gallo, asparagus, rainwater madeira sauce</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='flex items-center text-xl uppercase'>GRILLED FREE RANGE CHICKEN SALAD</h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Mesclun greens, pepperjack cheese, bacon, avocado, corn, tomato, cucumbers</p>
              </div>
          </article>
          <article className='card lg:max-w-[600px]'>
              <h3 className='subtitle mb-12'>Sandwiches</h3>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>HAVEN BURGER</h4>
                  <p className='text-xl'>$23,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Aged white vermont cheddar, crispy bacon, onion ringlettes, heirloom tomato</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center w-full'>
                  <h4 className="flex items-center text-xl uppercase">PULLED OMAHA SHORT RIB</h4>
                  <p className='text-xl'>$20,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Melted brie, caramelized onion marmalade, napa cabbage, toasted ciabatta roll</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>SPICY CRISPY CHICKEN</h4>
                  <p className='text-xl'>$25,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Smoked bufala mozzarella, green onions, tomato, bibb lettuce, aji panca aioli</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='flex items-center text-xl uppercase'>TEMPURA COD PO’ BOY</h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Sweet marinated cucumber, beefsteak tomato, romaine lettuce, garlic-lime tartar sauce</p>
              </div>
          </article>
        </section>

        <section className='w-full h-auto'>
            <div className="flex items-center w-full h-[500px] bg-[url('/pageMenu-dinner.jpg')] bg-cover bg-center bg-fixed">
              <h2 className='title w-full text-white'>Dinner</h2>
            </div>
        </section>
        <section className='mx-auto py-20 max-w-[90%] md:mx-auto md:max-w-7xl md:flex md:flex-wrap md:justify-start lg:justify-center xl:justify-center'>
          <article className='card lg:max-w-[600px]'>
              <h3 className='subtitle mb-12'>Mains</h3>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>SHRIMP FIRECRACKER</h4>
                  <p className='text-xl'>$23,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Tempura fried shrimp, kanzuri spice butter sauce</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center w-full'>
                  <h4 className="flex items-center text-xl uppercase">CHICKEN ‘TACO’ SPRING ROLLS</h4>
                  <p className='text-xl'>$20,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Queso fresco, lime-avocado salsa</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>OMAHA BRAISED SHORT RIB</h4>
                  <p className='text-xl'>$25,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Honey corn bread, brussel sprouts, radish, muscovado-celery root emulsion</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='flex items-center text-xl uppercase'>SPICED CRISPY LONG ISLAND DUCK</h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Edamame dumplings, pickled daikon slaw, espresso-orange glaze</p>
              </div>
          </article>
          <article className='card lg:max-w-[600px]'>
              <h3 className='subtitle mb-12'>Salads</h3>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>GOAT CHEESE & BEET TERRINE</h4>
                  <p className='text-xl'>$23,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Pistachio granola crumble, purple haze-white truffle ganash, grilled sourdough baguette</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center w-full'>
                  <h4 className="flex items-center text-xl uppercase">THAI CRISPY OCTOPUS & CALAMARI</h4>
                  <p className='text-xl'>$20,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Shaved napa cabbage, pea tendrils, bean sprouts, salted peanuts, maple-sesame</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>BURRATA & HEIRLOOM TOMATO</h4>
                  <p className='text-xl'>$25,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Arugula, medjool dates, onions, basil, elephant garlic chips</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className="flex items-center text-xl uppercase">GRILLED FREE RANGE CHICKEN</h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Mesclun greens, pepperjack cheese, bacon, avocado, corn, tomato, cucumbers</p>
              </div>
          </article>
        </section>

        <section className='w-full h-auto'>
            <div className="flex items-center w-full h-[500px] bg-[url('/pageMenu-wine.jpg')] bg-cover bg-center bg-fixed">
              <h2 className='title w-full text-white'>Desserts & Wine</h2>
            </div>
        </section>
        <section className='mx-auto py-20 max-w-[90%] md:mx-auto md:max-w-7xl md:flex md:flex-wrap md:justify-start lg:justify-center xl:justify-center'>
          <article className='card lg:max-w-[600px]'>
              <h3 className='subtitle mb-12'>Desserts</h3>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>TIRAMISÙ</h4>
                  <p className='text-xl'>$23,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Our take on the classic coffee-flavoured sponge, mascarpone & chocolate</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center w-full'>
                  <h4 className="flex items-center text-xl uppercase">CHEESECAKE LOLLIPOP TREE</h4>
                  <p className='text-xl'>$20,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Cherry pink cashmere, triple chocolate tuxedo, toffee top hat</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>MILK CHOCOLATE FUDGE CAKE</h4>
                  <p className='text-xl'>$25,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Finished with chunks of chocolate brownie and served with vanilla ice cream</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='flex items-center text-xl uppercase'>SALTED CARAMEL ARCTIC SLICE</h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Vanilla cream, salted caramel and golden honeycomb sandwiched between light sponges</p>
              </div>
          </article>
          <article className='card lg:max-w-[600px]'>
              <h3 className='subtitle mb-12'>Wine</h3>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>SPARKLING ROSÉ</h4>
                  <p className='text-xl'>$23,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Creamy with strawberry and crisp green apple flavors</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center w-full'>
                  <h4 className="flex items-center text-xl uppercase">SAUVIGNON BLANC</h4>
                  <p className='text-xl'>$20,00</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Lemon-lime, gooseberry, green herbs, and white flower aromas with a long citrus finish</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className='text-xl uppercase'>CHARDONNAY</h4>
                  <p className='text-xl'>$25,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Medium-bodied with aromas of banana, melon, vanilla, spice, and toasted oak</p>
              </div>
              <div className='mb-4'>
                <div className='mb-2 flex justify-between items-center'>
                  <h4 className="flex items-center text-xl uppercase">PINOT NOIR</h4>
                  <p className='text-xl'>$15,50</p>
                </div>
                <p className='leading-5 text-sm text-left text-[#606060]'>Light-bodied but viscous with red fruit, oak spice, pepper, and smoke</p>
              </div>
          </article>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default page
