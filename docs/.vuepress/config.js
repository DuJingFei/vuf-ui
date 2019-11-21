const path = require('path')
function resolve (dir) {
    return path.join(__dirname, '..' ,'..', dir)
}

module.exports = {
    title: '云社区组件库',
    description: '开发思路描述',
    port:8342,
    head: [
      ['link', { rel: 'icon', href: '/Judentus.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      logo: '/logo.svg',

      sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
      sidebar: [
          {
              title: '入门',
              children: [
                '/install/',
                'get-started/',
              ]
            },
            {
              title: '组件',
              children: [
                '/components/button-demos',
                '/components/card-demos',
                '/components/select-demos',
                '/components/dateselector-demos',
                '/components/textarea-demos',
                '/components/block-selector',
                '/components/tree-demo',
              ]
            }
      ],
      
      lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
      nav:[
          { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
          { text: '博客', link: 'http://obkoro1.com/' }, // 外部链接
          // 下拉列表
          {
              text: 'GitHub',
              items: [
                  { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
                  {
                  text: '算法仓库',
                  link: 'https://github.com/OBKoro1/Brush_algorithm'
                  }
              ]
          }        
      ]
    },
    markdown: {
        lineNumbers: false
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              'vue$': 'vue/dist/vue.esm.js',
              '@': resolve('docs'),
              '@src': resolve('src'),
              '@scss': resolve('src/scss'),
              '@less': resolve('src/styleLess'),
              '@components': resolve('src/components'),
              '@utils': resolve('src/utils')
            }
        }
    },
    plugins: [
     // require('../../src/styleLess/common.less')
    ]
  }