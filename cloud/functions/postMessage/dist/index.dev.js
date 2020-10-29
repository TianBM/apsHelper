"use strict";

// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”
var cloud = require('wx-server-sdk'); // 初始化 cloud


cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
});
/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */

exports.main = function _callee(event, context) {
  var userInfo, author, authorAvater, action, time, location, tags, content, db;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userInfo = event.userInfo, author = event.author, authorAvater = event.authorAvater, action = event.action, time = event.time, location = event.location, tags = event.tags, content = event.content;
          db = cloud.database();
          db.collection('test').add({
            data: {
              author: author,
              authorAvater: authorAvater,
              action: action,
              time: time,
              location: location,
              tags: tags,
              content: content
            },
            success: function success(res) {
              console.log(res);
              return {
                res: res
              };
            }
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};