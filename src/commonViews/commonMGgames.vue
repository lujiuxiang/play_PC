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
                    <router-link to="">
                        <img src="../../static/images/MGtiger-img/banner/banner1.png" alt="">
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
        <!-- banner 结束 -->
        <!-- play 开始 -->
        <div class="play">
            <div>
                <div class="p-top">
                    <div>
                        <!-- 游戏轮播 开始 -->
                        <div class="banner">
                            <swiper :options="swiperOption">
                                <swiper-slide class="gamesBanner" ref="gamesBanner" v-for="(item,index) in games" :key="index">
                                    <img v-lazy="item.src" alt="">
                                    <div>
                                        <span v-text="item.topName"></span>
                                        <span v-text="item.botName"></span>
                                    </div>
                                    <router-link @click.native="changeList(index,item.platform)" to=""></router-link>
                                </swiper-slide>

                            </swiper>
                            <div class="swiper-button-prev" slot="button-prev">
                                <img src="../../static/images/play/left.png" alt="">
                            </div>
                            <div class="swiper-button-next" slot="button-next">
                                <img src="../../static/images/play/right.png" alt="">
                            </div>
                        </div>
                        <!-- 游戏轮播 结束 -->
                    </div>
                </div>
                <div class="p-bottom">
                    <div class="text">
                        <ul>
                            <li>
                                <span>游戏分类：</span>
                            </li>
                            <li>
                                <span>全部游戏</span>
                                <i class="text-bg"></i>
                            </li>
                            <li>
                                <li>
                                    <span>游戏类型</span>
                                    <i class="text-bg"></i>
                                </li>
                                <li class="right">
                                    <span>搜索游戏:</span>
                                    <input ref="search" type="text">
                                    <input @click="search" type="button" value="搜素">
                                </li>
                        </ul>
                    </div>
                    <ul class="wrap clearfix">
                        <li v-for="(newitem,newindex) in gList" :key="newindex" class="gamesList">
                            <span v-text="newitem.gamename"></span>
                            <!-- 模板不存在时 点击显示对应的游戏列表 -->
                            <a @click="goin(newitem.platform,newitem.gamecode,newitem.moneycode)">
                                <span>
                                    <img v-lazy="newitem.src" alt="">
                                </span>
                            </a>
                        </li>
                    </ul>
                    <div class="listButton">
                        <b @click="goFirst(1,page.platform,page.gamename,page.type)">首页</b>
                        <b @click="prevPage(page.page,page.endpage,page.platform,page.gamename,page.type)">上一页</b>
                        <span>当前页:
                            <i>{{page.page}}</i>
                        </span>
                        <b @click="nextPage(page.page,page.endpage,page.platform,page.gamename,page.type)">下一页</b>
                        <b @click="goEnd(page.endpage,page.platform,page.gamename,page.type)">尾页</b>
                        <span>共
                            <i>{{page.endpage}}</i>页</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- play 结束 -->

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
import "swiper/dist/css/swiper.css";
import "./../css/common.css";
import "./../css/MGtigerCommon.css";

export default {
    name: "index",
    data() {
        return {
            titleList: [],
            games: [],
            gList: "",
            page: "",
            swiperOption: {
                //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: true,
                // direction : 'vertical',
                grabCursor: true,
                slidesPerView: "auto",
                setWrapperSize: true,
                autoHeight: true,
                pagination: ".swiper-pagination",
                //   el: '.swiper-pagination',
                paginationClickable: true,
                // loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
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
        // 跳转游戏函数
        goin(a, b, c) {
            let that = this;
            this.common.goin(a, b, c, that);
        },

        // 封装axios请求
        gameSelectAxios(platform,page,type,name){
            this.$post("game/game/gameSelect",{
                platform: platform,
                page: page,
                type: type,
                name: name
            }).then(res=>{
                if(res.gameplatform){
                    this.games = res.gameplatform
                }
                this.gList = res.glist;
                this.page = res.page;
            }).catch(err=>{
                console.log(err);
            })
        },
        // 封装axios请求
        gameSelectOneAxios(platform,page,type,gamename){
            this.$post("game/game/gameSelectOne",{
                gamename: gamename,
                page: page,
                platform: platform,
                type: type
            }).then(res=>{
                this.gList = res.glist;
                this.page = res.page;
            }).catch(err=>{
                console.log(err);
            })
        },

        // 点击轮播改变游戏列表
        changeList(index, platform) {
            let that = this;
            let gamesBanner = this.$refs.gamesBanner;
            // 让所有的轮播背景颜色恢复默认
            for (let i = 0; i < gamesBanner.length; i++) {
                gamesBanner[i].$el.style.background = "#2a2a2a";
            }
            // 当前点击的轮播背景颜色恢复默认
            gamesBanner[index].$el.style.background = "rgba(255,255,255,0.11)";
            // axios请求
            this.gameSelectAxios(platform,"",2)
        },

        // 搜索游戏
        search() {
            let that = this;
            let input = this.$refs.search;
            if (!input.value) {
                alert("请输入关键字查询！");
                return;
            }
            // axios请求
            this.gameSelectOneAxios(null,"",null,input.value)
        },

        // 下一页
        nextPage(page, endpage, platform, gamename, type) {
            let that = this;
            page++;
            if (page > endpage) return;
            if (gamename) {
                // axios 请求
                that.gameSelectOneAxios(platform,page,null,gamename)
            } else if (type == 1) {
                // axios 请求
                that.gameSelectAxios(null,page,1,that.$route.name)
            } else if (type == 2) {
                // axios 请求
                that.gameSelectAxios(platform,page,2)
            }
        },
        // 上一页
        prevPage(page, endpage, platform, gamename, type) {
            let that = this;
            page--;
            if (page < 1) return;
            if (gamename) {
                // axios 请求
                that.gameSelectOneAxios(platform,page,null,gamename)
            } else if (type == 1) {
                // axios 请求
                that.gameSelectAxios(null,page,1,that.$route.name)
            } else if (type == 2) {
                // axios 请求
                that.gameSelectAxios(platform,page,2)
            }
        },
        // 首页
        goFirst(first, platform, gamename, type) {
            let that = this;
            if (gamename) {
                // axios 请求
                that.gameSelectOneAxios(null,first,null,gamename)
            } else if (type == 1) {
                // axios 请求
                that.gameSelectAxios(null,first,1,that.$route.name)
            } else if (type == 2) {
                // axios 请求
                that.gameSelectAxios(platform,first,2)
            }
        },
        // 尾页
        goEnd(endpage, platform, gamename, type) {
            let that = this;
            if (gamename) {
                // axios 请求
                that.gameSelectOneAxios(null,endpage,null,gamename)
            } else if (type == 1) {
                // axios 请求
                that.gameSelectAxios(null,endpage,1,that.$route.name)
            } else if (type == 2) {
                // axios 请求
                that.gameSelectAxios(platform,endpage,2)
            }
        }
    },
    computed: {
        // 最新消息
        news() {
            return this.$store.state.news;
        }
    },
    activated() {
        let that = this;
        this.common.noData(that);
        // 默认请求当前页面的游戏列表
        this.gameSelectAxios(null,null,1,that.$route.name)
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
