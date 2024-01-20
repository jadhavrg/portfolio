import React from 'react'
import './Works.css'
import Bank from './../../Assects/bank.png' ;
import School from './../../Assects/school.png' ;
import Hospital from './../../Assects/Hospital.png' ;

function Works() {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Projects</h2>
        {/* <span className='worksDesc'> So I have completed some Projects Using the above learned Techanologies. </span>  */}
        <div className='worksImgs'>
            <div className='worksImg' >
              <div> <img src= {Bank} alt='ProjectImage' className='img-Style'></img> </div>
              <p><span>Name: </span>Bank Management System.</p>
              <p><span>Technologies: </span> HTML, CSS, Java, JDBC,<br/> Servlets, Jsp.</p>
              <button className='worksBtn'><a href='https://github.com/jadhavrg/National_Banking_System' >See My Work</a></button>
            </div>

            <div className='worksImg' >
              <div> <img src= {Hospital} alt='ProjectImage' className='img-Style'></img> </div>
              <p><span>Name: </span>Hospital Management System.</p>
              <p><span>Technologies: </span> Java, Hibernate, JSON, <br/> SpringBoot, Lambok.</p>
              <button className='worksBtn'><a href='https://github.com/jadhavrg/Hospital_Management_System' >See My Work</a></button>
            </div>

            <div className='worksImg' >
              <div> <img src= {School} alt='ProjectImage' className='img-Style1'></img> </div>
              <p><span>Name: </span>Student Management System.</p>
              <p><span>Techanologies: </span> Java, Hibernate, JSON, <br/> SpringBoot, Lambok..</p>
              <button className='worksBtn'><a href='https://github.com/jadhavrg/Hospital_Management_System' >See My Work</a></button>
            </div>

            {/* <div className='worksImg' >
              <div> <img src= {Bank} alt='ProjectImage' className='img-Style'></img> </div>
              <p><span>Name: </span>Bank Management System.</p>
              <p><span>Techanologies: </span> HTML, CSS, Java, JDBC,<br/> Servlets, Jsp.</p>
              <button className='worksBtn'>Read More</button>
            </div> */}
        </div>
       
    </section>
  )
}

export default Works