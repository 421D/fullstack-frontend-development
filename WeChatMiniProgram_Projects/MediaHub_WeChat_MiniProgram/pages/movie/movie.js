// pages/movie/movie.js
var g_app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inThearters: {},
    comingsoon: {},
    top250: {},
    containerShow: true,
    searchPanelShow: false,
    searchResult: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var inthearterUrl = g_app.globalData.doubanBase + "in_theaters?start=0&count=3"
    var comingsoonUrl = g_app.globalData.doubanBase + "coming_soon?start=0&count=3"
    var top250Url = g_app.globalData.doubanBase + "top250?start=0&count=3"

    this.getMovieListData(inthearterUrl, "正在热映", "inTheaters");
    this.getMovieListData(comingsoonUrl, "即将上映", "comingsoon");
    this.getMovieListData(top250Url, "豆瓣Top250", "top250");
  },
  getMovieListData: function(url, categorytitle, settedKey) {
    var that = this;
    wx.request({
      url: url,
      method: "GET",
      header: {
        "content-type": "application/xml"
      },
      success: function(res) {
        that.processDoubanData(res.data, categorytitle, settedKey);
      },
      fail: function(res) {

      },
      complete: function(res) {

      },
    })
  },



  processDoubanData: function(moviesDouban, categorytitle, settedkey) {

    var movies = [];
    for (var idx in moviesDouban.subjects) {
      var subject = moviesDouban.subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
        //  title.substring(0,6)+"..."
      }
      var temp = {
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id
      }
      movies.push(temp);
    }

    var readyData = {};
    readyData[settedkey] = {
      movies: movies,
      categorytitle: categorytitle
    };
    this.setData(readyData);

  },


  getJuheMovieListData: function (url, categorytitle, settedKey) {
    var that = this;
    wx.request({
      url: url,
      method: "GET",
      header: {
        "content-type": "application/xml"
      },
      success: function (res) {
        that.processjuheData(res.data, categorytitle, settedKey);
      },
      fail: function (res) {

      },
      complete: function (res) {

      },
    })
  },



  processjuheData: function (moviesDouban, categorytitle, settedkey) {

    var movies = [];
    for (var idx in moviesDouban.result) {
      var results = moviesDouban.result[idx];
      var title = results.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
        //  title.substring(0,6)+"..."
      }
      var temp = {
        title: title,
        average: results.rating,
        coverageUrl: results.poster,
        movieId: results.movieid
      }
      movies.push(temp);
    }

    var readyData = {};
    readyData[settedkey] = {
      movies: movies,
      categorytitle: categorytitle
    };
    this.setData(readyData);

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  onBindFocus: function(event) {
    this.setData({
      containerShow: false,
      searchPanelShow: true
    })
  },
  onCancelImgTap: function(event) {
    this.setData({
      containerShow: true,
      searchPanelShow: false,
      searchResult: {},
      inputValue: ''
    })
  },
  onBindConfirm: function(event) {
    var keyWord = event.detail.value;
    var searchUrl = "http://v.juhe.cn/movie/index?key=c31253246fafd50564ede976d1e6c69d&title=" + keyWord;
    this.getJuheMovieListData(searchUrl, "", "searchResult");
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onMoreTap: function(event) {
    console.log(event)
    var category = event.currentTarget.dataset.categorytitle;
    console.log(category)
    wx.navigateTo({
      url: "more-movie/more-movie?category=" + category,
    })
  },
  onMovieTap:function(event){
    var movieId = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: "movie-detail/movie-detail?id="+movieId,
    })
  }

})