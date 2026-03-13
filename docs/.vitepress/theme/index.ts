// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './styles/index.css'
import HomePage from './components/HomePage.vue'

export default {
  extends: DefaultTheme, // 继承默认主题
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('HomePage', HomePage)
  }
}