import React, { memo } from 'react'

import { HashRouter, useRoutes } from 'react-router-dom'
import routes from '@/router'
import store from '@/store'
import { Provider } from 'react-redux'

import Footer from '@/components/app-footer'
import Header from '@/components/app-header'

// 渲染路由
const RouteElement = () => {
  const element = useRoutes(routes)
  return element
}

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header></Header>
        <RouteElement />
        <Footer></Footer>
      </HashRouter>
    </Provider>
  )
})

export default App
