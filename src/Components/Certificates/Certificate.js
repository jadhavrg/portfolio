import React from 'react'
import './Certificate.css' ;
import Intership1 from './../../Assects/Intership1.png' ;

export default function Certificate() {
  return (
    <section id='certificate'>
        <h2 className='certTitle'>Certificates</h2>
        {/* <span className='worksDesc'> So I have completed some Projects Using the above learned Techanologies. </span>  */}
        <div className='certImgs'>
            <div className='certImg' >
              <div> <img src= {Intership1} alt='CertificateImage' className='cert-Style'></img> </div>
              {/* <p>Intership.</p> */}
              {/* <p><span>Technologies: </span> HTML, CSS, Java, JDBC,<br/> Servlets, Jsp.</p>
              <button className='worksBtn'><a href='https://github.com/jadhavrg/National_Banking_System' >See My Work</a></button> */}
            </div>

            <div className='certImg' >
              <div> <img src= {Intership1} alt='ProjectImage' className='cert-Style'></img> </div>
              {/* <p><span>Name: </span>Bank Management System.</p>
              <p><span>Technologies: </span> HTML, CSS, Java, JDBC,<br/> Servlets, Jsp.</p>
              <button className='worksBtn'><a href='https://github.com/jadhavrg/National_Banking_System' >See My Work</a></button> */}
            </div>
        </div>

    </section>
  )
}
