import React, { useState } from 'react'
import "./header.css";
import Sidebar from '../Sidebar/Sidebar';
import Logo from "../Assets/Logo2.png";

const Header = ({ scrollToSection }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className='header'>
        {/* <h1 className='logo'>RG<span>Fitness</span></h1> */}
        <img className='logo' src={Logo} alt='Logo' />
        <div className='sidebar'>
          <p onClick={() => scrollToSection('home')}>Home</p>
          <p onClick={() => scrollToSection('aboutus')}>About Us</p>
          <p onClick={() => scrollToSection('services')}>Services</p>
          <p onClick={() => scrollToSection('pricing')}>Pricing</p>
          <p onClick={() => scrollToSection('workout')}>Workout</p>
        </div>
        <button onClick={() => setIsModalOpen(!isModalOpen)}><i class="fa-solid fa-bars"></i></button>
        {isModalOpen && <Sidebar setIsModalOpen={setIsModalOpen} scrollToSection={scrollToSection}/>}
      </div>
    </>
  );
};

export default Header;
