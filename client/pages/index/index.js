//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data:{
        studentName: '',
        studentId: '',
        studentProfession: '信息管理与信息系统',
        studentClass: ''
    },
    submit: function () {
      let that = this;
      console.log(config.service.upload)
      let options = {
        url: config.service.upload,
        data: that.data,
        success: function(result){
          util.showSuccess('请求成功完成')
          console.log('request success', result)
        },
        fail: function (e) {
          util.showModel('提交失败')
        }
      }
      qcloud.request(options)
    }
});