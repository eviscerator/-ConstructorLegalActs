import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Pravitelstvo from './Pravitelstvo'
import RasporyazheniePravitelstva from './RasporyazheniePravitelstva'
import UkazPresidenta from './UkazPresidenta'

export default ({ onDropApp, onDragOver, children }) => {
  const { id } = useParams()
  const doc = useSelector(state => (state.list.find(i => i.id === id))) || {}

  const obj = {
    'УКАЗ ПРЕЗИДЕНТА РФ': () => <UkazPresidenta />,
    'РАСПОРЯЖЕНИЕ ПРАВИТЕЛЬСТВА РФ': () => <RasporyazheniePravitelstva />,
    'ПОСТАНОВЛЕНИЕ ПРАВИТЕЛЬСТВА РФ': () => <Pravitelstvo />,
  }

  return (
    <>
      {obj[doc.type] && obj[doc.type]()}
      {children}
    </>
  )
}
