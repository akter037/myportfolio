import React from 'react'
import './header.css'
import CV from '../../assets/MD_Akter_Hossain.pdf'
const CTA = () => {
  return (
    <div className='cta'>
    <a href={CV} download className='btn'>Download CV</a>
    <a href="#contact" className='btn btn-paimary'>Let's talk</a>
    </div>
  )
}

export default CTA