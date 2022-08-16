import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { Avatar } from 'antd'

const UserAvatar = memo(() => {
  const { userInfo } = useSelector(state => ({
    userInfo: state.recommend.userInfo
  }))

  return <Avatar src={userInfo.profile.avatarUrl} />
})

export default UserAvatar
