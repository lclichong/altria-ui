export const locales = {
    'zh-CN': {
        title: 'altria-ui',
        description: 'Vue2 的移动端组件库',
        nav: [
            {
                name: '基础组件',
                children: [
                    { title: 'Button 按钮', route: { name: 'Button' } },
                    { title: 'Cell 单元格', route: { name: 'Cell' } },
                    { title: 'Icon 图标', route: { name: 'Icon' } },
                ],
            },
            {
                name: '反馈组件',
                children: [{ title: 'Dialog 弹出框', route: { name: 'Dialog' } }],
            },
        ],
    },
}