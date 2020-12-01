export default {
  pages: [
    'pages/community/index',
    'pages/userInfo/index',
    'pages/detail/index',
    'pages/settingCenter/index',
    'pages/helpInfo/index',
    'pages/editor/index',
    'pages/services/index',
    'pages/communication/index',
    'pages/mine/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '留学圈',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [{
      'iconPath': './icons/iconfont/icon-home page.png',
      'selectedIconPath': './icons/iconfont/icon-home page.png',
      pagePath: 'pages/community/index',
      text: '社区'
    }, {
      'iconPath': './icons/iconfont/icon-Dimension management.png',
      'selectedIconPath': './icons/iconfont/icon-Dimension management.png',
      pagePath: 'pages/services/index',
      text: '服务'
    }, {
      'iconPath': './icons/iconfont/community.png',
      'selectedIconPath': './icons/iconfont/community.png',
      pagePath: 'pages/communication/index',
      text: '消息'
    },
    {
      'iconPath': './icons/iconfont/icon-Chart.png',
      'selectedIconPath': './icons/iconfont/icon-Chart.png',
      pagePath: 'pages/mine/index',
      text: '我的'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white',
  },
}
