// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { 'id': 0, 'hidden': true },
      { 'id': 1, 'hidden': true },
      { 'id': 2, 'hidden': true },
    ],
    listCon: [
      { 'id': 0, 'hidden': true },
      { 'id': 1, 'hidden': true },
      { 'id': 2, 'hidden': true },
    ],
  },
  // 方法二
  hiddenBtnCon: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    that.data.listCon[index].hidden = !that.data.listCon[index].hidden;
    that.setData({
      listCon: that.data.listCon
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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