<template>
    <div class="index">
        <!-- title 开始 -->
        <common-title></common-title>
        <!-- title 结束 -->

        <!-- body 开始 -->
        <div class="contentWrap">
            <!-- 顶部导航 开始 -->
            <common-title-nav></common-title-nav>
            <!-- 顶部导航 结束 -->
            <ul>
                <li>
                    <router-link to="">
                        <img src="../../static/images/specialOffers-img/banner.jpg" alt="">
                    </router-link>
                    <div class="newMessage">
                        <p>
                            <img src="../../static/images/banner/laba.png" alt="">
                            <i>最新消息</i>
                            <router-link tag="a" target="_blank" :to="{name:'commonNewMsg'}">
                                <marquee scrollamount="3" scrolldelay="100" direction="left" onmouseover="this.stop();" onmouseout="this.start();" style="color: #fff;">
                                    <span style="margin-right: 40px;" v-for="(item,index) in news" :key="index">
                                        {{item.mess}}
                                    </span>
                                </marquee>
                            </router-link>
                        </p>
                    </div>
                </li>
            </ul>

        </div>
        <!-- play 开始 -->
        <div class="play activity">
            <div class="playwrap">
                <!-- 优惠导航 -->
                <div class="activity-top">
                    <!-- 导航内容 -->
                    <span v-for="(item,index) in activity" :key="'right'+index" ref="topList" v-if="activity.length > 0" v-text="item.stylename"></span>
                    <!-- 导航右侧跳转页面 -->
                    <router-link v-for="(newitem,newindex) in others" v-if="activity.length > 0" :to="newitem.name" ref="color" class="color" :key="newindex" v-text="newitem.content"></router-link>
                </div>
                <!-- 导航的优惠详情 -->
                <ul class="activity-bot" ref="topListContent" v-if="activity.length>0" v-for="(item,indexBot) in activity" :key="indexBot">
                    <!-- 详情列表 -->
                    <li v-for="(newitem,newindexBot) in item.sub" :key="newindexBot">
                        <div ref="activeList" class="hd_wrap">
                            <img v-lazy="newitem.img" :title="newitem.title" width="100%">
                            <div class="sqhd" @click="sqhd(newitem.id,$event)"></div>
                            <!-- 点击时显示的对应的优惠列表 -->
                            <div class="activity-list clearfix" ref="activityList">
                                <!-- 优惠列表头部 -->
                                <div>
                                    <ul>
                                        <li>
                                            <div class="li-imgbg"></div>
                                            <div class="li-right">
                                                <h2>扫码充值快人一步</h2>
                                                <div class="li-imgbg"></div>
                                                <div>
                                                    <router-link to="pay">点击此处充值</router-link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="li-wrap clearfix">
                                                <em class="li-imgbg"></em>
                                                <h2>威尼斯人7X24H全年在线</h2>
                                                <a href="">专业在线客服</a>
                                                <router-link to="partner">代理加盟</router-link>
                                                <!-- <router-link to="activitiesHall">优惠大厅</router-link>
                                                <router-link to="grade">威尼斯人小金库</router-link> -->
                                            </div>

                                        </li>
                                        <li>
                                            <div class="li-imgbg"></div>
                                            <div class="li-right">
                                                <p>
                                                    <span>官网:</span>
                                                    <i>44117a.com</i>
                                                </p>
                                                <p>
                                                    <span>热线:0063-9998788888</span>
                                                </p>
                                                <p>
                                                    <span>微信:</span>
                                                    <i>v33117vip</i>
                                                </p>
                                                <p>
                                                    <span>关注微信客服 活动早知道❤</span>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <!-- 优惠列表的gif -->
                                <div class="gif-bg"></div>
                                <!-- 详情列表的内容部分 -->
                                <div class="list-content">
                                    <!-- 内容顶部游戏gif -->
                                    <p class="clearfix">
                                        <img src="../../static/images/specialOffers-img/activeList/list1.gif" alt="">
                                        <img src="../../static/images/specialOffers-img/activeList/list2.gif" alt="">
                                        <img src="../../static/images/specialOffers-img/activeList/list3.gif" alt="">
                                        <img src="../../static/images/specialOffers-img/activeList/list4.gif" alt="">
                                        <img src="../../static/images/specialOffers-img/activeList/list5.gif" alt="">
                                        <img src="../../static/images/specialOffers-img/activeList/list6.gif" alt="">
                                        <img src="../../static/images/specialOffers-img/activeList/list7.gif" alt="">
                                        <img src="../../static/images/specialOffers-img/activeList/list8.gif" alt="">
                                        <img src="../../static/images/specialOffers-img/activeList/list9.gif" alt="">
                                        <img src="../../static/images/specialOffers-img/activeList/list10.gif" alt="">
                                        <img src="../../static/images/specialOffers-img/activeList/list11.gif" alt="">
                                    </p>
                                    <!-- 具体优惠内容 -->
                                    <div class="ruler" v-html="newitem.content"></div>
                                    <!-- 底部gif图片 -->
                                    <p class="clearfix">
                                        <img src="../../static/images/specialOffers-img/activeList/footer.gif" alt="">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- play 结束 -->

        <!-- body 结束 -->

        <!-- 底部 开始 -->
        <commonfooter></commonfooter>
        <!-- 底部 结束 -->

        <!-- 游戏进入时登录界面 -->
        <gameslogin></gameslogin>
        <!-- 游戏进入时登录界面 -->
    </div>

