import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: 'dev',
      children: [
        '/zh/dev/install.html',
        '/zh/dev/faq.html',
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
