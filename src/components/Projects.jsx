import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import IntersectComponent from './IntersectComponent'

const datas = [
  {
    title: 'Andreaswidi Landing Page',
    link: 'https://andreaswidi.com',
    img: '/projects/andreaswidi.png',
  },
  {
    title: 'Landing Page Mockup',
    link: 'https://poorlady.github.io/fem-Easybank/',
    img: '/projects/easybank.PNG',
  },
  // {
  //   title: 'Drag and Drop Todo App',
  //   link: 'https://poorlady.github.io/ts-learn/',
  //   img: '/projects/Todo.png',
  // },
  {
    title: 'Snake Game',
    link: 'https://poorlady.github.io/scmb-snake-game/',
    img: '/projects/snakegame.PNG',
  },
]

const Projects = () => {
  return (
    <section className='section' id='projects'>
      <div className='works'>
        <div className='container'>
          <IntersectComponent className='works__title'>
            <h2>
              <span>Featured</span>
              <span>Projects</span>
            </h2>
          </IntersectComponent>
          <ul>
            {datas.map((data) => {
              return (
                <IntersectComponent key={data.title} className='works__card__obs'>
                  <li>
                    <article className='work__card'>
                      <div className='work__card__img'>
                        <img src={data.img} />
                      </div>
                      <div className='work__card__title'>
                        <p>{data.title}</p>
                        <div>
                          <a target='_blank' href={data.link}>
                            <FaArrowRight />
                          </a>
                        </div>
                        <a href={data.link} target="_blank">
                        <div className='link_desktop'>View</div>
                        </a>
                      </div>
                    </article>
                  </li>
                </IntersectComponent>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects
