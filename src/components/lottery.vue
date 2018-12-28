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
                        <img src="../../static/images/lottery-img/banner.jpg" alt="">
                    </router-link>
                    <!-- 最新消息 -->
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
        <div class="play lottery">
            <div class="playwrap">
                <ul class="games">
                    <li v-for="(item,index) in games" :key="index">
                        <div class="left">
                            <img v-lazy="item.src" alt="">
                        </div>
                        <div class="right">
                            <p v-text="item.title"></p>
                            <span>
                                <a @click="goin(item.gamename,item.gamecode,item.moneycode)">进入游戏</a>
                            </span>
                        </div>
                        <a @click="goin(item.gamename,item.gamecode,item.moneycode)"></a>
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
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import "./../css/common.css";

export default {
    name: "index",
    data() {
        return {
            titleList: [],
            games: [
                {
                    src: require("../../static/images/lottery-img/games1.png"),
                    title: "北京赛车"
                },
                {
                    src: require("../../static/images/lottery-img/games2.png"),
                    title: "幸运飞艇"
                },
                {
                    src: require("../../static/images/lottery-img/games3.png"),
                    title: "重庆时时彩"
                },
                {
                    src: require("../../static/images/lottery-img/games4.png"),
                    title: "江苏骰宝"
                },
                {
                    src: require("../../static/images/lottery-img/games5.png"),
                    title: "幸运28"
                },
                {
                    src: require("../../static/images/lottery-img/games6.png"),
                    title: "香港六合彩"
                },
                {
                    src: require("../../static/images/lottery-img/games7.png"),
                    title: "湖南快乐时分"
                },
                {
                    src: require("../../static/images/lottery-img/games8.png"),
                    title: "新疆时时彩"
                },
                {
                    src: require("../../static/images/lottery-img/games9.png"),
                    title: "天津时时彩"
                },
                {
                    src: require("../../static/images/lottery-img/games10.png"),
                    title: "北京快乐8"
                },
                {
                    src: require("../../static/images/lottery-img/games11.png"),
                    title: "广西快3"
                },
                {
                    src: require("../../static/images/lottery-img/games12.png"),
                    title: "广东11选5"
                },
                {
                    src: require("../../static/images/lottery-img/games13.png"),
                    title: "广西快乐十分"
                },
                {
                    src: require("../../static/images/lottery-img/games14.png"),
                    title: "广东快乐十分"
                },
                {
                    src: require("../../static/images/lottery-img/games15.png"),
                    title: "江西时时彩"
                },
                {
                    src: require("../../static/images/lottery-img/games16.png"),
                    title: "重庆幸运农场"
                }
            ]
        };
    },
    methods: {
        // 跳转游戏
        goin(a, b, c) {
            let that = this;
            this.common.goin(a, b, c, that);
        }
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
    },
    computed: {
        // 最新消息
        news() {
            return this.$store.state.news;
        }
    },
    mounted() {}
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

.contentWrap > ul,
.contentWrap > ul li,
.contentWrap > ul li > a img {
    width: 100%;
    height: 100%;
}
.playwrap {
    background: #110f1d;
    border: 1px solid #211e3b;
}
/* banner下面游戏 开始 */
.lottery {
    background: url("../../static/images/lottery-img/lottery-bg.jpg") no-repeat
        center/cover;
}
.lottery ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 0;
    width: 1100px;
}
.lottery ul li {
    float: left;
    margin-bottom: 20px;
    width: 314px;
    height: 150px;
    border: 2px solid #423b68;
    cursor: pointer;
    background: url("../../static/images/lottery-img/gamesbg.jpg") no-repeat 0 0;
}
.lottery ul li:hover {
    border: 2px solid #eadf93;
}
.lottery ul li > a {
    position: relative;
    z-index: 2;
    display: block;
    width: 100%;
    height: 100%;
}
.lottery ul li .left {
    width: 160px;
    height: 160px;
    float: left;
    margin-top: 7px;
    margin-left: 21px;
}
.lottery ul li .left img {
    transition: all 0.2s;
}
.lottery ul li:hover .left img {
    transform: scale(1.1);
}
.lottery ul li .right {
    float: left;
    text-align: center;
    margin-top: 40px;
}
.lottery ul li .right p {
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
}
.lottery ul li .right span {
    display: block;
    text-align: center;
    width: 104px;
    height: 27px;
    line-height: 27px;
    margin: auto;
    margin-top: 10px;
    border: 2px #7d7d7d solid;
    border-radius: 12px;
    transition: all 0.2s;
    cursor: pointer;
}
.lottery ul li .right span a {
    display: inline-block;
    position: relative;
    z-index: 3;
    top: -2px;
    width: 100%;
    height: 100%;
    font-size: 12px;
    color: #7d7d7d;
    transition: all 0.2s;
}
.lottery ul li .right span:hover {
    border: 2px #eadf93 solid;
}
.lottery ul li .right span:hover a {
    color: #eadf93;
}
/* banner下面游戏 结束 */
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