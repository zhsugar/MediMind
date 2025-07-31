import { View, Text, ScrollView, Input, Button } from '@tarojs/components'
import { useLoad, createSelectorQuery } from '@tarojs/taro'
import { useState, useEffect, useRef } from 'react'
import './index.scss'

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: '您好，我是MediMind AI助手，有什么可以帮您解答的健康问题吗？', isAI: true },
    { id: 2, text: '我想了解一下如何预防感冒？', isAI: false },
    { id: 3, text: '预防感冒的方法包括：\n1. 勤洗手，保持个人卫生\n2. 均衡饮食，增强免疫力\n3. 适当运动，保持良好体质\n4. 充足睡眠，避免过度疲劳\n5. 避免接触感冒患者\n6. 在流感季节可以考虑接种流感疫苗', isAI: true },
  ])
  const [inputValue, setInputValue] = useState('')
  const scrollViewRef = useRef(null)
  
  // 页面加载时滚动到底部
  useLoad(() => {
    console.log('聊天页面加载成功')
    scrollToBottom()
  })
  
  // 消息更新时滚动到底部
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  
  // 滚动到底部的函数
  const scrollToBottom = () => {
    setTimeout(() => {
      createSelectorQuery()
        .select('.message-list')
        .boundingClientRect()
        .exec(res => {
          if (res && res[0]) {
            const scrollHeight = res[0].height
            createSelectorQuery()
              .select('.message-list')
              .scrollOffset()
              .exec(res2 => {
                if (res2 && res2[0]) {
                  const scrollTop = scrollHeight * 2
                  if (scrollViewRef.current) {
                    scrollViewRef.current.scrollTop = scrollTop
                  }
                }
              })
          }
        })
    }, 100)
  }

  const handleSend = () => {
    if (!inputValue.trim()) return
    
    // 添加用户消息
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      isAI: false
    }
    
    setMessages([...messages, newUserMessage])
    setInputValue('')
    
    // 模拟AI回复
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: '感谢您的问题，我正在思考如何回答您...',
        isAI: true
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <View className='chat-page'>
      <ScrollView 
        className='message-list'
        scrollY
        scrollWithAnimation
        ref={scrollViewRef}
      >
        {messages.map(msg => (
          <View 
            key={msg.id}
            id={`msg-${msg.id}`}
            className={`message-item ${msg.isAI ? 'ai-message' : 'user-message'}`}
          >
            <View className='message-avatar'>
              {msg.isAI ? 'AI' : '我'}
            </View>
            <View className='message-content'>
              <Text className='message-text'>{msg.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      
      <View className='input-area'>
        <Input
          className='message-input'
          value={inputValue}
          onInput={e => setInputValue(e.detail.value)}
          placeholder='请输入您的问题...'
          confirmType='send'
          onConfirm={handleSend}
        />
        <Button className='send-btn' onClick={handleSend}>发送</Button>
      </View>
    </View>
  )
}