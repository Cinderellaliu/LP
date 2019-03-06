// pages/3.2study/3.2study.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    problemList:true,
    listCon: [
      { 'id': 0, 'hidden': true },
    ],
    listCon1: [
      { 'id': 0, 'hidden': true },
    ],
    showView: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    showView: (options.showView == "true" ? true : false)
  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  clickLine: function (e) {
    var id = e.currentTarget.id;
    console.log(id)
    var list = this.data.problemList;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      problemList: list
    });
  },
  // 方法二
  hiddenBtnCon: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    that.data.listCon[index].hidden = !that.data.listCon[index].hidden;
    that.setData({
      listCon: that.data.listCon,
      showView: (!that.data.showView)
    })
  },
  hiddenBtnCon1: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    that.data.listCon1[index].hidden = !that.data.listCon1[index].hidden;
    that.setData({
      listCon1: that.data.listCon1,
      showView: (!that.data.showView)
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
  
  }
})