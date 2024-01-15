import React from 'react'
import './Skills.css'
import UIDesign from './../../Assects/ui-designer.png'
import WebDesign from './../../Assects/app-design.png'
import AppDesign from './../../Assects/web-design.png'

function Skills() {
  return (
   <section id='skills'>
        <span className='skillsTitle'>What I do</span>
        <span className='skillsDesc'>I have learned Technology are HTML, CSS, SQL, Java, Rest API, JSON, J2EE, Hibernate, SpringBoot. </span>
        <div className='skillsBars'>
            <div className='skillsBar'>
                <img src={UIDesign} alt='UIDesign' className='skillsBarImg'/>
                <div className='skillsBarText'>
                    <h2>Front End Applications</h2>
                    <p>I have build Front End Applications, Using Technology like HTML, CSS, JavaScript.</p>
                </div>
            </div>
            <div className='skillsBar'>
                <img src={AppDesign} alt='AppDesign' className='skillsBarImg'/>
                <div className='skillsBarText'>
                    <h2>Back End Applications</h2>
                    <p>I have also build Back End Applications, Using Technology like Java, J2EE, Hibernate, SpringBoot.</p>
                </div>
            </div>
            <div className='skillsBar'>
                <img src={WebDesign} alt='WebDesign' className='skillsBarImg'/>
                <div className='skillsBarText'>
                    <h2>Full stack Applications</h2>
                    <p>So now I have also build Full Stack Applications, Using Technology like HTML, CSS, JavaScript, Java, J2EE, Hibernate, SpringBoot.  </p>
                </div>
            </div>
           
        </div>
    </section>
  )
}

export default Skills