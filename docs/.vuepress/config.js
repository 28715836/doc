module.exports = {
	base: "/base/"
    title: "猜猜我是谁",
    description: "使用流行技术栈快速创建商业级后台管理系统-BuildAdmin是基于TP6、Vue3.x、Typescript、Vite、Pinia、Element plus等的开源后台系统",
    head: [
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        ["meta", { name: "keywords", content: "BuildAdmin,ThinkPHP6通用后台,Vue3后台,BuildAdmin文档,vue3开源后台,vue3模板与案例市场" }],
        ["meta", { name: "author", content: "妙码生花" }],
        ["meta", { name: "robots", content: "all,follow" }],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '指南', link: '/guide/' },
            { text: '进阶', link: '/senior/' },
            { text: '官网', link: 'https://buildadmin.com' },
            { text: '线上演示', link: 'https://demo.buildadmin.com' },
            { text: '代码仓库', items: [
                { text: 'Gitee', link: 'https://gitee.com/wonderful-code/buildadmin' },
                { text: 'GitHub', link: 'https://github.com/build-admin/buildadmin' },
            ] },
            { text: '🎉FastAdmin', link: '/fastadmin.md' },
            { text: '更新日志', link: 'https://gitee.com/wonderful-code/buildadmin/blob/master/CHANGELOG.md' },
        ],
        repo: 'https://gitee.com/wonderful-code/build-admin-doc',
        docsDir: 'docs',
        repoLabel: "文档仓库",
        editLinks: true,
        editLinkText: "点此帮助我们改善此页面",
        lastUpdated: "上次更新",
        url: {
            baFullZip: 'https://gitee.com/wonderful-code/buildadmin/releases/download/v1.1.1/badmin-v1.1.1-full.zip',
            baResourceZip: 'https://vcdn.buildadmin.com/release/badmin-v1.1.1-ResourcePack.zip',
        },
        sidebar: {
            '/guide/': [
                {
                    title: '入门须知',
                    collapsable: false,
                    children: [
                        '',
                        '/guide/permit.md',
                        '/guide/learnDoc.md',
                        '/guide/specialThanks.md',
                    ]
                },
                {
                    title: '安装',
                    collapsable: false,
                    children: [
                        ['/guide/install/start.md', '快速上手'],
                        ['/guide/install/senior.md', '安装服务进阶'],
                        {
                            title: '安装附录',
                            collapsable: true,
                            children: [
                                ['/guide/install/windows.md', 'Windows下从零开始'],
                                ['/guide/install/linux-bt.md', 'Linux下从零开始'],
                                ['/guide/install/macBook.md', 'MacBook下安装引导'],
                                ['/guide/install/preparePHP.md', '准备PHP'],
                                ['/guide/install/prepareComposer.md', '准备Composer'],
                                ['/guide/install/prepareNodeJs.md', '准备NodeJs'],
                                ['/guide/install/prepareNpm.md', '准备Npm'],
                                ['/guide/install/preparePM.md', '准备Npm包管理器'],
                                ['/guide/install/disablement.md', 'PHP解除函数禁用'],
                                ['/guide/install/missingExtension.md', 'PHP缺少扩展'],
                                ['/guide/install/npmInstallFail.md', 'npm install 执行失败'],
                                ['/guide/install/npmBuildFail.md', 'npm build 执行失败'],
                                ['/guide/install/setNpmRegistryFail.md', '设置NPM源失败'],
                                ['/guide/install/dirNoPermission.md', '目录或文件无写入权限'],
                                ['/guide/install/hideIndex.md', '隐藏 index.html'],
                                ['/guide/install/webHistory.md', '历史模式-隐藏URL的-SEO'],
                                ['/guide/install/manualOperation.md', '手动完成未尽事宜'],
                                ['/guide/install/webInstallGuide.md', '安装引导说明'],
                            ],
                        },
                    ],
                },
                {
                    title: '其他',
                    collapsable: false,
                    children: [
                        ['/guide/other/developerMustSee.md', '开发者必看'],
                        ['/guide/other/contributionCode.md', '贡献代码'],
                        ['/guide/other/gitCommitSpecification.md', 'git 提交规范'],
                        ['/guide/other/update.md', '框架更新指南'],
                        {
                            title: '附录',
                            collapsable: true,
                            children: [
                                ['/guide/other/appendix/getPoints.md', '获取积分'],
                                ['/guide/other/appendix/templateAgreement.md', '模块购买和使用协议'],
                            ]
                        },
                        {
                            title: '不兼容更新',
                            collapsable: true,
                            children: [
                                ['/guide/other/incompatibleUpdate/v106.md', 'v1.0.6'],
                            ]
                        }
                    ],
                },
            ],
            '/senior/': [
                {
                    title: '起步',
                    collapsable: false,
                    children: [
                        '',
                        'directoryStructure.md',
                        'oneClickCRUD.md',
                        'databaseSpecification.md',
                        'multilingual.md',
                        'addMenuRule.md',
                        'faq.md',
                    ]
                },
                {
                    title: 'WEB端专项',
                    collapsable: false,
                    children: [
                        ['/senior/web/icon.md', '字体图标'],
                        ['/senior/web/axios.md', '网络请求'],
                        ['/senior/web/stores.md', '状态管理'],
                        ['/senior/web/formItem.md', '表单项目组件（formItem）'],
                        ['/senior/web/baInput.md', '输入组件（baInput）'],
                        ['/senior/web/baTable.md', '表格组件（table）'],
                        ['/senior/web/terminal.md', 'WEB终端组件'],
                        ['/senior/web/formValidation.md', '表单验证'],
                        ['/senior/web/directives.md', '内置指令'],
                        ['/senior/web/utils.md', '辅助工具/函数'],
                        ['/senior/web/styles.md', 'CSS/SCSS样式'],
                        ['/senior/web/justNeedWeb.md', '只需要WEB端'],
                    ]
                },
                {
                    title: 'Server端专项',
                    collapsable: false,
                    children: [
                        ['/senior/server/debug.md', '开启调试'],
                        ['/senior/server/apiDebug.md', '调试接口'],
                        ['/senior/server/config.md', '配置'],
                        ['/senior/server/controller.md', '控制器'],
                        ['/senior/server/captcha.md', '验证码'],
                        ['/senior/server/dataLImit.md', '数据权限控制'],
                    ]
                },
                {
                    title: '模块开发',
                    collapsable: false,
                    children: [
                        ['/senior/module/start.md', '开始'],
                        ['/senior/module/basicInfo.md', '模块基本信息'],
                        ['/senior/module/directoryStructure.md', '模块目录结构'],
                        ['/senior/module/configJson.md', '模块基本配置'],
                        ['/senior/module/installSql.md', '模块安装SQL'],
                        ['/senior/module/coreController.md', '模块核心控制器'],
                        ['/senior/module/event.md', '模块行为事件'],
                        ['/senior/module/webBootstrap.md', '向 main.ts 插入代码'],
                    ]
                },
            ]
        },
    },
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
};