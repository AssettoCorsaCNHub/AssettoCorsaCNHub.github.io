// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './styles/index.css'
import HomePage from './components/HomePage.vue'
import WorksList from './components/WorksList.vue'
import Footer from './components/Footer.vue'
import { h } from 'vue'

export default {
  extends: DefaultTheme, // 继承默认主题
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('HomePage', HomePage)
    app.component('WorksList', WorksList)
    app.component('Footer', Footer)
  },
  // 覆盖默认布局，添加 Footer
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(Footer)
    })
  }
}
