import React from 'react'
import { DatePicker, AutoComplete, Input } from 'antd'

const options = [
  { value: 'Burns Bay Road' },
  { value: 'Downing Street' },
  { value: 'Wall Street' },
]

const handleSearch = (inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1

export default () => (
  <>
    <h3 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>
      ПРАВИТЕЛЬСТВО РОССИЙСКОЙ ФЕДЕРАЦИИ
    </h3>
    <h3 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>
      ПОСТАНОВЛЕНИЕ
    </h3>
    <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: 19 }}>
      <span style={{ color: 'blue', position: 'relative', cursor: 'pointer' }}><DatePicker format='DD.MM.YYYY' style={{ width: 100 }} placeholder='Дата' size='small' /></span> № <span style={{ color: 'blue' }}><Input placeholder='Номер' size='small' style={{ width: 150 }} /></span>
    </p>
    <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: 19 }}>
      Москва
    </p>
    <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: 19 }}>
      «О внесении изменений в <span><AutoComplete placeholder='название' size='small' style={{ width: 200 }} options={options} onChange={handleSearch} />, <DatePicker format='DD.MM.YYYY' style={{ width: 100 }} placeholder='Дата' size='small' />, <AutoComplete placeholder='номер НПА' size='small' style={{ width: 150 }} options={options} onChange={handleSearch} /></span>»
    </p>
    <div style={{ margin: 20 }}>
      <p style={{ textAlign: 'start', fontFamily: 'Times New Roman', margin: 0, fontSize: 19 }}>
        Правительство Российской Федерации постановляет:
      </p>
    </div>
  </>
)
