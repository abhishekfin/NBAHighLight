import React from 'react';
import Slider from 'react-slick';

const setting ={
    arrows:false,
    dots:false,
    infinite :true,
    speed:500,
    slideShow:1,
    slideToScroll:1
}
const generateSlide =(slides)=>{
    
       if(slides){
        return(   <Slider {...setting}>
               {slides.map((item)=>{
                   return (
                       <div key={item.id}  className="item_slider" style={{background:`url(/images/covers/${item.cover})`}}>
                           <div className="caption">
                               <h4>{item.topic}</h4>
                               <p>{item.title}</p>
                           </div>
                           </div>
                   )
               })}
               </Slider>
        )
       }
   }
   

const Featured =(props)=>{
    return(
        <div>
            {generateSlide(props.slides)}
         </div>
    )
    }

export default Featured;