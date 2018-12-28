import Vue from 'vue';
import Router from 'vue-router';
Vue.config.productionTip = false

Vue.use(Router)

export default new Router({
    routes: [
        // 首页
        {
            path: '/',
            name: 'index',
            component: resolve => require(['../components/index'], resolve),
            meta: {
                keepAlive: true //需要被缓存
            }
        },
        // 首页头部右上角 线路检测
        {
            path: '/detection',
            name: 'detection',
            component: resolve => require(['../components/detection'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 忘记密码
        {
            path: '/forgetPassword',
            name: 'forgetPassword',
            component: resolve => require(['../components/forgetPassword'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 新MG老虎机
        {
            path: '/MGtiger',
            name: 'MGtiger',
            component: resolve => require(['../components/MGtiger'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 新MG老虎机
        {
            path: '/MGtiger2',
            name: 'MGtiger2',
            component: resolve => require(['../components/MGtiger2'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 新MG老虎机
        {
            path: '/MGtiger3',
            name: 'MGtiger3',
            component: resolve => require(['../components/MGtiger3'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 新MG老虎机
        {
            path: '/MGtiger4',
            name: 'MGtiger4',
            component: resolve => require(['../components/MGtiger4'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 新MG老虎机
        {
            path: '/MGtiger5',
            name: 'MGtiger5',
            component: resolve => require(['../components/MGtiger5'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 新MG老虎机
        {
            path: '/MGtiger6',
            name: 'MGtiger6',
            component: resolve => require(['../components/MGtiger6'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 新MG老虎机
        {
            path: '/MGtiger7',
            name: 'MGtiger7',
            component: resolve => require(['../components/MGtiger7'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 彩票游戏
        {
            path: '/lottery',
            name: 'lottery',
            component: resolve => require(['../components/lottery'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 彩票游戏 进入游戏页面
        {
            path: '/lotteryGames',
            name: 'lotteryGames',
            component: resolve => require(['../components/lotteryGames'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 优惠活动
        {
            path: '/specialOffers',
            name: 'specialOffers',
            component: resolve => require(['../components/specialOffers'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 注册
        {
            path: '/register',
            name: 'register',
            component: resolve => require(['../commonViews/register'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 充值
        {
            path: '/pay',
            name: 'pay',
            component: resolve => require(['../components/pay'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 优惠办理大厅
        {
            path: '/activitiesHall',
            name: 'activitiesHall',
            component: resolve => require(['../components/activitiesHall'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 优惠办理大厅
        {
            path: '/grade',
            name: 'grade',
            component: resolve => require(['../components/grade'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 关于我们
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: resolve => require(['../components/aboutUs'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 联络我们
        {
            path: '/contactUs',
            name: 'contactUs',
            component: resolve => require(['../components/contactUs'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 合作伙伴
        {
            path: '/partner',
            name: 'partner',
            component: resolve => require(['../components/partner'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 存款帮助
        {
            path: '/deposit',
            name: 'deposit',
            component: resolve => require(['../components/deposit'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 关于我们
        {
            path: '/withdrawal',
            name: 'withdrawal',
            component: resolve => require(['../components/withdrawal'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 代理注册
        {
            path: '/registeredAgent',
            name: 'registeredAgent',
            component: resolve => require(['../components/registeredAgent'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 常见问题
        {
            path: '/questions',
            name: 'questions',
            component: resolve => require(['../components/questions'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 投诉建议
        {
            path: '/complaint',
            name: 'complaint',
            component: resolve => require(['../components/complaint'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 会员中心
        {
            path: '/memberCenter',
            name: 'memberCenter',
            component: resolve => require(['../components/memberCenter'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 最新消息 弹出页
        {
            path: '/commonNewMsg',
            name: 'commonNewMsg',
            component: resolve => require(['../commonViews/commonNewMsg'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        // 维护中
        {
            path: '/noData',
            name: 'noData',
            component: resolve => require(['../components/noData'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            }
        },
    ]
})