import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Carsoul(){
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 800,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: "linear"
        };
    
    return(
        <div className='bg-white'>
        <Slider {...settings}>
            <div className=' relative text-center'>
                <h2 className='absolute text-white lg:text-5xl font-semibold lg:top-52 lg:left-[38rem] bg-black bg-opacity-50 lg:p-5 rounded-lg
                                text-2xl p-3 top-40 left-12  md:text-3xl md:left-56'>What You Need Is Here</h2>
                <img src="https://wallpapercrafter.com/desktop6/1671864-guatemala-balcones-de-san-cristobal-ii-keyboard.jpg"
                 alt="1pic" 
                 className='w-full lg:h-[30rem] h-[22rem] object-cover'/>
            </div>
            <div className=' relative text-center'>
            <h2 className='absolute text-white lg:text-5xl font-semibold lg:top-40 lg:bg-black lg:p-5 rounded-lg
                                sm:text-2xl sm:p-3 top-32 bg-black bg-opacity-50 p-4 sm:left-12  md:text-3xl md:left-0'>Unleash the true power of your system. Our overclocking hardware: where performance knows no limits.</h2>
                <img src="https://download.asrock.com/Wallpaper/2021_AQUA_1920x1080.jpg"
                 alt="2pic" 
                 className='w-full lg:h-[30rem] h-[22rem] object-cover'/>
            </div>
            <div className=' relative text-center'>
                <h2 className='absolute text-indigo-600 font-semibold lg:text-5xl lg:top-52 lg:left-[0rem] lg:p-5 lg:py-7
                sm:text-2xl p-3 top-32  bg-white bg-opacity-10 sm:left-12  md:text-3xl md:left-0'>Elevate your audio journey with precision and style. Our headphones redefine the way you listen.</h2>
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt=" 3pic" 
                className='w-full lg:h-[30rem] h-[22rem] object-cover'/>
            </div>
        </Slider>
        </div>
    )
}
