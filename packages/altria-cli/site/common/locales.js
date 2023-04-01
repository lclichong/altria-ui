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
                    { title: 'Image 图片', route: { name: 'Image' } },
                    { title: 'Popup 弹出层', route: { name: 'Popup' } },
                ],
            },
            {
                name: '表单组件',
                children: [{ title: 'Input 输入框', route: { name: 'Input' } }],
            },
            {
                name: '反馈组件',
                children: [{ title: 'Dialog 弹出框', route: { name: 'Dialog' } }],
            },
            {
                name: '导航组件',
                children: [{ title: 'Header 导航栏', route: { name: 'Header' } }],
            },
        ],
    },
}
