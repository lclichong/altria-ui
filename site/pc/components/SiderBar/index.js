export const routes = [
    {
        name: '开发指南',
        children: [{ title: '介绍', route: { name: 'Home' } }],
    },
    {
        name: '基础组件',
        children: [
            { title: 'Button 按钮', route: { name: 'Button' } },
            { title: 'Cell 单元格', route: { name: 'Cell' } },
        ],
    },
    {
        name: '反馈组件',
        children: [{ title: 'Dialog 弹出框', route: { name: 'Dialog' } }],
    },
]
