import React from 'react'

import './header.css'
import CTA from  './CTA'
import ME from '../../assets/my.png'
import HeaderSocials from './HeaderSocials'
import Typed from 'react-typed'
const Header = () => {
  return (
    <header>
     <div className="container header_container">
      <h5>Hello I'm</h5>
     
   
   
      <h1>  Md Akter Hossain </h1>
      <h5>
      <Typed
                strings={[
                    'Full Stack Developer'
                  ]}
                    typeSpeed={100}
                    backSpeed={100}
                    
                    loop />
                    </h5>
       <CTA></CTA>
       <HeaderSocials></HeaderSocials>
         <div className="me">
          <img src={ME} alt="MY" />
         </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>

     </div>

    </header>



  )
}

export default Header