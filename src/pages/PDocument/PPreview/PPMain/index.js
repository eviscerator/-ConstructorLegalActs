import React from 'react'
import { useDispatch } from 'react-redux'
import { SortableElement } from 'react-sortable-hoc'
import { setItemsAction } from '~/store/actions/setItemsAction'
import { addItemAction } from '~/store/actions/addItemAction'
import typicalBlocks from '~/typicalBlocks'
import * as templates from '~/Templates'
import { Item } from '~/components'

const PPMain = ({ doc, tempItem, id, onSortEnd, onDragOver }) => {
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
      if (notNumerable.includes(typicalBlocks[item].group)) {
        subCategory = 0
        return ''
      } else {
        return ++subCategory
      }
    }
  }

  const number = getListNumber()

  return (
    <div onDragOver={onDragOver} onDrop={onDrop} className={tempItem ? 'activeBlock' : ''}>
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
            />
          ))}
        </div>
      </Template>
    </div>
  )
}

export default PPMain
