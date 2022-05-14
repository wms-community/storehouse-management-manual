import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '指南',
    link: '/zh/guide/',
  },
  {
    text: '参考',
    children: [
      {
        text: 'VuePress',
        children: [
          '/zh/reference/cli.md',
        ],
      },
]
