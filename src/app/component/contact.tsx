import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <div className="contactContainer" id='Contact'>
        <h1>Contact</h1>
        <form action="">
            <input type="text" id='name'  placeholder='   Full Name:'/>
        <input type="email" name="" id="email" placeholder='  Email:'/>
        
         <textarea name="" id="" rows={8} placeholder="  Your Message"></textarea>


        </form>     

        <button className='HomeBtn'>Download CV</button>
      </div>
    </div>
  )
}

export default ContactPage
