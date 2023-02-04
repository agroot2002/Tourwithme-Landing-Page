// Jai BALAJI Jai SIYARAM

import React from 'react'
import SkyDivingImage from '../Assets/Sports 1.png'
import ScubaDivingImage from '../Assets/Sports 2.png'
import SurfingImage from '../Assets/Sports 3.png'
import { ReactComponent as SportsTxtSvg } from '../Assets/Sports txt.svg';
import { ReactComponent as SkyDivingTxtSvg } from '../Assets/Sky diving txt.svg';
import { ReactComponent as ScubaDivingTxtSvg } from '../Assets/Scuba Diving txt.svg';
import { ReactComponent as SurfingTxtSvg } from '../Assets/Surfing txt.svg';

function SportsSection() {
    return (
        <div id='sports-section' className='relative mb-[10%]'>
            {/* SPORTS text */}
            <div id="sports-txt" className='flex flex-col items-center justify-center '>
                <SportsTxtSvg className='h-20 mb-12 w-60 tablet:h-40 tablet:mb-0 tablet:-mt-20 tablet:w-[clamp(15rem,5.4rem+24vw,30rem)]'/>
            </div>

            {/* SKY DIVING */}
            <div id="sky-diving" className='flex flex-col items-center justify-center mb-8'>
                <img src={SkyDivingImage} alt="travelwithme skydiving" className='w-72 tablet:w-[clamp(12rem,6.8800rem+12.8000vw,20rem);]' />

                <SkyDivingTxtSvg className='tablet:h-42 tablet:w-[clamp(15rem,11.8rem+8vw,19rem);]'/>
            </div>

            {/* SCUBA DIVING */}
            <div id="scuba-diving" className='flex flex-col items-center justify-center mb-8 tablet:items-start tablet:ml-[5%]'>
                <img src={ScubaDivingImage} alt="travelwithme scubadiving" className='w-72 tablet:w-[clamp(12rem,6.8800rem+12.8000vw,20rem);] tablet:translate-x-4 laptop:translate-x-0' />

                <ScubaDivingTxtSvg className='-translate-y-4 tablet:h-42 tablet:w-[clamp(15rem,11.8rem+8vw,19rem);] '/>
            </div>

            {/* SURFING */}
            <div id="surfing" className='flex flex-col items-center justify-center mb-8 tablet:absolute bottom-0 right-0 tablet:mr-[5%]'>
                <img src={SurfingImage} alt="travelwithme surfing" className='w-72 tablet:w-[clamp(12rem,6.8800rem+12.8000vw,20rem);]' />

                <SurfingTxtSvg className='tablet:h-42 tablet:w-[clamp(15rem,11.8rem+8vw,19rem);]'/>
            </div>

        </div>
    )
}

export default SportsSection