import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { PMain, PDocument } from './pages'
import { Provider } from 'react-redux'
import store from './store/store'
import Layout from './Layout'
import { ConfigProvider } from 'antd'
import ruRu from 'antd/es/locale/ru_RU'
import moment from 'moment'
import 'moment/locale/ru'
moment.locale('ru')

export default () => (
  <ConfigProvider locale={ruRu}>
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={PMain} />
            <Route exact path='/:id' component={PDocument} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  </ConfigProvider>
)