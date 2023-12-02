import React, { useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import './../index.css';

function Example4() {
  const [isActive,setIsActive] = useState("close");
  return (
    <>
      <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        Array(50).fill().map((e,i)=>{
          return (
            <SwiperSlide key={i}>Slide {i+1}</SwiperSlide>
          )
        })
      }
  
    </Swiper>
    <button onClick={()=>{setIsActive(isActive === "open" ? "close" : "open")}}>클릭</button>
    <span>{isActive}</span>
    {/* <p className={`text-center font-bold border ${isActive === "open" ? "on" : ""}`} style={{display: isActive === "open" ? "block" : "none"}}>Lorem ipsum dolor sit amet.</p> */}
    {
      isActive === "open" &&
      <p className={`text-center font-bold border ${isActive === "open" ? "on" : ""}`}>Lorem ipsum dolor sit amet.</p>
    }
    </>
  )
}

export default Example4