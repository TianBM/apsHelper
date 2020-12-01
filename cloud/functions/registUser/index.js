// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {


  // const db = cloud.database()
  // const promise = db.collection('user').add({
  //   data:{

  //   }
  // })
  
  // return( await promise.then(res=>{return res}) )

  return( event )
}