import React, { forwardRef } from 'react'

const ContactForm = (props, ref) => {
  return (
    <section ref={ref} id="contact" className="block">
      <div>Contact Form</div>
    </section>
  )
}

export default forwardRef(ContactForm);