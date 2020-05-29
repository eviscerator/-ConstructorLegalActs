import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd'
import './index.scss'

export default ({ def, onClick, title, disabled }) => {
  return def ? (
    <div className='headerDefault'>
      <NavLink exact to='/'><h2>Конструктор нормативно-правовых актов</h2></NavLink>
    </div>
  ) : (
    <div className='shadowHeader'>
      <Button disabled={disabled} type='primary' onClick={onClick}>{title}</Button>
    </div>
  )
}
