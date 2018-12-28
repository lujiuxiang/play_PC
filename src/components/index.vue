<template>
    <div class="index">
        <!-- title 开始 -->
        <common-title></common-title>
        <!-- title 结束 -->

        <!-- banner 开始 -->
        <div class="banner">
            <!-- 顶部导航 开始 -->
            <keep-alive>
                <common-title-nav></common-title-nav>
            </keep-alive>
            <!-- 顶部导航 结束 -->
            <ul>
                <li>
                    <!-- 首页轮播 -->
                    <div class="bannerWrap" ref="entrust" @mouseover="bannerList($event)">
                        <swiper v-if="banner.length>1" :options="swiperOption" ref="mySwiper swiperOption">
                            <swiper-slide class="" v-for="(item,index) in banner" :key="index">
                                <router-link to="">
                                    <!-- <img v-if="index==0||index==(banner.length-1)" :src="item.imgurl">
                                    <img v-else v-lazy="item.imgurl" > -->
                                    <img v-lazy="item.imgurl">
                                </router-link>
                            </swiper-slide>
                        </swiper>
                        <div class="swiper-pagination"></div>
                        <!-- 首页轮播 -->
                    </div>
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
                <li>
                    <!-- 首页轮播 live -->
                    <div class="banner-footer">
                        <ul>
                            <li class="bannerMenu" ref="oli" v-if="bannerMenu.length > 1" v-for="(item,index) in bannerMenu" :key="index">
                                <!-- 默认第一张图片路径改变 （大图片） -->
                                <router-link to="" v-if="index == 0">
                                    <img ref="oimg" v-lazy=item.img2 alt="">
                                </router-link>
                                <!-- 其他图片路径不变 （小图片） -->
                                <router-link to="" v-else>
                                    <img ref="oimg" v-lazy=item.img1 alt="">
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- 首页轮播 live -->
                </li>
            </ul>
        </div>
        <!-- banner 结束 -->
        <!-- play 开始 -->
        <div class="play">
            <div class="p-top">
                <div>
                    <!-- 游戏轮播 开始 -->
                    <div class="banner" id="gamesBanner">
                        <swiper v-if="games.length>1" :options="swiperOptionTwo" ref="swiperOptionTwo">
                            <swiper-slide ref="gamesBanner" class="gamesBanner" :id="index" v-for="(item,index) in games" :key="index">
                                <router-link to="">
                                    <!-- <img v-lazy="item.src" :key="item.src"> -->
                                    <!-- 这里使用v-lazy的话  loop无法复制滚动轮播 -->
                                    <img :src="item.src">
                                </router-link>
                            </swiper-slide>
                        </swiper>
                        <!-- 下一个 -->
                        <div class="swiper-button-prev" slot="button-prev">
                            <img v-lazy="play_left" alt="">
                        </div>
                        <!-- 上一个 -->
                        <div class="swiper-button-next" slot="button-next">
                            <img v-lazy="play_right" alt="">
                        </div>
                    </div>
                    <!-- 游戏轮播 结束 -->
                </div>

            </div>
            <div class="p-bottom">
                <div class="wrap">
                    <!-- 左侧游戏 -->
                    <div ref="wrapleft" class="left" v-if="games.length>1" v-for="(item,index) in games" v-show="gamesIndex == index" :key="index">
                        <div class="left-img">
                            <img v-lazy=item.bgsrc alt="">
                        </div>
                        <div class="game-box">
                            <ul>
                                <li v-for="(newitem,newindex) in item.glist" :key="newindex">
                                    <img v-lazy=newitem.listsrc alt="">
                                    <!-- 模板不存在时 点击跳转游戏 -->
                                    <a @click="goin(newitem.gamename,newitem.gamecode,newitem.moneycode)" :key="newindex">
                                        <span v-text="newitem.listtext"></span>
                                    </a>
                                    <!-- 模板不存在时 点击跳转游戏 -->
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 左侧游戏 -->
                    <!-- 右侧 赢家榜 开始 -->
                    <div class="right">
                        <ul>
                            <li>客户ID</li>
                            <li>游戏名称</li>
                            <li>中奖金额</li>
                        </ul>
                        <div class="rWrap">
                            <div class="ulwrap" id="ulWrap" ref="ulWrap">
                                <ul id="demo1" ref="demo1">
                                    <li v-for="(item,index) in winner_list" :key="index">
                                        <span>{{item.user}}</span>
                                        <span>{{item.game}}</span>
                                        <span>
                                            <span class="money">{{item.price}}
                                                <em>元</em>
                                            </span>
                                        </span>
                                    </li>

                                </ul>
                                <ul id="demo2" ref="demo2"></ul>
                            </div>
                        </div>
                        <div class="superjacket">
                            <span class="superjacketMoney">{{superjacketmoney}}</span>
                        </div>
                    </div>
                    <!-- 右侧 赢家榜 结束 -->
                </div>
            </div>
        </div>
        <!-- play 结束 -->
        <!-- phone 开始 -->
        <div class="phone">
            <img v-lazy="footNum1.src" alt="">
        </div>
        <!-- phone 结束 -->
        <!-- 底部 开始 -->
        <keep-alive>
            <commonfooter></commonfooter>
        </keep-alive>
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
import 'swiper/dist/css/swiper.css'
import "./../css/common.css";
import axios from "axios";

