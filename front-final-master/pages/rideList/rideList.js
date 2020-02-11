// pages/rideList/rideList.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    departure:'',
    destination:'',
    success:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      departure: options.departure,
      destination: options.destination,
      date: options.date
    })
    wx.request({
      // url: "http://13.56.241.40:3033/ridelist?departure="+that.data.departure+"&destination="+that.data.destination+"&date=" + this.data.date, 
      url: this.globalData.baseurl+"/view-rides",

      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res) {
        console.log(res.data)
        that.setData({
          response:res.data.result
        })
      },
      fail:function(res){
          that.setData({
            success:false,
            errMsg:"Oops, 无符合条件的搜索结果"
         })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})