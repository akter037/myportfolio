import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import AVTR5 from '../../assets/my.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";



// import required modules
import { Pagination, Navigation } from "swiper";



const data=[
  {
    avatar:AVTR5,
    name:'Akter Hossain',
    review:'The Election Commission sent a development project proposal with a cost of Tk 8,711 crore'
  },
{
  avatar:AVTR1,
  name:'Tina Snow 1',
  review:'The Election Commission sent a development project proposal with a cost of Tk 8,711 crore'
},
{
  avatar:AVTR2,
  name:'Ta Snow 2',
  review:'The Election Commission sent a development project proposal with a cost of Tk 8,711 crore'
},
{
  avatar:AVTR3,
  name:'Tina S 3',
  review:'The Election Commission sent a development project proposal with a cost of Tk 8,711 crore'
},
{
  avatar:AVTR4,
  name:'DDDDD GT 4',
  review:'The Election Commission sent a development project proposal with a cost of Tk 8,711 crore'
}


]





const Textmonials = () => {


  return (
    <section id='textmonials'>
      
       <h5>Review From Clients</h5>
       <h2>Testimonials</h2>
       
       <div className=' display_pc'>
      <Swiper className="container testimonial_container"
       loop={true}
       loopFillGroupWithBlank={true}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      
       
       
       >
         {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide Key={index} className="testimonial">
              <div className="client_avtar">
               <img src={avatar} alt="avter" />
               
               </div>
               <h5 className='client_name'>{name}</h5>
               <small className='client_review'>
                      {review}
                </small>
   
   
   
            </SwiperSlide>

            )

          }
          
          )}

        


       </Swiper>


      </div>
  

      <div className=' display_mb'>
      <Swiper className="container testimonial_container"
       loop={true}
       loopFillGroupWithBlank={true}
       effect={"cards"}
       grabCursor={true}
       modules={[EffectCards]}
       
       
       >
         {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide Key={index} className="testimonial">
              <div className="client_avtar">
               <img src={avatar} alt="avter" />
               
               </div>
               <h5 className='client_name'>{name}</h5>
               <small className='client_review'>
                      {review}
                </small>
   
   
   
            </SwiperSlide>

            )

          }
          
          )}

        


       </Swiper>


      </div>
       






    </section>
  )
}

export default Textmonials