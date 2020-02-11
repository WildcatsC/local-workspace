Page({

  /**
   * 页面的初始数据
   */
  data: {
    pick: null,
    drop: null,
    people_num: null,
    wechat_id: null,
    note: null
  },

  pick: function (e) {
    this.setData({
      pick: e.detail.value
    })
     
  },

  drop: function (e) {
    this.setData({
      drop: e.detail.value
    })
  },
  people_num: function (e) {
    this.setData({
      people_num: e.detail.value
    })
  },

  wechat_id: function (e) {
    this.setData({
      wechat_id: e.detail.value
    })
  },

  note: function (e) {
    this.setData({
      note: e.detail.value
    })
  },
  
  // formSubmit: function (e) {
  //   console.log('form发生了submit事件，携带数据为：', e.detail.value)
  // },

  submit: function(e){
    wx.request({
      url: this.globalData.baseurl+"/create-ride", //这里缺少一个post的URL，无法上传数据
      method : "POST",
      data:{
        pick : this.data.pick,
        drop : this.data.drop,
        people_num : this.data.people_num,
        wechat_id : this.data.wechat_id,
        note : this.data.note,
        rideid: this.data.rideid
      },
      success(res){
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000,
        })
        wx.switchTab({
          url: '/pages/myRide/myRide',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    rideid: options.rideid
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