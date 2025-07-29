import { View, Text, Button } from '@tarojs/components'
import { useLoad, redirectTo } from '@tarojs/taro'
import './detail.scss'

export default function Detail() {
  useLoad(() => {
    console.log('详情页加载成功')
  })

  return (
    <View className='detail'>
      <View className='header'>
        <Text className='title'>功能详情</Text>
      </View>
      
      <View className='content'>
        <View className='card'>
          <Text className='card-title'>🎯 MediMind 核心功能</Text>
          <Text className='card-item'>• AI智能诊断辅助</Text>
          <Text className='card-item'>• 症状分析与建议</Text>
          <Text className='card-item'>• 用药提醒与记录</Text>
          <Text className='card-item'>• 健康档案管理</Text>
        </View>

        <View className='card'>
          <Text className='card-title'>📱 技术栈</Text>
          <Text className='card-item'>• 框架：Taro 4.x</Text>
          <Text className='card-item'>• 语言：TypeScript</Text>
          <Text className='card-item'>• 样式：Sass</Text>
          <Text className='card-item'>• 构建：Webpack 5</Text>
        </View>

        <Button 
          className='back-btn' 
          type='primary'
          onClick={() => redirectTo({ url: '/pages/index/index' })}
        >
          返回首页
        </Button>
      </View>
    </View>
  )
}