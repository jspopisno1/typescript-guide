const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const plugins = require('./utils/plugins');
const { sidebarHelper, sortSidebar } = require('./utils/sidebarHelper');
const nav = require('./utils/nav');

const sidebar = sortSidebar(sidebarHelper());
// console.log(sidebar)

module.exports = {
  // 替换成你的仓库名
  base: '/typescript-guide/',
  title: 'Typescript 指导书',
  description: 'Welcome to Typescript Guide',
  port: 9527,
  // dest: 'dist',
  // head 配置
  head: [
    ['link', { rel: 'icon', href: '/ts-logo.png' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  // 别名配置
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.join(__dirname, '../..'),
      }
    }
  },
  chainWebpack:(config, isServer) => {
		// config.resolve.alias.set('@images',path.resolve(__dirname, '../../'))
		config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
      {
        // Languages are loaded on demand at runtime
        languages: [
					'javascript',
					'typescript',
				]
      }
    ])
  },
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  // markdown
  markdown: {
    lineNumbers: true,
    anchor: {
      permalink: true,
    },
    toc: {
      includeLevel: [1, 2],
    },
    extendMarkdown: md => {
      md.set({ html: true });
      md.use(require('markdown-it-katex'));
      md.use(require('markdown-it-task-lists'));
      md.use(require('markdown-it-imsize'), { autofill: true });
    }
  },
  // 主题配置
  themeConfig: {
    theme: 'vue',
    repo: 'https://github.com/Rain120/typescript-guide',
    repoLabel: 'Repo',

    displayAllHeaders: true,
    sidebar,
    nav,

    // polyfill IE
    evergreen: true,

    // search
    search: true,
    searchMaxSuggestions: 10,
    // 申请
    // https://docsearch.algolia.com/apply/
    // algolia: {
    //   apiKey: '',
    //   indexName: ''
    // },

    // PWA
    serviceWorker: true,

    displayAllHeaders: true,

    smoothScroll: true,

    // footer
    date_format: 'yyyy-MM-dd',
    lastUpdated: 'Last Updated',
    repoLabel: '查看源码',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！'
  },
  plugins
};
