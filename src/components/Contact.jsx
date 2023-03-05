import React from 'react'
import IntersectComponent from './IntersectComponent'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <IntersectComponent className='contact__title__obs'>
          <h2 className='contact__title'>
            <span>Contact</span>
            <span>Me</span>
          </h2>
        </IntersectComponent>
        <IntersectComponent className='contact__link__obs'>
          <a href='mailto:saniekasmara@gmail.com'>saniekasmara@gmail.com</a>
        </IntersectComponent>
      </div>
    </section>
  )
}

export default Contact
