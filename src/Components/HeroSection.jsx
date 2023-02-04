// Jai BALAJI Jai SIYARAM

import React from 'react'
import NavBar from './Navbar'
import HeroImage from '../Assets/Main.png'
import QuoteImage from '../Assets/quote.png'

function HeroSection() {
  return (
    <div id='herosection' className='grid'>
        <NavBar/>
        <img src={HeroImage} alt="travelwithme hero" className='min-h-[57vh] w-full row-start-1 col-start-1 blur-[1px]' />
        <img src={QuoteImage} alt="QuoteImage" className='row-start-1 col-start-1 self-center ml-[5%] w-[min(45rem,70vw)] z-[1]'/>
    </div>
  )
}

export default HeroSection