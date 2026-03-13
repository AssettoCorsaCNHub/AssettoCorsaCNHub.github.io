import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Assetto Corsa CN Hub',
  description: '神力科莎中国俱乐部 - 赛车模拟器中文社区',
  base: '/',
  appearance: 'dark',
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '新手上路', link: '/newbie/' },
      { text: 'MOD专区', link: '/mod/' },
      { text: '服务器', link: '/server/' },
      { text: '赛事', link: '/event/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AssettoCorsaCNHub/AssettoCorsaCNHub.github.io' }
    ],
    sidebar: {
      '/newbie/': [
        {
          text: '新手上路',
          items: [
            { text: '游戏介绍', link: '/newbie/introduction' },
            {
              text: '新手知识',
              items: [
                { text: '什么是启动器', link: '/newbie/knowledge/launcher' },
                { text: '什么是CSP', link: '/newbie/knowledge/csp' },
                { text: '什么是MOD', link: '/newbie/knowledge/mod' }
              ]
            },
            {
              text: '入门建议',
              items: [
                { text: '驾驶建议', link: '/newbie/suggestion/driving' },
                { text: '设置建议', link: '/newbie/suggestion/setup' },
                { text: '社区建议', link: '/newbie/suggestion/community' }
              ]
            },
            { text: '推荐MOD', link: '/newbie/mods' },
            { text: '驾驶参数', link: '/newbie/settings' },
            { text: '常见问题', link: '/newbie/faq' }
          ]
        }
      ],
      '/mod/': [
        {
          text: 'MOD专区',
          items: [
            { text: '安装方法', link: '/mod/installation' },
            { text: '地图MOD', link: '/mod/tracks' },
            { text: '车辆MOD', link: '/mod/vehicles' }
          ]
        }
      ],
      '/server/': [
        {
          text: '服务器',
          items: [
            { text: '新手必读', link: '/server/beginner' },
            { text: '服务器列表', link: '/server/list' }
          ]
        }
      ],
      '/event/': [
        {
          text: '赛事',
          items: [
            { text: '赛事信息', link: '/event/info' }
          ]
        }
      ]
    }
  }
})
