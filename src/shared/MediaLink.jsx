import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import './MediaLink.css'

const datas = [
  {
    link: 'https://www.instagram.com/saniekasmara/',
    Component: <FaInstagram />,
  },
  {
    link: 'https://www.linkedin.com/in/alif-ekasmara-aa521317a/',
    Component: <FaLinkedin />,
  },
  {
    link: 'https://github.com/Poorlady',
    Component: <FaGithub />,
  },
]

const MediaLink = () => {
  return (
    <div className='medias'>
      {datas.map((data) => {
        return (
          <div className='media'>
            <a href={data.link} target='_blank'>
              {data.Component}
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default MediaLink
