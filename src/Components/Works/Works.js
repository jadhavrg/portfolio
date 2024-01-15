import React from 'react'
import './Works.css'
import Portfolio1 from './../../Assects/portfolio1.png'
import Portfolio2 from './../../Assects/portfolio2.webp'
import Portfolio3 from './../../Assects/portfolio3.jpg'
import Portfolio4 from './../../Assects/portfolio4.jpg'
import Portfolio5 from './../../Assects/portfolio5.jpg'
import Portfolio6 from './../../Assects/portfolio6.jpg' ;
import Bank from './../../Assects/bank.png' ;
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
              <button className='worksBtn'><a href='https://github.com/jadhavrg/National_Banking_System' >Read More</a></button>
            </div>

            <div className='worksImg' >
              <div> <img src= {Hospital} alt='ProjectImage' className='img-Style'></img> </div>
              <p><span>Name: </span>Hospital Management System.</p>
              <p><span>Technologies: </span> Java, Hibernate, JSON, <br/> SpringBoot, Lambok.</p>
              <button className='worksBtn'><a href='https://github.com/jadhavrg/Hospital_Management_System' >Read More</a></button>
            </div>

            {/* <div className='worksImg' >
              <div> <img src= {Bank} alt='ProjectImage' className='img-Style'></img> </div>
              <p><span>Name: </span>Bank Management System.</p>
              <p><span>Techanologies: </span> HTML, CSS, Java, JDBC,<br/> Servlets, Jsp.</p>
              <button className='worksBtn'>Read More</button>
            </div>

            <div className='worksImg' >
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