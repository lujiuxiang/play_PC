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
                        <li v-for="(newitem,newindex) in aslide" :key="newindex" ref="aslide" v-if="aslide.length>1">
                            <!-- 有模板时 -->
                            <router-link v-if="newitem.name" :to="newitem.name" :style="newitem.bg"></router-link>
                            <!-- 没有模板时 跳转 -->
                            <a href="" v-else target="blank" :style="newitem.bg"></a>
                        </li>
                    </ul>
                    <div class="bot-bg"></div>
                </div>
                <!-- 存款帮助 -->
                <div class="right first">
                    <div class="txt">
                        <span>存款帮助</span>
                        <p>本公司拥有以下方式存款：</p>
                        <p>会员登入后点选“线上存款”。（在您第一次入款时，需先绑定您的出款银行）</p>
                        <span class="tal">一. 银行卡入款 </span>
                        <p>1. 会员登入后点击[线上存款]，选择[银行卡入款]</p>
                        <p>2. 请选择欲使用的银行卡。</p>
                        <p>3. 选择银行后，网页会显示可存入的银行账号。可直接点击网页上银行标志，自动为您带到银行首页，</p>
                        <p>登入您个人网银后，请将款项转入公司提供的入款账号。</p>
                        <p>※如您使用农业银行/工商银行， 请将公司入款订单号贴入您网银 [备注/附言] 字段</p>
                        <p>※建议选择与您转账的银行同一家，同银行间转账可以立即到帐，若跨行转账有可能较晚到帐。※</p>

                        <span class="tal">二. 线上支付步骤</span>
                        <p>1. 会员登入后点击 [线上存款]，选择 [线上支付]</p>
                        <p>2. 填写存款金额，如有任何问题，方便OG客服第一时间与您联系。</p>
                        <p>3. 选择”支付银行”：(支持借记卡： 工商银行，交通银行，农业银行，建设银行，招商银行，民生银行总行，深圳发展银行，上海浦东发展银行，北京银行，兴业银行，中信银行，光大银行，广东发展银行，中国邮政，中国银行 )</p>
                        <p>4. 填写验证码：点击方框，方框下面呈现背景文字“现在正支付至OG”的图片，把上面的四位阿拉伯数字填写到方框内。</p>
                        <p>5. 确认送出后，将请您确认您的支付订单无误，并建议您记录您的支付订单号后，确认送出，并耐心等待加载网络银行页面，传输中已将您账户数据加密，请耐心等待。</p>
                        <p>6. 进入网络银行页面，请确实填写您银行账号信息，支付成功，额度将在5分钟内系统处理完成，立即加入您的威尼斯人娱乐场会员账户。</p>

                        <span class="tal">【存款注意事项】</span>
                        <p>提供24小时人工和网上存款，银行卡入款可享受1%存款优惠，最低存款为$1人民币，最高存款上限为$50000人民币。线上支付单笔最低存款为$1人民币，最高存款上限为$50000人民币（具体以页面显示的为准）。存款优惠上限58888元，未开通网银的会员，请到您的开户银行柜台办理。如有任何问题，请联系24小时在线客服，谢谢。</p>
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


<style scoped src="../css/footer.css"></style>