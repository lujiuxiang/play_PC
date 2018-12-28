<template>
    <div class="index">
        <!-- title 开始 -->
        <div class="y-title">
            <div>
                <img src="../../static/images/title/weinisi.png" alt="">
                <img src="../../static/images/title/titleLogo.png" alt="">
                <img src="../../static/images/title/zock.gif" alt="">
                <span>官方易记域名：xxxxxx.com</span>
            </div>
        </div>
        <!-- title 结束 -->

        <!-- body 开始 -->
        <div class="contentWrap">
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
            <!-- 线路检测 开始 -->
            <div class="detecition">
                <!-- 左侧网址 -->
                <div class="d-left">
                    <ul>
                        <li v-for="(item,index) in deteList" :key="index">
                            <i></i>
                            <input class="ms" type="text" :value="item.ms">
                            <input class="href" type="text" :value="item.href">
                            <img src="../../static/images/detection/t-arrows.png" alt="">
                            <a :href="item.href">进入网站</a>
                        </li>
                    </ul>
                    <p>
                        <span></span>
                    </p>
                </div>
                <!-- 右侧提示文本 -->
                <div class="d-right">
                    <p>IP为139.215.225.194的访客,您好!</p>
                    <p>温馨提醒:</p>
                    <p>1、线路MS值越小，访问速度越快；</p>
                    <p>2、请按CTRL+D收藏该页面，以备不时之需。</p>
                    <p class="top40">如果检测后还不能登录请按以下操作方式:</p>
                    <p>操作步骤：打开IE浏览器：选择：工具-》</p>
                    <p>Internet选项-》 在选择 (删除历史浏览记录)-》</p>
                    <p>删除-》重启IE</p>

                </div>
                <!-- 右侧导航 -->
                <div class="d-nav">
                    <p v-for="(item,index) in rightNav" :key="index">
                        <router-link class="clearfix" v-if="item.name" :to="item.name">
                            <i :class="item.icon"></i>
                            <p>{{item.title}}</p>
                            <span>{{item.small}}</span>
                        </router-link>
                        <a v-else class="clearfix" :href="item.href">
                            <i :class="item.icon"></i>
                            <p>{{item.title}}</p>
                            <span>{{item.small}}</span>
                        </a>
                    </p>

                </div>

            </div>

            <!-- 底部图片 -->
            <div class="bot-img">
                <img src="../../static/images/detection/zock2.png" alt="">
            </div>

        </div>

        <!-- body 结束 -->

        <!-- 底部 开始 -->
        <commonfooter></commonfooter>
        <!-- 底部 结束 -->

    </div>

</template>
<script>
import commonfooter from "./../commonViews/footer.vue";
import axios from "axios";
import "./../css/common.css";

