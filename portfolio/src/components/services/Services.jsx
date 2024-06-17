import React from 'react'
import { UilArrowRight } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import { UilCheckCircle } from '@iconscout/react-unicons';
import { UilParcel } from '@iconscout/react-unicons';
import "./services.css";

const Services = () => {
  return (
    <section className="services section" id='services'>
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">what I offer</span>

        <div className="services__container container grid ">
            <div className="services__content">

                <div>
                    <UilParcel size="20" color="#000000" className="services__icon" />
                    <h3 className="services__title"> Product <br/> Designer </h3>

                </div>
                <span className="services__button">View More
                <UilArrowRight size="20" color="#000000" className="services__button-icon" />

                </span>
                
            <div className="services__modal">
                <div className="services__modal-content">
                <UilTimes size="20" color="#000000" className="services__modal-close" />

                    <h3 className="services__modal-title">Product Designer</h3>
                    <p className="services__modal-description">Service with more than a year of experience. Providing quality work to clients and companies</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                        <UilCheckCircle size="20" color="#000000" className="services__modal-icon" />
                            <p className="services__modal-info">I develop the user interface.</p>
                        </li>

                        <li className="services__modal-service">
                        <UilCheckCircle size="20" color="#000000" className="services__modal-icon" />
                            <p className="services__modal-info">Web page development</p>
                        </li>

                        <li className="services__modal-service">
                        <UilCheckCircle size="20" color="#000000" className="services__modal-icon" />
                            <p className="services__modal-info">I create ux element interactions.</p>
                        </li>

                        <li className="services__modal-service">
                        <UilCheckCircle size="20" color="#000000" className="services__modal-icon" />
                            <p className="services__modal-info">I positon your company brand.</p>
                        </li>

                        <li className="services__modal-service">
                        <UilCheckCircle size="20" color="#000000" className="services__modal-icon" />
                            <p className="services__modal-info">Design and mockups of products for companies.</p>
                        </li>

                        
                    </ul>
                </div>
            </div>
            </div>

            <div className="services__content">

<div>
    <UilParcel size="20" color="#000000" className="services__icon" />
    <h3 className="services__title"> Full-Stack <br/> Developer</h3>

</div>
<span className="services__button">View More
<UilArrowRight size="20" color="#000000" className="services__button-icon" />

</span>

<div className="services__modal">
<div className="services__modal-content">
<UilTimes size="20" color="#000000" className="services__modal-close" /> 
   <h3 className="services__modal-title">Full-Stack Developer</h3>
    <p className="services__modal-description">Service with more than a year of experience. Providing quality work to clients and companies</p>

    <ul className="services__modal-services grid">
        <li className="services__modal-service">
                        <UilCheckCircle size="20" color="#000000" className="services__modal-icon" />
            <p className="services__modal-info">I develop the user interface.</p>
        </li>

        <li className="services__modal-service">
                        <UilCheckCircle size="20" color="#000000" className="services__modal-icon" />
            <p className="services__modal-info">Web page development</p>
        </li>

        <li className="services__modal-service">
                        <UilCheckCircle size="20" color="#000000" className="services__modal-icon" />
            <p className="services__modal-info">I create ux element interactions.</p>
        </li>

        <li className="services__modal-service">
                        <UilCheckCircle size="20" color="#000000" className="services__modal-icon" />
            <p className="services__modal-info">I positon your company brand.</p>
        </li>

        <li className="services__modal-service">
                        <UilCheckCircle size="20" color="#000000" className="services__modal-icon" />
            <p className="services__modal-info">Design and mockups of products for companies.</p>
        </li>

        
    </ul>
</div>
</div>
</div>
<div className="services__content">

<div>
    <UilParcel size="20" color="#000000" className="services__icon" />
    <h3 className="services__title"> UI/UX <br/> Designer </h3>

</div>
<span className="services__button">View More
<UilArrowRight size="20" color="#000000" className="services__button-icon" />

</span>

<div className="services__modal">
<div className="services__modal-content">
<UilTimes size="20" color="#000000" className="services__modal-close" /> 
   <h3 className="services__modal-title">UI/UX Designer</h3>
    <p className="services__modal-description">Service with more than a year of experience. Providing quality work to clients and companies</p>

    <ul className="services__modal-services grid">
        <li className="services__modal-service">
                        <UilCheckCircle size="20" color="#000000" className="services__modal-icon" />
            <p className="services__modal-info">I develop the user interface.</p>
        </li>

        <li className="services__modal-service">
                        <UilCheckCircle size="20" color="#000000" className="services__modal-icon" />
            <p className="services__modal-info">Web page development</p>
        </li>

        <li className="services__modal-service">
                        <UilCheckCircle size="20" color="#000000" className="services__modal-icon" />
            <p className="services__modal-info">I create ux element interactions.</p>
        </li>

        <li className="services__modal-service">
                        <UilCheckCircle size="20" color="#000000" className="services__modal-icon" />
            <p className="services__modal-info">I positon your company brand.</p>
        </li>

        <li className="services__modal-service">
                        <UilCheckCircle size="20" color="#000000" className="services__modal-icon" />
            <p className="services__modal-info">Design and mockups of products for companies.</p>
        </li>

        
    </ul>
</div>
</div>
</div>
        </div>
    </section>
  )
}

export default Services