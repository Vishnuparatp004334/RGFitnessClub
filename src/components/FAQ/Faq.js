import React, { useState } from 'react';
import "./faq.css"
const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        "What are the gym's operating hours?",
        "Do you offer personal training sessions?",
        "Are there membership options available?",
        "What equipment is available at the gym?",
        "Do you offer group fitness classes?"
    ];

    const answers = [
        "Our gym is open Monday to Saturday from 6:00 AM to 9:00 PM, and on Sunday It will closed. We aim to provide flexible hours to accommodate your schedule.",
        "Yes, we have certified personal trainers who can create customized workout plans to help you achieve your fitness goals. Contact our front desk or visit our website to book a session.",
        "We offer various membership plans, including monthly, quarterly, and annual options. Each plan is designed to suit different budgets and fitness needs. Check out our pricing page for more details.",
        "We are equipped with state-of-the-art facilities, including cardio machines, free weights, strength training machines, and functional fitness equipment. Additionally, we have a dedicated area for stretching and yoga.",
        "Yes, we conduct group fitness classes such as yoga, Zumba, HIIT, and strength training. Class schedules are posted weekly, and all members are welcome to join."
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className='faq-container'>
            <h1>Frequently Asked Questions</h1>
            <div className='faq-list'>
                {questions.map((question, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleAccordion(index)}>
                            <span>{question}</span>
                            <span className={`faq-icon ${activeIndex === index ? 'active' : ''}`}>+</span>
                        </div>
                        {activeIndex === index && (
                            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                                <p>{answers[index]}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq
