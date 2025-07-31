import { View, Text, Image, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Profile() {
  useLoad(() => {
    console.log('档案页面加载成功')
  })

  return (
    <View className='profile-page'>
      <View className='profile-header'>
        <View className='avatar-container'>
          <Image
            className='avatar'
            src={require('../../assets/me.png')}
          />
        </View>
        <Text className='username'>白糖</Text>
        <Text className='user-desc'>医小慧相伴，每一天都健康在线</Text>
      </View>

      <View className='profile-content'>
        <View className='section'>
          <View className='section-title'>
            <Text>健康档案</Text>
          </View>
          <View className='menu-list'>
            <View className='menu-item'>
              <View className='menu-item-left'>
                <View className='menu-icon health-icon'></View>
                <Text>健康数据</Text>
              </View>
              <View className='menu-arrow'>›</View>
            </View>
            <View className='menu-item'>
              <View className='menu-item-left'>
                <View className='menu-icon record-icon'></View>
                <Text>问诊记录</Text>
              </View>
              <View className='menu-arrow'>›</View>
            </View>
            <View className='menu-item'>
              <View className='menu-item-left'>
                <View className='menu-icon medicine-icon'></View>
                <Text>用药提醒</Text>
              </View>
              <View className='menu-arrow'>›</View>
            </View>
          </View>
        </View>

        <View className='section'>
          <View className='section-title'>
            <Text>系统设置</Text>
          </View>
          <View className='menu-list'>
            <View className='menu-item'>
              <View className='menu-item-left'>
                <View className='menu-icon settings-icon'></View>
                <Text>通用设置</Text>
              </View>
              <View className='menu-arrow'>›</View>
            </View>
            <View className='menu-item'>
              <View className='menu-item-left'>
                <View className='menu-icon privacy-icon'></View>
                <Text>隐私政策</Text>
              </View>
              <View className='menu-arrow'>›</View>
            </View>
            <View className='menu-item'>
              <View className='menu-item-left'>
                <View className='menu-icon about-icon'></View>
                <Text>关于我们</Text>
              </View>
              <View className='menu-arrow'>›</View>
            </View>
          </View>
        </View>

        <Button className='logout-btn'>退出登录</Button>
      </View>
    </View>
  )
}
