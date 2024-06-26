import React, { useState } from 'react'
import "./header.css";
import { UilEstate } from '@iconscout/react-unicons';

import { UilUser } from '@iconscout/react-unicons';
import { UilFileAlt } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons';
import { UilScenery } from '@iconscout/react-unicons';
import { UilMessage } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import { UilApps } from '@iconscout/react-unicons'


const NewHeader = () => {
    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header")
    })
    const[Toggle, showMenu] = useState(false);
const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
        <nav className='nav container'>
            <a href="index.html" className="nav__logo">mindmuscledev</a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">

                    <li className="nav__items">
                        <a href="#home" onClick={()=> setActiveNav ('#home')} className={activeNav === "#home" ? "nav link active-link" : "nav__link"}>
                        <UilEstate size="28" color="#000000" className="nav__icons" />Home
                        </a>
                    </li>

                    <li className="nav__items">
                        <a href="#about" onClick={()=> setActiveNav ('#about')} className={activeNav === "#about" ? "nav link active-link" : "nav__link"}>
                        <UilUser size="28" color="#000000" className="nav__icons"/> About
                        </a>
                    </li>
                    
                    <li className="nav__items">
                        <a href="#skills" onClick={()=> setActiveNav ('#skills')} className={activeNav === "#skills" ? "nav link active-link" : "nav__link"}>
                        <UilFileAlt size="28" color="#000000" className="nav__icons"/> Skills
                        </a>
                    </li>

                    <li className="nav__items">
                        <a href="#services" onClick={()=> setActiveNav ('#services')} className={activeNav === "#services" ? "nav link active-link" : "nav__link"}>
                        <UilBriefcaseAlt size="28" color="#000000" className="nav__icons"/>Services
                        </a>
                    </li>

                    <li className="nav__items">
                        <a href="#portfolio" onClick={()=> setActiveNav ('#portfolio')} className={activeNav === "#portfolio" ? "nav link active-link" : "nav__link"}>
                        <UilScenery size="28" color="#000000" className="nav__icons"/>Portfolio
                        </a>
                    </li>

                    <li className="nav__items">
                        <a href="#contact" onClick={()=> setActiveNav ('#contact')} className={activeNav === "#contact" ? "nav link active-link" : "nav__link"}>
                        <UilMessage size="28" color="#000000" className="nav__icons"/>Contact
                        </a>
                    </li>
                </ul>

                <UilTimes size="28" color="#000000" className="nav__close" onClick={()=> showMenu(!Toggle)}/>
            </div>
            <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
            <UilApps size="28" color="#000000"/>
            </div>
        </nav>
    </header>
  )
}

export default NewHeader