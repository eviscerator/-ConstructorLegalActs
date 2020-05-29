import React from 'react'
import { useDispatch } from 'react-redux'
import { SortableElement } from 'react-sortable-hoc'
import { setItemsAction } from '~/store/actions/setItemsAction'
import { addItemAppAction } from '~/store/actions/addItemAppAction'
import { Item, TemplateFooter } from '~/components'
import typicalBlocks from '~/typicalBlocks'

const PPApp = ({ doc, onDragOver, id, tempItem, onSortEndApp }) => {
  const SortableRow = (SortableElement(props => <Item {...props} />))

  const dispatch = useDispatch()

  const onDropApp = e => {
    e.preventDefault()
    dispatch(addItemAppAction(id, tempItem))
  }

  const delItemApp = ind => {
    const newItemsApp = doc.itemsApp.filter((i, index) => ind !== index)
    dispatch(setItemsAction(doc.items, newItemsApp, id))
  }

  const getListNumber = () => {
    const notNumerable = ['Реквизиты НПА', 'Каркас', 'Постановочно-распорядительная часть', 'Преамбула']
    let subCategory = 0
    return item => {
      if (notNumerable.includes(typicalBlocks[item].group)) {
        subCategory = 0
        return ''
      } else {
        return ++subCategory
      }
    }
  }

  const number = getListNumber()

  if (doc.npaType === 'Основной') return null

  return (
    <div onDragOver={onDragOver} onDrop={onDropApp} className={tempItem ? 'activeBlock' : ''}>
      <TemplateFooter>
        {doc.itemsApp.map((i, index) => (
          <SortableRow
            onSortEnd={onSortEndApp}
            action={delItemApp}
            listNumber={number(i)}
            key={index}
            item={i}
            ind={index}
            index={index}
          />
        ))}
      </TemplateFooter>
    </div>
  )
}

export default PPApp
