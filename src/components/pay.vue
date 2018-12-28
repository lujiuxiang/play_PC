<template>
    <div class="index">
        <header>
            <!-- title 开始 -->
            <div class="title clearfix">
                <div class="logo">
                    <img src="../../static/images/title/weinisi.png" alt="">
                </div>
                <div class="slogan">
                    <img src="../../static/images/title/title-02.png" alt="">
                </div>
                <div class="topbar">
                    <router-link to="register">立即注册</router-link>
                    <!-- <router-link to="activitiesHall">活动大厅</router-link> -->
                </div>
                <div class="service">
                    <a href="https://ziker-talk.yun.pingan.com/webim/?channel=WEBIM&authorizerAppid=webim2c83aec44342e0a&eid=86a67bbad3e4b01765bf596b95e47b4e&theme=07c5ba" target="_blank">在线客服</a>
                </div>
            </div>
            <!-- title 结束 -->
        </header>

        <!-- body 开始 -->
        <div class="banner">
            <!-- 网站背景动态悬浮图片设置 背景图片 -->
            <div class="bannerBg">
                <img src="../../static/images/title/banner.jpg">
            </div>
        </div>
        <!-- 充值 开始 -->
        <div class="payWrap">
            <div class="bd">
                <h1>
                    <strong>
                        <span> 支持</span>
                        <span>
                            <i>【手机端、电脑端】</i>
                        </span>
                        <span>银联钱包、微信、支付宝、QQ钱包、京东钱包、手机网银等便捷支付！ </span>
                    </strong>
                </h1>
                <p>
                    扫一扫支付，手机也能支付，输入支付网址：
                    <span>33117zf.com</span>
                    一键入款，立即到账!
                </p>
                <p>
                    支付流程：输入正确的会员账号→选择支付类型→输入充值额度→点击确认支付→付款成功后1~10秒自动到账；
                </p>
                <p>
                    <span>付款时，系统会随机产生2位小数点（0.01-0.99），请放心支付！</span>
                </p>

                <!-- 充值表单  -->
                <form ref="form" action="http://148.72.206.211:803/public/alipay/pagepay/pagepay.php" method=post target="_blank" id="form">
                    <ul>
                        <li>
                            <p class="form-left">会员账号：</p>
                            <p class="form-mid">
                                <input type="text" ref="user" placeholder="请填写会员账号，否则无法正常充值！">
                            </p>
                            <p class="form-right">*必填</p>
                        </li>
                        <li>
                            <p class="form-left">确认账号：</p>
                            <p class="form-mid">
                                <input type="text" ref="affirm" placeholder="请再次填写会员账号！">
                            </p>
                            <p class="form-right">*必填</p>
                        </li>
                        <li>
                            <div class="payBox clearfix">
                                <p class="form-left">支付类型：</p>
                                <div class="pay-label-wrap">
                                    <label class="pay-label" for="weixin">
                                        <span>51-4999</span>
                                        <input type="radio" name="pay" value="0" id="weixin">
                                        <span>
                                            <img src="../../static/images/pay-img/2.png" alt=""> 微信支付
                                        </span>
                                    </label>
                                    <label class="pay-label" for="Alipay">
                                        <span>51-4999</span>
                                        <input type="radio" name="pay" value="1" id="Alipay">
                                        <span>
                                            <img src="../../static/images/pay-img/1.png" alt=""> 支付宝扫码
                                        </span>
                                    </label>

                                    <label class="pay-label" for="Unionpay">
                                        <span>推荐使用！！</span>
                                        <input type="radio" name="pay" value="2" id="Unionpay">
                                        <span>
                                            <img src="../../static/images/pay-img/3.png" alt=""> 银联支付
                                        </span>
                                    </label>
                                    <label class="pay-label" for="Unionpaycode">
                                        <span>1-3000</span>
                                        <input type="radio" name="pay" value="3" id="Unionpaycode">
                                        <span>
                                            <img src="../../static/images/pay-img/3.png" alt=""> 网银支付
                                        </span>
                                    </label>
                                    <label class="pay-label" for="Internetbank">
                                        <span></span>
                                        <input type="radio" name="pay" value="4" id="Internetbank">
                                        <span>
                                            <img src="../../static/images/pay-img/5.png" alt=""> 京东支付
                                        </span>
                                    </label>
                                    <label class="pay-label" for="QQ">
                                        <span></span>
                                        <input type="radio" name="pay" value="5" id="QQ">
                                        <span>
                                            <img src="../../static/images/pay-img/6.png" alt=""> QQ扫码
                                        </span>
                                    </label>

                                </div>
                                <p class="form-right">*必填</p>
                            </div>
                        </li>
                        <li>
                            <input ref="WIDbody" id="WIDbody" name="WIDbody" type="hidden" value="" />
                            <input ref="WIDsubject" id="WIDsubject" name="WIDsubject" type="hidden" value="" />
                            <input ref="WIDout_trade_no" id="WIDout_trade_no" name="WIDout_trade_no" type="hidden" value="" />
                            <input ref="WIDtotal_amount" type="hidden" class="layui-input" id="WIDtotal_amount" name="WIDtotal_amount" placeholder="请输入充值金额">
                            <p class="form-left">确认额度：</p>
                            <p class="form-mid">
                                <input type="text" ref="money" placeholder="微信/支付宝（1-50000元）大额存款可分多次存入【无需提交存款信息，全自动，秒到账】">
                            </p>
                            <p class="form-right">*必填</p>
                        </li>
                        <li>
                            <p class="form-left">存款时间：</p>
                            <p class="form-mid">
                                <input type="text" id="submitDate" readonly="readonly">
                            </p>
                            <p class="form-right ">无需填写</p>
                        </li>
                    </ul>
                    <div class="form-bot">
                        <a @click="payment">确认支付</a>
                    </div>
                    <!-- 微信的二维码 -->
                    <div class="fixed" ref="fexedweixin" v-if="imgShow">
                        <span class="close" @click="closeWeixin"> x</span>
                        <p id="img" ref="wx_img"></p>
                    </div>

                </form>
                <!-- 充值表单  -->

                <div class="tips">
                    <p>
                        <span>温馨提示</span>：为了避免掉单情况的发生，请您在支付完成后，需等"支付成功"页面跳转出来, 再关闭页面，以免掉单！感谢配合！！！</p>
                    <p>支付成功后，若3分钟内未能及时到达您的会员账号请联系
                        <a href="">【在线客服】</a>咨询</p>
                </div>
            </div>
            <div class="copyright">Copyright © 威尼斯人娱乐场Reserved</div>
        </div>
        <!-- 充值 结束 -->

        <!-- body 结束 -->

        <!-- 首页弹出框 开始 -->
        <div ref="dragWrap" class="dragWrap" v-show="dragWrapShow">
            <div class="drag">
                <div class="d-title">
                    <p>
                        <span>讯息公告</span>
                        <span ref="dragWrapClose" @click="dragWrapClose">
                            <i></i>
                        </span>
                    </p>
                </div>
                <div class="d-bot">
                    <p class="b-one">
                        <span>【温馨提示】</span>
                    </p>
                    <p class="b-two">
                        <span>推荐使用支付宝专员入款 成功率高</span>
                    </p>
                    <p class="b-three">
                        <span>请咨询在线客服索取专员账号！！</span>
                    </p>
                    <p class="b-four">
                        <span>直接发送会员账号 极速入账！！！</span>
                    </p>
                </div>
            </div>
        </div>
        <!-- 首页弹出框 结束 -->

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
            imgShow: false,
            dragWrapShow: true, //首页弹窗 显示/隐藏
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
        submitDate() {
            // 小于10补位
            function fnW(str) {
                var num;
                str >= 10 ? (num = str) : (num = "0" + str);
                return num;
            }
            let submitDate = document.getElementById("submitDate");
            let date = new Date();
            let year = date.getFullYear(); //当前年份
            let month = date.getMonth(); //当前月份
            let data = date.getDate(); //天
            let hours = date.getHours(); //小时
            let minute = date.getMinutes(); //分
            let second = date.getSeconds(); //秒
            let time = year + "-" + fnW(month + 1) + "-" + fnW(data) + " " + fnW(hours) + ":" + fnW(minute) + ":" + fnW(second);
            submitDate.value = time;
        },
        dragWrapClose() {
            this.dragWrapShow = false;
        },
        goin(a, b, c) {
            let that = this;
            this.common.goin(a, b, c, that);
        },

        // 微信支付窗口关闭
        closeWeixin() {
            this.imgShow = false;
        },
        // 支付提交
        payment() {
            let that = this
            let user = this.$refs.user;
            let affirm = this.$refs.affirm;
            let money = this.$refs.money;
            let name = document.getElementsByName("pay");
            let index;
            for (let i = 0; i < name.length; i++) {
                if (name[i].checked) {
                    index = name[i].value;
                }
            }
            if (!user.value || !affirm.value || !money.value) {
                alert("请仔细检查必填项！");
                return;
            }
            if (user.value != affirm.value) {
                alert("两次输入账号不一致，请重新输入！");
                return;
            }

            if (index == 1) {
                // 支付宝
                let user = window.sessionStorage.getItem("login_user");
                money = money.value;
                var t = new Date().getTime();

                this.$refs.WIDsubject.value = "余额充值"
                this.$refs.WIDout_trade_no.value = user + t
                this.$refs.WIDbody.value = user
                this.$refs.WIDtotal_amount.value = money
                this.$refs.form.submit()
                this.imgShow = false;
            } else if (index == 0) {
                // 微信支付
                let user = window.sessionStorage.getItem("login_user");
                money = money.value;

                that.$post("public/wxpay/example/native.php",{
                    user: user,
                    money: money
                }).then(res=>{
                    // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                    if (res == -1 || res == -2) {
                        that.common.isOnline(that, res);
                        return;
                    }
                    that.$refs.wx_img.innerHTML = '<img alt="余额充值" src="http://148.72.206.211:803/public/wxpay/example/qrcode.php?data='+res+'" style="width:150px;height:150px;"/>'
                })
                this.imgShow = true;
            } else {
                alert("暂不支持次支付方式，请选择微信支付或支付宝支付！");
            }
        }
    },

    mounted() {
        this.submitDate();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
body {
    height: 1000px;
    background: #000;
}
/* title 开始 */
header {
    height: 75px;
    background: url("../../static/images/title/title-bg.png") no-repeat center
        #000;
}
header img {
    width: 100%;
    height: 100%;
}
.title {
    width: 1000px;
    height: 75px;
    margin: 0px auto;
    position: relative;
}
.title .logo {
    float: left;
    margin: 15px 0 0 0;
    width: 200px;
    height: 60px;
    overflow: hidden;
}
.title .slogan {
    float: left;
    margin: 10px 0 0 20px;
    width: 300px;
    height: 65px;
    overflow: hidden;
}
.title .topbar {
    line-height: 31px;
    position: absolute;
    right: 0;
    top: 0;
    color: #69737a;
}
.title .topbar a {
    color: #69737a;
    font-size: 14px;
    padding: 0 3px;
}
.title .topbar a:hover {
    color: #198ede;
}
.title .service {
    float: right;
    margin: 32px 0 0 0;
    border-radius: 8px;
    background-color: red;
    color: #fff;
}
.title .service:hover {
    background: #84b804;
}
.title .service a {
    padding: 3px 20px;
    font-size: 16px;
    line-height: 30px;
    color: #fff;
}
/* title 结束 */
/* banner 开始 */
.banner {
    position: relative;
    width: 100%;
    height: 900px;
    overflow: hidden;
}
.banner .bannerBg {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    animation: anim-run 1.5s ease-in-out infinite alternate;
    -webkit-animation: anim-run 1.5s ease-in-out infinite alternate;
}
.banner .bannerBg img {
    width: 100%;
    height: 100%;
}
/* banner 结束 */
/* 充值 开始 */
.payWrap {
    position: absolute;
    top: 150px;
    left: 50%;
    width: 1000px;
    height: auto;
    margin-left: -500px;
}
.payWrap .bd {
    position: relative;
    width: 100%;
    padding: 20px 20px 10px;
    background-color: #ffffff;
    border-radius: 8px;
    box-sizing: border-box;
}
.payWrap .bd h1 {
    text-align: center;
    font-weight: normal;
}
.payWrap .bd h1 strong {
    font-size: 18px;
    font-style: normal;
    background-color: #ffd700;
}
.payWrap .bd h1 strong i {
    font-style: normal;
    color: rgb(128, 0, 128);
}

.payWrap .bd > p {
    text-align: center;
    font-size: 14px;
    padding: 3px 0;
}
.payWrap .bd > p span {
    color: red;
}
/* 充值表单 开始 */
form > ul {
    width: 100%;
    font-size: 1.166rem;
    margin: 20px 0 10px 0;
    display: inline-block;
    background: #fff;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    overflow: hidden;
}
form > ul li {
    float: left;
    margin: 0;
    padding: 0;
    height: 62px;
    line-height: 62px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
}
form > ul li:nth-of-type(3) {
    height: auto;
}
form > ul li .form-left {
    float: left;
    width: 143px;
    color: #000000;
    text-align: right;
    background: #f6f6f6;
}
form > ul li .form-mid {
    float: left;
    width: 720px;
    padding: 0 10px;
}
form > ul li .form-mid input {
    width: 100%;
    padding: 7px 10px;
    font-size: 14px;
    color: #000;
    box-sizing: border-box;
    border: 1px solid #ccc;
    outline: none;
}
form > ul li .form-right {
    float: left;
    width: 75px;
    color: #c30000;
}

form > ul li .payBox {
    width: 100%;
}
form > ul li .payBox p {
    height: 124px;
}
form > ul li .payBox .pay-label-wrap {
    float: left;
    width: 740px;
    height: auto;
    padding: 0 10px;
    box-sizing: border-box;
}
.payBox .pay-label-wrap .pay-label {
    display: block;
    height: 62px;
    float: left;
    margin-right: 14px;
}
form > ul li .payBox .pay-label-wrap label > span:nth-of-type(2) {
    margin: 0;
    width: 140px;
    font-size: 14px;
    color: #000;
    text-align: left;
}
form > ul li .payBox .pay-label-wrap label > span:nth-of-type(2) img {
    width: 55px;
    height: 50px;
}
.payBox .pay-label-wrap .pay-label span {
    float: right;
    margin-left: -120px;
    color: #ff393d;
    width: 120px;
    line-height: 21px;
    font-size: 12px;
    font-weight: bold;
    text-align: right;
}
.payBox .pay-label-wrap .pay-label img {
    width: 133px;
    vertical-align: middle;
    margin: 5px;
}

form > ul li #submitDate {
    background-color: #bbb;
}

