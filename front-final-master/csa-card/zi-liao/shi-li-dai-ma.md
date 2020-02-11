# 云数据库示例代码

向数据库内添加数据

## index.wxml

```markup
<button bindtap="viewDB">CLICK</button>
```

## index.js

```javascript
Page({
  viewDB: function() {
    wx.cloud.init({
      env: 'test-esbju'
    })
    const db = wx.cloud.database()
    db.collection('co').add({
        data: {
          w: 1
        },
        success: console.log,
        fail: console.log,
    })
  } 
})
```



