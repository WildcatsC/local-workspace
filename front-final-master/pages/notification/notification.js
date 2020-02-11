var API_URL = "";

Page({
  data: {
    notifications:[]
  },

  onLoad:function(){
    var that = this;
    wx.request({
      url: this.globalData.baseurl+"/view-my-pending-applications", //缺少消息的URL
      data:{}, 
      header:{
        'content-type': 'application/json'
      },
      success:function(res){
        
        console.log(res.data); 
        that.setData({
          notifications: res.data
        });

      }
    })
  }
});