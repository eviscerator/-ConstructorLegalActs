import React from 'react'
import typicalBlocks from '~/typicalBlocks'
import { SortableHandle } from 'react-sortable-hoc'
import { Icon } from 'antd'
import './index.scss'

const DragHandleLeft = SortableHandle(() => <Icon className='icon' type='drag' />)

const Item = ({ items, item, ind, listNumber, action }) => (
  <div className='typicalBlocksItem' style={{ margin: 0, fontFamily: 'Times New Roman', fontSize: 19 }}>
    <DragHandleLeft />
    <Icon onClick={() => action(ind)} className='icon' type='delete' />
    <span>{listNumber ? listNumber + '. ' : ''}</span>
    {typicalBlocks[item].node}
  </div>
)

export default Item
