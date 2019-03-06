// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic_array: [
      { id: 1, name: '请选择' },
      { id: 2, name: '1句' },
      { id: 3, name: '2句' },
      { id: 4, name: '3句' },
      { id: 5, name: '4句' },
      { id: 6, name: '5句' },
      { id: 7, name: '6句' },
      { id: 8, name: '7句' },
      { id: 9, name: '8句' },
      { id: 10, name: '9句' },
      { id: 11, name: '10句' },
      { id: 12, name: '11句' },
      { id: 13, name: '12句' },
      { id: 14, name: '13句' },
      { id: 15, name: '14句' },
      { id: 16, name: '15句' },
      { id: 17, name: '16句' },
      { id: 18, name: '17句' },
      { id: 19, name: '18句' },
      { id: 20, name: '19句' },
      { id: 21, name: '20句' },
      { id: 22, name: '21句' },
      { id: 23, name: '22句' },
      { id: 24, name: '23句' },
      { id: 25, name: '24句' },
      { id: 26, name: '25句' },
      { id: 27, name: '26句' },
      { id: 28, name: '27句' },
    ],
    hx_index: 0,
  },
  bindPickerChange_hx: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
      hx_index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
    })
    console.log('自定义值:', this.data.hx_select);
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