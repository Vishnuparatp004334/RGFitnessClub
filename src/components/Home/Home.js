import React from "react";
import "./home.css";
import heroVideo from "../Assets/hero.mp4";
const Home = () => {
    return (
        <>
            <div className="hero">
                <video className="hero-video" autoPlay loop muted
                    playsInline
                    webkit-playsinline="true"
                >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Dark Overlay */}
                <div className="hero-overlay"></div>
                <div className="herocontent">
                    <h2>
                        Your only limit is you. Break it at <span>RG Fitness</span>.
                    </h2>
                    <h2>Strong today, stronger tomorrow</h2>
                    <h1>
                        Welcome to <span>RG Fitness</span>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Home;
