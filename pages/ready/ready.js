// pages/2.1_ready/2.1_ready.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    listCon: [
      { 'id': 0, 'hidden': true },
    ],
    listCon1: [
      { 'id': 0, 'hidden': true },
    ],
    listCon2: [
      { 'id': 0, 'hidden': true },
      { 'id': 1, 'hidden': true }
    ],
    listCon3: [
      { 'id': 0, 'hidden': true,name:'yidai' },
      { 'id': 1, 'hidden': true, name: 'liu' },
      { 'id': 2, 'hidden': true, name: 'yidai' },
      { 'id': 3, 'hidden': true, name: 'haha' },
      { 'id': 4, 'hidden': true, name: 'yidai'}
    ]
  },
  /**
     * 弹窗
     */
  showDialogBtn: function () {
    this.setData({
      showModal: true
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  },
  hiddenBtnCon: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    that.data.listCon[index].hidden = !that.data.listCon[index].hidden;
    that.setData({
      listCon: that.data.listCon
    })
  },
  hiddenBtnCon1: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    that.data.listCon1[index].hidden = !that.data.listCon1[index].hidden;
    that.setData({
      listCon1: that.data.listCon1
    })
  },
  hiddenBtnCon2: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    that.data.listCon2[index].hidden = !that.data.listCon2[index].hidden;
    that.setData({
      listCon2: that.data.listCon2
    })
  },
  hiddenBtnCon3: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    that.data.listCon3[index].hidden = !that.data.listCon3[index].hidden;
    that.setData({
      listCon3: that.data.listCon3
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  next: function () {
    if (this.data.i != this.data.vidioUrl.length - 1) {
      this.setData({
        i: this.data.i + 1,
        flags: true,
        flagp: false
      })
    }
    else {
      this.setData({
        i: 0,
        flags: true,
        flagp: false
      })
    }
    this.audioContext.pause();
    this.audioContext.seek(0);
    this.audioContext.play();
    console.log(this.data.i + "下标")
  }
})