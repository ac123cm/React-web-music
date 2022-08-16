import instance from './request'

/**
 * @description: 轮播图
 */
export function getTopBanners () {
  return instance({
    url: '/banner'
  })
}

/**
 * @description: 热门推荐
 * @param {*} limit
 */
export function getHotRecommends (limit) {
  return instance({
    url: '/personalized',
    params: {
      limit
    }
  })
}

/**
 * @description: 新碟上架
 * @param {*} limit 取出数量
 */
export function getNewAlbums () {
  return instance({
    url: '/album/newest'
  })
}

/**
 * @description: 所有榜单内容摘要
 */
export function getTopLists () {
  return instance({
    url: '/toplist/detail'
  })
}

/**
 * @description: 手机号登录 
 * @param {*} phone
 * @param {*} password
 */
export function phoneLogin (phone, password) {
  return instance({
    url: '/login/cellphone',
    params: {
      phone,
      password
    }
  })
}
