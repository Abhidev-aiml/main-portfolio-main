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
    const[Toggle, showMenu] = useState(false);

  return (
    <header className="header">
        <nav className='nav container'>
            <a href="index.html" className="nav__logo">mindmuscledev</a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">

                    <li className="nav__items">
                        <a href="#home" className='nav__link active-link'>
                        <UilEstate size="28" color="#000000" className="nav__icons" />Home
                        </a>
                    </li>

                    <li className="nav__items">
                        <a href="#about" className='nav__link'>
                        <UilUser size="28" color="#000000" className="nav__icons"/> About
                        </a>
                    </li>
                    
                    <li className="nav__items">
                        <a href="#skills" className='nav__link'>
                        <UilFileAlt size="28" color="#000000" className="nav__icons"/> Skills
                        </a>
                    </li>

                    <li className="nav__items">
                        <a href="#services" className='nav__link'>
                        <UilBriefcaseAlt size="28" color="#000000" className="nav__icons"/>Services
                        </a>
                    </li>

                    <li className="nav__items">
                        <a href="#portfolio" className='nav__link'>
                        <UilScenery size="28" color="#000000" className="nav__icons"/>Portfolio
                        </a>
                    </li>

                    <li className="nav__items">
                        <a href="#contact" className='nav__link'>
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