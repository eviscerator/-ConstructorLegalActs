import React from 'react'
import { DatePicker, AutoComplete, Input } from 'antd'

const options = [
  'Об утверждении Правил перевозок пассажиров и багажа автомобильным транспортом и городским наземным электрическим транспортом номер 02/07/05-20/00102453 от 13.12.2015',
  'Об утверждении правил предоставления субсидий из федерального бюджета российским финансовым организациям на возмещение недополученных ими доходов по кредитным договорам и (или) договорам факторинга, заключенным в 2020 году для целей исполнения договоров поставки автомобильной техники номер 01/02/05-20/00102451 от 11.04.2018',
]

const handleSearch = (inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1

export default () => (
  <>
    <h3 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>
      ПРАВИТЕЛЬСТВО РОССИЙСКОЙ ФЕДЕРАЦИИ
    </h3>
    <h3 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>
      ПОСТАНОВЛЕНИЕ
    </h3>
    <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: 19 }}>
      <span style={{ color: '#ccc', position: 'relative', cursor: 'pointer' }}><DatePicker format='DD.MM.YYYY' style={{ width: 100, cursor: 'pointer' }} placeholder='Дата' size='small' /></span> № <span style={{ color: '#ccc' }}><Input placeholder='Номер' size='small' style={{ width: 150 }} /></span>
    </p>
    <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: 19 }}>
      Москва
    </p>
    <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: 19 }}>
      «О внесении изменений в [<span style={{ color: '#ccc', position: 'relative' }}>Об утверждении Правил перевозок пассажиров и багажа автомобильным транспортом и городским наземным электрическим транспортом номер 02/07/05-20/00102453 от 13.12.2015</span>]»
    </p>
    <div style={{ margin: 20 }}>
      <p style={{ textAlign: 'start', fontFamily: 'Times New Roman', margin: 0, fontSize: 19 }}>
      Правительство Российской Федерации постановляет:
      </p>
    </div>
  </>
)
