/*eslint-disable*/
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SortableElement } from 'react-sortable-hoc'
import { setItemsAction } from '~/store/actions/setItemsAction'
import { addItemAction } from '~/store/actions/addItemAction'
import { changeSelectedItem } from '~/store/actions/changeSelectedItem'
import typicalBlocks from '~/typicalBlocks'
import * as templates from '~/Templates'
import { Item } from '~/components'
import { Modal, Select, AutoComplete } from 'antd'

const { Option } = Select

const listDepartmentShort = ['Минприроды',  'Минкульт',  'Миздрав',  'Минсельхоз',  'Минтранс',  'Минэк',  'Минобр',  'Минспорт',  'Минобороны',  'Минтруда',  'Минюст',  'Минстрой',  'Минфин',  'Минсвязи',  'Минэнерго',  'Мипромторг']

const listDepartmentLong =['Министерство природных ресурсов и экологии',  'Министерство культуры',  'Министерство здравоохранения',  'Министерство сельского хозяйства',  'Министерство транспорта',  'Министерство экономического развития',  'Министерство образования и науки',  'Министерство спорта, туризма и молодежной политики',  'Министерство обороны',  'Министерство труда и социальной защиты',  'Министерство юстиции РФ',  'Министерство строительства и жилищно-коммунального хозяйства',  'Министерство финансов',  'Министерство связи и массовых коммуникаций',  'Министерство энергетики',  'Министерство промышленности и торговли',]

