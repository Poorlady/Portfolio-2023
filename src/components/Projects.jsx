import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <section className='section' id='projects'>
        <div className='works'>
          <div className='container'>
            <h2>
              <span>Featured</span>
              <span>Projects</span>
            </h2>
            <ul>
              <li>
                <article className='work__card'>
                  <div className='work__card__img'>
                    <img src='/projects/easybank.PNG' />
                  </div>
                  <div className='work__card__title'>
                    <p>Landing Page Mockup</p>
                    <div>
                      <FaArrowRight />
                    </div>
                    <div className='link_desktop'>View</div>
                  </div>
                </article>
              </li>
              <li>
                <article className='work__card'>
                  <div className='work__card__img'>
                    <img src='/projects/Todo.png' />
                  </div>
                  <div className='work__card__title'>
                    <p>Drag and Drop Todo App</p>
                    <div>
                      <FaArrowRight />
                    </div>
                    <div className='link_desktop'>View</div>
                  </div>
                </article>
              </li>
              <li>
                <article className='work__card'>
                  <div className='work__card__img'>
                    <img src='/projects/snakegame.PNG' />
                  </div>
                  <div className='work__card__title'>
                    <p>Snake Game</p>
                    <div>
                      <FaArrowRight />
                    </div>
                    <div className='link_desktop'>View</div>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default Projects