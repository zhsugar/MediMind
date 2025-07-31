import { View, Text } from '@tarojs/components'
import { switchTab } from '@tarojs/taro'
import './index.scss'

interface TabBarProps {
  current: string;
}

export default function TabBar({ current }: TabBarProps) {
  const tabs = [
    { title: '问诊', path: '/pages/chat/index' },
    { title: '档案', path: '/pages/profile/index' }
  ]

  const handleTabClick = (path: string) => {
    if (path !== current) {
      switchTab({ url: path })
    }
  }

  return (
    <View className='tab-bar'>
      {tabs.map(tab => (
        <View
          key={tab.path}
          className={`tab-item ${tab.path.includes(current) ? 'active' : ''}`}
          onClick={() => handleTabClick(tab.path)}
        >
          <View className='tab-icon'>{tab.icon}</View>
          <Text className='tab-title'>{tab.title}</Text>
        </View>
      ))}
    </View>
  )
}
