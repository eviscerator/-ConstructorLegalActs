import React from 'react'

export default () => {
  return (
    <div>
      <div style={{ marginTop: 40, marginLeft: 350 }}>
        <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', marginTop: 10, fontSize: 19 }}>
          УТВЕРЖДЕНЫ
        </p>
        <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', marginTop: 10, fontSize: 19 }}>
          Распоряжением Правительства
        </p>
        <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', marginTop: 10, fontSize: 19 }}>
          Российской Федерации
        </p>
        <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', marginBottom: 30, marginTop: 10, fontSize: 19 }}>
          от [<span style={{ color: 'blue' }}>дата</span>] N [<span style={{ color: 'blue' }}>дата</span>]
        </p>
      </div>
      <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', marginTop: 10, fontSize: 19 }}>
        ИЗМЕНЕНИЯ
      </p>
      <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', marginBottom: 40, marginTop: 10, fontSize: 19 }}>
        которые вносятся в [<span style={{ color: 'blue' }}>название, дата, номер НПА</span>]
      </p>
    </div>
  )
}
