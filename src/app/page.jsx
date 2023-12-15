import Image from 'next/image'

import Header from './components/Header'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <header className='sticky top-0 z-10'>
        <Header />
      </header>
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <Testimonials />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
