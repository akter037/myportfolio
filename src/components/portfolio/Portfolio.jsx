import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project_one.PNG'
import IMG2 from '../../assets/portfolio2.PNG'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data=[
{
  id:1,
  image:IMG1,
  title:'Project One',
  github:'https://github.com/akter037/project_one',
  demo:'https://akter037.github.io/project_one/'
},
{
  id:2,
  image:IMG2,
  title:'Photo Gallery',
  github:'https://github.com/akter037/photo_gallery',
  demo:'https://akter037.github.io/photo_gallery/'
},
{
  id:3,
  image:IMG3,
  title:'Project Title 3',
  github:'https://github.com/akter037',
  demo:'https://dribbble.com'
},
{
  id:4,
  image:IMG4,
  title:'Project Title 4',
  github:'https://github.com/akter037',
  demo:'https://dribbble.com'
},
{
  id:5,
  image:IMG5,
  title:'Project Title 5',
  github:'https://github.com/akter037',
  demo:'https://dribbble.com'
},
{
  id:6,
  image:IMG6,
  title:'Project Title 6',
  github:'https://github.com/akter037',
  demo:'https://dribbble.com'
}


]


const Portfolio = () => {
  return (
    <section id="portfolio">
     <h5>My Recent Work</h5>
     <h2>Portfolio</h2>
     <div className="container portfolio_container">
      
      {
        data.map(({id,image,title,github,demo}) =>{

        return(
          <artical key={id} className="portfolio_item">
        <div className="portfolio_item_image">
              <img src={image} alt="" />
        </div>
        <h3>{title}</h3>
     <div className="portfolio_item_cta">
     <a href={github} className='btn' target='_blank'>Github</a>
      <a href={demo} className='btn btn-paimary' target='_blank'>Live Demo</a>
      
     </div>
     </artical>
        )

        })
      }






     </div>


    </section>
  )
}

export default Portfolio