// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './styles/index.css'

export default {
  extends: DefaultTheme, // 继承默认主题
  // 如果你有自定义布局或其他增强功能，写在这里
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}