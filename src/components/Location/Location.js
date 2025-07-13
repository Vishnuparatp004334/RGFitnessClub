import React from "react";
import './location.css'
const Location = () => {
  return (
    <div className="map-container">
      <h2>Find Us on Google Maps</h2>
      <iframe
        title="RGFitness Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.942942801807!2d83.06128017442384!3d24.694488051880572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ef9c4b06644ad%3A0xbbcabca0d3b3117f!2sRG%20FITNESS%20CLUB!5e0!3m2!1sen!2sin!4v1752300508704!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
