import React from 'react'
import "./footer.css";

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer_home__social'>
        
        <a href='https://www.instagram.com/'className='foooter__social-icon'target="_blank">   
        <i class="uil uil-instagram"></i>
        </a>
    
        <a href='https://www.facebook.com/'className='foooter__social-icon'target="_blank">      
        <i class="uil uil-facebook-f"></i>
        </a>

        <a href='https://www.linkedin.com/feed/'className='foooter__social-icon'target="_blank">        
        <i class="uil uil-linkedin"></i>
        </a>

        <a href='https://github.com/'className='foooter__social-icon'target="_blank">        
        <i class="uil uil-github"></i>
        </a>


    </div>
    <p>Copyright © 2023 Kripas Khatiwada</p>
    </div>
  )
}
