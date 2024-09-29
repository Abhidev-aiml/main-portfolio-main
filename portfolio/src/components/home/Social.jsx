import React from 'react'
import { UilInstagram } from '@iconscout/react-unicons';
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons';
const Social = () => {
  return (
<div className="home__social">
    <a href="https://www.instagram.com/lilabhilifts" className='home__social-icon' target='_blank'>
    <UilInstagram size="26" color="#000000"/>
    </a>
    <a href="https://www.linkedin.com/in/abhidevs/" className='home__social-icon' target='_blank'>
    <UilLinkedin size="26" color="#000000"/>
 
    </a>
    <a href="https://www.github.com/Abhidev-aiml" className='home__social-icon' target='_blank'>
    <UilGithubAlt size="26" color="#000000"/>

    </a>
</div>
  )
}

export default Social