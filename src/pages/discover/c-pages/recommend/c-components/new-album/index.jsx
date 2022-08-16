import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewAlbum } from '../../store/reducer'

import { Carousel } from 'antd'
import ThemeHeader from '@/components/theme-header'
import AlbumCover from '@/components/album-cover'
import { AlbumWrapper } from './styles'

const NewAlbum = memo(() => {
  const { newAlbum } = useSelector(
    state => ({
      newAlbum: state.recommend.newAlbum
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  const pageRef = useRef()
  useEffect(() => {
    dispatch(getNewAlbum())
  }, [dispatch])

  return (
    <AlbumWrapper>
      <ThemeHeader title='新碟上架' />
      <div className='content'>
        <button
          className='arrow arrow-left sprite_02'
          onClick={e => pageRef.current.prev()}
        ></button>
        <div className='album'>
          <Carousel ref={pageRef}>
            {[0, 1].map(item => {
              return (
                <div key={item} className='page'>
                  {newAlbum.slice(item * 5, (item + 1) * 5).map(n => {
                    return (
                      <AlbumCover
                        key={n.id}
                        info={n}
                        size={100}
                        width={118}
                        bgp='-570px'
                      />
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className='arrow arrow-right sprite_02'
          onClick={e => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  )
})

export default NewAlbum
