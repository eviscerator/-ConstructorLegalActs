import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Header } from '~/components'
import { exportDoc } from '~/helpers'
import PPreview from './PPreview'
import PMenu from './PMenu'
import './index.scss'

const PDocument = () => {
  const { id } = useParams()
  const doc = useSelector(state => (state.list.find(i => i.id === id)))

  const [tempItem, setTempItem] = useState(undefined)

  return (
    <div className='wrapper'>
      <Header disabled={!doc} onClick={() => exportDoc('template', doc.title + ' ' + doc.type)} title='Скачать' />
      <div className='wrapperConstructor'>
        <PPreview tempItem={tempItem} />
        <PMenu tempItem={tempItem} setTempItem={setTempItem} doc={doc} />
      </div>
    </div>
  )
}

export default PDocument
