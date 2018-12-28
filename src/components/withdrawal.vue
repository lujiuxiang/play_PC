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
                        <img src="../../static/images/register-img/banner.jpg" alt="">
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
        <div class="play refisterWrap">
            <div class="playwrap refister clearfix">
                <div class="left">
                    <ul>
                        <li v-for="(item,index) in aslide" ref="aslide" v-if="aslide.length>1" :key="index">
                            <!-- 有模板时 -->
                            <router-link v-if="item.name" :to="item.name" :style="item.bg"></router-link>
                            <!-- 没有模板时 跳转 -->
                            <a href="" v-else target="blank" :style="item.bg"></a>
                        </li>
                    </ul>
                    <div class="bot-bg"></div>
                </div>
                <!-- 取款帮助 -->
                <div class="right first">
                    <div class="txt">
                        <span>取款帮助</span>
                        <span class="tal">取款方法</span>
                        <p>1.会员登入后点选”在线取款”。</p>
                        <p>2.输入取款密码，输入取款金额，核实银行卡号及持卡人姓名与提款人姓名是否一致，核对后点击[确定送出]。</p>
                        <p>3.取款支持银行：（建议优先选择：中国、农业、建设、工商、招商、民生）其他银行以实际选项支持的银行为准。</p>
                        <p>4.取款期间如有任何问题，请您洽谈[7*24小时在线客服]，我们将在第一时间为您解答问题。</p>

                        <span class="tal">取款需知</span>
                        <p>1.最低取款为$１０人民币，单笔最高取款上限为$３００,０００人民币。</p>
                        <p>2.取款不限次数，无需任何手续费，畅想存取款无极限。</p>
                        <p>3.如未达到有效投注的情况下申请取款，系统需扣除50％行政费＋50元的手续费。</p>

                        <span class="tal">有效投注</span>
                        <p>1.会员每次存款成功后系统将自动设置１倍有效投注存入稽核点（没有申请需要指定流水的活动情况下），需要达到相对应的有效投注。</p>
                        <p>2.当未达到有效投注常态性稽核，扣除存款的50%行政费＋50元手续费。</p>
                        <p>3.由最后一次有效投注稽核点往前推，看每次存款后，是否都有达到有效投注常态性稽核，放宽额度为5元，如您账户额度低于5元将自动清除稽核点。</p>
                        <p>4.线上取款页面会显示每一次会员的存款时间、每次存款后的有效投注额、每一次需要达到的稽核点、以及是否通过每一次稽核。</p>
                        <p>温馨提示： 各游戏和局/未接受/取消注单，不纳入有效投注计算；运动博弈游戏项目，大赔率玩法计算有效投注金额，小赔率玩法计算输赢金额为有效投注；大赔率产品包括：标准盘、过关、波胆、总入球、半全场、双胜彩、冠军赛灯。</p>
                        <p>5.如有任何问题，请洽谈7*24小时在线客服。</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- play 结束 -->

        <!-- body 结束 -->

        <!-- 底部 开始 -->
        <commonfooter></commonfooter>
        <!-- 底部 结束 -->

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
            aslide: [
                {
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/aboutUs-img/aslide1.png") +
                            ") no-repeat -30px top"
                    },
                    name: "aboutUs"
                },
                {
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/aboutUs-img/aslide2.png") +
                            ") no-repeat -30px top"
                    },
                    name: "contactUs"
                },
                {
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/aboutUs-img/aslide3.png") +
                            ") no-repeat -30px top"
                    },
                    name: "partner"
                },
                {
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/aboutUs-img/aslide4.png") +
                            ") no-repeat -30px top"
                    },
                    name: "deposit"
                },
                {
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/aboutUs-img/aslide5.png") +
                            ") no-repeat -30px top"
                    },
                    name: "withdrawal"
                },
                {
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/aboutUs-img/aslide6.png") +
                            ") no-repeat -30px top"
                    },
                    name: "questions"
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
    },
    methods: {
        goin(a, b, c) {
            let that = this;
            this.common.goin(a, b, c, that);
        }
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

<style scoped src="../css/footer.css"></style>