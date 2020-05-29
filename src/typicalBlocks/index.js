import React from 'react'

export default {
  tb1: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>дата</span>]
      </span>
    ),
    keys: [
      'ZakonRFoPravkah', 'FKZ', 'FZ', 'UkazPresidenta',
      'RasporyazheniePresidenta', 'Pravitelstvo', 'RasporyazheniePravitelstva', 'PrikazFoiv',
    ],
    group: 'Реквизиты НПА',
    name: 'tb1',
  },
  tb2: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        № [<span style={{ color: 'blue' }}>номер</span>]
      </span>
    ),
    keys: ['UkazPresidenta', 'RasporyazheniePresidenta', 'Pravitelstvo', 'RasporyazheniePravitelstva'],
    group: 'Реквизиты НПА',
    name: 'tb2',
  },
  tb3: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        № [<span style={{ color: 'blue' }}>номер</span>]-ФКЗ
      </span>
    ),
    keys: ['ZakonRFoPravkah', 'FKZ'],
    group: 'Реквизиты НПА',
    name: 'tb3',
  },
  tb4: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        № [<span style={{ color: 'blue' }}>номер</span>]-ФЗ
      </span>
    ),
    keys: ['FZ'],
    group: 'Реквизиты НПА',
    name: 'tb4',
  },
  tb5: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        № [<span style={{ color: 'blue' }}>номер</span>][<span style={{ color: 'blue' }}>- приставка (не обязательно)</span>]
      </span>
    ),
    keys: ['PrikazFoiv'],
    group: 'Реквизиты НПА',
    name: 'tb5',
  },
  tb6: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>место</span>]
      </span>
    ),
    keys: ['PrikazFoiv'],
    group: 'Реквизиты НПА',
    name: 'tb6',
  },
  tb7: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>название</span>]
      </span>
    ),
    keys: [
      'ZakonRFoPravkah', 'FKZ', 'FZ', 'UkazPresidenta',
      'RasporyazheniePresidenta', 'Pravitelstvo', 'RasporyazheniePravitelstva', 'PrikazFoiv',
    ],
    group: 'Реквизиты НПА',
    name: 'tb7',
  },
  tb8: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>преамбула (не обязательно)</span>]
      </span>
    ),
    keys: ['ZakonRFoPravkah', 'FKZ', 'FZ', 'UkazPresidenta', 'RasporyazheniePresidenta', 'PrikazFoiv'],
    group: 'Преамбула',
    name: 'tb8',
  },
  tb9: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        В соответствии с [<span style={{ color: 'blue' }}>название, дата, номер НПА и/или ссылка на конкретную норму (ссылка на официальный источник опубликования)</span>]
      </span>
    ),
    keys: ['Pravitelstvo', 'RasporyazheniePravitelstva'],
    group: 'Преамбула',
    name: 'tb9',
  },
  tb10: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        В соответствии [<span style={{ color: 'blue' }}>название, дата, номер НПА и/или ссылка на конкретную норму (ссылка на официальный источник опубликования)</span>]
      </span>
    ),
    keys: ['UkazPresidenta', 'RasporyazheniePresidenta', 'PrikazFoiv'],
    group: 'Преамбула',
    name: 'tb10',
  },
  tb11: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Утвердить [<span style={{ color: 'blue' }}>текст</span>]
      </span>
    ),
    keys: ['RasporyazheniePresidenta', 'Pravitelstvo', 'RasporyazheniePravitelstva', 'PrikazFoiv'],
    group: 'Постановочно-распорядительная часть',
    name: 'tb11',
  },
  tb12: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Установить [<span style={{ color: 'blue' }}>текст</span>]
      </span>
    ),
    keys: ['RasporyazheniePresidenta', 'Pravitelstvo', 'RasporyazheniePravitelstva'],
    group: 'Постановочно-распорядительная часть',
    name: 'tb12',
  },
  tb13: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Принять [<span style={{ color: 'blue' }}>текст</span>]
      </span>
    ),
    keys: ['UkazPresidenta', 'RasporyazheniePravitelstva'],
    group: 'Постановочно-распорядительная часть',
    name: 'tb13',
  },
  tb14: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Министерству [<span style={{ color: 'blue' }}>название ФОИВ</span>] в [<span style={{ color: 'blue' }}>срок</span>] со дня вступления в силу настоящего постановления [<span style={{ color: 'blue' }}>текст поручения</span>]
      </span>
    ),
    keys: ['Pravitelstvo'],
    group: 'Постановочно-распорядительная часть',
    name: 'tb14',
  },
  tb15: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Министерству [<span style={{ color: 'blue' }}>название ФОИВ</span>] до [<span style={{ color: 'blue' }}>дата</span>] [<span style={{ color: 'blue' }}>текст поручения</span>]
      </span>
    ),
    keys: ['Pravitelstvo'],
    group: 'Постановочно-распорядительная часть',
    name: 'tb15',
  },
  tb110: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        <span style={{ color: 'blue' }}>[Обстоятельство][Субъект][модальное действие][действие][текст требования]</span>
      </span>
    ),
    keys: ['Pravitelstvo', 'UkazPresidenta', 'PrikazFoiv'],
    group: 'Шаблоны Обязательных требований (общее)',
    name: 'tb110',
  },
  tb111: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        <span style={{ color: 'blue' }}>[Обстоятельство][субъект][модальное действие][действие]следующие[требования/условия]</span>
      </span>
    ),
    keys: ['Pravitelstvo', 'UkazPresidenta', 'PrikazFoiv'],
    group: 'Шаблоны Обязательных требований (общее)',
    name: 'tb111',
  },
  tb112: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        <span style={{ color: 'blue' }}>[текст требований/условий]</span>
      </span>
    ),
    keys: ['Pravitelstvo', 'UkazPresidenta', 'PrikazFoiv'],
    group: 'Шаблоны Обязательных требований (общее)',
    name: 'tb112',
  },
  tb113: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        <span style={{ color: 'blue' }}>[Обстоятельство][Объект 1][модальное действие][действие][Объект 2][Обстоятельства]</span>
      </span>
    ),
    keys: ['Pravitelstvo', 'UkazPresidenta', 'PrikazFoiv'],
    group: 'Шаблоны Обязательных требований (конкретное)',
    name: 'tb113',
  },
  tb114: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        <span style={{ color: 'blue' }}>[модальное действие][Действие][текст требования] </span>
      </span>
    ),
    keys: ['Pravitelstvo', 'UkazPresidenta', 'PrikazFoiv'],
    group: 'Шаблоны Обязательных требований (конкретное)',
    name: 'tb114',
  },
  tb16: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Признать утратившими силу [<span style={{ color: 'blue' }}>название, дата, номер НПА и/или ссылка на конкретную норму (ссылка на официальный источник опубликования)</span>]
      </span>
    ),
    keys: ['RasporyazheniePresidenta', 'Pravitelstvo'],
    group: 'Положения об утрате силы',
    name: 'tb16',
  },
  tb17: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Признать утратившими силу [<span style={{ color: 'blue' }}>название, дата, номер НПА и/или ссылка на конкретную норму (дата и номер регистрации в Минюсте)</span>]
      </span>
    ),
    keys: ['PrikazFoiv'],
    group: 'Положения об утрате силы',
    name: 'tb17',
  },
  tb18: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящее постановление вступает в силу с [<span style={{ color: 'blue' }}>дата</span>]
      </span>
    ),
    keys: ['Pravitelstvo'],
    group: 'Положения о вступлении в силу',
    name: 'tb18',
  },
  tb19: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящее постановление вступает в силу с [<span style={{ color: 'blue' }}>дата</span>], за исключением [<span style={{ color: 'blue' }}>пункта(ов)</span>]
      </span>
    ),
    keys: [],
    group: 'Положения о вступлении в силу',
    name: 'tb19',
  },
  tb20: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящее постановление вступает в силу со дня вступления в силу [<span style={{ color: 'blue' }}>название, дата, номер НПА и/или ссылка на конкретную норму</span>]
      </span>
    ),
    keys: ['Pravitelstvo'],
    group: 'Положения о вступлении в силу',
    name: 'tb20',
  },
  tb21: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящее постановление вступает в силу со дня вступления в силу [<span style={{ color: 'blue' }}>название, дата, номер НПА и/или ссылка на конкретную норму</span>], за исключением [<span style={{ color: 'blue' }}>пункта(ов)</span>]
      </span>
    ),
    keys: ['Pravitelstvo'],
    group: 'Положения о вступлении в силу',
    name: 'tb21',
  },
  tb22: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>пункт(ы)</span>] настоящего постановления вступает в силу со дня его официального опубликования
      </span>
    ),
    keys: ['Pravitelstvo'],
    group: 'Положения о вступлении в силу',
    name: 'tb22',
  },
  tb23: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>пункт(ы)</span>] настоящего постановления вступает в силу с [<span style={{ color: 'blue' }}>дата</span>]
      </span>
    ),
    keys: ['Pravitelstvo'],
    group: 'Положения о вступлении в силу',
    name: 'tb23',
  },
  tb24: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>пункт(ы)</span>] настоящего постановления вступает в силу со дня вступления в силу [<span style={{ color: 'blue' }}>название, дата, номер НПА</span>]
      </span>
    ),
    keys: ['Pravitelstvo'],
    group: 'Положения о вступлении в силу',
    name: 'tb24',
  },
  tb25: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>пункт(ы)</span>] настоящего постановления вступает в силу со дня вступления в силу [<span style={{ color: 'blue' }}>ссылка на норму</span>]
      </span>
    ),
    keys: ['Pravitelstvo'],
    group: 'Положения о вступлении в силу',
    name: 'tb25',
  },
  tb26: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Изменения, которые вносятся в [<span style={{ color: 'blue' }}>название</span>]
      </span>
    ),
    keys: ['Pravitelstvo'],
    group: 'Реквизиты НПА',
    name: 'tb26',
  },
  tb27: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Изменения, которые вносятся в [<span style={{ color: 'blue' }}>название, дата, номер НПА</span>]
      </span>
    ),
    keys: ['RasporyazheniePravitelstva'],
    group: 'Реквизиты НПА',
    name: 'tb27',
  },
  tb28: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        В подпункте [<span style={{ color: 'blue' }}>№</span>] пункта [<span style={{ color: 'blue' }}>№</span>] слов(а) «[<span style={{ color: 'blue' }}>текст</span>]» заменить словами «[<span style={{ color: 'blue' }}>текст</span>]»
      </span>
    ),
    keys: ['Pravitelstvo', 'RasporyazheniePravitelstva'],
    group: 'Изменяющие положения',
    name: 'tb28',
  },
  tb29: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        В подпункте [<span style={{ color: 'blue' }}>№</span>] пункта [<span style={{ color: 'blue' }}>№</span>] слов(а) «[<span style={{ color: 'blue' }}>текст</span>]» исключить
      </span>
    ),
    keys: ['Pravitelstvo', 'RasporyazheniePravitelstva'],
    group: 'Изменяющие положения',
    name: 'tb29',
  },
  tb30: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Пункт [<span style={{ color: 'blue' }}>№</span>] дополнить подпунктом [<span style={{ color: 'blue' }}>№</span>], следующего содержания: [<span style={{ color: 'blue' }}>текст</span>]
      </span>
    ),
    keys: ['Pravitelstvo'],
    group: 'Изменяющие положения',
    name: 'tb30',
  },
  tb31: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Подпункт [<span style={{ color: 'blue' }}>№</span>] пункта [<span style={{ color: 'blue' }}>№</span>] изложить в следующей редакции [<span style={{ color: 'blue' }}>текст</span>]
      </span>
    ),
    keys: ['Pravitelstvo', 'RasporyazheniePravitelstva'],
    group: 'Изменяющие положения',
    name: 'tb31',
  },
  tb32: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Подпункт [<span style={{ color: 'blue' }}>№</span>] изложить в следующей редакции [<span style={{ color: 'blue' }}>текст</span>]
      </span>
    ),
    keys: ['Pravitelstvo', 'RasporyazheniePravitelstva'],
    group: 'Изменяющие положения',
    name: 'tb32',
  },
  tb33: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Пункт [<span style={{ color: 'blue' }}>№</span>] изложить в следующей редакции [<span style={{ color: 'blue' }}>текст</span>]
      </span>
    ),
    keys: ['Pravitelstvo', 'RasporyazheniePravitelstva'],
    group: 'Изменяющие положения',
    name: 'tb33',
  },
  tb34: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        В целях [<span style={{ color: 'blue' }}>текст</span>]
      </span>
    ),
    keys: ['UkazPresidenta', 'RasporyazheniePresidenta', 'RasporyazheniePravitelstva', 'PrikazFoiv'],
    group: 'Преамбула',
    name: 'tb34',
  },
  tb35: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        В связи [<span style={{ color: 'blue' }}>текст</span>]
      </span>
    ),
    keys: ['UkazPresidenta', 'RasporyazheniePresidenta', 'RasporyazheniePravitelstva', 'PrikazFoiv'],
    group: 'Преамбула',
    name: 'tb35',
  },
  tb36: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Во исполнение [<span style={{ color: 'blue' }}>название, дата, номер НПА и/или ссылка на конкретную норму (ссылка на официальный источник опубликования)</span>]
      </span>
    ),
    keys: ['PrikazFoiv'],
    group: 'Преамбула',
    name: 'tb36',
  },
  tb37: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>ссылка на норму</span>] изложить в следующей редакции: [<span style={{ color: 'blue' }}>текст</span>]
      </span>
    ),
    keys: ['UkazPresidenta', 'PrikazFoiv'],
    group: 'Изменяющие положения',
    name: 'tb37',
  },
  tb38: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>ссылка на норму</span>] слов(а) «[<span style={{ color: 'blue' }}>текст</span>]» заменить словами «[<span style={{ color: 'blue' }}>текст</span>]»
      </span>
    ),
    keys: ['UkazPresidenta', 'PrikazFoiv'],
    group: 'Изменяющие положения',
    name: 'tb38',
  },
  tb39: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        В [<span style={{ color: 'blue' }}>ссылка на норму</span>] слова «[<span style={{ color: 'blue' }}>текст</span>]» исключить
      </span>
    ),
    keys: ['UkazPresidenta', 'PrikazFoiv'],
    group: 'Изменяющие положения',
    name: 'tb39',
  },
  tb40: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        В [<span style={{ color: 'blue' }}>ссылка на норму</span>] после слов «[<span style={{ color: 'blue' }}>текст</span>]» дополнить словами «[<span style={{ color: 'blue' }}>текст</span>]»
      </span>
    ),
    keys: ['UkazPresidenta', 'PrikazFoiv'],
    group: 'Изменяющие положения',
    name: 'tb40',
  },
  tb41: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>ссылка на норму</span>] дополнить словами «[<span style={{ color: 'blue' }}>текст</span>]»
      </span>
    ),
    keys: ['UkazPresidenta'],
    group: 'Изменяющие положения',
    name: 'tb41',
  },
  tb42: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Признать утратившим(…) [<span style={{ color: 'blue' }}>название, дата, номер НПА и/или ссылка на конкретную норму (ссылка на официальный источник опубликования)</span>]
      </span>
    ),
    keys: ['UkazPresidenta'],
    group: 'Положения об утрате силы',
    name: 'tb42',
  },
  tb43: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящий Указ вступает в силу с [<span style={{ color: 'blue' }}>пункт(ы)</span>] г.
      </span>
    ),
    keys: ['UkazPresidenta'],
    group: 'Положения о вступлении в силу',
    name: 'tb43',
  },
  tb44: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Принят Государственной Думой [<span style={{ color: 'blue' }}>дата</span>] года
      </span>
    ),
    keys: ['FZ'],
    group: 'Реквизиты НПА',
    name: 'tb44',
  },
  tb45: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Одобрен Государственной Думой [<span style={{ color: 'blue' }}>дата</span>] года
      </span>
    ),
    keys: ['ZakonRFoPravkah', 'FKZ'],
    group: 'Реквизиты НПА',
    name: 'tb45',
  },
  tb46: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Одобрен Советом Федерации [<span style={{ color: 'blue' }}>дата</span>] года
      </span>
    ),
    keys: ['ZakonRFoPravkah', 'FKZ', 'FZ'],
    group: 'Реквизиты НПА',
    name: 'tb46',
  },
  tb47: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        РАЗДЕЛ [№] [<span style={{ color: 'blue' }}>название</span>]
      </span>
    ),
    keys: ['FKZ', 'FZ'],
    group: 'Каркас',
    name: 'tb47',
  },
  tb48: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Статья [№]. Отношения, регулируемые настоящим Федеральным конституционным законом [<span style={{ color: 'blue' }}>текст нормы</span>]
      </span>
    ),
    keys: ['FKZ'],
    group: 'Каркас',
    name: 'tb48',
  },
  tb49: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Основные понятия, используемые в настоящем Федеральном конституционном законе [<span style={{ color: 'blue' }}>текст нормы</span>]
      </span>
    ),
    keys: ['FKZ'],
    group: 'Каркас',
    name: 'tb49',
  },
  tb50: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Статья [№]. Отношения, регулируемые настоящим Федеральным законом [<span style={{ color: 'blue' }}>текст нормы</span>]
      </span>
    ),
    keys: ['FZ'],
    group: 'Каркас',
    name: 'tb50',
  },
  tb51: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Основные понятия, используемые в настоящем Федеральном законе [<span style={{ color: 'blue' }}>текст нормы</span>]
      </span>
    ),
    keys: ['FZ'],
    group: 'Каркас',
    name: 'tb51',
  },
  tb52: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>Свободный текст</span>]
      </span>
    ),
    keys: ['FKZ'],
    group: 'Каркас',
    name: 'tb52',
  },
  tb53: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Внести в Конституцию Российской Федерации, принятую всенародным голосованием 12 декабря 1993 года (Российская газета, 1993, 25 декабря) следующие изменения:
      </span>
    ),
    keys: ['ZakonRFoPravkah'],
    group: 'Изменяющие положения',
    name: 'tb53',
  },
  tb54: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Внести в Федеральный конституционный закон от [<span style={{ color: 'blue' }}>дата</span>] года [<span style={{ color: 'blue' }}>номер</span>]-ФЗ [<span style={{ color: 'blue' }}>название закона</span>], (в редакции [<span style={{ color: 'blue' }}>название закона</span>] от [<span style={{ color: 'blue' }}>дата</span>] года [<span style={{ color: 'blue' }}>номер</span>]-ФЗ (не обязательно)) следующие изменения:
      </span>
    ),
    keys: ['FKZ'],
    group: 'Изменяющие положения',
    name: 'tb54',
  },
  tb55: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Внести в Федеральный закон от [<span style={{ color: 'blue' }}>дата</span>] года [<span style={{ color: 'blue' }}>номер</span>]-ФЗ [<span style={{ color: 'blue' }}>название закона</span>], (в редакции [<span style={{ color: 'blue' }}>название закона</span>] от [<span style={{ color: 'blue' }}>дата</span>] года [<span style={{ color: 'blue' }}>номер</span>]-ФЗ (не обязательно)) следующие изменения:
      </span>
    ),
    keys: ['FZ'],
    group: 'Изменяющие положения',
    name: 'tb55',
  },
  tb56: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        В статье [<span style={{ color: 'blue' }}>№</span>] Часть [<span style={{ color: 'blue' }}>№</span>] Пункт [<span style={{ color: 'blue' }}>№</span>] дополнить Подпунктом [<span style={{ color: 'blue' }}>№</span>], следующего содержания: «[<span style={{ color: 'blue' }}>текст</span>]»
      </span>
    ),
    keys: ['ZakonRFoPravkah', 'FKZ', 'FZ'],
    group: 'Изменяющие положения',
    name: 'tb56',
  },
  tb57: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        В статье [<span style={{ color: 'blue' }}>№</span>] Часть [<span style={{ color: 'blue' }}>№</span>] дополнить Пунктом [<span style={{ color: 'blue' }}>№</span>] следующего содержания: «[<span style={{ color: 'blue' }}>текст</span>]»
      </span>
    ),
    keys: ['ZakonRFoPravkah', 'FKZ', 'FZ'],
    group: 'Изменяющие положения',
    name: 'tb57',
  },
  tb58: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        В статье [<span style={{ color: 'blue' }}>№</span>] дополнить Частью  [<span style={{ color: 'blue' }}>№</span>] следующего содержания: «[<span style={{ color: 'blue' }}>текст</span>]»
      </span>
    ),
    keys: ['ZakonRFoPravkah', 'FKZ', 'FZ'],
    group: 'Изменяющие положения',
    name: 'tb58',
  },
  tb59: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Преамбулу изложить в следующей редакции: «[<span style={{ color: 'blue' }}>текст</span>]»
      </span>
    ),
    keys: ['ZakonRFoPravkah', 'FKZ', 'FZ'],
    group: 'Изменяющие положения',
    name: 'tb59',
  },
  tb60: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Статью [<span style={{ color: 'blue' }}>№</span>] изложить в следующей редакции: «[<span style={{ color: 'blue' }}>текст</span>]»
      </span>
    ),
    keys: ['ZakonRFoPravkah', 'FKZ', 'FZ'],
    group: 'Изменяющие положения',
    name: 'tb60',
  },
  tb61: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Статью [<span style={{ color: 'blue' }}>№</span>] Часть [<span style={{ color: 'blue' }}>№</span>] изложить в следующей редакции: «[<span style={{ color: 'blue' }}>текст</span>]»
      </span>
    ),
    keys: ['ZakonRFoPravkah', 'FKZ', 'FZ'],
    group: 'Изменяющие положения',
    name: 'tb61',
  },
  tb62: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Статью [<span style={{ color: 'blue' }}>№</span>] Часть [<span style={{ color: 'blue' }}>№</span>] Пункт [<span style={{ color: 'blue' }}>№</span>] изложить в следующей редакции: «[<span style={{ color: 'blue' }}>текст</span>]»
      </span>
    ),
    keys: ['ZakonRFoPravkah', 'FKZ', 'FZ'],
    group: 'Изменяющие положения',
    name: 'tb62',
  },
  tb63: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Статью [<span style={{ color: 'blue' }}>№</span>] Часть [<span style={{ color: 'blue' }}>№</span>] Пункт [<span style={{ color: 'blue' }}>№</span>] Подпункт [<span style={{ color: 'blue' }}>№</span>] изложить в следующей редакции: «[<span style={{ color: 'blue' }}>текст</span>]»
      </span>
    ),
    keys: ['ZakonRFoPravkah', 'FKZ', 'FZ'],
    group: 'Изменяющие положения',
    name: 'tb63',
  },
  tb64: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Признать утратившим силу Федеральный закон от [<span style={{ color: 'blue' }}>дата</span>] года [<span style={{ color: 'blue' }}>номер</span>]-ФЗ [<span style={{ color: 'blue' }}>название закона (ссылка на официальный источник опубликования)</span>]
      </span>
    ),
    keys: ['FZ'],
    group: 'Положения об утрате силы',
    name: 'tb64',
  },
  tb65: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Признать утратившим силу [<span style={{ color: 'blue' }}>ссылка на норму</span>] Федерального закона от [<span style={{ color: 'blue' }}>дата</span>] года [<span style={{ color: 'blue' }}>номер</span>]-ФЗ [<span style={{ color: 'blue' }}>название закона (ссылка на официальный источник опубликования)</span>]
      </span>
    ),
    keys: ['FZ'],
    group: 'Положения об утрате силы',
    name: 'tb65',
  },
  tb66: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>НАИМЕНОВАНИЕ ОРГАНА ПРИНЯТИЯ ДОКУМЕНТА</span>]
      </span>
    ),
    keys: ['PrikazFoiv'],
    group: 'Реквизиты НПА',
    name: 'tb66',
  },
  tb67: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящее постановление вступает в силу со дня вступления в силу с [<span style={{ color: 'blue' }}>дата</span>]
      </span>
    ),
    keys: ['PrikazFoiv'],
    group: 'Положения о вступлении в силу',
    name: 'tb67',
  },
  tb68: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящий приказ вступает в силу по истечении [<span style={{ color: 'blue' }}>срок</span>] с дня его официального опубликования
      </span>
    ),
    keys: ['PrikazFoiv'],
    group: 'Положения о вступлении в силу',
    name: 'tb68',
  },
  tb69: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>название должности руководителя органа принятия документа</span>]
      </span>
    ),
    keys: ['PrikazFoiv'],
    group: 'Реквизиты НПА',
    name: 'tb69',
  },
  tb70: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>ФИО руководителя органа принятия документа</span>]
      </span>
    ),
    keys: ['PrikazFoiv'],
    group: 'Реквизиты НПА',
    name: 'tb70',
  },
  tb71: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящее распоряжение вступает в силу с [<span style={{ color: 'blue' }}>дата</span>] г.
      </span>
    ),
    keys: ['RasporyazheniePresidenta', 'RasporyazheniePravitelstva'],
    group: 'Положения о вступлении в силу',
    name: 'tb71',
  },
  tb72: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящее распоряжение распространяется на правоотношения, возникшие с [<span style={{ color: 'blue' }}>дата</span>] г.
      </span>
    ),
    keys: ['RasporyazheniePravitelstva'],
    group: 'Положения о вступлении в силу',
    name: 'tb72',
  },
  tb73: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящее распоряжение вступает в силу со дня вступления в силу [<span style={{ color: 'blue' }}>название, дата, номер НПА и/или ссылка на конкретную норму</span>]
      </span>
    ),
    keys: ['RasporyazheniePravitelstva'],
    group: 'Положения о вступлении в силу',
    name: 'tb73',
  },
  tb74: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящее распоряжение вступает в силу с [<span style={{ color: 'blue' }}>дата</span>] г., за исключением (<span style={{ color: 'blue' }}>ссылка на конкретную норму</span>), вступающих(…) в силу со дня официального опубликования настоящего распоряжения.
      </span>
    ),
    keys: ['RasporyazheniePravitelstva'],
    group: 'Положения о вступлении в силу',
    name: 'tb74',
  },
  tb75: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящее распоряжение вступает в силу со дня официального опубликования, за исключением (<span style={{ color: 'blue' }}>ссылка на конкретную норму</span>), которые(…) вступают в силу с [<span style={{ color: 'blue' }}>дата</span>] г.
      </span>
    ),
    keys: ['RasporyazheniePravitelstva'],
    group: 'Положения о вступлении в силу',
    name: 'tb75',
  },
  tb76: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящее распоряжение вступает в силу со дня официального опубликования, за исключением (<span style={{ color: 'blue' }}>ссылка на конкретную норму</span>), вступающие(…) в силу  с [<span style={{ color: 'blue' }}>дата</span>] г.
      </span>
    ),
    keys: ['RasporyazheniePravitelstva'],
    group: 'Положения о вступлении в силу',
    name: 'tb76',
  },
  tb77: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Признать утратившим силу Федеральный конституционный закон от [<span style={{ color: 'blue' }}>дата</span>] года [<span style={{ color: 'blue' }}>номер</span>]-ФКЗ [<span style={{ color: 'blue' }}>название закона (ссылка на официальный источник опубликования)</span>]
      </span>
    ),
    keys: ['FKZ'],
    group: 'Положения об утрате силы',
    name: 'tb77',
  },
  tb78: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Признать утратившим силу [<span style={{ color: 'blue' }}>ссылка на норму</span>] Федерального конституционного закона от [<span style={{ color: 'blue' }}>дата</span>] года [<span style={{ color: 'blue' }}>номер</span>]-ФКЗ [<span style={{ color: 'blue' }}>название закона (ссылка на официальный источник опубликования)</span>]
      </span>
    ),
    keys: ['FKZ'],
    group: 'Положения об утрате силы',
    name: 'tb78',
  },
  tb79: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Признать утратившим силу [<span style={{ color: 'blue' }}>ссылка на норму</span>] Конституцию Российской Федерации, принятую всенародным голосованием 12 декабря 1993 года (Российская газета, 1993, 25 декабря)
      </span>
    ),
    keys: ['ZakonRFoPravkah'],
    group: 'Положения об утрате силы',
    name: 'tb79',
  },
  tb80: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящий Федеральный конституционный закон вступает в силу по истечении [<span style={{ color: 'blue' }}>срок</span>] после дня его официального опубликования
      </span>
    ),
    keys: ['FKZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb80',
  },
  tb81: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящий Федеральный конституционный закон вступает в силу по истечении [<span style={{ color: 'blue' }}>срок</span>] после дня его официального опубликования, за исключением [<span style={{ color: 'blue' }}>ссылка на норму</span>] настоящего Федерального конституционного закона
      </span>
    ),
    keys: ['FKZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb81',
  },
  tb82: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящий Федеральный конституционный закон вступает в силу с [<span style={{ color: 'blue' }}>дата</span>]
      </span>
    ),
    keys: ['FKZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb82',
  },
  tb83: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящий Федеральный конституционный закон вступает в силу с [<span style={{ color: 'blue' }}>дата</span>], за исключением [<span style={{ color: 'blue' }}>ссылка на норму</span>] настоящего Федерального конституционного закона
      </span>
    ),
    keys: ['FKZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb83',
  },
  tb84: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящий Федеральный конституционный закон вступает в силу <span style={{ color: 'blue' }}>со дня его официального опубликования</span>
      </span>
    ),
    keys: ['FKZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb84',
  },
  tb85: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящий Федеральный конституционный закон вступает в силу <span style={{ color: 'blue' }}>со дня его официального опубликования</span>, за исключением [<span style={{ color: 'blue' }}>ссылка на норму</span>] настоящего Федерального конституционного закона
      </span>
    ),
    keys: ['FKZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb85',
  },
  tb86: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>ссылка на норму</span>] настоящего Федерального конституционный закона вступает в силу по истечении [<span style={{ color: 'blue' }}>срок</span>] после дня его официального опубликования
      </span>
    ),
    keys: ['FKZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb86',
  },
  tb87: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>ссылка на норму</span>] настоящего Федерального конституционного закона вступает в силу с [<span style={{ color: 'blue' }}>дата</span>]
      </span>
    ),
    keys: ['FKZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb87',
  },
  tb88: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>ссылка на норму</span>] настоящего Федерального конституционного закона вступает в силу со дня его официального опубликования
      </span>
    ),
    keys: ['FKZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb88',
  },
  tb89: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящий Федеральный закон вступает в силу по истечении [<span style={{ color: 'blue' }}>срок</span>] после дня его официального опубликования
      </span>
    ),
    keys: ['FZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb89',
  },
  tb90: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящий Федеральный закон вступает в силу по истечении [<span style={{ color: 'blue' }}>срок</span>] после дня его официального опубликования, за исключением [<span style={{ color: 'blue' }}>ссылка на норму</span>] настоящего Федерального закона
      </span>
    ),
    keys: ['FZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb90',
  },
  tb91: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящий Федеральный закон вступает в силу с [<span style={{ color: 'blue' }}>дата</span>]
      </span>
    ),
    keys: ['FZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb91',
  },
  tb92: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящий Федеральный закон вступает в силу с [<span style={{ color: 'blue' }}>дата</span>], за исключением [<span style={{ color: 'blue' }}>ссылка на норму</span>] настоящего Федерального закона
      </span>
    ),
    keys: ['FZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb92',
  },
  tb93: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящий Федеральный закон вступает в силу <span style={{ color: 'blue' }}>со дня его официального опубликования</span>
      </span>
    ),
    keys: ['FZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb93',
  },
  tb94: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящий Федеральный закон вступает в силу <span style={{ color: 'blue' }}>со дня его официального опубликования</span>, за исключением [<span style={{ color: 'blue' }}>ссылка на норму</span>] настоящего Федерального закона
      </span>
    ),
    keys: ['FZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb94',
  },
  tb95: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>ссылка на норму</span>] настоящего Федерального закона вступает в силу по истечении [<span style={{ color: 'blue' }}>срок</span>] после дня его официального опубликования
      </span>
    ),
    keys: ['FZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb95',
  },
  tb96: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>ссылка на норму</span>] настоящего Федерального закона вступает в силу с [<span style={{ color: 'blue' }}>дата</span>]
      </span>
    ),
    keys: ['FZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb96',
  },
  tb97: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>ссылка на норму</span>] настоящего Федерального закона вступает в силу со дня его официального опубликования
      </span>
    ),
    keys: ['FZ'],
    group: 'Положения о вступлении в силу',
    name: 'tb97',
  },
  tb98: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящий Закон Российской Федерации о поправке к Конституции Российской Федерации вступает в силу со дня его официального опубликования после одобрения органами законодательной власти не менее чем двух третей субъектов Российской Федерации.
      </span>
    ),
    keys: ['ZakonRFoPravkah'],
    group: 'Положения о вступлении в силу',
    name: 'tb98',
  },
  // tb99: {
  //   node: (
  //     <span style={{ fontFamily: 'Times New Roman' }}>
  //       Дополнить пунктом [<span style={{ color: 'blue' }}>№</span>] следующего содержания:
  //     </span>
  //   ),
  //   keys: ['Pravitelstvo'],
  //   group: 'Положения об утрате силы',
  //   name: 'tb99',
  // },
  tb100: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Утвердить прилагаемые изменения которые вносятся в [<span style={{ color: 'blue' }}>название, дата, номер НПА</span>]
      </span>
    ),
    keys: [
      'ZakonRFoPravkah', 'FKZ', 'FZ', 'UkazPresidenta',
      'RasporyazheniePresidenta', 'Pravitelstvo', 'RasporyazheniePravitelstva', 'PrikazFoiv',
    ],
    group: 'Изменяющие положения',
    name: 'tb100',
  },
  tb101: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        В пункте [<span style={{ color: 'blue' }}>№</span>] слова «[<span style={{ color: 'blue' }}>текст</span>]» заменить словами «[<span style={{ color: 'blue' }}>текст</span>]»
      </span>
    ),
    keys: [
      'ZakonRFoPravkah', 'FKZ', 'FZ', 'UkazPresidenta',
      'RasporyazheniePresidenta', 'Pravitelstvo', 'RasporyazheniePravitelstva', 'PrikazFoiv',
    ],
    group: 'Изменяющие положения',
    name: 'tb101',
  },
  tb102: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Дополнить пунктом [<span style={{ color: 'blue' }}>№</span>] следующего содержания:
      </span>
    ),
    keys: [
      'ZakonRFoPravkah', 'FKZ', 'FZ', 'UkazPresidenta',
      'RasporyazheniePresidenta', 'Pravitelstvo', 'RasporyazheniePravitelstva', 'PrikazFoiv',
    ],
    group: 'Изменяющие положения',
    name: 'tb102',
  },
  tb103: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        [<span style={{ color: 'blue' }}>Свободный текст</span>]
      </span>
    ),
    keys: ['Pravitelstvo'],
    group: 'Постановочно-распорядительная часть',
    name: 'tb103',
  },
  tb104: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящее постановление вступает в силу со дня его официального опубликования
      </span>
    ),
    keys: [
      'Pravitelstvo',
    ],
    group: 'Изменяющие положения',
    name: 'tb104',
  },
  tb105: {
    node: (
      <span style={{ fontFamily: 'Times New Roman' }}>
        Настоящее постановление вступает в силу со дня его официального опубликования, за исключением [<span style={{ color: 'blue' }}>пункта(ов)</span>]
      </span>
    ),
    keys: [
      'Pravitelstvo',
    ],
    group: 'Изменяющие положения',
    name: 'tb105',
  },
}
