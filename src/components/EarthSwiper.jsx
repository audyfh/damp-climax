import React from 'react'
import { earthData } from '..'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Virtual } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useRef, useEffect } from 'react'
import 'swiper/css';


const EerthSwiper = () => {
     const swiperRef = useRef(null);

  // Solusi untuk memastikan hanya satu slide yang terlihat
  useEffect(() => {
    // Reset ukuran swiper setelah komponen di-mount
    if (swiperRef.current && swiperRef.current.swiper) {
      setTimeout(() => {
        swiperRef.current.swiper.update();
      }, 300);
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold text-green-700">Lets Take a Look!</h2>
      <h3 className="text-sm text-black mb-6">Planet Earth Through The Age</h3>
      <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-green-700 flex items-center justify-center shadow-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
           <Swiper
            ref={swiperRef}
            modules={[Navigation, Virtual]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            slidesPerView={1}
            spaceBetween={0}
            centeredSlides={true}
          
            virtual={true}
            watchSlidesProgress={true}
            observer={true}
            observeParents={true}
            className="w-full h-full"
            // Styling tambahan untuk memastikan slide mengisi penuh container
            style={{
              '--swiper-slide-size': '100%'
            }}
          >
            {earthData.map((earth) => (
              <SwiperSlide key={earth.id} className="flex flex-col items-center justify-center px-8">
                <div className="flex flex-col items-center justify-center w-full h-full text-white">
                  <h4 className="text-white font-semibold text-lg mb-5">{earth.title}</h4>
                  <img src={earth.image} alt={earth.title} className="w-20 h-20 md:w-40 md:h-40 mb-2 rounded-full object-cover" />
                  <p className="text-xs font-semibold">{earth.years}</p>
                  <p className="text-xs mt-2">{earth.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 text-climax-green text-lg z-10 bg-white rounded-full p-2">
          <FaChevronLeft />
        </button>
        <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 text-climax-green text-lg z-10 bg-white rounded-full p-2">
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default EerthSwiper