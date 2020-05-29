import React from 'react'
import './index.scss'
import { Header } from '../components'

const Layout = ({ children }) => {
  return (
    <div className='mainLayout'>
      <Header def />
      {children}
    </div>
  )
}

export default Layout
