import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/README.md',
      ],
    },
  ],

  '/advanced/': [
    {
      text: 'Advanced',
      children: [
        '/advanced/architecture.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/advanced/cookbook/README.md',
      ],
    },
  ],

}
