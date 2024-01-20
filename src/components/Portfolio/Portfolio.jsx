import React from 'react'
import './portfolio.css';
import image from '../../assets/carrent.png';
import github from '../../assets/github.png'
export default function Portfolio() {
  return (
    <section className='services section' id='portfolio'>
        <h2 className='section__title'>Portfolio</h2>
        <span className='section__subtitle'>Following projects showcases my skills and experience through real-world examples of my work.</span>
        <div className='portfolio__items'>
         <div  className="portfilio__tilts">
      <div className='portfilio__imagecontainer'>
        <img src={image} alt="" className='portfilio__image'/>
        <div className='portfilio__git'>
         <div onClick={()=>window.open("https://github.com/","_blank")}
          className='portfilio__gitinner'>
            <img src={github} alt="" className='portfilio__gitinnerimage'/>
         </div>
        </div>
      </div>
      <div className='portfilio__aboutitems'>
   <h3 className='portfilio__name '>Car Rent</h3>
   <p className='portfilio__description'>Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.</p>
      </div>
      <p className='hastags'>#react #mongodb #tailwind</p>
    </div>
    <div  className="portfilio__tilts">
      <div className='portfilio__imagecontainer'>
        <img src={image} alt="" className='portfilio__image'/>
        <div className='portfilio__git'>
         <div onClick={()=>window.open("","_blank")}
          className='portfilio__gitinner'>
            <img src={github} alt="" className='portfilio__gitinnerimage'/>
         </div>
        </div>
      </div>
      <div className='portfilio__aboutitems'>
   <h3 className='portfilio__name '>Car Rent</h3>
   <p className='portfilio__description'>Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.</p>
      </div>
      <p className='hastags'>#react #mongodb #tailwind</p>
    </div>
    <div  className="portfilio__tilts">
      <div className='portfilio__imagecontainer'>
        <img src={image} alt="" className='portfilio__image'/>
        <div className='portfilio__git'>
         <div onClick={()=>window.open("","_blank")}
          className='portfilio__gitinner'>
            <img src={github} alt="" className='portfilio__gitinnerimage'/>
         </div>
        </div>
      </div>
      <div className='portfilio__aboutitems'>
   <h3 className='portfilio__name '>Car Rent</h3>
   <p className='portfilio__description'>Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.</p>
      </div>
      <p className='hastags'>#react #mongodb #tailwind</p>
    </div>
    </div>
         
        
    </section>
  )
}
