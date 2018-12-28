<template>
    <div class="wrap">

        <!-- 首页弹窗广告 -->
        <div class="center" ref="center" v-show="titleArr && secondArr && centerShow">
            <div class="centerContent">
                <div>
                    <h4>银河娱乐城欢迎您！</h4>
                    <span class="iconfont icon-guanbi1" @click="closeCenter($event)"></span>
                </div>

                <ul class="titleArr">
                    <li v-for="(item,index) in titleArr" :key="index">
                        <!-- 有模板名时跳转网页 -->
                        <router-link v-if="item.name" ref="color" tag="a" target="_blank" :to="item.name">
                            {{item.title}}
                        </router-link>
                        <!-- 没有模板时跳转链接 -->
                        <a v-else target="_blank" ref="color" :href="item.src">
                            {{item.title}}
                        </a>
                    </li>
                </ul>
                <ul class="secondNav">
                    <li v-for="(item,index) in secondArr" :key="index">
                        <div>
                            <img v-lazy="item.icon" alt="">
                        </div>
                        <div>
                            <h6>{{item.title}}</h6>
                            <span>{{item.content}}</span>
                        </div>
                    </li>
                    <li class="time" ref="time"></li>
                </ul>
                <div class="centerWrap clearfix" v-if="centerArr.length > 0">
                    <div class="centerLeft">
                        <!-- 上一个 -->
                        <div class="swiper-button-prev"></div>
                        <swiper class="lunbo" :options="swiperOption" ref="swiperOption">
                            <!-- 左侧轮播导航 -->
                            <swiper-slide class="banner" ref="banner" v-for="(item,index) in centerArr" :key="index">
                                <p>
                                    <i :class="item.icon"></i>{{item.title}}
                                </p>
                                <span>{{item.src}}</span>
                            </swiper-slide>
                        </swiper>
                        <!-- 下一个 -->
                        <div class="swiper-button-next"></div>
                    </div>
                    <!-- 右侧对应的轮播内容 -->
                    <ul class="centerRight">
                        <li ref="right" v-for="(newitem,newindex) in centerArr" :key="newindex" v-show="bannerIndex == newindex" v-html="newitem.content"></li>
                    </ul>
                </div>

                <div>
                    <router-link to="pay" v-if="titleArr[0]">
                        <img v-lazy="titleArr[0].icon" alt="">
                    </router-link>
                </div>
            </div>
        </div>

        <!-- 左侧广告 -->
        <div class="mid mid-left" v-show="midLeftShow" v-if="aslideLeft" ref="midLeft">
            <!-- 有模板名时跳转网页 -->
            <router-link v-for="(item,index) in aslideLeft" v-if="item.name" tag="a" target="_blank" :to="item.name" :key="index">
                <img v-lazy="item.src" alt="">
            </router-link>
            <!-- 没有模板时跳转链接 -->
            <a v-else target="_blank" :href="item.url">
                <img v-lazy="item.src" alt="">
            </a>

            <span @click="close('left')">
                <img src="../../static/images/advertising/close.png" alt="">
            </span>
        </div>
        <!-- 右侧广告 -->
        <div class="mid mid-right" v-show="midRightShow" v-if="aslideRight" ref="midRight">
            <!-- 有模板名时跳转网页 -->
            <router-link v-for="(item,index) in aslideRight" v-if="item.name" tag="a" target="_blank" :to="item.name" :key="index">
                <img v-lazy="item.src" alt="">
            </router-link>
            <!-- 没有模板时跳转链接 -->
            <a v-else target="_blank" :href="item.url">
                <img v-lazy="item.src" alt="">
            </a>
            <span @click="close('right')">
                <img src="../../static/images/advertising/close.png" alt="">
            </span>
        </div>

        <!-- 左下角广告 -->
        <div class="bot botLeft" v-show="leftBotShow" v-if="aslideLeftBot">
            <span class="iconfont icon-guanbi1" @click="close('leftbot')"></span>
            <!-- 有模板名时跳转网页 -->
            <router-link v-if="aslideLeftBot.name" tag="a" target="_blank" :to="aslideLeftBot.name" :key="index">
                <img v-lazy="aslideLeftBot.src" alt="">
            </router-link>
            <!-- 没有模板时跳转链接 -->
            <a v-else target="_blank" :href="aslideLeftBot.url">
                <img v-lazy="aslideLeftBot.src" alt="">
            </a>
        </div>
        <!-- 右下角广告 -->
        <div class="bot botRight" v-show="rightBotShow" v-if="aslideRightBot">
            <span class="iconfont icon-guanbi1" @click="close('rightbot')"></span>
            <!-- 有模板名时跳转网页 -->
            <router-link v-if="aslideRightBot.name" tag="a" target="_blank" :to="aslideRightBot.name" :key="index">
                <img v-lazy="aslideRightBot.src" alt="">
            </router-link>
            <!-- 没有模板时跳转链接 -->
            <a v-else target="_blank" :href="aslideRightBot.url">
                <img v-lazy="aslideRightBot.src" alt="">
            </a>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import 'swiper/dist/css/swiper.css'    //在全局没引入，这里记得要！
