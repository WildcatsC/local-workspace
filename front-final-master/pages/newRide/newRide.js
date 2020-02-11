//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    date: '',
    time: '',
    departure: '',
    destination: '',
    price: '',
    num: '',
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type == "year") {
        return `${value}年`;
      } else if (type == 'month') {
        return `${value}月`;
      } else if (type == "day") {
        return `${value}日`
      }
      return value;
    }, 
    columns: ["Santa Barbara", "San Francisco", "Los Angeles", "San Diego", "San Jose"],
    departure: "Santa Barbara",
    destination: "Santa Barbara",
    showDeparture: false,
    showDestination: false,
    showTimePicker: false,
    actions: [
      {
        name: "Santa Barbara"
      },
      {
        name: "San Francisco",
      },
      {
        name: "Los Angeles"

      },
      {
        name: "San Diego"

      },
      {
        name: "San Jose"
      }
    ]
  },
  //事件处理函数
  date: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  time: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  departure: function (e) {
    this.setData({
      departure: e.detail.value
    })
  },
  destination: function (e) {
    this.setData({
      destination: e.detail.value
    })
  },
  price: function (e) {
    this.setData({
      price: e.detail.value
    })
  },
  num: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  complete: function () {
    var people_nu=this.data.num
    var depar=this.data.departure
    var dest=this.data.destination
    var dat=this.data.date
    var tim=this.data.time
    var pri=this.data.price

    wx.request({
      url: this.globalData.baseurl+'/create-application',
      data:{
        //ride_id:'321',
        approved_people:people_nu,
        wechat_id:'xxx',
        note:'hahahaha',
        status:'pending',
        departure:depar,
        destination:dest,
        people_num:'5',
        date: dat,
        time:tim,
        price:pri


      },
      success:function(res){
        console.log(res.data[0]);
        wx.navigateTo({
          url: '../myRide/myRide' // 返回键去index页面
        }
        )
      }

    })
   // wx.navigateTo({
   //   url: '../myRide/myRide' // 返回键去index页面
   // }

   // )

  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  onInput(event) {

    var date = new Date(event.detail)
    var Y = date.getFullYear()
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();


    this.setData({
      year: Y,
      month: M,
      day: D
    })
  },
  onDepartureChange(event) {
    const { picker, value, index } = event.detail;
    this.setData({
      departure: value
    })
  },
  onDestinationChange(event) {
    const { picker, value, index } = event.detail;
    this.setData({
      destination: value
    })
  },
  onClick() {

    if (this.data.departure != this.data.destination) {
      wx.navigateTo({
        url: '../rideList/rideList?departure=' + this.data.departure + "&destination=" + this.data.destination + "&date=" + this.data.month + "/" + this.data.day + "/" + this.data.year,
      })
    } else {
      Toast("出发地和目的地不能相同")
    }
  },

  onCloseDeparture() {
    this.setData({
      showDeparture: false
    })
  },
  onCloseDestination() {
    this.setData({
      showDestination: false
    })
  },
  onCloseTimePicker() {
    this.setData({
      showTimePicker: false
    })
  },
  onSelect(event) {
    console.log(event.detail);
  },
  onClickDeparture() {
    this.setData({ showDeparture: !this.data.showDeparture });
  },
  onClickDestination() {
    this.setData({ showDestination: !this.data.showDestination });
  },
  onClickTimePicker() {
    this.setData({ showTimePicker: !this.data.showTimePicker });
  }
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})


