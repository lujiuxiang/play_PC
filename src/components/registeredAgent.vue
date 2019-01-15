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
                        <li v-for="(item,index) in aslide" :key="index" v-if="aslide.length>1">
                            <router-link v-if="item.name" :to="item.name">
                                <span :style="item.bg"></span>
                                <i v-text="item.title"></i>
                            </router-link>
                            <a v-else>
                                <span :style="item.bg"></span>
                                <i v-text="item.title"></i>
                            </a>
                        </li>
                    </ul>
                    <div class="bot-bg"></div>
                </div>
                <div class="right">
                    <div class="right-top">
                        <span class="title">【威尼斯人娱乐场】欢迎您的加入！</span>
                        <p>1.入款优惠：公司入款赠送1.2%在线充值赠送0.5%，无需申请自动到账。</p>
                        <p>2.天天返水：电子游戏3.0%,真人视讯3.0%,彩票2.0%,体育1.8%投注越多,返点比率越高。</p>
                        <p>3.充值方式：线上微信,支付宝,网银（ATM）存款,还在犹豫什么？立即开户吧。</p>
                        <p>4.存取自由：最低存款10,最低取款50元。3分钟火速到账,不限取款次数,一切免手续费。</p>
                        <p>累计注册用户：
                            <i>10000000</i>人</p>

                    </div>
                    <div class="right-bot">
                        <div class="main">
                            <form action="">
                                <fieldset>
                                    <legend>代理注册</legend>
                                    <div class='reg-box'>
                                        <ul class="reg-first">
                                            <li>
                                                <span>
                                                    <i>*</i>登录账号：</span>
                                                <input class="reg-input" type="text" placeholder="请输入您的账号">
                                                <p class="bg2 reg-bg">账号为字母开头，6-12位的字母与数字组合！</p>
                                            </li>
                                            <li>
                                                <span>
                                                    <i>*</i>登录密码：</span>
                                                <div class="pass-box">
                                                    <input class="reg-input" type="password" name="" placeholder="请输入你新的密码">
                                                    <a class="passshow"></a>
                                                </div>
                                                <p class="bg3 reg-bg">密码为6-12位字母与数字的组合！</p>
                                            </li>
                                            <li>
                                                <span>
                                                    <i>*</i>确认密码：</span>
                                                <div class="pass-box">
                                                    <input class="reg-input" type="password" name="" placeholder="请输入您的密码">
                                                    <a class="passshow"></a>
                                                </div>
                                                <p class="bg4 reg-bg"></p>
                                            </li>
                                        </ul>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>代理数据</legend>
                                    <div class='reg-box'>
                                        <ul class="reg-second">
                                            <li>
                                                <span>真实姓名：</span>
                                                <input class="reg-input" type="text" placeholder="请输入您的真实姓名">
                                                <p class="bg5 reg-bg">必须与您的银行账户名称相同，否则不能出款！</p>
                                            </li>
                                            <li>
                                                <span>推广网址：</span>
                                                <input class="reg-input" type="text" placeholder="请您输入www.abc.com格式">
                                                <p class="bg4 reg-bg"></p>
                                            </li>
                                            <li>
                                                <span>其它推广网址：</span>
                                                <input class="reg-input" type="text" placeholder="请输入您的其它推广平台或文字叙述">
                                                <p class="bg4 reg-bg"></p>
                                            </li>
                                            <li>
                                                <span>手机号码：</span>
                                                <input class="reg-input" type="text" placeholder="请输入您的手机号码">
                                                <p class="bg6 reg-bg">取回登入密码的唯一途径，请务必真实！</p>
                                            </li>
                                            <li>
                                                <span>QQ：</span>
                                                <input class="reg-input" type="text" placeholder="请输入您的常用QQ号码">
                                                <p class="bg4 reg-bg"></p>
                                            </li>
                                            <li>
                                                <span>Email：</span>
                                                <input class="reg-input" type="text" placeholder="请输入您的常用邮箱地址">
                                                <p class="bg4 reg-bg"></p>
                                            </li>
                                        </ul>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>银行资料</legend>
                                    <div class='reg-box'>
                                        <ul class="reg-second">
                                            <li>
                                                <span>
                                                    <i>*</i>出款银行：</span>
                                                <input class="reg-input" type="text" placeholder="例：工商银行">
                                                <p class="bg8 reg-bg"></p>
                                            </li>
                                            <li>
                                                <span>
                                                    <i>*</i>银行账号：</span>
                                                <input class="reg-input" type="text" placeholder="请输入您的银行账号">
                                                <p class="bg8 reg-bg"></p>
                                            </li>
                                            <li>
                                                <span>
                                                    <i>*</i>银行省份：</span>
                                                <input class="reg-input" type="text" placeholder="请输入您的开户行省份">
                                                <p class="bg8 reg-bg"></p>
                                            </li>
                                            <li>
                                                <span>
                                                    <i>*</i>银行县市：</span>
                                                <input class="reg-input" type="text" placeholder="请输入您的开户行县市">
                                                <p class="bg8 reg-bg"></p>
                                            </li>
                                            <li>
                                                <span>
                                                    <i>*</i>取款密码：</span>
                                                <div class="pass-box">
                                                    <input class="reg-input" type="password" placeholder="请您输入4位纯数字取款密码">
                                                    <a class="passshow"></a>
                                                </div>
                                                <p class="bg7 reg-bg">取款时要用到的密码，非常重要，请务必牢记！</p>
                                            </li>
                                        </ul>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>安全检查</legend>
                                    <div class='reg-box'>
                                        <ul class="reg-second">
                                            <li>
                                                <span>
                                                    <i>*</i>验证码：</span>
                                                <input class="reg-input" type="text" placeholder="请输入验证码">
                                                <img src="" alt="">
                                                <p class="bg8 reg-bg">请输入验证码</p>
                                            </li>
                                            <li>
                                                <span>
                                                    <input class="reg-input" type="checkbox" id="checkbox">
                                                </span>
                                                <h6>本人已满合法年龄，且同意开户协议！</h6>
                                            </li>
                                            <li>
                                                <a @click="gosubmit()" id="submit">提交信息</a>
                                            </li>
                                        </ul>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div class="main-bot">
                            <h6>备注：</h6>
                            <ol>
                                <li>标记有
                                    <i>*</i>者为必填项目。</li>
                                <li>取款密码为取款金额时的凭证，请会员务必填写牢记。</li>
                                <li>温馨提示：注册时如遇到同名或注册不了等其它问题请联系在线客服，我们会第一时间为您解决好！</li>
                            </ol>
                        </div>
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
            titleList: [],
            aslide: [
                {
                    name: "MGtiger1",
                    title: "MG老虎机",
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/register-img/list1.png") +
                            ") no-repeat center"
                    }
                },
                {
                    title: "捕鱼游戏",
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/register-img/list2.png") +
                            ") no-repeat center"
                    }
                },
                {
                    name: "Entertainment",
                    title: "电子游艺",
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/register-img/list3.png") +
                            ") no-repeat center"
                    }
                },
                {
                    name: "live",
                    title: "视讯直播",
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/register-img/list4.png") +
                            ") no-repeat center"
                    }
                },
                {
                    name: "lottery",
                    title: "彩票游戏",
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/register-img/list5.png") +
                            ") no-repeat center"
                    }
                },
                {
                    name: "sports",
                    title: "体育赛事",
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/register-img/list6.png") +
                            ") no-repeat center"
                    }
                },
                {
                    name: "specialOffers",
                    title: "优惠活动",
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/register-img/list7.png") +
                            ") no-repeat center"
                    }
                }
            ],
            //判断注册页面是否都填写正确
            Isval1: "",
            Isval2: "",
            Isval3: "",
            Isval4: "",
            Isval5: "",
            Isval6: "",
            Isval7: "",
            Isval8: "",
            Isval9: "",
            Isval10: "",
            Isval11: "",
            Isval12: "",
            Isval13: "",
            Isval14: "",
            Isval15: "",
            Isval16: "",
            submit: false
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
        reg() {
            let that = this;
            let regInput = document.getElementsByClassName("reg-input");
            let regBg = document.getElementsByClassName("reg-bg");

            //登录账号
            regInput[0].onblur = function() {
                let val1 = this.value;
                let reg = /^[A-Za-z]{1}[A-Za-z0-9]{6,12}/;
                if (!reg.test(val1) || val1.length < 6 || val1.length > 12) {
                    regBg[0].innerHTML = "密码必须为6-12位的数字和字母的组合";
                    regBg[0].style.color = "red";
                    regBg[0].style.backgroundPosition = "-6px -228px";
                    that.Isval1 = fasle;
                    return false;
                } else {
                    regBg[0].style.color = "#fff";
                    regBg[0].style.backgroundPosition = "-6px -194px";
                    that.Isval1 = true;
                    return true;
                }
            };
            // 登录密码
            regInput[1].onblur = function() {
                let val2 = this.value;
                let reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
                if (val2.length < 6) {
                    regBg[1].style.color = "red";
                    regBg[1].style.backgroundPosition = "-6px -228px";
                    regBg[1].innerHTML = "密码长度不能少于6个字符！";
                    that.Isval2 = false;
                    return false;
                } else if (!reg2.test(val2) || val2.length > 12) {
                    regBg[1].style.color = "red";
                    regBg[1].style.backgroundPosition = "-6px -228px";
                    regBg[1].innerHTML = "密码必须是6-12位字母与数字的组合！";
                    that.Isval2 = false;
                    return false;
                } else {
                    regBg[1].style.color = "#fff";
                    regBg[1].style.backgroundPosition = "-6px -194px";
                    regBg[1].innerHTML = "密码必须是6-12位字母与数字的组合！";
                    that.Isval2 = true;
                    return true;
                }
            };

            // 确认密码
            regInput[2].onblur = function() {
                let val2 = regInput[2].value;
                let val3 = this.value;
                if (val3 !== val2) {
                    regBg[2].style.color = "red";
                    regBg[2].style.backgroundPosition = "-6px -228px";
                    regBg[2].innerHTML = "两次输入的的密码不一致，请仔细检查！";
                    that.Isval3 = false;
                    return false;
                } else {
                    regBg[2].style.color = "#fff";
                    regBg[2].style.backgroundPosition = "-6px -194px";
                    regBg[2].innerHTML = "";
                    that.Isval3 = true;
                    return true;
                }
            };

            // 真实姓名
            regInput[3].onblur = function() {
                let val4 = this.value;
                if (val4 == "") {
                    regBg[3].style.color = "red";
                    regBg[3].style.backgroundPosition = "-6px -228px";
                    regBg[3].innerHTML = "请输入您的真实姓名";
                    that.Isval4 = false;
                    return false;
                } else {
                    regBg[3].style.color = "#fff";
                    regBg[3].style.backgroundPosition = "-6px -194px";
                    regBg[3].innerHTML =
                        "必须与您的银行账户名称相同，否则不能出款！";
                    that.Isval4 = true;
                    return true;
                }
            };

            // 推广网址
            regInput[4].onblur = function() {
                let val5 = this.value;
                if (val5 == "") {
                    regBg[4].style.color = "red";
                    regBg[4].style.backgroundPosition = "-6px -228px";
                    regBg[4].innerHTML = "请输入您的推广网址";
                    that.Isval5 = false;
                    return false;
                } else {
                    regBg[4].innerHTML = "";
                    regBg[4].style.backgroundPosition = "-6px -194px";
                    that.Isval5 = true;
                    return true;
                }
            };
            // 其他推广网址
            regInput[5].onblur = function() {
                let val6 = this.value;
                if (val6 == "") {
                    regBg[5].style.color = "red";
                    regBg[5].style.backgroundPosition = "-6px -228px";
                    regBg[5].innerHTML = "请输入您的其他推广网址";
                    that.Isval6 = false;
                    return false;
                } else {
                    regBg[5].innerHTML = "";
                    regBg[5].style.backgroundPosition = "-6px -194px";
                    that.Isval6 = true;
                    return true;
                }
            };

            // 手机号码
            regInput[6].onblur = function() {
                let val7 = this.value;
                let reg5 = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
                if (val5 == "") {
                    regBg[6].style.color = "red";
                    regBg[6].style.backgroundPosition = "-6px -228px";
                    regBg[6].innerHTML = "请输入您的手机号码";
                    that.Isval7 = false;
                    return false;
                } else if (!reg5.test(val7)) {
                    regBg[6].style.color = "red";
                    regBg[6].style.backgroundPosition = "-6px -228px";
                    regBg[6].innerHTML = "手机号格式错误";
                    that.Isval7 = false;
                    return false;
                } else {
                    regBg[6].style.color = "#fff";
                    regBg[6].style.backgroundPosition = "-6px -194px";
                    regBg[6].innerHTML = "取回登入密码的唯一途径，请务必真实！";
                    that.Isval7 = true;
                    return true;
                }
            };

            // QQ
            regInput[7].onblur = function() {
                let val8 = this.value;
                if (val8 == "") {
                    regBg[7].style.color = "red";
                    regBg[7].style.backgroundPosition = "-6px -228px";
                    regBg[7].innerHTML = "请输入您的QQ";
                    that.Isval8 = false;
                    return false;
                } else {
                    regBg[7].innerHTML = "";
                    regBg[7].style.backgroundPosition = "-6px -194px";
                    that.Isval8 = true;
                    return true;
                }
            };
            // Email
            regInput[8].onblur = function() {
                let val9 = this.value;
                if (val9 == "") {
                    regBg[8].style.color = "red";
                    regBg[8].style.backgroundPosition = "-6px -228px";
                    regBg[8].innerHTML = "请输入您的QQ";
                    that.Isval9 = false;
                    return false;
                } else {
                    regBg[8].innerHTML = "";
                    regBg[8].style.backgroundPosition = "-6px -194px";
                    that.Isval9 = true;
                    return true;
                }
            };

            // 出款银行
            regInput[9].onblur = function() {
                let val10 = this.value;
                if (val10 == "") {
                    regBg[9].style.color = "red";
                    regBg[9].style.backgroundPosition = "-6px -228px";
                    regBg[9].innerHTML = "请输入出款银行";
                    that.Isval10 = false;
                    return false;
                } else {
                    regBg[9].innerHTML = "";
                    regBg[9].style.backgroundPosition = "-6px -194px";
                    that.Isval10 = true;
                    return true;
                }
            };

            // 银行账号
            regInput[10].onblur = function() {
                let val11 = this.value;
                let reg10 = /^([1-9]{1})(\d{14}|\d{18})$/;
                if (val11.length == "") {
                    regBg[10].style.color = "red";
                    regBg[10].style.backgroundPosition = "-6px -228px";
                    regBg[10].innerHTML = "请输入银行帐号，长度在10-20位之间！";
                    that.Isval11 = false;
                    return false;
                } else if (!reg10.test(val11)) {
                    regBg[10].style.color = "red";
                    regBg[10].style.backgroundPosition = "-6px -228px";
                    regBg[10].innerHTML = "请输入正确的银行帐号！";
                    that.Isval11 = false;
                    return false;
                } else {
                    regBg[10].style.color = "#fff";
                    regBg[10].style.backgroundPosition = "-6px -194px";
                    regBg[10].innerHTML =
                        "取回登入密码的唯一途径，请务必真实！";
                    that.Isval11 = true;
                }
            };

            // 银行省份
            regInput[11].onblur = function() {
                let val12 = this.value;
                if (val12 == "") {
                    regBg[11].style.color = "red";
                    regBg[11].style.backgroundPosition = "-6px -228px";
                    regBg[11].innerHTML = "请输入银行省份";
                    that.Isval12 = false;
                    return false;
                } else {
                    regBg[11].innerHTML = "";
                    regBg[11].style.backgroundPosition = "-6px -194px";
                    that.Isval12 = true;
                    return true;
                }
            };
            // 银行县市
            regInput[12].onblur = function() {
                let val13 = this.value;
                if (val13 == "") {
                    regBg[12].style.color = "red";
                    regBg[12].style.backgroundPosition = "-6px -228px";
                    regBg[12].innerHTML = "请输入银行省份";
                    that.Isval13 = false;
                    return false;
                } else {
                    regBg[12].innerHTML = "";
                    regBg[12].style.backgroundPosition = "-6px -194px";
                    that.Isval13 = true;
                    return true;
                }
            };

            // 取款密码
            regInput[13].onblur = function() {
                let val14 = this.value;
                let reg6 = /^\d{4}$/;
                if (!reg6.test(val14)) {
                    regBg[13].style.color = "red";
                    regBg[13].style.backgroundPosition = "-6px -228px";
                    regBg[13].innerHTML = "请输入4位纯数字作为取款密码！";
                    that.Isval14 = false;
                    return false;
                } else {
                    regBg[13].style.color = "#fff";
                    regBg[13].style.backgroundPosition = "-6px -194px";
                    regBg[13].innerHTML =
                        "取款时要用到的密码，非常重要，请务必牢记！";
                    that.Isval14 = true;
                    return true;
                }
            };

            // 验证码
            regInput[14].onblur = function() {
                let val15 = this.value;
                let reg7 = /^\d{4}$/;
                if (val15.length == "") {
                    regBg[14].style.color = "red";
                    regBg[14].style.backgroundPosition = "-6px -228px";
                    regBg[14].innerHTML = "请输入验证码";
                    that.Isval15 = false;
                    return false;
                } else {
                    regBg[14].style.color = "#fff";
                    regBg[14].style.backgroundPosition = "-6px -194px";
                    regBg[14].innerHTML = "";
                    that.Isval15 = true;
                }
            };

            // checkbox
            let checkbox = document.getElementById("checkbox");
            checkbox.onblur = function() {
                if (checkbox.checked) {
                    that.Isval16 = true;
                    return true;
                } else {
                    that.Isval16 = false;
                    return false;
                }
            };
        },
        // 密码显示
        passShow() {
            let passShow = document.getElementsByClassName("passshow");
            let passshow = [...passShow];
            passshow.forEach((item, index) => {
                let num = 0;
                item.onclick = function() {
                    num++;
                    if (num % 2 == 0) {
                        item.parentNode.children[0].setAttribute(
                            "type",
                            "text"
                        );
                        item.style.backgroundPosition = "-4px -172px";
                    } else {
                        item.parentNode.children[0].setAttribute(
                            "type",
                            "password"
                        );
                        item.style.backgroundPosition = "-38px -172px";
                    }
                };
            });
        },
        // 注册提交事件
        gosubmit() {
            // 如果表单的正则都判断成功 则可以提交
            if (
                this.Isval1 &&
                this.Isval2 &&
                this.Isval3 &&
                this.Isval4 &&
                this.Isval5 &&
                this.Isval6 &&
                this.Isval7 &&
                this.Isval8 &&
                this.Isval9 &&
                this.Isval10 &&
                this.Isval11 &&
                this.Isval12 &&
                this.Isval13 &&
                this.Isval14 &&
                this.Isval15 &&
                this.Isval16
            ) {
                this.submit = true;
            } else {
                window, alert("请检查是否有错误的选项！");
            }
        },
        goin(a, b, c) {
            let that = this;
            this.common.goin(a, b, c, that);
        }
    },

    computed: {
        news() {
            return this.$store.state.news;
        }
    },
    mounted() {
        this.reg();
        this.passShow();
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

.contentWrap > ul,
.contentWrap > ul li,
.contentWrap > ul li > a img {
    width: 100%;
    height: 100%;
}
/* banner下面游戏 开始 */

/* 左边aslide部分 开始 */
.refister {
    width: 950px;
    padding: 39px 53px 58px 56px;
    background: #222;
}
.refister .left {
    float: left;
    width: 242px;
}
.refister .left > ul {
    display: block;
    padding: 244px 0 45px;
    margin-bottom: 29px;
    background: #2f2f2f url("../../static/images/register-img/aside-bg.png")
        center 25px no-repeat;
}
.refister .left > ul li {
    padding: 0 24px;
}
.refister .left > ul li a {
    display: block;
    height: 57px;
    line-height: 57px;
    font-size: 17px;
    padding-left: 33px;
    color: rgba(255, 255, 255, 0.33);
    cursor: pointer;
    transition: all 0.2s;
}
.refister .left > ul li span {
    margin: 8px 17px 0 0;
    display: block;
    float: left;
    width: 40px;
    height: 40px;
    background-position: center center;
    background-repeat: no-repeat;
}
.refister .left > ul li i {
    display: inline-block;
    line-height: 57px;
    font-style: normal;
}
.refister .left > ul li:hover > a i {
    color: #fff;
}

.refister .left .bot-bg {
    height: 168px;
    background: #2f2f2f url("../../static/images/register-img/aslide-bot.png")
        center 25px no-repeat;
}
/* 左边aslide部分 结束 */
/* 右边注册部分 开始 */
.refister .right {
    float: right;
    width: 690px;
}
.refister .right .right-top {
    position: relative;
    padding: 26px 95px 11px 58px;
    border: 1px solid #454545;
    margin-bottom: 30px;
    margin-left: 10px;
    color: #fff;
}
.refister .right .right-top .title {
    position: absolute;
    top: -12px;
    left: 59px;
    width: 275px;
    height: 22px;
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    background: #ff0000;
}
.refister .right .right-top p {
    margin-bottom: 10px;
    font-size: 12px;
}
.refister .right .right-top p:nth-last-child(2) i {
    font-style: normal;
    color: yellow;
}
.refister .right .right-top p span {
    color: red;
}
.refister .right .right-top p a {
    color: #c57600;
}
.refister .right .right-top p:nth-last-child(1) {
    font-size: 16px;
}
.refister .right .right-top p:nth-last-child(1) i {
    font-style: normal;
    color: #d4ad29;
}
.refister .right .right-top p:nth-last-child(1) a {
    float: left;
    background: #9c9c9c;
    width: 100px;
    height: 30px;
    margin-right: 15px;
    color: #fff;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    border-radius: 8px;
}

.right-bot {
    width: 720px;
    margin: 0 auto;
}
.right-bot .main {
    padding-top: 20px;
    margin: 7px 15px;
    border-radius: 10px;
    border: 1px solid #ecdf05;
}
.right-bot .main fieldset {
    padding-top: 10px;
    border: none;
    border-top: 1px dashed rgba(137, 118, 75, 0.5);
}
.right-bot .main fieldset legend {
    position: relative;
    top: -1px;
    width: 135px;
    height: 30px;
    line-height: 31px;
    margin-left: -2px;
    background: url("../../static/images/register-img/registerBg.png") no-repeat
        0 2px;
    text-indent: 38px;
    font-size: 16px;
    color: #d2d2d2;
}
.right-bot .main fieldset:nth-last-of-type(1) legend {
    background-position: 0 -122px;
}
.right-bot .main fieldset ul {
    margin-left: 10px;
    margin-top: 5px;
}
.right-bot .main fieldset ul li {
    padding-bottom: 10px;
    position: relative;
    height: 52px;
    line-height: 52px;
}
.right-bot .main fieldset ul li span {
    display: block;
    float: left;
    width: 100px;
    height: 42px;
    line-height: 42px;
    text-align: right;
    font-size: 14px;
    color: #fff;
}
.right-bot .main fieldset ul li span i {
    font-style: normal;
    color: red;
    padding-right: 5px;
}
.right-bot .main fieldset ul li input {
    display: block;
    float: left;
    width: 260px;
    height: 42px;
    color: gray;
    background: #fff;
    box-shadow: inset 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
    border: none;
    border-radius: 2px;
    font-size: 14px;
    text-indent: 12px;
}
.right-bot .main fieldset ul li input:focus {
    border: 2px #ecdf05 solid;
    height: 40px;
    width: 258px;
}
.right-bot .main fieldset ul li p {
    float: left;
    padding-left: 28px;
    height: 42px;
    font-size: 12px;
    line-height: 42px;
    color: #ecdf05;
    margin: 0 0 0 15px;
    background: url("../../static/images/register-img/registerBg.png") no-repeat;
}

.right-bot .main fieldset ul li .passshow {
    position: absolute;
    top: 10px;
    right: 48%;
    display: block;
    z-index: 12;
    width: 25px;
    height: 22px;
    background: url("../../static/images/register-img/registerBg.png") no-repeat -38px -172px;
}
.right-bot .main fieldset:nth-of-type(4) li input {
    float: left;
    width: 154px;
}
.right-bot .main fieldset:nth-of-type(4) li input:focus {
    width: 154px;
}
.right-bot .main fieldset:nth-of-type(4) li:nth-of-type(2) span {
    float: left;
    width: 30px;
    height: 30px;
    margin-left: 70px;
}
.right-bot .main fieldset:nth-of-type(4) li:nth-of-type(2) span input {
    width: 20px;
    height: 20px;
    position: relative;
    top: 5px;
}
.right-bot .main fieldset:nth-of-type(4) li:nth-of-type(2) h6 {
    float: left;
    height: 30px;
    line-height: 30px;
    background-color: rgba(66, 64, 64, 0.5);
    border-radius: 3px;
    padding: 0 15px;
    color: #848484;
    font-weight: normal;
}
.right-bot .main fieldset:nth-of-type(4) li:nth-of-type(2) h6 em {
    font-style: normal;
    color: #ecdf05;
    cursor: pointer;
}
.right-bot .main fieldset:nth-of-type(4) li:nth-of-type(3) > a {
    display: block;
    float: left;
    margin-left: 100px;
    width: 126px;
    height: 42px;
    line-height: 42px;
    color: #fff;
    background-color: #907c57;
    text-align: center;
    border-radius: 2px;
    font-size: 14px;
    text-decoration: none;
}
.right-bot .main fieldset:nth-of-type(4) li:nth-of-type(3) > a:hover {
    background-color: #d4ad29;
}
.right-bot .main fieldset:nth-of-type(4) li:nth-of-type(3) p {
    background: none;
}
.right-bot .main fieldset:nth-of-type(4) li:nth-of-type(3) p span {
    width: 120px;
    font-size: 12px;
    color: gray;
}
.right-bot .main fieldset:nth-of-type(4) li:nth-of-type(3) p a {
    color: #ecdf05;
}
.right-bot .main .bg1 {
    background-position: -6px -194px;
}
.right-bot .main .bg2,
.right-bot .main .bg3,
.right-bot .main .bg4,
.right-bot .main .bg5,
.right-bot .main .bg6,
.right-bot .main .bg7,
.right-bot .main .bg8 {
    background-position: -6px -265px;
}

.right-bot .main-bot {
    margin-top: 13px;
    padding: 10px;
    border-radius: 8px;
    background-color: rgba(45, 45, 45, 1);
}
.right-bot .main-bot h6 {
    height: 24px;
    font-size: 14px;
    margin-top: 10px;
    margin-left: 60px;
    font-weight: normal;
    color: #fff;
}
.right-bot .main-bot ol {
    opacity: 0.7;
    margin-left: 90px;
    font-size: 12px;
}
.right-bot .main-bot ol li {
    padding: 5px 0;
    color: #bababa;
}
.right-bot .main-bot ol li i {
    padding: 0 3px;
    color: red;
    font-style: normal;
}
/* 右边注册部分 结束 */

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

/* 用户协议 开始 */
.yhxy {
    display: none;
    position: fixed;
    top: calc(50% - 300px);
    left: calc(50% - 272px);
    width: 545px;
    height: 600px;
    background: #fff;
    z-index: 9999;
    border-radius: 10px;
}
.yhxy .yh-title {
    height: 76px;
    line-height: 76px;
    position: relative;
}
.yhxy .yh-title h1 {
    font-size: 24px;
    font-weight: normal;
    color: #2c2e36;
    text-indent: 40px;
}
.yhxy .yh-title span {
    display: block;
    position: absolute;
    right: 20px;
    top: 18px;
    width: 18px;
    height: 18px;
    overflow: hidden;
    text-indent: -100%;
    cursor: pointer;
    background: url("../../static/images/register-img/registerBg.png") no-repeat -92px -173px;
}
.yhxy .yh-center {
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    height: 400px;
    padding: 15px;
    overflow-x: hidden;
    overflow-y: auto;
}
.yhxy .yh-center .yx-c-text {
    margin: 15px;
    font-size: 13px;
}
.yhxy .yh-center .yx-c-text h2 {
    font-weight: normal;
    font-size: 18px;
    color: #666;
    height: 40px;
    line-height: 40px;
}
.yhxy .yh-center .yx-c-text ul {
    padding: 0px;
    margin: 0px 0 0 20px;
}
.yhxy .yh-center .yx-c-text li {
    line-height: 24px;
    color: #2b2e38;
    list-style-type: disc;
    cursor: default;
}
.yhxy .yh-center .yx-c-text .star {
    color: red;
}

.yhxy .yh-bot span {
    display: block;
    width: 455px;
    height: 42px;
    line-height: 42px;
    margin: 22px auto 0;
    border-radius: 3px;
    color: #fff;
    font-size: 16px;
    text-indent: 3em;
    background: #d4ad29 url("../../static/images/register-img/registerBg.png")
        no-repeat;
    background-position: -110px -162px;
    cursor: pointer;
}
/* 用户协议 结束 */
</style>