import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        header_title: "", //网站头部标题
        news: "", //最新消息页面数据
        winner_list: "", //中奖名单
        titleLogo1: "", //首页头部 logo
        titleLogo2: "", //首页头部 logo
        headurlInfo: [], //首页头部链接
        titleListFirst: "", //首页导航中--首页二级菜单
        titleList: "", //首页导航
        noRead: "", //未读消息
        loginArr: "", //首页头部 账号--余额

        banner: "", // 首页轮播
        bannerMenu: "", // live图片
        games: "", // 游戏列表
        footNum1: "", // 底部图片
        news: "", //最新消息
        // 优惠活动
        activityData: {
            navBar: ""
        },
        // 会员中心
        MemberCenter: {
            myAccount: "", //我的账户 平台游戏及余额
            bankBalance: [{
                left: '账户余额',
                money: '',
            }, ], //自动余额总余额
            allbalance: "", //手动余额总余额
            // 银行交易 额度转换 手动转换 左侧列表、
            // 把对象重新变成字符串 在变成对象 达到不影响原对象的目的
            limitLeft: "",
        },

        // 公共底部
        footNum: "",
        footNum2: "",

        // 首页弹窗和 左右广告
        aslideLeft: "", //左边中间广告
        aslideRight: "", //右边中间广告
        aslideLeftBot: "", //左下角广告
        aslideRightBot: "", //右下角广告
        titleArr: "", //首页弹窗数据
        secondArr: "", //首页弹窗数据
        lunboArr: "", //首页弹窗轮播数据


    },
    actions: {
        // 所有公共数据及首页数据
        handle_getData({ commit }, that) {
            return new Promise(() => {
                that.$get('index/index/info').then((res) => {
                    commit("newData", res)
                })
            })
        },
        // 获取未读消息
        handle_getNoread({ commit }, info) {
            return new Promise(() => {
                info.that.$get("index/index/info", {
                    user: info.user
                }).then((res) => {
                    // 如果data为-1 则表示账号在别处登录 -2则表示登陆超时
                    if (res == -1 || res == -2) {
                        info.that.common.isOnline(info.that, res);
                        return;
                    }
                    commit("newNoread", res)
                })

            })
        },
        // 优惠活动
        handle_getActivity({ commit }, info) {
            return new Promise(() => {
                info.that.$get("index/index/active").then((res) => {
                    commit("newActivity", res)
                })
            })
        },
        // 会员中心
        handle_getMemberCenter({ commit }, info) {
            return new Promise(() => {
                info.that.$post("person/index/userInfo", { user: info.user })
                    .then((res) => {
                        // 如果data为-1 则表示账号在别处登录 -2则表示登陆超时
                        if (res == -1 || res == -2) {
                            info.that.common.isOnline(info.that, res);
                            return;
                        }
                        commit("newMemberCenter", res)
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
        },
        // 登录时判断是否是代理登录（首页导航和下级管理改变）
        handle_getAgent({ commit }, info) {
            info.that.$post("person/index/isagent", { user: info.user })
                .then((res) => {
                    commit("newAgentInfo", res)
                })
                .catch(err => {
                    console.log(err);
                })
        }

    },
    mutations: {
        // 所有公共数据及首页数据
        newData(state, data) {
            // 首页logo图片
            state.header_title = data.headerTitle
            state.titleLogo1 = data.logoInfo[0].logo1
            state.titleLogo2 = data.logoInfo[0].logo2
            state.headurlInfo = data.headurlInfo
            state.titleListFirst = data.titleListFirst; //首页导航中--首页二级菜单
            state.titleList = data.titleList; //首页导航
            state.banner = data.banner // 首页轮播
            state.bannerMenu = data.bannerMenu // live图片
            state.games = data.games // 游戏列表
            state.footNum1 = data.footNum1 // 底部图片
            state.news = data.news // 最新消息
            state.winner_list = data.price //获奖名单
                // 首页弹窗 和 左右广告
            state.titleArr = data.activeAlertPc[0] //首页弹窗数据
            state.secondArr = data.activeAlertPc[1] //首页弹窗数据
            state.lunboArr = data.activeAlertPc[2] //首页弹窗轮播数据
            state.aslideLeft = data.activeAd.left //左边中间广告
            state.aslideRight = data.activeAd.right //右边中间广告
            state.aslideLeftBot = data.activeAd.leftbottom //左下角广告
            state.aslideRightBot = data.activeAd.rightbottom //右下角广告
                // 公共底部
            state.footNum = data.footNum
            state.footNum2 = data.footNum2
        },
        // 获取未读消息
        newNoread(state, data) {
            state.loginArr = data.userInfo[0]; //首页头部 账号--余额
            state.noRead = data.newChatInfo.num //首页头部 未读消息
        },

        // 优惠活动
        newActivity(state, data) {
            state.activityData.navBar = data
        },
        // 会员中心
        newMemberCenter(state, data) {
            state.MemberCenter.myAccount = data //我的账户 平台游戏及余额
                // 默认 银行交易的 总余额为传过来的值
            state.MemberCenter.bankBalance[0].money = state.MemberCenter.myAccount.summoney.money //自动余额总余额
            state.MemberCenter.allbalance = state.MemberCenter.myAccount.summoney.money //手动余额总余额
                // 银行交易 额度转换 手动转换 左侧列表、
                // 把对象重新变成字符串 在变成对象 达到不影响原对象的目的
            state.MemberCenter.limitLeft = JSON.parse(JSON.stringify(data))
                // 删除对象赋予的总余额
            delete(state.MemberCenter.limitLeft.summoney)
        },
        // 是否是代理登录
        newAgentInfo(state, data) {
            if (data == 1) {
                window.sessionStorage.setItem("agent", "true")

            } else {
                window.sessionStorage.getItem("agent") ? window.sessionStorage.removeItem("agent") : "";
            }
        }

    },

})