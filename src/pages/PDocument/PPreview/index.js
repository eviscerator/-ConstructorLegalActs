import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import { setItemsAction } from '~/store/actions/setItemsAction'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import PPMain from './PPMain'
import PPApp from './PPApp'
import './index.scss'

const SortablePMAQItems = ({ tempItem }) => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const doc = useSelector(state => (state.list.find(i => i.id === id)))

  if (!doc) return 'Документ не найдено'

  const items = doc.items || []
  const itemsApp = doc.itemsApp || []

  const onSortEnd = obj => {
    const dragItem = items.find((i, index) => index === obj.oldIndex)
    const filtered = items.filter((i, index) => index !== obj.oldIndex)

    filtered.splice(obj.newIndex, 0, dragItem)

    dispatch(setItemsAction(filtered, doc.itemsApp, id))
  }

  const onSortEndApp = obj => {
    const dragItemApp = doc.itemsApp.find((i, index) => index === obj.oldIndex)
    const filteredApp = doc.itemsApp.filter((i, index) => index !== obj.oldIndex)

    filteredApp.splice(obj.newIndex, 0, dragItemApp)

    dispatch(setItemsAction(doc.items, filteredApp, id))
  }

  const onDragOver = e => e.preventDefault()

  const attr = { items, id, itemsApp, doc, onDragOver, tempItem }

  return (
    <div className='wrapperPreview' id='template'>
      <SortableBodyPMAQItems useDragHandle onSortEnd={onSortEnd} {...attr} />
      <SortableBodyPMAQItemsApp useDragHandle onSortEnd={onSortEndApp} {...attr} />
    </div>
  )
}

const SortableBodyPMAQItems = SortableContainer(props => <PPMain {...props} />)
const SortableBodyPMAQItemsApp = SortableContainer(props => <PPApp {...props} />)

export default SortablePMAQItems
