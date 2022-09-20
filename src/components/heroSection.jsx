import React, {forwardRef} from 'react'

const HeroSection = (props, ref) => {
  return (
    <section ref={ref} id="home" className="block">
      <div>Hero Section</div>
    </section>
  )
}

export default forwardRef(HeroSection);