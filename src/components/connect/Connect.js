import React, { useState } from "react";
import "./connect.css";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const notifyB = (msg) => toast.success(msg);
const notifyA = (msg) => toast.error(msg);

const Connect = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        address: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form Validation
        const { fullName, email, mobile, address, message } = formData;
        if (!fullName || !email || !mobile || !address || !message) {
            notifyA("Please fill out all fields.");
            return;
        }

        const templateParams = {
            fullName,
            email,
            mobile,
            address,
            message,
        };

        emailjs
            .send(
                "service_2wqn3ze", // Replace with your EmailJS Service ID
                "template_yitvbnd", // Replace with your EmailJS Template ID
                templateParams,
                "vF2GvwR9Or4yS-igh" // Replace with your EmailJS Public Key
            )
            .then(
                (response) => {
                    notifyB("Appointment sent successfully. We will get back to you shortly!");
                    setFormData({
                        fullName: "",
                        email: "",
                        mobile: "",
                        address: "",
                        message: "",
                    });
                },
                (error) => {
                    notifyA("Something went wrong, please try again later.");
                }
            );
    };

    return (
        <div className="connect-con">
            <h1>Connect Us</h1>
            <form className="connect-form" onSubmit={handleSubmit}>
                <div className="input-div">
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Your Email"
                        required
                    />
                </div>
                <div className="input-div">
                    <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter Your Mobile Number"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="address"
                        placeholder="Enter Your Address"
                        required
                    />
                </div>
                <div className="input-div">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Send your feedback or message"
                        required
                    ></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Connect;
