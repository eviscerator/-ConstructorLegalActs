import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ConfigProvider } from 'antd'
import ruRu from 'antd/es/locale/ru_RU'
import moment from 'moment'
import 'moment/locale/ru'
import 'antd/dist/antd.css'
import './index.scss'

moment.locale('ru')

ReactDOM.render(<ConfigProvider locale={ruRu}><App /></ConfigProvider>, document.getElementById('root'))
