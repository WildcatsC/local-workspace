

Page({
  data:{
    decision:{}

  },

  acceptFunc: function (e) {
    console.log("已接受");
    wx.request({
      url: this.globalData.baseurl + "/accept-application?user_id="+ String      (this.data.decision.ride_id),
      //parameters = id
      //method: 'PUT',
      data: {
        
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data[0]);
        wx.navigateTo({
          url: '../myRide/myRide',
        })
      }
    })
    
    
  },

  declineFunc: function (e) {
    console.log("已拒绝");
    
    wx.request({
      url: this.globalData.baseurl + "/deny-application?user_id=" + String        (this.data.decision.ride_id),
      //parameters = id
      //method: 'PUT',
      data:{
        //status:"declined"
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data[0]);
        wx.navigateTo({
          url: '../myRide/myRide',
        })
      }
    })
  },

  onLoad:function(parameters){
    var that = this;
    console.log(parameters);

    wx.request({
      url: this.globalData.baseurl + "/view-application?user_ID="+String       (parameters.id),
      //parameters = id
      data:{},
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        console.log(res);
        // that.setData({
        //   decision: res.data[0]
        // });
        // console.log(that.data.decision);
      }
    })

  }
});