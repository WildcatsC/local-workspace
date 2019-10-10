App({
    onLaunch(options) {
        console.log('initialize')
        console.log(options)
    },
    onShow(options) {
        console.log('show')
        console.log(options)
    },
    onHide() {
        console.log('hide')
    },
    onError(error) {
        console.log(error)
    },

    globalData: {
        greeting: 'yo fucker'
    }
})