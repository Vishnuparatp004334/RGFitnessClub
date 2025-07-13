import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "./feedback.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';
import avatar from '../Assets/avatar.jpg';
import femaleavtr from '../Assets/femaleavtr.jpg';
import female2 from '../Assets/female2.jpg';
const Feedback = () => {
    return (
        <div className='customer-con'>
            <div className='customer-overlay'></div>
            <h1 className='customer-heading' >Customers Feedback</h1>
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
                        <div className='expert-box'>
                            <img src={femaleavtr} alt='riya' />
                            <div className='content'>
                                <h2>Riya Singh</h2>
                                <div className="rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p>Joined RGFitness for strength training and ended up transforming my full lifestyle. Best decision I made this year!</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='expert-box'>
                            <img src={avatar} alt='arjun' />
                            <div className='content'>
                                <h2>Aarav Singh</h2>
                                <div className="rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <p>RGFitness changed my life. In just 3 months, I lost 5 kg and feel more energetic than ever. Trainers are experienced and super supportive!</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='expert-box'>
                            <img src={female2} alt='deepa' />
                            <div className='content'>
                                <h2>Megha Singh</h2>
                                <div className="rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p>RGFitness isn’t just a gym, it’s a vibe! Love the clean space, modern equipment, and especially for the women’s .</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='expert-box'>
                            <img src={avatar} alt='vikas' />
                            <div className='content'>
                                <h2>Vikas Yadav</h2>
                                <div className="rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p>Best gym in Robertsganj! The personal training sessions and diet guidance at RGFitness helped me build serious muscle in just a few weeks.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='expert-box'>
                            <img src={femaleavtr} alt='nisha' />
                            <div className='content'>
                                <h2>Pooja Singh</h2>
                                <div className="rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <p>Great community, positive environment, and friendly trainers. I actually enjoy coming to the gym now thanks to RGFitness!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Feedback
