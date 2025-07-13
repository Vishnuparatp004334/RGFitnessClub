import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "./founder.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';
import founder from '../Assets/founder.jpg';
import manager from '../Assets/manager.jpg';
import trainer from '../Assets/trainer.jpg';
import trainer2 from '../Assets/trainer2.jpg';

const Founder = () => {
  return (
    <div className='customer-con'>
                <div className='customer-overlay'></div>
                <h1 className='customer-heading' >Manage By</h1>
                <div className="experts-slider" >
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow, Autoplay]}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='founderbox'>
                                <img src={founder} alt='founder' />
                                <div className='content'>
                                    <h2>Ratnesh Gupta</h2>
                                    <p>Founder</p>
                                </div>
                            </div>
                        </SwiperSlide>
    
                        <SwiperSlide>
                            <div className='founderbox'>
                                <img src={manager} alt='manager' />
                                <div className='content'>
                                    <h2>Mithilesh Gupta</h2>
                                    <p>Manager</p>
                                </div>
                            </div>
                        </SwiperSlide>
    
                        <SwiperSlide>
                            <div className='founderbox'>
                                <img src={trainer} alt='trainer' />
                                <div className='content'>
                                    <h2>Shiv Verma</h2>
                                    <p>Trainer</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='founderbox'>
                                <img src={trainer2} alt='trainer2' />
                                <div className='content'>
                                    <h2>Avdhesh Kumar</h2>
                                    <p>Trainer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
  )
}

export default Founder
