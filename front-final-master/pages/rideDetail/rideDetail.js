const app = getApp()

Page({
  data: {
    motto: 'Hello Mira',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    this.setData({
      ride_id:options.ride_id
    })
    var baseUrl = this.globalData.baseurl
    var user_id = app.globalData.userID
    var ride_id = this.data.ride_id
    var URL = `${baseUrl}/view-ride?user_id=${user_id}&ride_id=${ride_id}`
    var that = this
    wx.request({
      url: URL,
      success: function(res){
        that.setData({
          ride: res.data
        })
      }
    })
    
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  setDisabled: function(){
    wx.navigateTo({
      url: '../newApplication/newApplication?ride='+ this.data.ride_id,
    })
  }
})