import React, { useLayoutEffect } from 'react'
import SplitTextJS from 'split-text-js'
import gsap from 'gsap'

const Greeting = () => {
  useLayoutEffect(() => {
    textBox3D()
    // aboutAnimation()
  }, [])

  function textBox3D() {
    const titles = document.querySelectorAll('.greeting__box')
    // const medias = document.querySelector('.greeting__media')
    titles.forEach((title) => {
      title.style.opacity = 1
    })
    const tl = gsap.timeline()

    // if(titles){
    titles.forEach((title, i) => {
      const splittedTitle = new SplitTextJS(title)
      tl.from(
        splittedTitle.chars,
        {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.01,
        },
        '<'
      )
      tl.to(
        splittedTitle.chars,
        {
          opacity: 0,
          y: -80,
          rotateX: 90,
          stagger: 0.01,
          paused: i === titles.length - 1 ? true : false,
        },
        '<2'
      )
    })
  }
  return (
    <section id='greeting' className='greeting section'>
      <div className='container'>
        <div className='greeting__box'>Hi,</div>
        <div className='greeting__box'>Welcome</div>
        <div className='greeting__box'>My name is Alif</div>
        <div className='greeting__box'>I'm a web dev.</div>
        <div className='greeting__box'>Get to know me</div>
      </div>
    </section>
  )
}

export default Greeting
