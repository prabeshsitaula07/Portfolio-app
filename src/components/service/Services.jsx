import React, { useState } from 'react'
import "./services.css"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';


const Services = () => {
    const [toggleState,setToggleState]=useState(0);

    const toggleTap =(index)=>{
        setToggleState(index);
    }
    const items=[1,0,1];
  return (
    <section className='services section' id='service'>
    <h2 className='section__title'>Services</h2>
    <span className='section__subtitle'>What i offer</span>
     {/* <ScrollMenu >
        {items.map((item,i)=>(
            <div className="services__content" key={i}>
            <div>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className='services__title'>
                     Product <br/> Designer</h3>
            </div>
            <span className="services__button" onClick={()=>toggleTap(1)}>
                View More {" "}
            <i className='uil uil-arrow-right
            services__button-icon'></i>
            </span>

            <div>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services_modal" }>
                    <div className="services__modal-content">
                        <i onClick={()=>toggleTap(0)} className="uil uil-times
                        services__model-close"></i>

                        <h3 className='services__modal-title'></h3>
                        <p className='sercices__modal-description'>
                            Service with more than 3 years of experiance.
                            Providing quality work to clients and company.</p>
                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__modal-info">
                                    I develop the user interface.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__modal-info">
                                    Web page development.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__modal-info">
                                   App Development.
                                </p>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
        ))}
     </ScrollMenu> */}
   
    <div className="services__container container grid">
        <div className="services__content">
            <div className='services_titles'>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className='services__title'>
                     Product Designer</h3>
            </div>
           

            <div>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services_modal" }>
                    <div className="services__modal-content">
                        

                        <h3 className='services__modal-title'></h3>
                        <p className='sercices__modal-description'>
                            Service with more than 3 years of experiance.
                            Providing quality work to clients and company.</p>
                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__modal-info">
                                    I develop the user interface.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__modal-info">
                                    Web page development.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__modal-info">
                                   App Development.
                                </p>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
        
        <div className="services__content">
            <div className='services_titles'>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className='services__title'>Ui/Ux Designer</h3>
            </div>
          

            <div>
                <div className='services__modal'>
                    <div className='services__modal-content'>
                        

                        <h3 className='services__modal-title'></h3>
                        <p className='sercices__modal-description'>
                            Service with more than 3 years of experiance.
                            Providing quality work to clients and company.</p>
                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__modal-info">
                                    I develop the user interface.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__modal-info">
                                    Web page development.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__modal-info">
                                   App Development.
                                </p>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
       

        <div className="services__content">
            <div className='services_titles'>
                <i className='uil uil-edit services__icon'></i>
                <h3 className='services__title'>Visual Designer</h3>
            </div>


            <div>
                <div className='services__modal'>
                    <div className='services__modal-content'>
                       

                        <h3 className='services__modal-title'></h3>
                        <p className='sercices__modal-description'>
                            Service with more than 3 years of experiance.
                            Providing quality work to clients and company.</p>
                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__modal-info">
                                    I develop the user interface.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__modal-info">
                                    Web page development.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__modal-info">
                                   App Development.
                                </p>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
            
            
        </div>
      
        

        
    </div>

</section>
  )
}

export default Services