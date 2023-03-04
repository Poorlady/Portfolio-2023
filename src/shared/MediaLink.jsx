import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import './MediaLink.css'

const MediaLink = () => {
  return (
    <div className='medias'>
        <div className='media'>
          <a href='https://www.instagram.com/saniekasmara/' target='_blank'>
            <FaInstagram />
          </a>
        </div>
        <div className='media'>
          <a href='https://www.linkedin.com/in/alif-ekasmara-aa521317a/' target='_blank'>
            <FaLinkedin />
          </a>
        </div>
        <div className='media'>
          <a href='https://github.com/Poorlady'  target='_blank'>
            <FaGithub />
          </a>
        </div>
      </div>
  )
}

export default MediaLink