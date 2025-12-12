import React from 'react'
import Navbar from '../components/Navbar'

interface INavLayouts {
    children: React.ReactNode
}

export default function NavLayouts({children}:INavLayouts) {
  return (
    <>
        <div className="wrapper">
            <div className="wrapper__left"><Navbar /></div>
            <div className="wrapper__right">{children}</div>
        </div>
    </>
  )
}
