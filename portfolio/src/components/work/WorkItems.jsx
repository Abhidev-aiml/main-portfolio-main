import React from 'react'
import { UilArrowRight } from '@iconscout/react-unicons';
const WorkItems = ({item}) => {
  return (
<div className="work__card" key={item.id}>
    <img src={item.image} alt="" className='work__img' />
    <h3 className="work__title">{item.title}</h3>
    <a href="" className="work__button">
        Learn More <UilArrowRight size="20" color="#000000" className="work__button-icon" />
    </a>
</div> 
  )
}

export default WorkItems


