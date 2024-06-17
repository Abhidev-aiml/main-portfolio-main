import React from 'react';
import './qualification.css';
import { UilGraduationCap } from '@iconscout/react-unicons';
import { UilBriefcaseAlt } from '@iconscout/react-unicons';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import { useState } from 'react';

const Qualification = () => {
    const [toggleState,setToggleState] = useState(1);

    const toggleTab = (index)=>{
        setToggleState(index)
    };
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">my personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState===1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=> toggleTab(1)}>
                <UilGraduationCap size="20" color="#000000" className="qualification__icon" />Education
                </div>

                <div className={toggleState===2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=> toggleTab(2)}>
                <UilBriefcaseAlt size="20" color="#000000" className="qualification__icon" />Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content "}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">UI/UX Developer</h3>
                            <span className="qualification__subtitle">DYPIU</span>
                            <div className="qualification__calender">
                            <UilCalendarAlt size="20" color="#000000" /> 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Full-Stack Developer</h3>
                            <span className="qualification__subtitle">DYPIU</span>
                            <div className="qualification__calender">
                            <UilCalendarAlt size="20" color="#000000" /> 2023 - Present
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Backend Developer</h3>
                            <span className="qualification__subtitle">DYPIU</span>
                            <div className="qualification__calender">
                            <UilCalendarAlt size="20" color="#000000" /> 2022 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Frontend Developer</h3>
                            <span className="qualification__subtitle">DYPIU</span>
                            <div className="qualification__calender">
                            <UilCalendarAlt size="20" color="#000000" /> 2022 - 2023
                            </div>
                        </div>

                    </div>
                </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Freelance Full-Stack Developer</h3>
                            <span className="qualification__subtitle">Remote</span>
                            <div className="qualification__calender">
                            <UilCalendarAlt size="20" color="#000000" /> 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Full-Stack Developer</h3>
                            <span className="qualification__subtitle">DYPIU</span>
                            <div className="qualification__calender">
                            <UilCalendarAlt size="20" color="#000000" /> 2023 - Present
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Backend Developer</h3>
                            <span className="qualification__subtitle">DYPIU</span>
                            <div className="qualification__calender">
                            <UilCalendarAlt size="20" color="#000000" /> 2022 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
    )
}

export default Qualification