import React from 'react'

export default () => {
  return (
    <div style={{ margin: 20, marginTop: 40 }}>
      <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', marginTop: 10, fontSize: 19 }}>
        Президент
      </p>
      <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', marginTop: 10, fontSize: 19 }}>
        Российской Федерации
      </p>
      <p style={{ textAlign: 'start', fontFamily: 'Times New Roman', marginTop: 10, fontSize: 19 }}>
        Москва, Кремль
      </p>
      <p style={{ textAlign: 'start', fontFamily: 'Times New Roman', marginTop: 10, fontSize: 19 }}>
        [<span style={{ color: 'blue' }}>дата</span>]
      </p>
      <p style={{ textAlign: 'start', fontFamily: 'Times New Roman', marginTop: 10, fontSize: 19 }}>
        № [<span style={{ color: 'blue' }}>номер</span>]-рп
      </p>
    </div>
  )
}
