import React from 'react'
import { UilArrowUp } from '@iconscout/react-unicons';
import "./scrollup.css"

const ScrollUp = () => {
    window.addEventListener("scroll", function(){
        const scrollUp = document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll")
    })
  return (
<a href="#" className='scrollup'>
<UilArrowUp size="24" color="#FFFFFF" className='scrollup__icon'/>
</a>
  )
}

export default ScrollUp