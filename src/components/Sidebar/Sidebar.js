import React from 'react'
import "./sidebar.css"
const Sidebar = ({ scrollToSection, setIsModalOpen }) => {
    return (
        <div className='sidemodal'>
            <div className='insidesidemodal' onClick={() => setIsModalOpen(false)}>
                <p onClick={() => scrollToSection('home')}>Home</p>
                <p onClick={() => scrollToSection('aboutus')}>About Us</p>
                <p onClick={() => scrollToSection('services')}>Services</p>
                <p onClick={() => scrollToSection('pricing')}>Pricing</p>
                <p onClick={() => scrollToSection('workout')}>Workout</p>
            </div>
        </div>
    )
}

export default Sidebar
