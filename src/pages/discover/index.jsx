import React, { memo } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

import { dicoverMenu } from '@/common/local-data.js'
import { DiscoverWrapper, TopMenu } from './style'

const Discover = memo(() => {
  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
          {dicoverMenu.map((item, index) => {
            return (
              <div className='item' key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      {/* 渲染子路由 */}
      <Outlet />
    </DiscoverWrapper>
  )
})

export default Discover
