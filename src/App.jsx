// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SharedLayout from './layouts/SharedLayout'
import Home from './pages/Home'
import "./App.css"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
