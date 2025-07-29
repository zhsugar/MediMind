import { View, Text, Button, Image } from '@tarojs/components'
import { useLoad, redirectTo } from '@tarojs/taro'
import { useState } from 'react'
import './index.scss'

export default function Index () {
  const [count, setCount] = useState(0)

  useLoad(() => {
    console.log('MediMind小程序启动成功！')
  })

  const handleClick = () => {
    const newCount = count + 1
    setCount(newCount)
    // 在页面上显示计数，避免使用需要登录态的API
  }

  const navigateToDetail = () => {
    try {
      redirectTo({
        url: '/pages/detail/index'
      })
    } catch (error) {
      console.log('游客模式下跳转受限，请使用真机调试或登录开发者工具')
      // 在游客模式下，可以提示用户使用真机测试
    }
  }

  return (
    <View className='index'>
      <View className='header'>
        <Text className='title'>MediMind AI医诊助手</Text>
        <Text className='subtitle'>智能医疗诊断辅助小程序</Text>
      </View>

      <View className='content'>
        <Image
          className='logo'
          src='https://img.icons8.com/fluency/96/medical-doctor.png'
          mode='aspectFit'
        />

        <View className='demo-section'>
          <Text className='section-title'>功能测试</Text>
          <Text className='count-text'>点击次数：{count}</Text>
          {count > 0 && (
            <Text className='feedback-text'>✅ 已成功点击 {count} 次！</Text>
          )}
          <Button
            className='demo-btn'
            type='primary'
            onClick={handleClick}
          >
            点击测试
          </Button>

          <Button
            className='demo-btn'
            type='default'
            onClick={navigateToDetail}
          >
            跳转到详情页
          </Button>
        </View>
      </View>
    </View>
  )
}
