import wepy from 'wepy'

export default class wxCommon extends wepy.mixin{

    // 用户特有的请求头部token
  userRequest(url, method, data, cb) {
    const that = this
    wepy.request({
      url: that.url + url,
      method: method,
      data: data,
      header: {
        'Token': wepy.getStorageSync('token'),
        'Cookie': wepy.getStorageSync('cookie')
      }
    }).then((res) => {
      if (res.header['Set-Cookie'] != null) {
        wepy.setStorageSync('cookie', res.header['Set-Cookie'])
      }
      cb(res)
    })
  }

}