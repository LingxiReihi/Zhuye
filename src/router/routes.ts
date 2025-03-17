// 路由导航配置
// 定义了一组路由规则，用于应用的导航管理。每个规则包含路径、重定向、名称、标题、组件及可能的子路由。
const routes = [
    {
        path: '/', // 主路径
        redirect: '/XueShu', // 重定向到学术页面
        name: 'index', // 规则名称
        title: '首页', // 页面标题
        component: () => import('@/components/MainPage.vue'), // 主页面组件，采用异步加载方式
        children: [ // 子路由配置
            {
                path: '/XueShu', // 学术页面路径
                name: 'XueShu', // 页面名称
                title: '学术', // 页面标题
                component: () => import('@/components/XueShu.vue'), // 学术页面组件，异步加载
            },{
                path:'/ZhaoBiao', // 招标页面路径
                name:'ZhaoBiao', // 页面名称
                title:'招标', // 页面标题
                component:()=>import('@/components/ZhaoBiao.vue') // 招标页面组件，异步加载
            }
        ]
    }
]
export default routes
