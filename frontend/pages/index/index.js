//index.js
const app = getApp()

Page({
  data: {
    americaLogoURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/250px-Flag_of_the_United_States.svg.png',
  },
  getAmericaGameDeals: function(e) {
    wx.navigateTo({
      url: '../AmericaGameDeals/AmericaGameDeals',
    })
  },
})
