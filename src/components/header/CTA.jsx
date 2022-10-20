import React from 'react'
import CV from '../../assets/Akter-resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
    <a href={CV} download className='btn'>Download CV</a>
    <a href="#contact" className='btn btn-paimary'>Let's talk</a>
    </div>
  )
}

export default CTA