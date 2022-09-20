import React, { forwardRef } from 'react'

const AboutSection = (props, ref) => {
  return (
    <section ref={ref} id="about" className="block">
      <div>About Section</div>
    </section>
  )
}

export default forwardRef(AboutSection);