let app = getApp();

Page({
    data:{
        studentName: '',
        studentId: '',
        studentProfession: '信息管理与信息系统',
        studentClass: ''
    },
    submit: function () {
      wx.request({
        url: 'http://localhost:8080/',
        data:{
          studentName: studentName,
          studentId: studentId,
          studentProfession: studentProfession,
          studentClass: studentClass
        },
        header: {
          "Content-Type": "application/json"
        },
        success: function (res) {
          console.log(res.data)
        }
      })
    }
});