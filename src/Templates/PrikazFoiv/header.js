import React from 'react'

export default () => (
  <>
    <h3 style={{ textAlign: 'center', fontFamily: 'Times New Roman', marginBottom: 30 }}>
      [<span style={{ color: '#ccc' }}>НАИМЕНОВАНИЕ ОРГАНА ПРИНЯТИЯ ДОКУМЕНТА</span>]
    </h3>
    <h3 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>
      ПРИКАЗ
    </h3>
    <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: 19 }}>
      [<span style={{ color: '#ccc' }}>место</span>]
    </p>
    <pre style={{ fontFamily: 'Times New Roman', margin: 20, fontSize: 19 }}>
      [<span style={{ color: '#ccc' }}>дата</span>]                                            <b>№</b> [<span style={{ color: '#ccc' }}>номер</span>] [<span style={{ color: '#ccc' }}>- приставка (не обязательно)</span>]
    </pre>
    <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', marginBottom: 40, fontSize: 19 }}>
      [<span style={{ color: '#ccc' }}>название</span>]
    </p>
  </>
)
