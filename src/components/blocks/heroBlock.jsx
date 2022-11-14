import React from 'react'

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="heading">
        <h1>Hi, my</h1>
        <h1>name is <span className="bold">Kelley</span><span className="light-blue">.</span></h1>
      </div>
      <div className="content">
        <p>I'm a <span className="light-blue">geoscientist</span> turned <span className="light-blue">developer</span> passionate about creating software and websites with beautiful yet functional user interfaces.</p>
      </div>
    </section>
  )
}

export default HeroSection;