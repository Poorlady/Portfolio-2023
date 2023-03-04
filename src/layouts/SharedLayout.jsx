import React from 'react'
import NavBar from '../shared/NavBar'
import { Outlet } from 'react-router-dom'
import MediaLink from '../shared/MediaLink'

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <MediaLink/>
      <>
        <Outlet />
      </>
    </>
  )
}

export default SharedLayout
