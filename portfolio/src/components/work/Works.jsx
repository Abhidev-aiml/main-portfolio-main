import React, { useEffect, useState, useRef } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';
import { gsap } from 'gsap';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const containerRef = useRef(null); // Reference for the container

  useEffect(() => {
    let newProjects = [];

    if (item.name === 'all') {
      newProjects = projectsData;
    } else {
      newProjects = projectsData.filter((project) => 
        project.category.toLowerCase() === item.name
      );
    }

    // GSAP animation when updating the projects
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'back.inOut' }
    );

    setProjects(newProjects);
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);

    // GSAP animation for filtering buttons
    gsap.to(e.target, { scale: 1.1, duration: 0.3, ease: 'power1.out' });
    gsap.to(e.target, { scale: 1, duration: 0.3,  ease: 'power1.in' });
  };

  return (
    <div className="">
      <div className="work__filters">
        {projectsNav.map((item, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`${active === index ? 'active-work' : ''} work__item`}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="work__container container grid" ref={containerRef}>
        {projects.map((item) => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;