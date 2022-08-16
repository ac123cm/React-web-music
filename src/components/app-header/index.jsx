import React, { memo, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '@/pages/discover/c-pages/recommend/store/reducer'

import { headerLinks } from '@/common/local-data.js'

import { Input, Modal, Button, Checkbox, Form } from 'antd'
import { SearchOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import UserAvatar from '../user-avatar'

import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'

const Header = memo(() => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const { userInfo } = useSelector(state => ({
    userInfo: state.recommend.userInfo
  }))
  const dispatch = useDispatch()

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onFinish = values => {
    // console.log('Received values of form: ', values)
    setPhone(values.phone)
    setPassword(values.password)
  }
  useEffect(() => {
    if (phone !== '' && password !== '') {
      dispatch(login({ phone, password })).then(res => {
        if (res.type === 'recommend/login/fulfilled') {
          console.log('login success')
          setIsModalVisible(false)
        }
      })
    }
  }, [dispatch, phone, password])

  // 页面代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className='sprite_01 icon'></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <a href='#/' className='logo sprite_01'>
            网易云音乐
          </a>
          <div className='select-list'>
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className='select-item'>
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className='search'
            placeholder='音乐/视频/电台/用户'
            prefix={<SearchOutlined />}
          />
          <div className='center'>创作者中心</div>
          {userInfo ? <UserAvatar /> : <div onClick={showModal}>登录</div>}
        </HeaderRight>
      </div>
      <div className='divider'></div>
      {/* 登录框 */}
      <Modal
        title='手机号登录'
        centered
        visible={isModalVisible}
        maskClosable={false}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[<a key='link'>&gt; 没有账号?免费注册</a>]}
      >
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name='phone'
            rules={[
              {
                required: true,
                message: '请输入手机号'
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='手机号'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: '请输入密码'
              }
            ]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='密码'
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>自动登录</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              block
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </HeaderWrapper>
  )
})

export default Header