import axios from "axios";
import "../iconfont/iconfont.css";
export default {
    name: "index",
    data() {
        const that = this;
        return {
            centerShow: false, //首页弹窗 关闭
            midLeftShow: true, //左侧广告 关闭
            midRightShow: true, //右侧广告 关闭
            leftBotShow: true, //左下角广告 关闭
            rightBotShow: true, //右下角广告 关闭
            bannerIndex: 0,
            // 游戏轮播插件
            swiperOption: {
                //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: {
                    delay: 3000, //3秒切换一次
                    disableOnInteraction: false
                },
                direction: "vertical",
                grabCursor: true,
                slidesPerView: "auto",
                setWrapperSize: true,
                pagination: ".swiper-pagination",
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
                debugger: true,
                on: {
                    slideChangeTransitionEnd: function(swiper) {
                        let bannerArr = document.getElementsByClassName(
                            "banner"
                        );
                        let banner = that.$refs.banner;

                        for (let i = 0; i < bannerArr.length; i++) {
                            bannerArr[i].classList.remove("hover");
                        }
                        // +2 为了让左侧有显示 不加2的时候有不显示的问题
                        bannerArr[this.activeIndex + 2].classList.add("hover");
                        // 对应的右边内容显示
                        that.bannerIndex = this.activeIndex % banner.length;
                    }
                }
            }
        };
    },
    computed: {
        // 左侧中间广告
        aslideLeft() {
            return this.$store.state.aslideLeft
                ? this.$store.state.aslideLeft
                : false;
        },
        // 右侧中间广告
        aslideRight() {
            return this.$store.state.aslideRight
                ? this.$store.state.aslideRight
                : false;
        },
        // 左下角广告
        aslideLeftBot() {
            return this.$store.state.aslideLeftBot
                ? this.$store.state.aslideLeftBot
                : false;
        },
        // 右下角广告
        aslideRightBot() {
            return this.$store.state.aslideRightBot
                ? this.$store.state.aslideRightBot
                : false;
        },
        //首页弹窗数据 顶部导航
        titleArr() {
            return this.$store.state.titleArr;
        },
        //首页弹窗数据 导航下面的时间信息
        secondArr() {
            return this.$store.state.secondArr;
        },
        //首页弹窗轮播数据
        centerArr() {
            return this.$store.state.lunboArr;
        }
    },
    methods: {
        goin(a, b, c) {
            let that = this;
            this.common.goin(a, b, c, that);
        },
        // 侧边栏动画
        aslideScroll() {
            let that = this;
            // 获取左侧导航
            let midLeft = this.$refs.midLeft;
            let midRight = this.$refs.midRight;
            if (!midLeft && !midRight) return;
            // 到顶部距离
            let scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            let t =
                scrollTop +
                (document.documentElement.clientHeight - midLeft.offsetHeight) /
                    2;
            let t2 =
                scrollTop +
                (document.documentElement.clientHeight -
                    midRight.offsetHeight) /
                    2;
            // 清空上一次执行的定时器
            clearInterval(that.timer);
            // 给当前移动的距离设置定时器
            that.timer = setInterval(function() {
                // 左侧广告
                let iSpeed = (t - midLeft.offsetTop) / 10;
                // 右侧广告
                let iSpeed2 = (t2 - midRight.offsetTop) / 10;
                iSpeed = iSpeed > 0 ? Math.floor(iSpeed) : Math.floor(iSpeed);
                iSpeed2 =
                    iSpeed2 > 0 ? Math.floor(iSpeed2) : Math.floor(iSpeed2);
                // 当isspeed的数值变成0时  清除定时器
                if (iSpeed == 0 || iSpeed2 == 0) {
                    clearInterval(that.timer);
                } else {
                    midLeft.style.top = midLeft.offsetTop + iSpeed + "px";
                    midRight.style.top = midRight.offsetTop + iSpeed2 + "px";
                }
            }, 30);
        },
        // 侧边栏广告关闭
        close(around) {
            if (around == "left") {
                this.midLeftShow = false;
            } else if (around == "right") {
                this.midRightShow = false;
            } else if (around == "leftbot") {
                this.leftBotShow = false;
            } else if (around == "rightbot") {
                this.rightBotShow = false;
            }
        },
        // 关闭首页广告
        closeCenter() {
            this.centerShow = !this.centerShow;
            window.sessionStorage.setItem("centerShow", 1);
        },
        // 首页弹窗轮播
        swiperChange() {
            //上面的游戏轮播图
            //因为loop复制的 用ref获取不了  所以用class获取
            let banner = document.getElementsByClassName("banner");
            let bannerRight = this.$refs.banner; //获取没有复制前 实际的个数
            let bannerArr = [...banner]; //转成数组
            let that = this;
            if (bannerArr == [] || !bannerRight) return;
            bannerArr.forEach((item, index) => {
                // 这里的index-2 是为了和右边内容的下标对应 （不减2就对应不上。）
                let j = (index - 2) % bannerRight.length; //复制的 % 实际的(一共三组---前 中 后)
                // 给所有的slide添加一个类名  对应着自身的index
                item.classList.add("banner" + j); //三组添加 对应自身index 的类名
                item.onmouseenter = function() {
                    // 获取所有的 slide  包括复制的  （复制的和本身的class相同）
                    let gamesHover = document.getElementsByClassName(
                        "banner" + j
                    );
                    // 先让所有的都清除 hover类名 (改变自身颜色)
                    for (let i = 0; i < bannerArr.length; i++) {
                        bannerArr[i].classList.remove("hover");
                    }
                    // 给当前所有符合的slide 加一个类名
                    for (let key = 0; key < gamesHover.length; key++) {
                        gamesHover[key].classList.add("hover");
                    }
                    // 让对应的 右边的详细列表显示出来
                    that.bannerIndex = j;
                };
            });
        }
    },
    created() {
        // 第一次进入首页时  点击关闭后存一个session  然后当前读取 如果有session 就不显示首页弹窗 如果没有 就显示
        if (window.sessionStorage.getItem("centerShow")) {
            this.centerShow = false;
        }
    },
    mounted() {
        this.$nextTick(function() {
            // 首页弹窗的时间
            let time = this.$refs.time;
            let that = this;
            window.Datetimer = setInterval(function() {
                // 首页广告 导航
                let colorList = that.$refs.color;
                // 首页广告 导航的文字变色
                if (colorList) {
                    colorList[1].style.color =
                        "rgb(" +
                        Math.floor(Math.random() * 256) +
                        "," +
                        Math.floor(Math.random() * 256) +
                        "," +
                        Math.floor(Math.random() * 256) +
                        ")";
                    colorList[2].style.color =
                        "rgb(" +
                        Math.floor(Math.random() * 256) +
                        "," +
                        Math.floor(Math.random() * 256) +
                        "," +
                        Math.floor(Math.random() * 256) +
                        ")";
                    colorList[3].style.color =
                        "rgb(" +
                        Math.floor(Math.random() * 256) +
                        "," +
                        Math.floor(Math.random() * 256) +
                        "," +
                        Math.floor(Math.random() * 256) +
                        ")";
                    colorList[4].style.color =
                        "rgb(" +
                        Math.floor(Math.random() * 256) +
                        "," +
                        Math.floor(Math.random() * 256) +
                        "," +
                        Math.floor(Math.random() * 256) +
                        ")";
                }
                // 首页导航 的时间
                let newdate = new Date();
                let str = "";
                let week = newdate.getDay();
                if (week == 0) {
                    str = "星期日";
                } else if (week == 1) {
                    str = "星期一";
                } else if (week == 2) {
                    str = "星期二";
                } else if (week == 3) {
                    str = "星期三";
                } else if (week == 4) {
                    str = "星期四";
                } else if (week == 5) {
                    str = "星期五";
                } else if (week == 6) {
                    str = "星期六";
                }
                time.innerHTML =
                    newdate.getFullYear() +
                    "年" +
                    (newdate.getMonth() + 1) +
                    "月" +
                    newdate.getDate() +
                    "日" +
                    newdate.toLocaleTimeString() +
                    str;
            }, 1000);

            //左、右侧导航动画
            window.addEventListener("scroll", this.aslideScroll);
        });
    },
    beforeDestroy() {
        // 离开时给scroll解绑
        window.removeEventListener("scroll", this.aslideScroll);
        // 清除定时器
        clearInterval(window.timer);
        clearInterval(window.Datetimer);
    },
    watch: {
        // 只有首页有 弹窗广告 并且在登录状态下没有弹窗广告 并且在关闭一次广告之后就不显示
        $route(to, from) {
            let user = window.sessionStorage.getItem("login_user");
            let centerShow = window.sessionStorage.getItem("centerShow");
            if (to.name == "index" && !user && !centerShow) {
                this.centerShow = true;
                return;
            }
            // 如果 进入的路由不是首页 就存一个session 让下一次进入首页也不显示弹窗
            this.centerShow = false;
            window.sessionStorage.setItem("centerShow", 1);
        },
        // 如果首页弹窗的数组接收到了数据 则开始执行方法
        centerArr(val, oldval) {
            if (val && val.length > 0){
                // 首页弹窗轮播
                this.$nextTick(()=>{
                    this.swiperChange();
                })
            };
        }
    }
};
</script>
<style scoped>
.hover {
    color: #997745;
    border: 1px solid #997645 !important;
}
/* 左右广告 */
.wrap .mid {
    position: absolute;
    top: 25%;
    z-index: 3;
    width: 140px;
    text-align: center;
    font-size: 0;
}
.wrap .mid-right {
    right: 0;
}

