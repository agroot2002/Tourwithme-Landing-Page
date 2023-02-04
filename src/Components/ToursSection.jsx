// Jai BALAJI Jai SIYARAM

import React from 'react'
import BaliImage from '../Assets/bali.jpeg'
import MaldivesImage from '../Assets/maldives.jpeg'
import ThailandImage from '../Assets/thailand.jpeg'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";

function ToursSection() {
    return (
        <div className='mb-20' id='tours'>
            <h1 className='mb-20 text-5xl underline font-heading'>Tours and Packages</h1>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}

                // navigation={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                initialSlide={1}
                spaceBetween={50}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiper w-[100%_!important]  py-[50px_!important]"
            >
                <SwiperSlide className='w-[theme(spacing.80)_!important]'>
                    <div id="bali" className='flex flex-col justify-center border-2 rounded-lg cursor-pointer'>
                        <img src={BaliImage} alt="BaliImage" className='rounded-[inherit]'/>
                        <h2 className='py-2 opacity-70 font-label'>Bali Budget Tour</h2>
                        <span className='py-2 text-xs text-blue-500 font-label'>know more</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[theme(spacing.80)_!important]'>
                    <div id="maldives" className='flex flex-col justify-center border-2 rounded-lg cursor-pointer'>
                        <img src={MaldivesImage} alt="MaldivesImage" className='rounded-[inherit]'/>
                        <h2 className='py-2 opacity-70 font-label'>Maldives with Family</h2>
                        <span className='py-2 text-xs text-blue-500 font-label'>know more</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[theme(spacing.80)_!important]'>
                    <div id="thailand" className='flex flex-col justify-center border-2 rounded-lg cursor-pointer'>
                        <img src={ThailandImage} alt="ThailandImage" className='rounded-[inherit]'/>
                        <h2 className='py-2 opacity-70 font-label'>Thailand Special Package</h2>
                        <span className='py-2 text-xs text-blue-500 font-label'>know more</span>
                    </div>
                </SwiperSlide>

                <div className="swiper-button-prev m-4 bg-black opacity-50 py-20 px-8 top-[30%_!important]"></div>
                <div className="swiper-button-next m-4 bg-black opacity-50 py-20 px-8 top-[30%_!important]"></div>
            </Swiper>
        </div>
    )
}

export default ToursSection