</template>

<script>
import commonTitle from "./../commonViews/commonTitle.vue";
import commonTitleNav from "./../commonViews/commonTitleNav.vue";
import commonfooter from "./../commonViews/footer.vue";
import gameslogin from "./../commonViews/gameslogin.vue";
import axios from "axios";
import { mapActions } from 'vuex'
import "./../css/common.css";

export default {
    name: "index",
    data() {
        return {
            onoff: "false",
            others: [
                // {
                //     name: 'activitiesHall',
                //     content: '优惠申请大厅'
                // },
                {
                    name: "pay",
                    content: "快速充值中心"
                }
            ]
        };
    },
    components: {
        commonfooter,
        commonTitleNav,
        commonTitle,
        gameslogin
    },
    created() {
        let that = this;
        this.common.noData(that);
        this.handle_getActivity({that: this});
    },
    methods: {
        toggle() {
            // this.onoff = !this.onoff
            let activeList = this.$refs.activeList; //图片
            let activityList = this.$refs.activityList; //具体内容

            activeList.forEach((item, index) => {
                item.onclick = function() {
                    if (this.children[2].className.indexOf("active") > -1) {
                        this.children[2].classList.remove("active");
                        // console.log('有active');
                    } else {
                        //点击时 所有的都没有active类名 都是none
                        for (let i = 0; i < activeList.length; i++) {
                            activeList[i].children[1].classList.remove(
                                "active"
                            );
                        }
                        //当前点击加上active
                        this.children[2].classList.add("active");
                        // console.log('没有active');
                    }
                };
            });
        },
        topList() {
            let topList = this.$refs.topList;
            let topListContent = this.$refs.topListContent;
            topList.forEach((item, index) => {
                topList[0].style.background = "#8B6E56";
                topList[0].style.color = "#fff";
                topListContent[0].style.display = "block";
                item.onclick = function() {
                    for (let i = 0; i < topList.length; i++) {
                        topList[i].style.background = "#fff";
                        topList[i].style.color = "#000";
                        topListContent[i].style.display = "none";
                    }
                    item.style.background = "#8B6E56";
                    item.style.color = "#fff";
                    topListContent[index].style.display = "block";
                };
            });
        },
        color() {
            let colorList = this.$refs.color[0].$el;
            let colorArr = ["rgb(255,216,1)", "rgb(255,255,255)"];
            let num = 0;
            window.colortimer = setInterval(function() {
                // if(colorList[0] == undefined){
                //     clearInterval(colortimer)
                //     return;
                // }
                colorList.style.color = colorArr[num];
                num++;
                if (num >= colorArr.length) num = 0;
            }, 500);
        },
        sqhd(id,event){
            let that = this;
            let user = window.sessionStorage.getItem("login_user");
            event.stopPropagation();
            if(!user){
                alert("请登录之后进行申请")
                return
            }
            that.$post("person/agent/addActive",{
                user: user,
                id: id
            }).then(res=>{
                // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                if (res == -1 || res == -2) {
                    that.common.isOnline(that, res);
                    return;
                }
                
                if(res == 1){
                    alert("申请成功，请留意会员消息！")
                }else if(res == 2){
                    alert("您已经申请成功，无需申请！")
                }else if(res == 3){
                    alert("正在申请中，请等待结果（留意会员消息）！")
                }else if(res == 4){
                    alert("流水不足，无法申请此活动！")
                }
            }).catch(err=>{
                alert("发送失败！")
                console.log(err)
            })
        },
        ...mapActions([
            "handle_getActivity"
        ])
    },
    computed: {
        // 最新消息
        news() {
            return this.$store.state.news;
        },
        activity() {
            return this.$store.state.activityData.navBar;
        }
    },
    destroy() {
        clearInterval(window.colortimer);
    },
    watch: {
        activity(val, oldval) {
            if (val != oldval && val != undefined) {
                this.$nextTick(() => {
                    this.toggle();
                    this.topList();
                    this.color();
                });
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.contentWrap {
    position: relative;
    height: 372px;
}
.title-nav {
    position: absolute;
    top: 0px;
    width: 100%;
    background: rgba(55, 45, 38, 0.66);
    border-top: 1px solid rgba(49, 49, 49, 0.66);
    border-bottom: 1px solid rgba(49, 49, 49, 0.66);
    z-index: 999;
}
.play > div {
    padding: 20px 0;
    background-color: #000;
}
.active {
    display: block !important;
}

.contentWrap > ul,
.contentWrap > ul li,
.contentWrap > ul li > a img {
    width: 100%;
    height: 100%;
}
/* banner下面游戏 开始 */
.activity .activity-top {
    width: 920px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.activity .activity-top span,
.activity .activity-top a {
    margin: 0 10px;
    width: 20%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    background-color: #fff;
    transition: all 0.5s;
    cursor: pointer;
}
.activity .activity-top span:hover {
    background-color: #8b6e56;
    color: #fff;
}
.activity .activity-top a {
    background-color: red;
    transition: none;
}

.activity .activity-bot {
    display: none;
    width: 980px;
    margin: 0 auto;
}
.activity .activity-bot .activity-list {
    display: none;
    box-sizing: border-box;
    border: 2px solid #d4bb5e;
}
.activity .activity-bot .activity-list > div:nth-of-type(1) {
    padding: 8px;
}
.activity .activity-bot .activity-list div:nth-of-type(1) ul {
    display: flex;
    justify-content: space-between;
}
.activity .activity-bot .activity-list div:nth-of-type(1) li {
    float: left;
    margin: 13px 0px;
    background: #000;
    height: 115px;
    width: 310px;
    border: 2px solid #d4bb5e;
    overflow: hidden;
}
.activity-bot li div > img {
    cursor: pointer;
}
.li-imgbg {
    float: left;
    height: 97px;
    width: 97px;
    margin: 5px;
    background: url("../../static/images/specialOffers-img/activeList/titlebg.png");
}
.activity .activity-bot .activity-list div li .li-imgbg {
    background-position: 0px -120px;
}
.activity .activity-bot .activity-list div li .li-right {
    float: left;
    width: 177px;
    margin: 8px;
    color: #fff;
}
.activity .activity-bot .activity-list div li h2 {
    color: #fff;
    font-size: 18px;
    text-align: center;
    font-weight: normal;
    vertical-align: middle;
    color: #fff;
    font-size: 16px;
    text-align: center;
}
.activity .activity-bot .activity-list div li .li-right .li-imgbg {
    height: 28px;
    width: 170px;
    background-position: -5px -68px;
    text-align: center;
    margin: 5px auto 5px;
}
.activity .activity-bot .activity-list div li div {
    text-align: center;
}
.activity .activity-bot .activity-list div li a {
    display: inline-block;
    width: 128px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    background: #eace64;
    background: linear-gradient(to bottom, #f0da80, #dcaf35);
    color: #171819;
}
.activity .activity-bot .activity-list div li a:hover {
    background: linear-gradient(to bottom, #e8a048, #c8500f);
    color: #fff;
}

/* 头部li 第二个 开始 */

.activity .activity-bot .activity-list div li:nth-of-type(2) .li-wrap em {
    background-position: -189px -68px;
    width: 30px;
    height: 30px;
    margin: 10px 0 0 40px;
}
.activity .activity-bot .activity-list div li:nth-of-type(2) .li-wrap h2 {
    float: left;
    margin: 10px 0 10px 0;
    line-height: 24px;
}
.activity .activity-bot .activity-list div li:nth-of-type(2) a {
    margin: 2px 0;
}
/* 头部li 第二个 结束 */
/* 头部li 第三个 开始 */
.activity .activity-bot .activity-list div li:nth-of-type(3) .li-imgbg {
    background-position: -97px -120px;
    margin-left: 15px;
}
.activity .activity-bot .activity-list div li:nth-of-type(3) .li-right {
    width: 167px;
}
.activity .activity-bot .activity-list div li:nth-of-type(3) .li-right {
    padding-top: 13px;
    text-align-last: left;
    font-size: 13px;
}
.activity .activity-bot .activity-list div li:nth-of-type(3) .li-right i {
    font-style: normal;
    color: #fff29b;
}
/* 头部li 第三个 结束 */

/* git图片 开始 */
.activity-list .gif-bg {
    text-align: center;
    height: 44px;
    background: url("../../static/images/specialOffers-img/activeList/top.gif")
        no-repeat 90px 0 #323232;
}

/* git图片 结束 */
.activity-list .list-content p:nth-of-type(1) {
    padding: 0 20px;
    background-color: #fff;
}
.activity-list .list-content p img {
    float: left;
}
.activity-list .list-content p:nth-of-type(2) img {
    width: 100%;
}
.activity-list .list-content .ruler {
    padding: 30px;
    background-color: #fff;
}

/* banner下面游戏 结束 */

/* 活动申请按钮 */
.hd_wrap{
    position: relative;
}
.hd_wrap .sqhd{
    position: absolute;
    z-index: 10;
    top: 30px;
    right: 0;
    height: 85px;
    width: 90px;
    cursor: pointer;
}
/* 最新消息 开始 */
.newMessage {
    position: absolute;
    bottom: 0;
    z-index: 2;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.newMessage p {
    margin: 0 auto;
    width: 1200px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #fff;
}

.newMessage p i {
    font-style: normal;
    margin-left: 5px;
}
.newMessage p marquee {
    float: right;
    width: 90%;
}
.newMessage p img {
    margin-left: 40px;
    margin-top: -3px;
    width: 18px;
    height: 14px;
    vertical-align: middle;
}
/* 最新消息 结束 */
</style>