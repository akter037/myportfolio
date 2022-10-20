import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/service/Service'
import Portfolio from './components/portfolio/Portfolio'
import  TestiMonials from './components/testimonials/Textmonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
     
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Service></Service>
      <Portfolio></Portfolio>
      <TestiMonials></TestiMonials>
      <Contact></Contact>
      <Footer></Footer>




    </>
  )
}

export default App