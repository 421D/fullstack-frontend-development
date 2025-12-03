Page({
  data: {
    fileTypeList: [
      { type: 'pdf', title: 'pdf类型' },
      { type: 'word', title: 'word类型' },
      { type: 'excel', title: 'excel类型' },
      { type: 'ppt', title: 'ppt类型' }
    ],
  },
  downloadFile: function (event) {
    var type = event.currentTarget.dataset.type,
      url = 'https://coding.net/u/airbreak/p/wx_app_files/git/raw/master/top10.';
    switch (type) {
      case "pdf":
        url += 'pdf';
        break;
      case "word":
        url += 'docx';
        break;
      case "excel":
        url += 'xlsx';
        break;
      default:
        url += 'pptx';
        break;
    }
    wx.downloadFile({
      url: url,
      success: function (res) {
        var filePath = res.tempFilePath;
        console.log(filePath);
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          },
          fail: function (res) {
            console.log(res)
          }, complete: function (res) {
            console.log(res);
          }
        })
      },
      fail: function () {
        console.log('下载失败');
      }
    })
  },
});