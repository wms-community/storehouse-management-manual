import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from '@vuepress/cli'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { head, navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  base: '/',
  evergreen: true,
  head,
  
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Storehouse Management 用户手册',
      description: 'Storehouse Management 用户手册',
    },
    
    '/en/': {
      lang: 'en-US',
      title: 'Storehouse Management Manual',
      description: 'Storehouse Management Manual',
    },
  },

  bundler:
    process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),

  theme: defaultTheme({
    repo: 'wms-community/storehouse-management-manual',
    docsBranch: 'master',
    docsDir: 'post',
    editLinks: true,
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
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },

      '/en/': {
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
