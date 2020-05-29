import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCardAction } from '~/store/actions/deleteCardAction'
import { List, Card, Icon } from 'antd'
import { Link } from 'react-router-dom'
import './index.scss'

const PTable = ({ openModal, setEditItem }) => {
  const list = useSelector(state => state.list)
  const dispatch = useDispatch()

  const handleTitle = item => (
    <div className='cardHeader'>
      {item.title}
      <div>
        <Icon type='edit' className='cardButton' onClick={e => renameCard(e, item.id)} />
        <Icon type='delete' className='cardButton' onClick={e => deleteCard(e, item.id)} />
      </div>
    </div>
  )

  const renameCard = (e, id) => {
    e.preventDefault()
    e.stopPropagation()
    setEditItem(list.find(i => i.id === id))
    openModal()
  }

  const deleteCard = (e, id) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(deleteCardAction(id))
  }

  return (
    <List
      className='wrapperList'
      grid={{ gutter: 16, column: 4 }}
      dataSource={list}
      renderItem={item => (
        <List.Item>
          <Link className='link' to={`/${item.id}`}>
            <Card title={handleTitle(item)} className='card'>{item.type}</Card>
          </Link>
        </List.Item>
      )}
    />
  )
}

export default PTable