export default {
    name: "index",
    data() {
        return {
            // 标记游戏列表 第几个显示
            gamesIndex: "",
            //轮播左右按钮
            play_left: require("../../static/images/play/left.png"),
            play_right: require("../../static/images/play/right.png"),
            // 中奖人员
            peopleMoney: [
                {
                    peopleId: "12312512552",
                    people: "斗地主",
                    money: "65436"
                },
                {
                    peopleId: "12312512sdggd2",
                    people: "斗地主",
                    money: "65436124"
                },
                {
                    peopleId: "safsdgfga",
                    people: "斗地主",
                    money: "65436124"
                },
                {
                    peopleId: "12312512552",
                    people: "斗地主",
                    money: "65436124"
                },
                {
                    peopleId: "12312512552",
                    people: "斗地主",
                    money: "65436124"
                },
                {
                    peopleId: "1231252",
                    people: "斗地主",
                    money: "65436124"
                },
                {
                    peopleId: "123125152",
                    people: "斗地主",
                    money: "65436124"
                },
                {
                    peopleId: "12312552",
                    people: "斗地主",
                    money: "65436"
                },
                {
                    peopleId: "1231552",
                    people: "斗地主",
                    money: "65436"
                },
                {
                    peopleId: "12312512552",
                    people: "斗地主",
                    money: "65436"
                },
                {
                    peopleId: "12312512552",
                    people: "牛牛",
                    money: "65436"
                },
                {
                    peopleId: "123125125",
                    people: "牛牛",
                    money: "656"
                },
                {
                    peopleId: "12312512552",
                    people: "麻将",
                    money: "65436"
                }
            ],
            // 彩池奖金
            superjacketmoney: "CNY9,284,193,200,19",

            // 首页轮播插件
            swiperOption: {
                //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                // loopAdditionalSlides : 1,
                autoplay: {
                    delay: 3000, //3秒切换一次
                    disableOnInteraction: false
                },
                grabCursor: true,
                setWrapperSize: true,
                autoHeight: true,
                effect: "fade",
                pagination: {
                    el: ".swiper-pagination",
                    fadeEffect: {
                        crossFade: true
                    },
                    type: "bullets",
                    clickable: true //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
                },
                // loop: true,

                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                mousewheelControl: true,
                observeParents: true
                //   // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                //   debugger: true,
                // slidesPerView: "auto"
            },
            // 游戏轮播插件
            swiperOptionTwo: {
                //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: {
                    delay: 3000, //3秒切换一次
                    disableOnInteraction: false
                },
                // width: 184,
                direction: "horizontal",
                grabCursor: true,
                slidesPerView: "auto",
                setWrapperSize: true,
                autoHeight: true,
                pagination: ".swiper-pagination",
                //   el: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },

                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                //scrollbar:'.swiper-scrollbar',//滚动条
                mousewheelControl: true,
                observeParents: true,
                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                debugger: true
            }
        };
    },
    components: {
        commonfooter,
        commonTitle,
        commonTitleNav,
        gameslogin
    },
    methods: {
        bannerList(event) {
            let target = event.target || event.srcElement;
            if (
                target.nodeName.toLowerCase() === "span" &&
                "swiper-pagination-bullet"
            ) {
                target.onmouseenter = () => {
                    target.click();
                };
            }
        },
        //live轮播
        bannerToggle() {
            let oli = this.$refs.oli;
            let oimg = this.$refs.oimg;
            let that = this;
            if (oli) {
                oli.forEach((item, index) => {
                    // 默认都是一样大 并且是第一张图片
                    oli[index].style.width = 172 + "px"
                    oli[index].style.height = 166 + "px"
                    oimg[index].src = that.bannerMenu[index].img1;
                    // 让第一组 显示第二张图片 并且宽度变长
                    oli[0].style.width = 506 + "px";
                    oli[0].style.height = 166 + "px";
                    oli[0].style.marginLeft = "70px";
                    oimg[0].src = that.bannerMenu[0].img2;
                    // 移入时 改变图片和宽度
                    item.onmouseenter = function() {
                        for (let i = 0; i < oli.length; i++) {
                            oli[i].style.width = 172 + "px";
                            oli[i].style.height = 166 + "px";
                            oimg[i].src = that.bannerMenu[i].img1;
                        }
                        this.style.width = 506 + "px";
                        this.style.height = 166 + "px";
                        oimg[index].src = that.bannerMenu[index].img2;
                    };
                });
            }
        },
        //游戏轮播移入时 触发下面的游戏列表显示
        playToggle() {
            //上面的游戏轮播图
            //因为loop复制的 用ref获取不了  所以用class获取
            let GamesBanner = document.getElementsByClassName("gamesBanner");
            let games = this.$refs.wrapleft; //获取下面的游戏
            let gamesBanner = [...GamesBanner]; //es6 转换数组
            let that = this;
            gamesBanner.forEach((item, index) => {
                //这里因为轮播图的插件 导致上面轮播图和下面的div的index不一致 所以%下面的div的length
                let j = index % games.length;
                // 这里想让默认第一个显示 所以获取所有的 gamesbanner的第一个
                let gameArr = document.getElementsByClassName("gamesBanner0");
                // 给所有的slide添加一个类名  对应着自身的index
                item.classList.add("gamesBanner" + j);
                item.classList.remove("hover");
                // 让所有的class为 gamesbanner0 的slide改变颜色 并且对应的游戏列表显示
                if (j == 0 && gameArr.length >= 3) {
                    for (let k = 0; k < gameArr.length; k++) {
                        gameArr[k].classList.add("hover");
                    }
                    // 游戏列表显示
                    that.gamesIndex = j;
                }
                //游戏轮播移入事件
                item.onmouseenter = function() {
                    // 获取所有的 slide  包括复制的  （复制的和本身的class相同）
                    let gamesHover = document.getElementsByClassName(
                        "gamesBanner" + j
                    );
                    // 清除所有的hover类名 （改变背景色的）
                    for (let i = 0; i < gamesBanner.length; i++) {
                        gamesBanner[i].classList.remove("hover");
                    }
                    // 给当前所有符合的slide 加一个类名
                    for (let key = 0; key < gamesHover.length; key++) {
                        gamesHover[key].classList.add("hover");
                    }
                    // 游戏列表显示
                    that.gamesIndex = j;
                };
            });
        },
        // 赢家榜
        playWinner() {
            let ulWrap = this.$refs.ulWrap;
            let demo1 = this.$refs.demo1;
            let demo2 = this.$refs.demo2;
            demo2.innerHTML = demo1.innerHTML;
            function run() {
                if (ulWrap.scrollTop >= demo1.offsetHeight) {
                    ulWrap.scrollTop = 0;
                } else {
                    ulWrap.scrollTop++;
                }
            }
            window.timer = setInterval(run, 50);
            ulWrap.onmouseleave = function() {
                timer = setInterval(run, 50);
            };
            ulWrap.onmouseenter = function() {
                clearInterval(timer);
            };
        },
        // 赢家榜中奖人员账号加密
        winnersScroll() {
            // 中奖人员的账号中间替换为*
            for (let i = 0; i < this.winner_list.length; i++) {
                if (this.winner_list[i].user.length < 9) {
                    let tmp;
                    if(this.winner_list[i].user.length >= 6){
                        tmp = this.winner_list[i].user.substring(
                            2,
                            this.winner_list[i].user.length - 2
                        );
                    }else{
                        tmp = this.winner_list[i].user.substring(
                            2,
                            this.winner_list[i].user.length
                        );
                    }
                    // 开始替换
                    this.winner_list[i].user = this.winner_list[i].user.replace(tmp, "**");
                } else {
                    let tmp = this.winner_list[i].user.substring(
                        3,
                        this.winner_list[i].user.length - 3
                    );
                    this.winner_list[i].user = this.winner_list[
                        i
                    ].user.replace(tmp, "***");
                }
            }
        },
        // 进入游戏
        goin(a, b, c) {
            let that = this;
            this.common.goin(a, b, c, that);
        }
    },
    computed: {
        swiper() {
            return this.$refs.swiperOptionTwo.swiper;
        },
        // 首页轮播
        banner() {
            return this.$store.state.banner;
        },
        // liv图片
        bannerMenu() {
            return this.$store.state.bannerMenu;
        },
        // 游戏列表
        games() {
            return this.$store.state.games;
        },
        // 中奖名单
        winner_list() {
            return this.$store.state.winner_list;
        },
        // 底部图片
        footNum1() {
            return this.$store.state.footNum1;
        },
        // 最新消息
        news() {
            return this.$store.state.news;
        }
    },
    activated() {
        // 如果数据存在 就执行js
        if(this.banner && this.bannerMenu && this.games){
            this.swiper.slideTo(0, 1000, false);//切换到第一个slide，速度为1秒
            this.playToggle();
            this.bannerToggle();
        }
        
    },
    destroyed() {
        window.clearInterval(window.timer);
    },
    watch: {
        games(val, oldval) {
            if (val != oldval && val != undefined) {
                this.$nextTick(()=>{
                    this.playToggle();
                })
            }
        },
        bannerMenu(val, oldval) {
            if (val != oldval && val != undefined) {
                this.$nextTick(()=>{
                    this.bannerToggle();
                })
            }
        },
        winner_list(val,oldval){
            if(val && val != oldval){
                // 请求到中奖人员名单数据之后 进行加密 然后渲染到模板
                this.winnersScroll();
                this.$nextTick(()=>{
                    this.playWinner();
                })
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
}
#loading {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #368;
    z-index: 999;
}
/* 首页最小宽度为1300px */
.index {
    min-width: 1300px;
    height: 100%;
}
/* 首页最小宽度为1300px */
li {
    list-style: none;
}
a {
    color: #000000;
    text-decoration: none;
    font-size: 12px;
}

/* banner 开始 */
.banner {
    position: relative;
}
.banner ul li {
    position: relative;
    width: 100%;
    height: 733px;
}
.banner ul li .bannerWrap {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
}
.banner ul li .bannerWrap > div {
    height: 100%;
}
.banner ul li .bannerWrap > div .swiper-slide {
    width: 1920px;
    position: relative;
    height: 100%;
    float: left;
    top: 0;
    left: 0;
}
.banner ul li .bannerWrap > div .swiper-slide a {
    display: block;
    width: 100%;
    height: 100%;
}
.banner ul li .bannerWrap > div .swiper-slide a img {
    display: block;
    width: 100%;
    height: 100%;
}
.banner ul li .bannerWrap .swiper-pagination {
    position: absolute;
    bottom: 35px;
    width: 100%;
    height: 20px;
}
.swiper-pagination-bullet {
    margin-right: 5px !important;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
    background: #e6ac29 !important;
}
.banner ul li div p {
    margin: 0 auto;
    width: 1200px;
    height: 34px;
    line-height: 34px;
    font-size: 12px;
    color: #fff;
}
.banner ul li div p i {
    font-style: normal;
    margin-left: 5px;
}
.banner ul li div p marquee {
    float: right;
    width: 90%;
}
.banner ul li div p span {
    vertical-align: middle;
}
.banner ul li div p img {
    width: 18px;
    height: 14px;
    vertical-align: middle;
    margin-left: 40px;
}

.banner ul li:nth-of-type(2) {
    height: 233px;
}
.banner ul li .banner-footer {
    position: absolute;
    top: -2px;
    width: 100%;
    height: 101%;
    background: url("../../static/images/live/bg.png") no-repeat center/cover;
}
.banner ul li .banner-footer > ul {
    position: relative;
    padding-top: 30px;
    margin: 0 auto;
    width: 1200px;
}
.banner ul li .banner-footer > ul li {
    float: left;
    width: 172px;
    height: 166px;
    transition: width 0.5s, background 0.3s;
}
.banner ul li .bannerMenu img {
    width: 100%;
    height: 100%;
}

/* banner 结束 */
/* play 开始  */
.play .p-top {
    height: 72px;
    background-color: #372d26;
}
.play .p-top div {
    width: 925px;
    height: 100%;
    margin: 0 auto;
}
.play .p-top div::after {
    display: block;
    content: "";
    clear: both;
}
.play .p-top div p {
    float: left;
    width: 43px;
    text-align: center;
    line-height: 72px;
    cursor: pointer;
    background-color: #a0a0a0;
}
.play .p-top div p:hover {
    background-color: #f1ac17;
}
.play .p-top div p img {
    vertical-align: middle;
}
.play .p-top div > .banner {
    position: relative;
}
.play .p-top div > .banner > div {
    margin: 0 auto;
    width: 98%;
}
.play .p-top div > .banner .swiper-slide {
    width: 184px !important;
    margin: 0;
    height: 100%;
}

.play .p-top div > .banner .swiper-container .swiper-wrapper {
    margin: 0px auto;
    width: 1120px !important;
    height: 72px;
    padding-left: 40px;
    box-sizing: border-box;
}
.play .p-top div > .banner .swiper-container .swiper-wrapper .hover::before {
    position: absolute;
    display: block;
    z-index: 5;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.11);
    cursor: pointer;
}
.play .p-top div > .banner .swiper-button-prev,
.play .p-top div > .banner .swiper-button-next {
    position: absolute;
    display: inline-block;
    z-index: 2;
    top: 0;
    right: -35px;
    width: 40px;
    height: 72px;
    background: none;
    outline: none;
}
.play .p-top div > .banner .swiper-button-prev img,
.play .p-top div > .banner .swiper-button-next img {
    margin: 18px 0 0 8px;
}
.play .p-top div > .banner .swiper-button-prev {
    left: -106%;
}
.play .p-top div > .banner .swiper-button-prev:hover,
.play .p-top div > .banner .swiper-button-next:hover {
    background-color: orange;
}

