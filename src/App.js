import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { PMain, PDocument } from './pages'
import { Provider } from 'react-redux'
import store from './store/store'
import Layout from './Layout'
import React from 'react'

export default () => (
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
)