form .form-bot {
    text-align: center;
}
form .form-bot a {
    padding: 10px 60px;
    height: 50px;
    line-height: 50px;
    border-radius: 6px;
    font-size: 20px;
    color: #fff;
    background: linear-gradient(to bottom, #bd0000 0%, #a30000 100%);
}
form .form-bot a:hover {
    background: linear-gradient(to bottom, #a30000 0%, #bd0000 100%);
}
/* 充值表单 结束 */
.tips {
    padding: 10px;
}
.tips p {
    text-align: center;
    font-size: 14px;
    line-height: 2;
}
.tips p span {
    color: red;
}

.copyright {
    position: relative;
    width: 100%;
    padding: 20px 0px 40px;
    text-align: center;
    color: #eaeaea;
    font-size: 12px;
}

/* 微信支付 */
.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
}
.fixed > span {
    display: inline-block;
    position: absolute;
    top: -370px;
    left: 150px;
    bottom: 0;
    right: 0;
    margin: auto;
    z-index: 5;
    background: rgb(238, 238, 238);
    color: rgb(0, 0, 0);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    line-height: 20px;
    cursor: pointer;
    text-align: center;
}
.fixed p {
    position: fixed;
    top: 30%;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    text-align: center;
}
/* 充值 结束 */
/* 首页弹出框  开始*/
.dragWrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
.drag {
    position: fixed;
    top: 40%;
    left: 50%;
    padding: 5px 10px;
    margin-left: -225px;
    width: 450px;
    height: auto;
    z-index: 1;
    border: 1px solid #aed0ea;
    border-radius: 5px;
    background: #f2f5f7;
    color: #362b36;
}
.drag .d-title {
    position: relative;
    background: #deedf7;
    border: 1px solid #aed0ea;
    border-radius: 5px;
    padding: 0 10px;
}
.drag p {
    padding: 5px;
}
.drag .d-title span:nth-of-type(2) {
    position: absolute;
    top: 0;
    right: 5px;
    width: 20px;
    height: 20px;
    margin-top: 4px;
    border: 1px solid transparent;
    border-radius: 5px;
    font-style: normal;
    background: rgb(198, 222, 240);
    cursor: pointer;
}
.drag .d-title span:nth-of-type(2) i {
    display: inline-block;
    width: 100%;
    height: 100%;
    background: url("../../static/images/pay-img/dragbg.png") no-repeat -94px -126px;
}
.drag .d-title span:nth-of-type(2):hover > i {
    color: #0070a3;
    background: #e4f1fb url("../../static/images/pay-img/draghover.png")
        no-repeat -94px -126px;
}
.drag .d-bot {
    font-size: 14px;
}
.drag .d-bot p {
    padding: 0;
    margin: 5px 0;
}
.drag .d-bot .b-one span {
    color: rgb(255, 102, 255);
    background-color: #000;
}
.drag .d-bot .b-two span {
    color: #000;
    background-color: #ffff00;
}
.drag .d-bot .b-three span {
    color: #000;
    background-color: #ffff00;
}
.drag .d-bot .b-four span {
    color: blue;
    background-color: #ffff00;
}
/* 首页弹出框  结束*/
</style>