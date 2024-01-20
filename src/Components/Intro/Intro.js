import React from 'react'
import './Intro.css'
import bg from '../../Assects/image.png'
import btnImg from '../../Assects/hire.png'
import { Link } from 'react-scroll'
import Resume from '../Resume'
import { useNavigate } from 'react-router-dom'
// import Resume from '../Resume.js'

function Intro() {

  const navigate = useNavigate() ;

  function handleClick(){
    navigate("/resume") ;
  }
  

  return (
    <div>
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello</span>
                <span className='introText'>I'm <span className='introName'>Rushikesh</span> <br/> Full Stack Developer</span>
                {/* <p className='introPara'>I have completed BSC in Software Engineering at College <br></br> Of Computer Science and Information Technology, Latur<br></br> in 2022 with 84%.</p> */}
                <button className='btn' onClick={handleClick}> <img src={btnImg} alt='' className='btnImg'/> Resume </button>
            </div>
            {/* <img src={bg} alt='Profile' className='bg' /> */}
        </section>
    </div>
  )
}

export default Intro
