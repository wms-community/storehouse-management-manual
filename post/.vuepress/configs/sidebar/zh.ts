import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: 'Storehouse Management 手册',
      children: [
        '/install.html',
      ],
    },
  ],

//  '/zh/advanced/': [
//    {
//      text: '深入',
//      children: [
//        '/zh/advanced/architecture.md',
//      ],
//    },
//    {
//      text: 'Cookbook',
//      children: [
//        '/zh/advanced/cookbook/README.md',
//      ],
//    },
//  ],

}