const PPMain = ({ doc, tempItem, id, onSortEnd, onDragOver }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [selectedNode, setSelectedNode] = useState()

  useEffect(() => {
    let items = localStorage.getItem(`${doc.id}`)
    items = items ? JSON.parse(items) : null
    if (items) {
      Object.entries(items).forEach(e => {
        Object.entries(e[1]).forEach(i => {
          console.log(i)
          const temp = document.getElementById(i[0])
          if (temp) temp.innerHTML = `[${[i[1]]}]`
        })
      })
    }
  })

  const SortableRow = (SortableElement(props => <Item {...props} />))

  const dispatch = useDispatch()

  const Template = templates[doc.template]

  const onDrop = e => {
    e.preventDefault()
    dispatch(addItemAction(id, tempItem))
  }

  const delItem = ind => {
    const newItems = doc.items.filter((i, index) => ind !== index)
    dispatch(setItemsAction(newItems, doc.itemsApp, id))
  }

  const getListNumber = () => {
    const notNumerable = ['Реквизиты НПА', 'Каркас', 'Преамбула']
    let subCategory = 0
    return item => {
      if (notNumerable.includes(typicalBlocks[item].group) || item === 'tb115') {
        subCategory = 0
        return ''
      } else {
        return ++subCategory
      }
    }
  }

  const number = getListNumber()

  const [value, setValue] = React.useState('')

  const onChangeSubject = value => {
    let newSelectedNode = selectedNode
    let items = localStorage.getItem(`${doc.id}`)
    items = items ? JSON.parse(items) : null

    if (items) {
      if (items[`${newSelectedNode}`]) items[`${newSelectedNode}`][`${newSelectedNode}-1`] = value
      else items[`${newSelectedNode}`] = { [`${newSelectedNode}-1`]: value }
    } else {
      items = { [`${newSelectedNode}`]: { [`${newSelectedNode}-1`]: value } }
    }
    localStorage.setItem(`${doc.id}`, JSON.stringify(items))
    setValue(value)
  }

  const onChangeFOIB = value => {
    let newSelectedNode = selectedNode
    let items = localStorage.getItem(`${doc.id}`)
    items = items ? JSON.parse(items) : null

    let index = listDepartmentShort.indexOf(value);
    let el = listDepartmentLong[index]

    if (items) {
      if (items[`${newSelectedNode}`]) items[`${newSelectedNode}`][`${newSelectedNode}-1`] = el
      else items[`${newSelectedNode}`] = { [`${newSelectedNode}-1`]: el }
    } else {
      items = { [`${newSelectedNode}`]: { [`${newSelectedNode}-1`]: el } }
    }
    localStorage.setItem(`${doc.id}`, JSON.stringify(items))
    setValue(el)
  }


  const onChangeModalDeistvie = value => {
    let newSelectedNode = selectedNode
    let items = localStorage.getItem(`${doc.id}`)
    items = items ? JSON.parse(items) : null

    if (items) {
      if (items[`${newSelectedNode}`]) items[`${newSelectedNode}`][`${newSelectedNode}-2`] = value
      else items[`${newSelectedNode}`] = { [`${newSelectedNode}-2`]: value }
    } else {
      items = { [`${newSelectedNode}`]: { [`${newSelectedNode}-2`]: value } }
    }
    localStorage.setItem(`${doc.id}`, JSON.stringify(items))
    setValue(value)
  }

  const onChangeModalTrebovanie = value => {
    let newSelectedNode = selectedNode
    if (selectedNode.length > 5) {
      newSelectedNode = selectedNode.slice(0, -2)
    }
    let items = localStorage.getItem(`${doc.id}`)
    items = items ? JSON.parse(items) : null

    if (items) {
      if (items[`${newSelectedNode}`]) items[`${newSelectedNode}`][`${newSelectedNode}-3`] = value
      else items[`${newSelectedNode}`] = { [`${newSelectedNode}-3`]: value }
    } else {
      items = { [`${newSelectedNode}`]: { [`${newSelectedNode}-3`]: value } }
    }
    localStorage.setItem(`${doc.id}`, JSON.stringify(items))
    setValue(value)
  }

  const onChangeObject1 = value => {
    let newSelectedNode = selectedNode
    let items = localStorage.getItem(`${doc.id}`)
    items = items ? JSON.parse(items) : null

    if (items) {
      if (items[`${newSelectedNode}`]) items[`${newSelectedNode}`][`${newSelectedNode}-4`] = value
      else items[`${newSelectedNode}`] = { [`${newSelectedNode}-4`]: value }
    } else {
      items = { [`${newSelectedNode}`]: { [`${newSelectedNode}-4`]: value } }
    }
    localStorage.setItem(`${doc.id}`, JSON.stringify(items))
    setValue(value)
  }

  const onChangeObject2 = value => {
    let newSelectedNode = selectedNode
    let items = localStorage.getItem(`${doc.id}`)
    items = items ? JSON.parse(items) : null

    if (items) {
      if (items[`${newSelectedNode}`]) items[`${newSelectedNode}`][`${newSelectedNode}-5`] = value
      else items[`${newSelectedNode}`] = { [`${newSelectedNode}-5`]: value }
    } else {
      items = { [`${newSelectedNode}`]: { [`${newSelectedNode}-5`]: value } }
    }
    localStorage.setItem(`${doc.id}`, JSON.stringify(items))
    setValue(value)
  }
  // const changeSelectedNode = () => {
  //   setIsVisibleModal(false)
  //   dispatch(changeSelectedItem(selectedNode, <span>Hello world</span>))
  // }
  // const handleChangeNodeElement = item => {
  //   // document.querySelector(`[id="${selectedNode}"]`).innerHTML = `<span>${item}</span>`
  // }


  return (
    <div onDragOver={onDragOver} onDrop={onDrop} className={tempItem ? 'activeBlock' : ''}>
      <Modal

        visible={isVisibleModal}
        onOk={() => setIsVisibleModal(false)}
        onCancel={() => setIsVisibleModal(false)}
      >
        <div style={selectedNode === 'tb106' || selectedNode === 'tb107'  ? {} : { display: 'none' }}>
          <span>Субьект - </span>
          <Select placeholder="Субьект" style={{ width: 200 }} onChange={onChangeSubject}>
            <Option value='Исполнитель'>Исполнитель</Option>
            <Option value='Оператор связи'>Оператор связи</Option>
            <Option value='Поставщик'>Поставщик</Option>
            <Option value='Руководитель организации'>Руководитель организации</Option>
          </Select>
        </div>
        <div style={selectedNode === 'tb14' || selectedNode === 'tb15' ? {} : { display: 'none' }}>
          <span>Название ФОИВ - </span>
          <AutoComplete
              style={{ width: 200 }}
              dataSource={listDepartmentShort}
              onChange={onChangeFOIB}
              placeholder="Выберите минестерство"
              filterOption={(inputValue, option) =>
                  option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
          />
        </div>
        <div style={selectedNode === 'tb14' || selectedNode === 'tb15' ? { display: 'none' } : {}}>
          <span>Модальное действие - </span>
          <Select placeholder="Модальное действие" style={{ width: 200 }} onChange={onChangeModalDeistvie} >
            <Option value='Допускается'>Допускается</Option>
            <Option value='Не допускается'>Не допускается</Option>
            <Option value='Обязан'>Обязан</Option>
            <Option value='Должен'>Должен</Option>
            <Option value='Необходимо'>Необходимо</Option>
            <Option value='Рекомендуется'>Рекомендуется</Option>
            <Option value='Запрещается'>Запрещается</Option>
            <Option value='Должно быть'>Должно быть</Option>
            <Option value='Не должно быть'>Не должно быть</Option>
            <Option value='Следует'>Следует</Option>
            <Option value='Разрешается'>Разрешается</Option>
            <Option value='Не разрешается'>Не разрешается</Option>
            <Option value='Не должен'>Не должен</Option>
          </Select>
        </div>
        <div style={selectedNode === 'tb109' ? {} : { display: 'none' }}>
          <span>Обьект 1 - </span>
          <Select placeholder="Обьект 1" style={{ width: 200 }} onChange={onChangeObject1}>
            <Option value='Обьект 1'>Обьект 1</Option>
            <Option value='Обьект 2'>Обьект 2</Option>
            <Option value='Обьект 3'>Обьект 3</Option>
          </Select>
        </div>
        <div style={selectedNode === 'tb109' ? {} : { display: 'none' }}>
          <span>Обьект 2 - </span>
          <Select placeholder="Обьект 2" style={{ width: 200 }} onChange={onChangeObject2}>
            <Option value='Обьект 1'>Обьект 1</Option>
            <Option value='Обьект 2'>Обьект 2</Option>
            <Option value='Обьект 3'>Обьект 3</Option>
          </Select>
        </div>
        <div style={selectedNode === 'tb106' || selectedNode === 'tb109' || selectedNode === 'tb110' || selectedNode === 'tb14' || selectedNode === 'tb15' ? { display: 'none' } : {}}>
          <span> Требования / Условия - </span>
          <Select placeholder="Требования/Условия" style={{ width: 200 }} onChange={onChangeModalTrebovanie}>
            <Option value='Требование'>Требование</Option>
            <Option value='Условие'>Условие</Option>
          </Select>
        </div>
        {/* <div>Обьект 1</div>
        <div>Обьект 2</div> */}
      </Modal>
      <Template>
        <div>
          {doc.items.map((i, index) => (
            <SortableRow
              onSortEnd={onSortEnd}
              action={delItem}
              listNumber={number(i)}
              key={index}
              item={i}
              ind={index}
              index={index}
              setIsVisibleModal={setIsVisibleModal}
              isVisibleModal={isVisibleModal}
              setSelectedNode={setSelectedNode}
            />
          ))}
        </div>
      </Template>
    </div>
  )
}

export default PPMain
