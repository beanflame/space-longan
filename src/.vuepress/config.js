// 网站
module.exports = {
    title: 'Space Longan 官方网站',
    description: 'The Official Website of Space Longan',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    head: [
        ['link', {rel: 'icon', href: '/space-longan-logo.svg'}],
        [
            'link',
            {
                href:
                    'https://fonts.googleapis.com/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap',
                rel: 'stylesheet'
            }
        ],
        [
            'link',
            {
                href:
                    'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
                rel: 'stylesheet'
            }
        ],

        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1.0'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],

        [
            'link',
            {
                rel: 'apple-touch-icon',
                href: '/images/icons/apple-icon-152x152.png'
            }
        ],


        ['meta', {name: 'msapplication-TileImage', content: '/images/icons/ms-icon-144x144.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
        // localization for china
        // 中国本土化
        // ['script', {src: 'https://player.youku.com/iframeapi'}]
    ],


    themeConfig: {
        logo: '/space-longan-logo.svg',
        nav: [
            {text: '官网', link: '/'},
            {
                text: '开发工具',
                link: '/devtool/',
                items: [
                    {text: 'XCache', link: '/devtool/XCache'},
                    {text: 'XTinder', link: '/devtool/XTinder'},
                    {text: 'TFiber', link: '/devtool/TFiber'}
                ]
            },

            {
                text: '开发文档',
                link: '/devdoc/',
                items: [
                    {text: 'SpaceLonganRenderer', link: '/devdoc/SpaceLonganRenderer'}
                ]
            },
            {
                text: '支持',
                link: '/support/',
                items: [
                    {text: '赞助', link: '/support/#赞助'},
                    {text: '捐款', link: '/support/#捐款'},
                    {text: 'xxxx 商店', link: 'https://xxxx.html'}
                ]
            },
            {
                text: '语言',
                link: '#',
                items: [

                    // Translation maintainers: Please include the link below to the English documentation
                    {
                        text: 'English',
                        link: '/en-uk/',
                        isTranslation: true
                    },
                    {
                        text: '中文',
                        link: '/zh-cn/',
                        isTranslation: true
                    }

                ]
            }
        ],

        repo: 'beanflame/space-longan',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '最近更新时间',
        docsDir: 'src',

        /*
        sidebarDepth: 2,
        sidebar: {
        collapsable: false,
        '/guide/migration/': sidebar.migration,
        '/guide/contributing/': sidebar.contributing,
        '/guide/ssr/': sidebar.ssr,
        '/guide/': sidebar.guide,
        '/community/': sidebar.guide,
        '/cookbook/': sidebar.cookbook,
        '/api/': sidebar.api,
        '/examples/': sidebar.examples
        },
        */

        smoothScroll: false,

        /*
        algolia: {
        indexName: 'vuejs_cn3',
        apiKey: '773de665ca11d74cede4e35ecff46931'
        },
        carbonAds: {
        carbon: 'CEBDT27Y',
        custom: 'CKYD62QM',
        placement: 'vuejsorg'
        },
        */

        topBanner: false
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer(timestamp) {
                    const date = new Date(timestamp)

                    const digits = [
                        date.getUTCFullYear(),
                        date.getUTCMonth() + 1,
                        date.getUTCDate(),
                        date.getUTCHours(),
                        date.getUTCMinutes(),
                        date.getUTCSeconds()
                    ].map(num => String(num).padStart(2, '0'))

                    return '{0}-{1}-{2}, {3}:{4}:{5} UTC'.replace(
                        /{(\d)}/g,
                        (_, num) => digits[num]
                    )
                }
            }
        ],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    '/': {
                        message: '内容有更新',
                        buttonText: '刷新'
                    }
                }
            }
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'info',
                before: info =>
                    `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
                after: '</div>'
            }
        ]
    ],
    markdown: {
        lineNumbers: true,
        /** @param {import('markdown-it')} md */
        extendMarkdown: md => {
            md.options.highlight = require('./markdown/highlight')(
                md.options.highlight
            )
        }
    }
}
