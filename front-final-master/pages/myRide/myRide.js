 // pages/myRide/myRide.js
const app = getApp()
console.log(app)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    console.log(app.globalData.userID)
    var baseUrl = this.globalData.baseurl
    var user_id = app.globalData.userID
    var URL = `${baseUrl}/view-my-rides?user_id=${user_id}`
    wx.request({
      // url: "http://13.56.241.40:3077/ride_list? +user_ID" + app.globalData.userID ,
      url: URL,
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          response: res.data.result
        })
      }
    })
  },

  onChange(event){
    wx.navigateTo({
      url: '../notification/notification'
    })
  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})