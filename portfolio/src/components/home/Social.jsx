import React from 'react'
import { UilInstagram } from '@iconscout/react-unicons';
import { UilDribbble } from '@iconscout/react-unicons';
import { UilGithubAlt } from '@iconscout/react-unicons';
const Social = () => {
  return (
<div className="home__social">
    <a href="https://www.instagram.com/" className='home__social-icon' target='_blank'>
    <UilInstagram size="24" color="#000000"/>
    </a>
    <a href="https://www.dribbble.com/" className='home__social-icon' target='_blank'>
    <UilDribbble size="24" color="#000000"/>
 
    </a>
    <a href="https://www.github.com/" className='home__social-icon' target='_blank'>
    <UilGithubAlt size="24" color="#000000"/>

    </a>
</div>
  )
}

export default Social