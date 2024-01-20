import React from 'react'
import './Skills.css'
import UIDesign from './../../Assects/ui-designer.png'
import WebDesign from './../../Assects/app-design.png'
import AppDesign from './../../Assects/web-design.png'

function Skills() {
  return (
   <section id='skills'>
        <span className='skillsTitle'>About Me</span>
        {/* <span className='skillsDesc'>I have learned Technology are HTML, CSS, SQL, Java, Rest API, JSON, J2EE, Hibernate, SpringBoot. </span>
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
           
        </div> */}



        <p className='A-para'>Welcome to my portfolio website! I'm Highly motivated and detail-oriented about the Java with a passion for developing 
            efficient and reliable software solutions.I hold a bachelor's degree in Computer Science & Engineering,  I discovered my
            knack for Development and decided to dive headfirst into this captivating field. </p> <br/>
        
        <p className='A-para'>I specialize in Java, SQL, Advance Java, Which enable to me create the efficient and secure software."I am deeply 
            passionate about crafting sophisticated software solutions that house intricate business logic features.</p><br/>

        <p className='A-para'>While I may not have formal work experience just yet. I've completed several impressive
            business projects that truly showcase my skills prowess. You'll find these projects
            highlighted in my portfolio below, when I've distilled intricate datasets into actionable
            recommendations and delivered tangible results.</p><br/>

            <span className='skillsTitle2'>Technical Skills</span>
            <div id='skills1'>
                <div className='skills-divs' >HTML</div>
                <div className='skills-divs'>CSS</div>
                <div className='skills-divs'>JavaScript</div>
                <div className='skills-divs'>React</div>
                <div className='skills-divs'>SQL</div>
                <div className='skills-divs'>Java</div>
                <div className='skills-divs'>JDBC</div>
                <div className='skills-divs'>Servlets</div>
                <div className='skills-divs'>JSP</div>
                <div className='skills-divs'>Hibernate</div>
                <div className='skills-divs'>Spring</div>
                <div className='skills-divs'>SpringBoot</div>
                <div className='skills-divs'>Web Services</div>
                <div className='skills-divs'>RESTAPI's</div>
                <div className='skills-divs'>Unit Testing</div>
                <div className='skills-divs'>Agile Methodology</div>

            </div>
    </section>
  )
}

export default Skills