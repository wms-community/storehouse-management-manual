import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Storehouse Management 用户手册',
      description: 'Storehouse Management 用户手册',
    },
    
    '/en-US/': {
      lang: 'en-US',
      title: 'Storehouse Management Manual',
      description: 'Storehouse Management Manual',
    },
  },

  bundler:
    process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),

  theme: defaultTheme({
    repo: 'wms-community/storehouse-management-manual',
    docsDir: 'post',
    locales: {
      
      '/': {
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        editLinkText: '帮助我们完善这个页面',
        lastUpdatedText: '最后更新',
        contributorsText: '贡献者',
        tip: '提示',
        warning: '警告',
        danger: '危险',
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这看起来是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },

      '/en-us/': {
        navbar: navbar.en,
        sidebar: sidebar.en,
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        selectLanguageAriaLabel: 'Language',
        editLinkText: 'Edit this page on GitHub',
      },
    },
    
  }),
})
