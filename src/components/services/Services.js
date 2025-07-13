import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay} from 'swiper/modules';
import gym from "../Assets/gym.jpg"
import "swiper/css";
import 'swiper/css/navigation';
import img1 from "../Assets/1.jpg"
import img2 from "../Assets/2.jpg"
import img3 from "../Assets/3.jpg"
import img4 from "../Assets/4.jpg"
import img5 from "../Assets/5.jpg"
import img6 from "../Assets/6.jpg"
import img7 from "../Assets/7.jpg"
import img8 from "../Assets/8.jpg"
import img9 from "../Assets/9.jpg"
import img10 from "../Assets/10.jpg"
import img11 from "../Assets/11.jpg"
import img12 from "../Assets/12.jpg"
import img13 from "../Assets/13.jpg"
import img14 from "../Assets/14.jpg"
import img15 from "../Assets/15.jpg"
import img16 from "../Assets/16.jpg"
import img17 from "../Assets/17.jpg"
import img18 from "../Assets/18.jpg"
import img19 from "../Assets/19.jpg"
import img20 from "../Assets/20.jpg"
import img21 from "../Assets/21.jpg"
import img22 from "../Assets/22.jpg"

import img24 from "../Assets/24.jpg"
import img25 from "../Assets/25.jpg"
import img26 from "../Assets/26.jpg"
import img27 from "../Assets/27.jpg"
import img28 from "../Assets/28.jpg"
import img29 from "../Assets/29.jpg"
import img30 from "../Assets/30.jpg"
const Services = () => {
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);
    const [activeIndex3, setActiveIndex3] = useState(0);

    const slides = [img19, img20, img18, img24, img13, img10, img7, img12, img8, img28];
    const anotherslides = [img9, img16, img3, img10, img25, img29, img26, img30, img15, img27];
    const moreanotherslides = [img1, img2, img4, img5, img6, img8,img11, img14, img17, img21, img22, gym];
    return (
        <div>
            <div className='services'>
                <h1>Our Services</h1>
                <div className='services-con'>
                    <div className='services-box'>
                        <div>
                            <h3>State-of-the-Art Equipment</h3>
                            <p>From cardio machines to strength training gear, we have everything you need.</p>
                        </div>
                    </div>
                    <div className='services-box'>
                        <div>
                            <h3>Personalized Training</h3>
                            <p>Work with our certified trainers to create a workout plan tailored to your needs.</p>
                        </div>
                    </div>
                    <div className='services-box'>
                        <div>
                            <h3>Group Classes</h3>
                            <p>Stay motivated with a variety of fun and energetic group classes.</p>
                        </div>
                    </div>
                    <div className='services-box'>
                        <div>
                            <h3>Supportive Community</h3>
                            <p>Join a community that uplifts and encourages you every step of the way.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='whatwehave'>
                <h1>What We Have</h1>
                <p>We have all the equipments for your strength training</p>
                <div className="equipments">
                    <h3>Chest, Triceps & Shoulder Area</h3>
                    <Swiper
                        grabCursor={true}
                        centeredSlides={false}
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        //     dynamicBullets: true,
                        // }}
                        onSlideChange={(swiper) => setActiveIndex1(swiper.realIndex)}
                        className="mySwipersection"
                        spaceBetween={40}
                        breakpoints={{
                            320: {
                                // For phones
                                slidesPerView: 1,
                            },
                            768: {
                                // For tablets
                                slidesPerView: 2,
                            },
                            1024: {
                                // For laptops and larger screens
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {slides.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="equi-box">
                                    <img className='equiimg' src={img} alt={`gym ${index + 1}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Custom Pagination */}
                    <div className="custom-pagination">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`custom-bullet ${activeIndex1 === index ? "active" : ""}`}
                                onClick={() => document.querySelector('.mySwipersection').swiper.slideToLoop(index)} // Navigate to slide
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="equipments">
                    <h3>Back, Biceps & Leg Area</h3>
                    <Swiper
                        grabCursor={true}
                        centeredSlides={false}
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        //     dynamicBullets: true,
                        // }}
                        onSlideChange={(swiper) => setActiveIndex2(swiper.realIndex)}
                        className="mySwipersection2"
                        spaceBetween={40}
                        breakpoints={{
                            320: {
                                // For phones
                                slidesPerView: 1,
                            },
                            768: {
                                // For tablets
                                slidesPerView: 2,
                            },
                            1024: {
                                // For laptops and larger screens
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {anotherslides.map((anotherimg, index) => (
                            <SwiperSlide key={index}>
                                <div className="equi-box">
                                    <img className='equiimg' src={anotherimg} alt={`gym ${index + 1}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Custom Pagination */}
                    <div className="custom-pagination">
                        {anotherslides.map((_, index) => (
                            <div
                                key={index}
                                className={`custom-bullet ${activeIndex2 === index ? "active" : ""}`}
                                onClick={() => document.querySelector('.mySwipersection2').swiper.slideToLoop(index)} // Navigate to slide
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="equipments">
                    <h3>Cardio, Dumbbells & Other Area</h3>
                    <Swiper
                        grabCursor={true}
                        centeredSlides={false}
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        //     dynamicBullets: true,
                        // }}
                        onSlideChange={(swiper) => setActiveIndex3(swiper.realIndex)}
                        className="mySwipersection3"
                        spaceBetween={40}
                        breakpoints={{
                            320: {
                                // For phones
                                slidesPerView: 1,
                            },
                            768: {
                                // For tablets
                                slidesPerView: 2,
                            },
                            1024: {
                                // For laptops and larger screens
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {moreanotherslides.map((moreother, index) => (
                            <SwiperSlide key={index}>
                                <div className="equi-box">
                                    <img className='equiimg' src={moreother} alt={`gym ${index + 1}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Custom Pagination */}
                    <div className="custom-pagination">
                        {moreanotherslides.map((_, index) => (
                            <div
                                key={index}
                                className={`custom-bullet ${activeIndex3 === index ? "active" : ""}`}
                                onClick={() => document.querySelector('.mySwipersection3').swiper.slideToLoop(index)} // Navigate to slide
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
