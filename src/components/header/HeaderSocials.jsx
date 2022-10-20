import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
    <a href="https://bd.linkedin.com/" rel="noreferrer" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/akter037" rel="noreferrer" target="_blank"><BsGithub/></a>
    <a href="https://www.facebook.com/profile.php?id=100009560201349" rel="noreferrer" target="_blank"><BsFacebook/></a>

    </div>

  )
}

export default HeaderSocials