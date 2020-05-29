import React, { useState, useEffect } from 'react'
import { createAction } from '~/store/actions/createAction'
import { renameCardAction } from '~/store/actions/renameCardAction'
import { Modal, Select, Input, notification } from 'antd'
import { useDispatch } from 'react-redux'
import './index.scss'

const types = [
  { type: 'ЗАКОН РФ О ПРАВКЕ КОНСТИТУЦИИ РФ', template: 'ZakonRFoPravkah' },
  { type: 'ФЕДЕРАЛЬНЫЙ КОНСТИТУЦИОННЫЙ ЗАКОН', template: 'FKZ' },
  { type: 'ФЕДЕРАЛЬНЫЙ ЗАКОН', template: 'FZ' },
  { type: 'УКАЗ ПРЕЗИДЕНТА РФ', template: 'UkazPresidenta' },
  { type: 'РАСПОРЯЖЕНИЕ ПРЕЗИДЕНТА РФ', template: 'RasporyazheniePresidenta' },
  { type: 'ПОСТАНОВЛЕНИЕ ПРАВИТЕЛЬСТВА РФ', template: 'Pravitelstvo' },
  { type: 'РАСПОРЯЖЕНИЕ ПРАВИТЕЛЬСТВА РФ', template: 'RasporyazheniePravitelstva' },
  { type: 'ПРИКАЗ ФОИВ', template: 'PrikazFoiv' },
]

const npaTypes = [
  { type: 'Изменяющий', keyNpa: 'Modifying' },
  { type: 'Комбинированный', keyNpa: 'Combined' },
  { type: 'Основной', keyNpa: 'Basic' },
]

const PMModal = ({ visible, createNpa, editItem, handleClose }) => {
  const [newNpa, setNewNpa] = useState({
    npaType: npaTypes[0].type,
    type: types[0].type,
    title: '',
  })
  const dispatch = useDispatch()

  useEffect(() => {
    if (editItem) {
      setNewNpa({ ...newNpa, title: editItem.title })
    }
  }, [editItem])

  const selectType = type => setNewNpa({ ...newNpa, type })

  const selectNpaType = npaType => setNewNpa({ ...newNpa, npaType })

  const onChange = title => setNewNpa({ ...newNpa, title: title.target.value })

  const createOrEditNpa = () => {
    if (!newNpa.type || !newNpa.title || !newNpa.npaType) {
      notification.error({ message: 'Заполните все поля!' })
      return
    }
    if (editItem) {
      dispatch(renameCardAction(editItem.id, newNpa.title))
    } else {
      const type = types.find(i => i.type === newNpa.type) || {}
      const npaType = npaTypes.find(i => i.type === newNpa.npaType) || {}
      dispatch(createAction(newNpa.npaType, npaType.keyNpa, newNpa.type, newNpa.title, type.template))
    }
    setNewNpa({ npaType: npaTypes[0].type, type: types[0].type, title: '' })
    handleClose()
  }

  return (
    <Modal
      title='Создание НПА'
      visible={visible}
      onOk={createOrEditNpa}
      onCancel={() => { handleClose(); setNewNpa({ npaType: npaTypes[0].type, type: types[0].type, title: '' }) }}
      okText={editItem ? 'Изменить' : 'Создать'}
      cancelText='Отменить'
    >
      <div className='wrapperNewNpa'>
        <div className='selectType'>
          <span>Добавить тип НПА</span>
          <Select placeholder='Select a type' onChange={selectNpaType} value={newNpa.npaType} disabled={!!editItem} style={{ width: 300 }}>
            {npaTypes.map(i => <Select.Option key={i.type} value={i.type}>{editItem ? editItem.npaType : i.type}</Select.Option>)}
          </Select>
        </div>
        <div className='selectType'>
          <span>Выберите вид НПА</span>
          <Select placeholder='Select a type' onChange={selectType} value={newNpa.type} disabled={!!editItem} style={{ width: 300 }}>
            {types.map(i => <Select.Option key={i.type} value={i.type}>{editItem ? editItem.type : i.type}</Select.Option>)}
          </Select>
        </div>

        <div className='selectType'>
          <span>Введите название</span>
          <Input placeholder='Enter title' onChange={onChange} value={newNpa.title} style={{ width: 300 }} />
        </div>
      </div>
    </Modal>
  )
}

export default PMModal
