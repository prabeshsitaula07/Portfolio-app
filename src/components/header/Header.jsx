import React,{ useState} from 'react'
import "./header.css";

const Header = () => {
    const[Toggle,showMenu]=useState(false);

  return (
   <header className='header'>
    <nav className='nav container'> 
        <a href='index.html' className='nav__logo'>Kripas</a>
        
        <div className={Toggle===false?'nav__menu':'nav__menu1'}>
            <ul className='nav__list grid'>

                <li className='nav__item '>
                    <a href='#home' className='nav_link active-link'>
                        <i className="uil uil-estate"></i> Home
                    </a>
                </li>

                <li className='nav__item'>
                    <a href='#about' className='nav_link active-link'>
                        <i className="uil uil-user nav__icon"></i> About Me
                    </a>
                </li>

                <li className='nav__item'>
                    <a href='#skills' className='nav_link active-link'>
                        <i className="uil uil-file-alt nav__icon"></i> Skills
                    </a>
                </li>

                <li className='nav__item'>
                    <a href='#service' className='nav_link active-link'>
                        <i className="uil uil-briefcase-alt nav__icon"></i> Service
                    </a>
                </li>

                <li className='nav__item'>
                    <a href='#portfolio' className='nav_link active-link'>
                        <i className="uil uil-scenery nav__icon"></i> Portfolio
                    </a>
                </li>

                <li className='nav__item'>
                    <a href='#contact' className='nav_link active-link'>
                        <i className="uil uil-message nav__icon"></i> Contact Me
                    </a>
                </li>
            </ul>
            
            <i className='uil uil-times nav__close'></i>
        </div>
        <div className='nav_toggle' onClick={()=>showMenu(!Toggle)}>
            
            <i class='uil uil-apps'></i>
        </div>
    </nav>
   </header>
  )
}

export default Header