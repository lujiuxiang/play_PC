<template>
    <div class="lotteryGames">
        <!-- title 开始 -->
        <div class="lo-title"></div>
        <!-- title 结束 -->

        <!-- 顶部导航 开始 -->
        <div class="lo-titleNav">
            <router-link to="" :class="titleNavShow == index? 'titleSelected' : ''" ref="titlenav" v-for="(item,index) in games" :key="index" @click.native="titleSecelt(index)">{{item.title}}</router-link>
        </div>
        <!-- 顶部导航 结束 -->
        <!-- 顶部导航的二级菜单 开始-->
        <div class="lo-titleNavSub">
            <div ref="titleNavSubWrap" v-show="titleNavSubShow == index" v-for="(item,index) in games" :key="index">
                <router-link ref="titleNavSub" to="" :class="titleNavSubClassIndex == titleindex? 'yellow' : '' " class="titleNavSub" v-for="(title,titleindex) in item.subArr" :key="titleindex" @click.native="titleNavSubSecelt(titleindex)">
                    {{title.title}}
                </router-link>
            </div>
        </div>
        <!-- 顶部导航的二级菜单 结束-->

        <!-- 二级菜单对应的游戏 开始 -->
        <div class="lo-content clearfix">
            <!-- 左侧导航 -->
            <div class="lo-left">
                <router-link to="">账户信息</router-link>
                <div>
                    <span>
                        <i>账号:</i>xxx
                    </span>
                    <span>
                        <i>账号余额:</i>xxx
                    </span>
                    <span>
                        <i>未结金额:</i>xxx
                    </span>
                </div>
                <router-link to="pay" tag="a" target='_blank'>在线充值</router-link>
                <router-link :to="{name:'memberCenter',query:{index:2,num:2}}" tag="a" target='_blank'>在线提款</router-link>
                <router-link to="memberCenter" tag="a" target='_blank'>个人中心</router-link>
            </div>
            <!-- 右侧游戏 开始 -->
            <div class="lo-right">
                <!-- 北京赛车 第一个游戏 两面盘 -->
                <div class="lo_Games block">
                    <div class="bj_GameOneMain">
                        <div class="bj_GameOneMainTop">
                            <table>
                                <th></th>
                                <th></th>
                            </table>
                            <div>

                            </div>
                        </div>
                        <div class="bj_GameOneMainBot">

                        </div>
                    </div>
                    <div class="bj_GameRightPage">

                    </div>
                </div>
                <div class="lo_Games none">北京2</div>
                <div class="lo_Games none">北京3</div>
                <div class="lo_Games none">重庆1</div>
                <div class="lo_Games none">重庆2</div>
                <div class="lo_Games none">重庆3</div>
                <div class="lo_Games none">重庆4</div>
                <div class="lo_Games none">重庆5</div>
                <div class="lo_Games none">重庆6</div>
                <div class="lo_Games none">广东1</div>
                <div class="lo_Games none">广东2</div>
                <div class="lo_Games none">广东3</div>
                <div class="lo_Games none">广东4</div>
                <div class="lo_Games none">广东5</div>
                <div class="lo_Games none">广东6</div>
                <div class="lo_Games none">广东7</div>
                <div class="lo_Games none">广东8</div>
                <div class="lo_Games none">广东9</div>
                <div class="lo_Games none">广东10</div>
                <div class="lo_Games none">广东11</div>
                <div class="lo_Games none">广东12</div>

            </div>
        </div>

        <!-- body 结束 -->

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

        <!-- 底部 开始 -->
        <!-- <commonfooter></commonfooter> -->
        <!-- 底部 结束 -->

    </div>

</template>

<script>
import commonfooter from "./../commonViews/footer.vue";
import "./../css/common.css";

