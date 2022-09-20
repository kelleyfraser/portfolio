import React, { forwardRef } from 'react'

const ProjectsSection = (props, ref) => {
  return (
    <section ref={ref} id="projects" className="block">
      <div>Projects Section</div>
    </section>
  )
}

export default forwardRef(ProjectsSection);