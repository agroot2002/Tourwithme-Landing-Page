// Jai BALAJI Jai SIYARAM

import React from 'react'
import Logo from '../Assets/Logo.png'

function Navbar() {
  return (
    <div className='flex items-center justify-around bg-[rgba(0,0,0,0.4)] py-2 fixed top-0 z-10 w-full'>
        <img src={Logo} alt="travelwithme logo" className='w-[min(40vw,20rem)] min-w-[12rem]' />
        <ul className='hidden gap-[3vw] text-sm text-white tracking-widest tablet:flex font-logo laptop:text-base'>
          <li className='cursor-pointer hover:border-b-2 hover:[border-image:linear-gradient(281.7deg,#FF9900_49.51%,#00E0FF_111.7%);] hover:[border-image-slice:1] active:bg-[linear-gradient(281.7deg,#FF9900_49.51%,#00E0FF_111.7%)] active:[-webkit-background-clip:text] active:[-webkit-text-fill-color:transparent]'><a href="#herosection">Main</a></li>
          <li className='cursor-pointer hover:border-b-2 hover:[border-image:linear-gradient(281.7deg,#FF9900_49.51%,#00E0FF_111.7%);] hover:[border-image-slice:1] active:bg-[linear-gradient(281.7deg,#FF9900_49.51%,#00E0FF_111.7%)] active:[-webkit-background-clip:text] active:[-webkit-text-fill-color:transparent]'><a href="#sports-section">Sports</a></li>
          <li className='cursor-pointer hover:border-b-2 hover:[border-image:linear-gradient(281.7deg,#FF9900_49.51%,#00E0FF_111.7%);] hover:[border-image-slice:1] active:bg-[linear-gradient(281.7deg,#FF9900_49.51%,#00E0FF_111.7%)] active:[-webkit-background-clip:text] active:[-webkit-text-fill-color:transparent]'><a href="#tours">Tours</a></li>
          <li className='cursor-pointer hover:border-b-2 hover:[border-image:linear-gradient(281.7deg,#FF9900_49.51%,#00E0FF_111.7%);] hover:[border-image-slice:1] active:bg-[linear-gradient(281.7deg,#FF9900_49.51%,#00E0FF_111.7%)] active:[-webkit-background-clip:text] active:[-webkit-text-fill-color:transparent]'><a href="#about">About</a></li>
        </ul>
        <button className='text-white font-logo border-[3px] border-solid border-p-800 rounded-full py-1 px-2 text-xs tracking-widest laptop:text-base'>Contact Now</button>
    </div>
  )
}

export default Navbar