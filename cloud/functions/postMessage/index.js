// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
exports.main = async (event, context) => {
  const { userInfo, author, authorAvater, action, time, location, tags, content, shottime} = event;
  
  const db = cloud.database()
  const promise = db.collection('test').add({
    data:{
      author:author,
      authorAvater:authorAvater,
      action:action,
      shottime:shottime,
      time:time,
      location:location,
      tags:tags,
      content:content,
      like:false,
      focus:false,
    }
  })
  
  return( await promise.then(res=>{return res}) )
}

