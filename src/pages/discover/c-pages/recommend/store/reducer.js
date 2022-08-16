import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopLists,
  phoneLogin
} from '@/services/recommend'

// 创建reducer的切片
const recommendSlice = createSlice({
  name: 'recommend', // 生成action的type
  initialState: {
    userInfo: '',
    topBanner: [],
    hotRecommend: [],
    newAlbum: [],
    topList: []
  },
  reducers: {
    // 指定state的各种操作，直接在对象中添加方法
  },
  extraReducers: builder => {
    // 在此处为其他 action type 添加 reducers
    builder
      .addCase(getTopBanner.fulfilled, (state, action) => {
        state.topBanner = action.payload.banners
      })
      .addCase(getHotRecommend.fulfilled, (state, action) => {
        state.hotRecommend = action.payload.result
      })
      .addCase(getNewAlbum.fulfilled, (state, action) => {
        state.newAlbum = action.payload.albums
      })
      .addCase(getTopList.fulfilled, (state, action) => {
        state.topList = action.payload.list
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userInfo = action.payload
      })
  }
})
// 创建 thunk
export const getTopBanner = createAsyncThunk(
  'recommend/getTopBanner',
  async (params, thunkApi) => {
    const response = await getTopBanners()
    return response.data
  }
)

export const getHotRecommend = createAsyncThunk(
  'recommend/getHotRecommend',
  async (params, thunkApi) => {
    const res = await getHotRecommends(params)
    return res.data
  }
)

export const getNewAlbum = createAsyncThunk(
  'recommend/getNewAlbum',
  async (params, thunkApi) => {
    const res = await getNewAlbums()
    return res.data
  }
)

export const getTopList = createAsyncThunk(
  'recommend/getTopList',
  async (params, thunkApi) => {
    const res = await getTopLists()
    return res.data
  }
)

export const login = createAsyncThunk(
  'recommend/login',
  async (params, thunkApi) => {
    const res = await phoneLogin(params.phone, params.password)
    return res.data
  }
)

// export const {  } = recommendSlice.actions
export default recommendSlice.reducer
