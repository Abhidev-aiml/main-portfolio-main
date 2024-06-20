import React from 'react';
import { UilArrowRight } from '@iconscout/react-unicons'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get In Touch</h2>
        <span className="section__subtitle">contact me</span> 

        <div className="contact__container container grid">
    <div className="contact__content">
            <h3 className="contact__title">Talk To Me</h3>

        <div className="contact__info">
            <div className="contact__card">
                    <i className="contact__card-icon" ></i>

                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">abhishekyadav25193@gmail.com</span>

            <a href="mailto:abhishekyadav25193@gmail.com.com" className="contact__button">Write Me{" "} <UilArrowRight size="20" color="#000000" className="contact__button-icon" /></a>
            </div>

            <div className="contact__card">
                    <i className="contact__card-icon" ></i>

                <h3 className="contact__card-title">WhatsApp</h3>
                <span className="contact__card-data">749-8538-18</span>

            <a href="https://api.whatsapp.com/send?phone=7499853818&text=Hello,more information!" className="contact__button">Write Me{" "} <UilArrowRight size="20" color="#000000" className="contact__button-icon" /></a>
            </div>

            <div className="contact__card">
                    <i className="contact__card-icon" ></i>

                <h3 className="contact__card-title">Instagram</h3>
                <span className="contact__card-data">@lilabhilifts</span>

            <a href="https://www.instagram.com/lilabhilifts/" className="contact__button">Write Me{" "} <UilArrowRight size="20" color="#000000" className="contact__button-icon" /></a>
            </div>
        </div>
     </div>

            <div className="contact__content">
                <div className="contact__title">Write Me Your Projects</div>
            </div>
        </div>
    </section>
  )
}

export default Contact