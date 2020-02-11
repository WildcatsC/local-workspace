// pages/departure/departure.js
import Toast from '../../dist/toast/toast';



Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    currentDate: new Date().getTime(),
    minDate : new Date().getTime(),
    success: true,
    formatter(type, value){
      if(type == "year"){
        return `${value}年`;
      }else if(type == 'month'){
        return `${value}月`;
      }else if(type == "day"){
        return `${value}日`
      }
      return value;
    }, 
    columns: ["Santa Barbara", "San Francisco", "Los Angeles", "San Diego", "San Jose"],
    departure: "Santa Barbara",
    destination: "San Francisco",
    showDeparture: false,
    showDestination:false,
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
    // time: "选择时间"
  },

  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (options) {
  // }, 
  onInput(event) {
    
    var date = new Date(event.detail)
    var Y = date.getFullYear()
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    this.setData({
      year: Y,
      month: M,
      day: D ,
      time: Y + "年" + M + "月" + D + "日"
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
  onLoad: function () {
    var currentDate = new Date().getTime()
    // var Y = currentDate.getFullYear()
    // var M = currentDate.getMonth() + 1 < 10 ? '0' + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1
    // //日
    // var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    // this.setData({
    //   year: Y,
    //   month: M,
    //   day: D
    // })
    console.log(currentDate)
  },
  onSearch(){
    if(this.data.departure != this.data.destination){
      var that = this;
      var baseUrl = this.globalData.baseurl
      var departure = this.data.departure
      var destination = this.data.destination
      var year = this.data.year
      var month = this.data.month
      var day = this.data.day
      var URL = `${baseUrl}/view-rides?departure=${departure}&destination=${destination}&date=${month}/${day}/${year}`
      wx.request({
        // url: "http://13.56.241.40:3033/ridelist?departure="+that.data.departure+"&destination="+that.data.destination+"&date=" + this.data.date, 
        url: URL,
        data: {},
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            response: res.data.result
          })
        },
        fail: function (res) {
          that.setData({
            success: false,
            errMsg: "Oops, 无符合条件的搜索结果"
          })
        }
      })
    }else{
      Toast("出发地和目的地不能相同")
    }
  },
  onAddRide(){
    wx.navigateTo({
      url: '../newRide/newRide',
    })
  },
  onCloseDeparture(){
    this.setData({
      showDeparture:false
    })
  },
  onCloseDestination(){
    this.setData({
      showDestination:false
    })
  },
  onCloseTimePicker(){
    this.setData({
      showTimePicker: false
    })
  },
  onSelect(event) {
    console.log(event.detail);
  },
  onClickDeparture(){
    this.setData({showDeparture: !this.data.showDeparture});
  },
  onClickDestination() {
    this.setData({ showDestination: !this.data.showDestination });
  },
  onClickTimePicker(){
    this.setData({ showTimePicker: !this.data.showTimePicker});
  }
  ,
  onClickTimePicker(){
    this.setData({ showTimePicker: !this.data.showTimePicker});
  }
})