import React from 'react'
import './contact.css'
import {ImMail} from 'react-icons/im'
import {BsMessenger} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q0p8beg', 'template_qzpgido', form.current, 'Td0FBG44o82k0sCur')
      e.target.reset()

    };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
         <div className="contact_options">
         <article className="contact_option">
         <ImMail className='contact_option_icon'/>
         <h4>Gmail</h4>
         <h5>mdaktercse01@gmail.com</h5>
         <a href="mailto:mdaktercse01@gmail.com" target="_blank" rel="noreferrer" >Send amessage</a>


         </article>
         <article className="contact_option">
         <BsMessenger className='contact_option_icon'/>
         <h4>Massenger</h4>
         <h5>Md Rubel</h5>
         <a href="https://www.facebook.com/profile.php?id=100009560201349" target="_blank" rel="noreferrer">Send amessage</a>


         </article>
         <article className="contact_option">
         <RiWhatsappFill className='contact_option_icon'/>
         <h4>WhatsApp</h4>
         <h5>+8801856129490</h5>
         <a href="https://api.whatsapp.com/send/?phone=01856129490" target="_blank" rel="noreferrer">Send amessage</a>


         </article>
     
         </div>
         <form ref={form}  onSubmit={sendEmail}>
      <input type="text"  name='name' placeholder='Your full Name'/>
      <input type="email"  name='email' placeholder='Your Gmail' />
     <textarea name="message"   rows="8" placeholder='Your Message' required></textarea>
      <button type='submit' className='btn btn-paimary'>Send Message</button>
      </form>

      </div>






    </section>
  )
}

export default Contact