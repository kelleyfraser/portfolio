import React, { forwardRef } from 'react'

const ExperienceSection = (props, ref) => {
  return (
    <section ref={ref} id="experience" className="block">
      <div>Experience Section</div>
    </section>
  )
}

export default forwardRef(ExperienceSection);