import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: '构建&安装&升级',
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