.play .p-bottom {
    background-color: #302720;
}
.play .p-bottom .wrap {
    position: relative;
    margin: 0 auto;
    width: 1020px;
    height: 490px;
}
/* 左侧游戏 */
.play .p-bottom .wrap .left img[lazy="loading"] {
    height: 80%;
}
.play .p-bottom .wrap .left::after {
    display: block;
    position: absolute;
    bottom: -90px;
    left: 0;
    width: 1020px;
    height: 118px;
    content: "";
    clear: both;
    background: url("../../static/images/play/bgBot.png") no-repeat center
        center;
}
.play .p-bottom .wrap .left {
    position: relative;
    float: left;
    width: 750px;
}
.play .p-bottom .wrap .left .left-img {
    position: relative;
    z-index: 2;
    float: left;
    margin-left: -40px;
    width: 325px;
}
.play .p-bottom .wrap .left .game-box {
    position: absolute;
    z-index: 2;
    top: 66px;
    right: 0;
    width: 472px;
    height: 300px;
}
.play .p-bottom .wrap .left .game-box ul li {
    position: relative;
    float: left;
    width: 150px;
    height: 140px;
    /* padding-top: 100px; */
    margin: 0 7px 20px 0;
    color: #a1a1a1;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    background-color: #eff7f9;
    transition: all 0.3s;
}
.play .p-bottom .wrap .left .game-box ul li::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    width: 150px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.5);
    background-position: center top;
    background-repeat: no-repeat;
    -moz-transform-origin: 50% 0%;
    -ms-transform-origin: 50% 0%;
    -o-transform-origin: 50% 0%;
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -moz-transition: all 0.35s ease;
    -o-transition: all 0.35s ease;
    -webkit-transition: all 0.35s ease;
    transition: all 0.5s ease;
}
.play .p-bottom .wrap .left .game-box ul li a {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    color: #a1a1a1;
}
.play .p-bottom .wrap .left .game-box ul li a span {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-color: #000;
}
.play .p-bottom .wrap .left .game-box ul li a span::before {
    content: "进入游戏";
    display: none;
    position: absolute;
    top: -60px;
    left: 50%;
    margin-left: -40px;
    width: 80px;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    border: 1px solid #fff;
    border-radius: 30px;
    color: #fff;
}
.play .p-bottom .wrap .left .game-box ul li:hover::before {
    display: block;
    animation: first 0.5s;
    transform-origin: center;
}
.play .p-bottom .wrap .left .game-box ul li:hover > a span {
    background-color: #e3aa28;
    color: #fff;
}
.play .p-bottom .wrap .left .game-box ul li:hover a span::before {
    display: block;
    animation: first 0.5s;
}
/* 左侧游戏 */

