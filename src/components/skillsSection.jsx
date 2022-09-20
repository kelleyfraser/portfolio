import React, { forwardRef } from 'react'

const SkillsSection = (props, ref) => {
  return (
    <section ref={ref} id="skills" className="block">
      <div>Skills Section</div>
    </section>
  )
}

export default forwardRef(SkillsSection);