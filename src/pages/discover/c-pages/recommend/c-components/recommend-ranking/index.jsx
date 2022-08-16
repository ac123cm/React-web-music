import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTopList } from '../../store/reducer'

import ThemeHeader from '@/components/theme-header'
import TopRanking from '@/components/top-ranking'

import { RankingWrapper } from './style'

const RecommendRanking = memo(() => {
  const { topList } = useSelector(state => ({
    topList: state.recommend.topList
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopList())
  }, [dispatch])

  return (
    <RankingWrapper>
      <ThemeHeader title='榜单' />
      <div className='tops'>
        {topList.slice(0, 3).map(item => {
          return <TopRanking key={item.id} info={item} />
        })}
      </div>
    </RankingWrapper>
  )
})

export default RecommendRanking
