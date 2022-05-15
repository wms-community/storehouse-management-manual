import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: 'V0.0.1',
      children: [
        '/zh/install.html',
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
