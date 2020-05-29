import { Header } from '~/components'
import React, { useState } from 'react'
import PMTable from './PMTable'
import PMModal from './PMModal'
import './index.scss'

const PMain = () => {
  const [visible, setVisible] = useState(false)
  const [editItem, setEditItem] = useState()

  const handleClose = () => {
    setVisible(!visible)
    setEditItem()
  }

  return (
    <div className='wrapper'>
      <Header onClick={() => setVisible(!visible)} title='Создать' />
      <PMTable openModal={() => setVisible(!visible)} setEditItem={i => setEditItem(i)} />
      <PMModal visible={visible} handleClose={handleClose} editItem={editItem} />
    </div>
  )
}

export default PMain
