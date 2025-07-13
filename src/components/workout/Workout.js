import React, { useState } from "react";
import "./workout.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import "swiper/css";
import Chest from "../Assets/video/chest.jpeg"
import v1 from "../Assets/video/1st.mp4"
import v2 from "../Assets/video/2nd.mp4"
import v3 from "../Assets/video/3rd.mp4"
import v4 from "../Assets/video/4th.mp4"
import v5 from "../Assets/video/5th.mp4"
import v6 from "../Assets/video/6th.mp4"

const Workout = () => {
    const [playingVideos, setPlayingVideos] = useState([]);
    const [activeIndex3, setActiveIndex3] = useState(0);
    const slides = [v1, v2, v3, v4, v5, v6];
    const exerciseNames = [
        "Flat Bench Press",
        "Incline Bench Press",
        "Decline Bench Press",
        "Flat Dumbbell Press",
        "Incline Dumbbell Press",
        "Cable Crossover",
    ];

    const handlePlay = (index) => {
        setPlayingVideos((prev) => [...prev, index]); // Mark the video as playing
    };

    return (
        <div className="workout">
            <h1>Workout Demos</h1>
            <p>We are uploading Some workout demo videos, so that people see that video and learn from it.</p>
            <div className="equipments">
                <h3>Chest Workout</h3>
                <Swiper
                    grabCursor={true}
                    centeredSlides={false}
                    modules={[Navigation]}
                    loop={true}
                    onSlideChange={(swiper) => setActiveIndex3(swiper.realIndex)}
                    className="mynewSwipersection"
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
                    {slides.map((video, index) => (
                        <SwiperSlide key={index}>
                            <div className="equi-box">
                                {!playingVideos.includes(index) ? (
                                    <div className="video-placeholder">
                                        <img src={Chest} alt="Gym Equipment" className="gym-image" />
                                        <div
                                            className="play-icon"
                                            onClick={() => handlePlay(index)}
                                        >
                                            ▶
                                        </div>
                                    </div>
                                ) : (
                                    <video controls autoPlay playsInline
                                        webkit-playsinline="true" className="gym-video">
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                            <div className="exercise-name">
                                <h4>{exerciseNames[index]}</h4>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Custom Pagination */}
                <div className="custom-pagination">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`custom-bullet ${activeIndex3 === index ? "active" : ""}`}
                            onClick={() => document.querySelector('.mynewSwipersection').swiper.slideToLoop(index)} // Navigate to slide
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workout
