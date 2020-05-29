import React from 'react'

export default () => (
  <>
    <h3 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>
      ПРАВИТЕЛЬСТВО РОССИЙСКОЙ ФЕДЕРАЦИИ
    </h3>
    <h3 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>
      ПОСТАНОВЛЕНИЕ
    </h3>
    <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: 19 }}>
      [<span style={{ color: 'blue' }}>дата</span>] № [<span style={{ color: 'blue' }}>номер</span>]
    </p>
    <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: 19 }}>
      Москва
    </p>
    <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: 19 }}>
      «О внесении изменений в [<span style={{ color: 'blue' }}>название, дата, номер НПА</span>]»
    </p>
    <div style={{ margin: 20 }}>
      <p style={{ textAlign: 'start', fontFamily: 'Times New Roman', margin: 0, fontSize: 19 }}>
        Правительство Российской Федерации постановляет:
      </p>
    </div>
  </>
)
