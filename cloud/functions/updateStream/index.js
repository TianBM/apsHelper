// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const { userInfo } = event;
  const db = cloud.database();
  let result
  db.collection('test').get({
    success:res=>{
      console.log(res)
      result = res
    }
  })

  const promise = db.collection('test').get()

  return ( await promise.then(res=>{return res.data.reverse()}) )
}