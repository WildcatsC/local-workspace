// pages/editUser/editUser.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatar_url: app.globalData.avatar_url,
    name: app.globalData.name,
    contact: app.globalData.contact,
    user_id: app.globalData.userID
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var $ = this;
    wx.request({
      url: this.globalData.baseurl + "/view-user?user_id=" + 202,//String(app.globalData.userID),
      method: 'get',
      success: function (res) {
        var avatar_url = res.data.avatar_url;
        var name = res.data.name;
        var contact = res.data.contact;

        app.globalData.avatar_url = avatar_url;
        app.globalData.name = name;
        app.globalData.contact = contact;

        $.setData({
          avatar_url: app.globalData.avatar_url,
          name: app.globalData.name,
          contact: app.globalData.contact
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

  },
  self: function () {
    wx.navigateTo({ url: '../../pages/editUser/editUser' });
  }
})