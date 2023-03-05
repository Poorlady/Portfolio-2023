import React from 'react'
import { useInView } from 'react-intersection-observer'

const IntersectComponent = ({ children, className }) => {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={`${className ? className : ''} ${inView ? 'active' : ''}`}>
      {children}
    </div>
  )
}

export default IntersectComponent
