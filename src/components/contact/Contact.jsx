import React,{useState} from 'react'
import './contact.css';

export default function Contact() {
    const [credentails, setcredentails] = useState({});
  return (
    <section className='services section' id='contact'>
        <h2 className='section__title'>Love to hear trom you, <br /> Get in touch 👋</h2>
        <div className='contact__container'>
  <div
  className='contact__containeritem'
  >
  <p className="">Get in touch</p>
  <h3 className="contact_header">Contact.</h3>
    <label className='contact__label'>
      <span className='contact__span'>Your Name</span>
      <input type="text" name='name' 
       onChange={(event)=>setcredentails({...credentails,name:event.target.value})}
        placeholder="What's your name?"
      className='contact__input'
      
      />
    </label>
    <label className='contact__label'>
      <span className='contact__span'>Your Email</span>
      <input type="email" name='email' 
       onChange={(event)=>setcredentails({...credentails,email:event.target.value})} placeholder="What's your email?"
      className='contact__input'
      
      />
    </label>
    <label className='contact__label'>
      <span className='contact__span'>Your Message</span>
      <textarea rows="7"  name='Message'   onChange={(event)=>setcredentails({...credentails,message:event.target.value})} placeholder="What do you want say?"
      className='contact__input'
      
      />
    </label>

    <button type='submit' className='button button--flex contact_button'>
    {"Send"}
    </button>

  </div>
  
    </div>
    </section>
  )
}