/* 右侧 赢家榜 */
.play .p-bottom .wrap .right {
    float: right;
    margin: 38px 9px 0 0;
    width: 245px;
    height: 345px;
    background: #3b2e24;
}
.play .p-bottom .wrap .right::before {
    content: "";
    display: block;
    height: 41px;
    background: url("../../static/images/play/win-head.png") center center
        no-repeat;
}
.play .p-bottom .wrap .right > ul {
    display: block;
    height: 29px;
    line-height: 29px;
}
.play .p-bottom .wrap .right > ul li {
    float: left;
    margin-left: 20px;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
}
.play .p-bottom .wrap .right > ul li:nth-of-type(2) {
    margin-left: 32px;
}
.play .p-bottom .wrap .right > ul li:nth-of-type(3) {
    margin-left: 33px;
}
.play .p-bottom .wrap .right > .rWrap {
    width: 220px;
    height: 189px;
    margin: 0 auto;
    overflow: hidden;
}
.play .p-bottom .wrap .right .rWrap .ulwrap {
    overflow: hidden;
    position: relative;
    height: 189px;
}
.play .p-bottom .wrap .right .rWrap .ulwrap ul {
    height: auto;
    position: relative;
    padding: 0px;
    margin: 0px;
    top: 0;
}
.play .p-bottom .wrap .right .rWrap .ulwrap ul li {
    height: 27px;
    line-height: 27px;
}
.play .p-bottom .wrap .right .rWrap .ulwrap ul li span {
    float: left;
    display: block;
    color: #fff;
    font-size: 12px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.play .p-bottom .wrap .right .rWrap .ulwrap ul li span:nth-of-type(1) {
    width: 60px;
}
.play .p-bottom .wrap .right .rWrap .ulwrap ul li span:nth-of-type(2) {
    width: 80px;
}
.play .p-bottom .wrap .right .rWrap .ulwrap ul li span .money {
    width: 80px;
    color: red;
}
.play .p-bottom .wrap .right .rWrap .ulwrap ul li span .money em {
    font-style: normal;
    color: #fff;
}

.play .p-bottom .wrap .right .superjacket {
    position: relative;
    margin: 5px auto 0;
    width: 208px;
    height: 64px;
    background: url("../../static/images/play/superjacket.png") center center
        no-repeat;
}
.play .p-bottom .wrap .right .superjacket span {
    display: block;
    margin: 0 auto;
    text-align: center;
    padding-top: 35px;
    color: #fff;
    font-size: 17.8px;
}

/* 右侧 赢家榜 */
.phone {
    height: 368px;
}
.phone > img {
    width: 100%;
    height: 100%;
}
/* play 结束  */
</style>
