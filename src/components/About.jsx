import React from 'react'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView()

  return (
    <section className='section' ref={ref} id='about'>
        <div className={`about ${inView ? "active" :''}`}>
          <div className='container'>
            <h2>
              <span>
                About
              </span>
              <span>Me</span>
              {/* <i>{inView}</i> */}
            </h2>
            <div className='about__header'>
              <p>
                Hi, I'm Alif. A web developer with 2 years professional
                experience as Frontend Developer. I have some experience as
                Backend Developer too. Love to build not only functional
                application but also user-friendly and aesthetically pleasing
                interface. Always looking for ways to improve my skill. So
                whether you already have existing web app or want to need a new
                one you're on the right track 😉.
              </p>
              <div className='about__card'>
                <div className='about__card__title'>
                  <h3>Expertise</h3>
                </div>
                <div>
                  <ul className='about__flex'>
                    <li>Frontend Developer</li>
                    <li>Backend Developer</li>
                  </ul>
                </div>
              </div>
              <div className='about__card'>
                <div className='about__card__title'>
                  <h3>Tools</h3>
                </div>
                <div>
                  <ul className='about__flex'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>ReactJS</li>
                    <li>ExpressJS</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About