import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/projects' Component={Projects} />
        <Route path='/contacts' Component={Contacts} />
      </Routes>
    </>
  )
}
