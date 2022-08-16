import React from 'react'
import { Navigate } from 'react-router-dom'

import Discover from '@/pages/discover'
import Recommend from '@/pages/discover/c-pages/recommend'
import Ranking from '@/pages/discover/c-pages/ranking'
import Songs from '@/pages/discover/c-pages/songs'
import Album from '@/pages/discover/c-pages/album'
import Artist from '@/pages/discover/c-pages/artist'
import Djradio from '@/pages/discover/c-pages/djradio'

import Friend from '@/pages/friend'
import Mine from '@/pages/mine'

const routes = [
  {
    path: '/',
    element: <Navigate to='/discover' /> // 重定向
  },
  {
    path: '/discover/*',
    element: <Discover />,
    children: [
      {
        path: '',
        element: <Navigate to="recommend" /> // 重定向
      },
      {
        path: 'recommend', // 推荐
        element: <Recommend />
      },
      {
        path: 'ranking', // 排行榜
        element: <Ranking />
      },
      {
        path: 'songs', // 歌单
        element: <Songs />
      },
      {
        path: 'Djradio', // 主播电台
        element: <Djradio />
      },
      {
        path: 'Artist', // 歌手
        element: <Artist />
      },
      {
        path: 'album', // 新碟上架
        element: <Album />
      }
    ]
  },
  {
    path: '/friend',
    element: <Friend />
  },
  {
    path: '/mine',
    element: <Mine />
  }
]

export default routes
