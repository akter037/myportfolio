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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magni ratione nobis pariatur fugiat quod corrupti at vero beatae harum adipisci culpa laboriosam explicabo dicta, mollitia ad illum dolores quo!
            </p>
            <a href="#contact" className='btn btn_primary'> Let's Talk</a>


      </div>


    </div>



    </section>
  )
}

export default About