export default {
    name: "index",
    data() {
        return {
            // 检测的网站
            deteList: [
                {
                    ms: "37ms",
                    href: "https://33117d.com"
                },
                {
                    ms: "20ms",
                    href: "https://33117d.com"
                },
                {
                    ms: "40ms",
                    href: "https://33117d.com"
                },
                {
                    ms: "47ms",
                    href: "https://33117d.com"
                },
                {
                    ms: "67ms",
                    href: "https://33117d.com"
                },
                {
                    ms: "77ms",
                    href: "https://33117d.com"
                },
                {
                    ms: "33ms",
                    href: "https://33117d.com"
                },
                {
                    ms: "46ms",
                    href: "https://33117d.com"
                }
            ],
            // 右侧导航
            rightNav: [
                {
                    icon: "iconfont icon-wsmp-register",
                    name: "register",
                    title: "加入我们",
                    small: "JOIN US"
                },
                {
                    icon: "iconfont icon-iosgamecontrollerb",
                    name: "twxtregister",
                    title: "免费试玩",
                    small: "FREE TRY"
                },
                {
                    icon: "iconfont icon-kefu",
                    href:
                        "https://ziker-talk.yun.pingan.com/webim/?channel=WEBIM&authorizerAppid=webim2c83aec44342e0a&eid=86a67bbad3e4b01765bf596b95e47b4e&theme=07c5ba",
                    title: "在线客服",
                    small: "CUSTOMER SERVICE"
                },
                {
                    icon: "iconfont icon-cunkuanlicairenminbi1",
                    name: "deposit",
                    title: "存款帮助",
                    small: "DEPOSIT HELP"
                },
                {
                    icon: "iconfont icon-qukuan",
                    name: "withdrawal",
                    title: "取款帮助",
                    small: "WITHDRAWALS HELP"
                },
                {
                    icon: "iconfont icon-wenti",
                    name: "",
                    title: "常见问题",
                    small: "FAQ"
                }
            ]
        };
    },
    components: {
        commonfooter
    },
    created() {
        let that = this;
        this.common.noData(that);
    },
    computed: {
        news() {
            return this.$store.state.news;
        }
    },
    mounted() {
        this.$get("index/index/active")
            .then(res=>{
                // 最新消息
                this.activity = res.data;
            })
    },
    beforeDestroy() {
        clearInterval(window.colortimer);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* 头部域名信息 */
.y-title > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.y-title span {
    display: block;
    float: right;
    width: 210px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 3px;
    font-size: 14px;
    color: #000;
    background: linear-gradient(#f4d65d, #e9b64f);
}

/* 内容 开始 */
.contentWrap {
    background: url("../../static/images/title/t-bg.jpg") no-repeat center/cover;
}

.detecition {
    display: flex;
    position: relative;
    left: -25px;
    width: 1000px;
    height: 647px;
    margin: 40px auto 0;
    padding-bottom: 40px;
    background: url("../../static/images/title/jc-bg.png") no-repeat;
}
.detecition .d-left {
    width: 57%;
}
.detecition .d-left ul {
    width: 360px;
    margin: 100px auto 0;
}
.detecition .d-left li {
    margin: 20px 0;
    height: 31px;
    line-height: 31px;
}
.detecition .d-left i {
    float: left;
    margin-right: 16px;
    width: 7px;
    height: 31px;
    background: url("../../static/images/detection/t-dot.png") no-repeat 0 14px;
}
.detecition .d-left li img {
    padding: 0 5px;
    vertical-align: middle;
}
.detecition .d-left input {
    display: block;
    float: left;
    height: 31px;
    line-height: 31px;
    color: #000;
    background: #fff;
    text-align: center;
}
.detecition .d-left .ms {
    margin-right: 10px;
    width: 77px;
}
.detecition .d-left .href {
    width: 131px;
}
.detecition .d-left a {
    padding: 15px;
    line-height: 31px;
    color: #492d01;
    background: url("../../static/images/detection/t-btn.png") center center
        no-repeat;
}
.detecition .d-left p > span {
    display: block;
    margin: 23px auto 0;
    width: 193px;
    height: 45px;
    background: url("../../static/images/detection/oneMore.png") center center
        no-repeat;
}

.detecition .d-right {
    margin: 100px auto;
    width: 300px;
    color: #e9b64f;
    font-size: 16px;
    line-height: 1.5;
}
.detecition .d-right p {
    margin: 10px;
}
.detecition .d-right .top40 {
    margin-top: 40px;
}
.detecition .d-right p:first-child {
    margin-bottom: 50px;
}

.d-nav {
    position: absolute;
    top: 10px;
    right: -202px;
}
.d-nav a {
    display: inline-block;
    margin: 10px 0;
    padding: 20px 0;
    width: 200px;
    color: #e9b64f;
    border: 1px solid #e9b64f;
    border-radius: 10px;
}
.d-nav a:hover {
    color: #fff;
    border: 1px solid #fff;
}
.d-nav a:hover i {
    color: #fff;
}
.d-nav i {
    float: left;
    padding: 0 10px;
    font-size: 40px;
    color: #e9b64f;
}
.d-nav a p {
    font-size: 22px;
}
.d-nav span {
    float: left;
}

.bot-img {
    text-align: center;
}
/* 内容 结束 */

/* 最新消息 开始 */
.newMessage {
    width: 100%;
    background: rgba(48, 41, 37, 0.69);
    box-shadow: 0px 3px 5px 0 rgba(0, 0, 0, 0.48);
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