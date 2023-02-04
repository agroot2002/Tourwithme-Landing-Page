// Jai BALAJI Jai SIYARAM

import React from 'react'
import FooterImage from '../Assets/footer.png'

function Footer() {
    return (
        <div className='flex flex-col justify-center' id='about'>
            <img src={FooterImage} alt="FooterImage" className='-mb-[1%]' />
            <div className='bg-[#454545] py-8'>
                <h2 className='text-4xl text-white underline font-heading'>About</h2>
                <br />
                <p className='text-lg text-white font-label'>We are your Personal Tour Planner ,</p>
                <br />
                <p className='text-lg text-white font-label'>You don’t have to take any headache of Planning , </p>
                <br />
                <p className='text-lg text-white font-label'>Just give us a chance to serve you and the rest will be handled by our well trained professional team .</p>
                <br />
                <button className='text-white font-logo border-[3px] border-solid border-p-800 rounded-full py-1 px-4 text-sm laptop:text-lg'>Contact Now</button>
            </div>
        </div>
    )
}

export default Footer