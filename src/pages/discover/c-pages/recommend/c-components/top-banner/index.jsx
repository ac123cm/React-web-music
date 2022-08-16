import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getTopBanner } from '../../store/reducer'

import { Carousel } from 'antd'
import { BannerWrapper, BannerControl, BannerLeft, BannerRight } from './style'

const TopBanner = memo(() => {
  // state
  const [currentIndex, setCurrentIndex] = useState(0)

  // 组件和redux关联：获取数据和进行操作
  // 使用useSelector提取state中的数据
  const { topBanner } = useSelector(
    state => ({
      topBanner: state.recommend.topBanner
    }),
    shallowEqual
  )
  // 使用useDispatch获取dispatch
  const dispatch = useDispatch()

  // hooks
  const bannerRef = useRef()

  useEffect(() => {
    dispatch(getTopBanner())
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  // 其他业务逻辑
  const bgImage =
    topBanner[currentIndex] &&
    topBanner[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel
            effect='fade'
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanner.map((item, index) => {
              return (
                <div className='banner-item' key={item.imageUrl}>
                  <img
                    className='image'
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className='btn left'
            onClick={() => bannerRef.current.prev()}
          ></button>
          <button
            className='btn right'
            onClick={() => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

export default TopBanner
