const app = getApp()


Page({
    onLoad() {
        console.log('页加loading')
    },
    onShow() {
        console.log('页面showing')
    },
    onReady() {
        console.log('页面首次渲染完成')
    },
    onHide() {
        console.log('页面hide')
    },
    onunload() {
        console.log('页面unload')
    }
})