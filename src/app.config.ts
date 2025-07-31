export default defineAppConfig({
  pages: [
    'pages/chat/index',
    'pages/profile/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'MediMind',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#B8E7BB',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/chat/index',
        text: '聊天',
        iconPath: './assets/chat.png',
        selectedIconPath: './assets/chat-active.png'
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        iconPath: './assets/profile.png',
        selectedIconPath: './assets/profile-active.png'
      }
    ]
  }
})
