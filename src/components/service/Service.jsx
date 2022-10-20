import React from 'react'
import './service.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'
const Service = () => {
  return (
    <section id='service'>
     <h5>What I Offer</h5>
     <h2>Services</h2>
      
      <div className="container service_container">
        <article className='service'>
            <div className="service_head">
              <h3>UI/UX Design</h3>
            </div>
          <ul className="service_list">
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>

          </ul>


        </article>

        <article className='service'>
            <div className="service_head">
              <h3>Web Development</h3>
            </div>
          <ul className="service_list">
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>
          
          </ul>


        </article>


        <article className='service'>
            <div className="service_head">
              <h3>Content Creatior</h3>
            </div>
          <ul className="service_list">
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>
          <li>
          <BsFillCheckCircleFill className='service_list-icon'/>
          <p>Lorem ipsum dolor sit.</p>
          </li>

          </ul>


        </article>

      </div>

    </section>
  )
}

export default Service