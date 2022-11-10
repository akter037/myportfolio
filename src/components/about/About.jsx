import React from 'react'
import './about.css'
import ME from '../../assets/IMG_20210928_190155.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'

const About = () => {
  return (
    <section id='about'>
       <h5>Get To Know</h5>
     <h2>About Me</h2>
    <div className="container about_container">
      <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="me" />
          </div>
        
      </div>
      
      <div className="about_content">
          <div className="about_cards">
              <article className="about_card">
                  <FaAward className='about_icons'/>
                  <h5>Experience</h5>
                  <small>3+ years Experience</small>
              </article> 
              <article className="about_card">
                  <AiOutlineUsergroupAdd className='about_icons'/>
                  <h5>Experience</h5>
                  <small>100+ client</small>
              </article> 
              <article className="about_card">
                  <GrProjects className='about_icons'/>
                  <h5>Experience</h5>
                  <small>10+ project</small>
              </article>  

          </div>

            <p>
            I am a person with flexibility of mind and capability to work Under pressure. I am smart and energetic; I have willingness to learn any new technology for the development of organization and mine. I am looking for an opportunity in your company to prove my skills, my dedication and myself.
           </p>
            <a href="#contact" className='btn btn_primary'> Let's Talk</a>


      </div>


    </div>



    </section>
  )
}

export default About