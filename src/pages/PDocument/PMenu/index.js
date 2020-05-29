import React from 'react'
import { addItemAppAction } from '~/store/actions/addItemAppAction'
import { addItemAction } from '~/store/actions/addItemAction'
import { setDocAction } from '~/store/actions/setDocAction'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import typicalBlocks from '~/typicalBlocks'
import { Collapse, Checkbox } from 'antd'
import './index.scss'

const PMenu = ({ tempItem, setTempItem }) => {
  const { id } = useParams()
  const doc = useSelector(state => (state.list.find(i => i.id === id))) || {}
  const dispatch = useDispatch()

  const types = {}

  Object.values(typicalBlocks).forEach(tp => {
    if (tp.keys.includes(doc.template)) {
      if (!types[tp.group]) types[tp.group] = []
      types[tp.group].push(tp.name)
    }
  })

  const addNew = item => dispatch(doc.app ? addItemAppAction(id, item) : addItemAction(id, item))

  const onDragStart = item => setTempItem(item)

  const onDragEnd = e => setTempItem(false)

  const onChange = () => {
    const newDoc = { ...doc, app: !doc.app }
    dispatch(setDocAction(id, newDoc))
  }

  const addApp = (
    <div className='app'>
      <span className='text'>Добавить в приложение:</span>
      <Checkbox onChange={onChange} checked={doc.app} />
    </div>
  )

  return (
    <div className='wrapperMenu'>
      {(doc.npaType === 'Изменяющий' && (
        doc.type === 'УКАЗ ПРЕЗИДЕНТА РФ' ||
        doc.type === 'РАСПОРЯЖЕНИЕ ПРАВИТЕЛЬСТВА РФ' ||
        doc.type === 'ПОСТАНОВЛЕНИЕ ПРАВИТЕЛЬСТВА РФ'
      ) && addApp)}
      <Collapse bordered={false} defaultActiveKey={['1']}>
        {Object.keys(types)
          .filter(i => doc.keyNpa === 'Basic'
            ? (i !== 'Изменяющие положения' && i !== 'Положения об утрате силы') : i)
          .map(i => (
            <Collapse.Panel header={i} key={i}>
              {types[i].map(tp => (
                <p
                  draggable='true'
                  onDragStart={() => onDragStart(tp)}
                  onDragEnd={onDragEnd}
                  onClick={() => addNew(tp)}
                  key={tp}
                >
                  {typicalBlocks[tp].node}
                </p>
              ))}
            </Collapse.Panel>
          ))}
      </Collapse>
    </div>
  )
}

export default PMenu