.wrap > div > span {
    display: inline-block;
    position: absolute;
    bottom: -22px;
    right: 0;
    width: 100%;
    text-align: center;
    cursor: pointer;
}
.wrap > div a {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 0;
}
/* 左下角 右下角广告 */
.wrap .bot {
    position: fixed;
    bottom: 0;
    z-index: 5;
    width: auto;
}

.wrap .bot span {
    position: absolute;
    top: -40px;
    right: 0;
    width: 25px;
    height: 25px;
    line-height: 25px;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    text-align: center;
}
.wrap .bot a {
    position: relative;
    top: 0;
    bottom: 0;
}
.wrap .botRight {
    right: 0;
}
.wrap .botRight span {
    right: 100%;
}

/* 首页弹窗 */
.wrap .center {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}
.wrap .center > div {
    position: fixed;
    margin: auto;
    top: 5%;
    left: 0;
    right: 0;
    width: 910px;
    height: 685px;
    background-color: #fff;
}

.wrap .centerContent > div:first-of-type span {
    position: absolute;
    right: 5px;
    top: 10px;
    z-index: 5;
    text-align: center;
    border-radius: 50%;
    font-size: 20px;
    color: #fff;
    background-color: #000;
    padding: 5px;
    cursor: pointer;
}

.wrap .center a {
    font-size: 16px;
    font-weight: bold;
}

