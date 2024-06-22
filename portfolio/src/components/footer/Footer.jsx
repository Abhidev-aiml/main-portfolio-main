import React from 'react'
import { UilTwitterAlt } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons';
import { UilLinkedin } from '@iconscout/react-unicons';

import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__classname container">
            <h1 className="footer__title">mindmuscledev</h1>

            <ul className="footer__list">

            <li>
                <a href="#about" className='footer__link'>About</a>

            </li>

            <li>
                <a href="#portfolio" className='footer__link'>Projects</a>
                
            </li>

            <li>
                <a href="#testimonials" className='footer__link'>Testimonials</a>
                
            </li>
            </ul>

            <div className="footer__social">
    
    <a href="https://www.github.com/" className='footer__social-link' target='_blank'>
    <UilGithubAlt size="30" color="#000000"/>

    </a>


    <a href="https://www.linkedin.com/" className='footer__social-link' target='_blank'>
    <UilLinkedin size="30" color="#000000"/>

    </a>

    <a href="https://www.twitter.com/" className='footer__social-link' target='_blank'>
    <UilTwitterAlt size="30" color="#000000"/>

    </a>
            </div>
            <span className="footer__copy"> &#169; mindmuscledev.  All rights reserved </span>
        </div>
    </footer>
  )
}

export default Footer