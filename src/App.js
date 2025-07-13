import React, { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import Loading from "./components/Assets/loading.json";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Faq from "./components/FAQ/Faq";
import Workout from "./components/workout/Workout";
import AboutUS from "./components/aboutus/AboutUS";
import Services from "./components/services/Services";
import Pricing from "./components/pricing/Pricing";
import Connect from "./components/connect/Connect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Feedback from "./components/feedback/Feedback";
import Location from "./components/Location/Location";
import Founder from "./components/founder/Founder";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState({});

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
  const faq = useRef(null);
  const workoutRef = useRef(null);
  const connect = useRef(null);
  const feedbackRef = useRef(null);
  const locationRef = useRef(null);
  const founderRef = useRef(null);

  // Section data
  const sections = [
    { id: "home", ref: homeRef, Component: Home },
    { id: "aboutus", ref: aboutUsRef, Component: AboutUS },
    { id: "services", ref: servicesRef, Component: Services },
    { id: "pricing", ref: pricingRef, Component: Pricing },
    { id: "faq", ref: faq, Component: Faq },
    { id: "workout", ref: workoutRef, Component: Workout },
    { id: "feedback", ref: feedbackRef, Component: Feedback },
    { id: "connect", ref: connect, Component: Connect },
    { id: "location", ref: locationRef, Component: Location },
    { id: "founder", ref: founderRef, Component: Founder },
  ];

  // Function to scroll to a specific section
  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      aboutus: aboutUsRef,
      services: servicesRef,
      pricing: pricingRef,
      workout: workoutRef,
    };

    if (refs[section] && refs[section].current) {
      refs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Simulate loading with a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop animation after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    sections.forEach(({ ref }) => {
      if (ref?.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref?.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sections]);

  return (
    <div className="App">
      {/* Loading Animation */}
      <div
        className={`overlay ${isLoading ? "visible" : "hidden"}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
          transition: "opacity 0.5s ease",
          opacity: isLoading ? 1 : 0,
          pointerEvents: isLoading ? "auto" : "none",
        }}
      >
        <Lottie
          animationData={Loading}
          loop={true}
          style={{ height: "300px", width: "300px" }}
        />
      </div>

      {/* Website Content */}
      <>
        <Header scrollToSection={scrollToSection} />
        {sections.map(({ id, ref, Component }) => (
          <div
            key={id}
            id={id}
            ref={ref}
          >
            {visibleSections[id] ? <Component /> : null}
          </div>
        ))}
        <Footer />
      </>
      <ToastContainer theme="dark" toastContainerClassName="custom-toast-container" />
    </div>
  );
}

export default App;