.wrap .centerContent > div h4 {
    height: 50px;
    line-height: 50px;
    text-align: left;
    text-indent: 20px;
    color: #fff;
    font-size: 20px;
    background: linear-gradient(90deg, #997645, #fde5b1, #997645);
}
.titleArr {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    height: 48px;
    background: url("../../static/images/advertising/titleBg.png") no-repeat;
}
.titleArr li {
    width: 20%;
    height: 100%;
    line-height: 45px;
    text-align: center;
}
.titleArr li:first-child a {
    display: none;
}

.secondNav,
.secondNav li {
    display: flex;
    justify-content: center;
    align-items: center;
}
.secondNav li {
    position: relative;
    padding: 10px 0;
    width: 25%;
}
.secondNav .time {
    padding: 0 40px;
    font-size: 16px;
    box-sizing: border-box;
    text-align: center;
}
.secondNav li::after {
    display: inline-block;
    position: absolute;
    right: 0;
    content: "";
    height: 80%;
    border-right: 1px solid #919191;
}
.secondNav li h6 {
    font-size: 26px;
    color: #e9704f;
}
.secondNav li span {
    color: #919191;
    font-size: 14px;
}

.wrap .centerWrap ul {
    float: left;
    padding: 0 10px;
    box-sizing: border-box;
}

.swiper-button-next,
.swiper-button-prev {
    position: absolute;
    background: none;
    width: 90%;
    margin-left: 5%;
    height: 20px;
    background-color: #eee;
    outline: none;
}
.lunbo {
    height: 415px;
    overflow: hidden;
}
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 5px 0;
    padding: 5px 0;
    width: 99%;
    height: 60px;
    border: 1px solid #000;
    box-sizing: border-box;
}
.swiper-button-prev {
    top: 20px;
    left: 0;
    background: url("../../static/images/advertising/prev.png") no-repeat center
        #eee;
}
.swiper-button-next {
    left: 0;
    top: 100%;
    background: url("../../static/images/advertising/next.png") no-repeat center
        #eee;
}

.wrap .centerLeft {
    position: relative;
    float: left;
    padding: 20px 10px;
    width: 25%;
    height: 460px;
    text-align: center;
    background-color: #fff;
    box-sizing: border-box;
}

.wrap .centerContent .centerRight {
    width: 75%;
    height: 460px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
}
.centerRight li {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
.centerRight li img {
    width: 100%;
    height: 100%;
}
</style>
