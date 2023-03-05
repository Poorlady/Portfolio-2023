import React from 'react'
import IntersectComponent from './IntersectComponent'

const datas = [
  { title: 'Expertise', list: ['Frontend Developer', 'Backend Developer'] },
  {
    title: 'Tools',
    list: ['HTML', 'CSS', 'ReactJS', 'ExpressJS', 'MySQL', 'MongoDB'],
  },
]

const About = () => {
  return (
    <section className='section' id='about'>
      <div className={`about`}>
        <div className='container'>
          <IntersectComponent className={'about__title'}>
            <h2>
              <span>About</span>
              <span>Me</span>
            </h2>
          </IntersectComponent>
          <div className='about__header'>
            <IntersectComponent className={'about__bio'}>
              <p>
                Hi, I'm Alif. A web developer with 2 years professional
                experience as Frontend Developer. I have some experience as
                Backend Developer too. Love to build not only functional
                application but also user-friendly and aesthetically pleasing
                interface. Always looking for ways to improve my skill. So
                whether you already have existing web app or want to need a new
                one you're on the right track 😉.
              </p>
            </IntersectComponent>
            {datas.map((data) => {
              return (
                <IntersectComponent key={data.title} className='about__card__obs'>
                  <div className='about__card'>
                    <div className='about__card__title'>
                      <h3>{data.title}</h3>
                    </div>
                    <div>
                      <ul className='about__flex'>
                        {data.list.map((item) => {
                          return <li key={item}>{item}</li>
                        })}
                      </ul>
                    </div>
                  </div>
                </IntersectComponent>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
