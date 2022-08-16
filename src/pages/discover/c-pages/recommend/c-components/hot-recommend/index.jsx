import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getHotRecommend } from '../../store/reducer'
import ThemeHeader from '@/components/theme-header'
import SongsCover from '@/components/songs-cover'

import { HotRecommendWrapper } from './style'

const HotRecommend = memo(() => {
  const { hotRecommend } = useSelector(
    state => ({
      hotRecommend: state.recommend.hotRecommend
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // dispatch thunk
  useEffect(() => {
    dispatch(getHotRecommend(8))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeHeader
        title='热门推荐'
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
      <div className='recommend-list'>
        {hotRecommend.map((item, index) => {
          return <SongsCover key={item.id} info={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend
