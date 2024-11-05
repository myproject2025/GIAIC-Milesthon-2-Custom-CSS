import Image from 'next/image'
import React from 'react'

function HomePage() {
  return (
    <div>
      <div className='HomeContainer' id='Home'>
        <div className='HomeLeft'>
    
          <h1>Hello!</h1>
          <h2>My Name is <span>Ali Asghar</span> </h2>
          <h3>I am <span>Fronted Developer</span></h3>
          <p id='HomeP'>I am a passionate and dedicated web developer who has a keen eye for design and a strong foundation in JavaScript and React.</p>
          <button className='HomeBtn'>Download CV</button>
          {/* Home Left */}
        </div>
        <div className='HomeRight'>
          <Image src='/images/my pic 2.jpg' alt='profile' width={250} height={200} id='profileImg'/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
