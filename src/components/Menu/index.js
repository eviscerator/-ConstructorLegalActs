import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

const Menu = () => {
  const menu = [{ name: 'Main', path: '/' }]

  const activeStyle = { backgroundColor: '#3a3f49' }

  return (
    <div className='mainMenu'>
      <h2>Dm-Npa</h2>
      {menu.map(i => (
        <NavLink key={i.name} exact to={i.path} className='item' activeStyle={activeStyle}>
          {i.name}
        </NavLink>
      ))}
    </div>
  )
}

export default Menu