export default {
    name: "index",
    data() {
        return {
            // 顶部导航和导航的二级菜单数据
            games: [
                {
                    title: "北京赛车",
                    subArr: [
                        {
                            title: "两面盘"
                        },
                        {
                            title: "单号1~10"
                        },
                        {
                            title: "冠亚组合"
                        }
                    ]
                },
                {
                    title: "重庆时时彩",
                    subArr: [
                        {
                            title: "整合"
                        },
                        {
                            title: "第一球"
                        },
                        {
                            title: "第二球"
                        },
                        {
                            title: "第三球"
                        },
                        {
                            title: "第四球"
                        },
                        {
                            title: "第五球"
                        }
                    ]
                },
                {
                    title: "广东快乐十分",
                    subArr: [
                        {
                            title: "两面盘"
                        },
                        {
                            title: "单号1~8"
                        },
                        {
                            title: "第一球"
                        },
                        {
                            title: "第二球"
                        },
                        {
                            title: "第三球"
                        },
                        {
                            title: "第四球"
                        },
                        {
                            title: "第五球"
                        },
                        {
                            title: "第六球"
                        },
                        {
                            title: "第七球"
                        },
                        {
                            title: "第八球"
                        },
                        {
                            title: "正码"
                        },
                        {
                            title: "连码"
                        }
                    ]
                },
                {
                    title: "重庆幸运农场",
                    subArr: [
                        {
                            title: "两面盘"
                        },
                        {
                            title: "单号1~8"
                        },
                        {
                            title: "第一球"
                        },
                        {
                            title: "第二球"
                        },
                        {
                            title: "第三球"
                        },
                        {
                            title: "第四球"
                        },
                        {
                            title: "第五球"
                        },
                        {
                            title: "第六球"
                        },
                        {
                            title: "第七球"
                        },
                        {
                            title: "第八球"
                        },
                        {
                            title: "正码"
                        },
                        {
                            title: "连码"
                        }
                    ]
                },
                {
                    title: "PC蛋蛋",
                    subArr: [
                        {
                            title: "PC蛋蛋"
                        }
                    ]
                },
                {
                    title: "北京快乐8",
                    subArr: [
                        {
                            title: "总和、比数、五行"
                        },
                        {
                            title: "正码"
                        }
                    ]
                },
                {
                    title: "广东11选5",
                    subArr: [
                        {
                            title: "总和、比数、五行"
                        },
                        {
                            title: "正码"
                        }
                    ]
                },
                {
                    title: "江苏骰宝(快3)",
                    subArr: [
                        {
                            title: "大小骰宝"
                        }
                    ]
                },
                {
                    title: "幸运飞艇",
                    subArr: [
                        {
                            title: "两面盘"
                        },
                        {
                            title: "单号1~10"
                        },
                        {
                            title: "冠亚组合"
                        }
                    ]
                },
                {
                    title: "香港六合彩",
                    subArr: [
                        {
                            title: "特码"
                        },
                        {
                            title: "两面"
                        },
                        {
                            title: "色波"
                        },
                        {
                            title: "特肖"
                        },
                        {
                            title: "合肖"
                        },
                        {
                            title: "特码头尾数"
                        },
                        {
                            title: "正码"
                        },
                        {
                            title: "正码特"
                        },
                        {
                            title: "正码1~6"
                        },
                        {
                            title: "五行"
                        },
                        {
                            title: "平特—肖尾数"
                        },
                        {
                            title: "正肖"
                        },
                        {
                            title: "7色波"
                        },
                        {
                            title: "总肖"
                        },
                        {
                            title: "自选不中"
                        },
                        {
                            title: "连肖连尾"
                        },
                        {
                            title: "连码"
                        }
                    ]
                }
            ],
            titleNavShow: "",
            // 二级菜单显示/隐藏
            titleNavSubShow: "",
            titleNavSubClassIndex: ""
        };
    },
    components: {
        commonfooter
    },
    computed: {
        // 最新消息
        news() {
            return this.$store.state.news;
        }
    },
    created() {
        let that = this;
        this.common.noData(that);
    },
    methods: {
        // 顶部导航 被选中时 切换样式
        titleSecelt(index) {
            // 获取顶部导航 （最外层选项卡）
            let titleNavSubWrap = this.$refs.titleNavSubWrap;
            // 获取当前顶部导航下的 子级选项卡
            let titlNavSub = titleNavSubWrap[index].getElementsByTagName("a");
            // 默认切换最外层选项卡时 子级选项卡的第一个被点击
            titlNavSub[0].click();

            // 顶部导航改变样式
            this.titleNavShow = index;
            // 顶部导航的二级菜单改变显示
            this.titleNavSubShow = index;
            // 顶部导航切换后 二级菜单默认第一个显示
            this.titleNavSubClassIndex = 0;
        },
        titleNavSubSecelt(index) {
            // 顶部导航切换后 二级菜单默认第一个显示
            this.titleNavSubClassIndex = index;
        },
        // 二级菜单选项卡点击时 游戏也改变
        gamesShow() {
            
        }
    },
    mounted() {
        this.gamesShow();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped src='../css/lotteryGames.css'></style>