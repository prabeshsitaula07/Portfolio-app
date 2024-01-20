import React from 'react';
import "./about.css";
import AboutImg from "../../assets/webimg.png";
import CV from "../../assets/John-Cv.pdf";
import Info from './Info';

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section__title'> About Me</h2>
        <span className='section__subtitle'>My Introduction</span>

        <div className='about__container container grid'>

            <img src={AboutImg} alt="" className='about__img'/>
            <div className='about__data'>
                <Info/>
                <p>
                As an AI language model, I do not have a personal experience as a Flutter developer. 
                However, I can describe a Flutter developer as a skilled professional who uses the Flutter framework to build high-quality, 
                visually appealing, and performant mobile applications for various platforms like iOS, Android, and web. They use Dart, the programming language used in Flutter,
                to write efficient and clean code, create beautiful user interfaces, and integrate various APIs and third-party libraries to create a seamless user experience.
                A Flutter developer also needs to stay up-to-date with the latest industry trends and updates, collaborate with designers and other developers, 
                and continuously improve their skills to deliver the best results.
                </p>

                <a download="" href={CV} className="button button--flex about_button">
                    Download Cv
                    
          

                </a>
            </div>
         
        </div>
    </section>
    
  )
}

export default About