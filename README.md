# MediMind - AI辅助医诊小程序

## 项目简介
MediMind是一个基于Taro框架开发的智能医疗诊断辅助小程序，提供AI智能诊断辅助、症状分析、用药提醒等功能。

## 技术栈
- **框架**: Taro 4.1.4 + React 18
- **语言**: TypeScript
- **样式**: Sass
- **构建工具**: Webpack 5

## 项目结构
```
src/
├── app.ts                 # 应用入口文件
├── app.config.ts          # 应用配置
├── app.scss              # 全局样式
├── pages/
│   ├── index/            # 首页
│   │   ├── index.tsx     # 首页组件
│   │   └── index.scss    # 首页样式
│   └── detail/           # 详情页
│       ├── index.tsx     # 详情页组件
│       └── detail.scss   # 详情页样式
└── types/
    └── global.d.ts       # 全局类型定义
```

## 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器

#### 微信小程序
```bash
npm run dev:weapp
```

#### H5网页
```bash
npm run dev:h5
```

#### 支付宝小程序
```bash
npm run dev:alipay
```

### 3. 微信小程序开发
1. 运行 `npm run dev:weapp` 启动编译
2. 打开微信开发者工具
3. 导入项目根目录
4. 开始开发调试

## Demo功能说明

### 首页功能
- ✅ 展示MediMind品牌信息
- ✅ 交互式按钮测试（点击计数）
- ✅ Toast提示功能
- ✅ 页面跳转功能
- ✅ 响应式UI设计

### 详情页功能
- ✅ 展示项目核心功能
- ✅ 技术栈介绍
- ✅ 返回按钮导航

## 构建命令

| 命令 | 描述 |
|------|------|
| `npm run dev:weapp` | 微信小程序开发模式 |
| `npm run build:weapp` | 微信小程序构建 |
| `npm run dev:h5` | H5开发模式 |
| `npm run build:h5` | H5生产构建 |
| `npm run dev:alipay` | 支付宝小程序开发 |
| `npm run build:alipay` | 支付宝小程序构建 |

## 开发环境
- Node.js >= 18
- 微信开发者工具
- VS Code (推荐)

## 项目特色
- 🚀 现代化开发体验
- 📱 跨平台小程序支持
- 🎨 优雅的UI设计
- ⚡ 热重载开发模式
- 🛡️ TypeScript类型安全

## 后续开发计划
- [ ] 集成AI诊断API
- [ ] 用户健康档案管理
- [ ] 用药提醒功能
- [ ] 症状自测问卷
- [ ] 医生在线咨询

## 注意事项
- 确保已安装微信开发者工具
- 首次运行需要安装依赖
- 开发时注意小程序API兼容性