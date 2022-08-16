import React, { memo } from 'react'

import TopBanner from './c-components/top-banner'
import HotRecommend from './c-components/hot-recommend'
import NewAlbum from './c-components/new-album'
import RecommendRanking from './c-components/recommend-ranking'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'

const Recommend = memo(() => {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

export default Recommend
