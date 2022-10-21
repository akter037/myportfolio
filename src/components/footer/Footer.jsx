import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
  <a href="#" className='footer_logo'>Akter Hossain</a>

<ul className="permalinks">
  <li><a href="#">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#service">Service</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#textmonials">Textmonials</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
<div className="footer_socials">
<a href="#"><BsFacebook/></a>
<a href="#"><AiFillTwitterCircle/></a>
<a href="#"><AiFillLinkedin/></a>


</div>
<div className="footer_copyright">

  <small>&copy; Md Akter Hossain</small>
</div>

    </footer>
  )
}

export default Footer