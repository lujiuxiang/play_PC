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
                        <li v-for="(item,index) in aslide" v-if="aslide.length>1" :key="index">
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
                        <p>·1元存款；10元取款，不限次数3分钟火速到账0审核0冻结0手续费！！！</p>
                        <p>·天天现金大回馈，天天存款·天天送，邀您来参与；</p>
                        <p>
                            ·威尼斯人电子小金库—永久累计打码量，专属您的受益提款机
                            <router-link to="grade">>>>点击查看活动详情</router-link>
                        </p>
                        <p>·
                            <span>VIP</span>终身制，累计存款5万起，尊享奢华尊贵闪耀特权；</p>
                        <p>·公司提供快速充值通道
                            <router-link to="pay">〉〉〉立即充值</router-link> ，且全面支持【QQ钱包\银联扫码\京东钱包\支付宝\微信\网银支付】</p>
                        <p>累计注册用户：
                            <i>10000000人</i>
                        </p>
                        <p>
                            <a href="https://ziker-talk.yun.pingan.com/webim/?channel=WEBIM&authorizerAppid=webim2c83aec44342e0a&eid=86a67bbad3e4b01765bf596b95e47b4e&theme=07c5ba" target="blank">7*24在线客服</a>
                            <!-- <router-link to="activitiesHall">优惠办理大厅</router-link>     -->
                        </p>

                    </div>
                    <div class="right-bot">
                        <div class="main">
                            <form action="">
                                <fieldset>
                                    <legend>注册账号</legend>
                                    <div class='reg-box'>
                                        <ul class="reg-first">
                                            <li>
                                                <span>介绍人：</span>
                                                <input :value="introducer" ref="presenter" class="reg-input" type="text" placeholder="请输入您的介绍人">
                                                <p class="bg1 reg-bg"></p>
                                                <input type="hidden" name="">
                                            </li>
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
                                                    <input class="reg-input" type="password" name="" placeholder="请输入您的密码">
                                                    <a class="passshow"></a>
                                                </div>
                                                <p class="bg3 reg-bg">密码为6-12位字母与数字的组合！</p>
                                            </li>
                                            <li>
                                                <span>
                                                    <i>*</i>确认密码：</span>
                                                <div class="pass-box">
                                                    <input class="reg-input" type="password" name="" placeholder="请再次输入您的密码">
                                                    <a class="passshow"></a>
                                                </div>
                                                <p class="bg4 reg-bg"></p>
                                            </li>
                                        </ul>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>会员资料</legend>
                                    <div class='reg-box'>
                                        <ul class="reg-second">
                                            <li>
                                                <span>
                                                    <i>*</i>真实姓名：</span>
                                                <input class="reg-input" type="text" placeholder="请输入您的真实姓名">
                                                <p class="bg5 reg-bg">必须与您的银行账户名称相同，否则不能出款！</p>
                                            </li>
                                            <li>
                                                <span>
                                                    <i>*</i>手机号码：</span>
                                                <input class="reg-input" type="text" placeholder="请输入您的手机号码">
                                                <p class="bg6 reg-bg">取回登入密码的途径，请务必真实！</p>
                                            </li>
                                            <li>
                                                <span>
                                                    <i>*</i>QQ：</span>
                                                <input class="reg-input" type="text" placeholder="请输入您的QQ">
                                                <p class="bg7 reg-bg">取回登入密码的途径，请务必真实！</p>
                                            </li>
                                            <li>
                                                <span>
                                                    <i>*</i>电子邮箱：</span>
                                                <input class="reg-input" type="text" placeholder="请输入您的电子邮箱">
                                                <p class="bg8 reg-bg">取回登入密码的途径，请务必真实！</p>
                                            </li>
                                            <li>
                                                <span>
                                                    <i>*</i>微信：</span>
                                                <input class="reg-input" type="text" placeholder="请输入您的微信">
                                                <p class="bg9 reg-bg">取回登入密码的途径，请务必真实！</p>
                                            </li>
                                            <li>
                                                <span>
                                                    <i>*</i>取款密码：</span>
                                                <div class="pass-box">
                                                    <input class="reg-input" type="password" placeholder="请您输入4位纯数字取款密码">
                                                    <a class="passshow"></a>
                                                </div>
                                                <p class="bg10 reg-bg">取款时要用到的密码，非常重要，请务必牢记！</p>
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
                                                <img id="imageId" :src="yzmsrc" @click="yzm" alt="( 点选此处产生新验证码 )" align="absmiddle">
                                                <p class="bg11 reg-bg">请输入验证码</p>
                                            </li>
                                            <li>
                                                <span>
                                                    <input class="reg-input" type="checkbox" id="checkbox">
                                                </span>
                                                <h6>
                                                    我确定所提供的信息都是准确的，我已经年满18周岁，我已经阅读并接受
                                                    <em @click="yhxyShow">相关条款和隐私协议。</em>
                                                </h6>
                                            </li>
                                            <li>
                                                <a @click="gosubmit" id="submit">提交信息</a>
                                                <p>
                                                    <span>已有账号，
                                                        <a @click="goin">直接登录</a>
                                                    </span>
                                                </p>
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

        <!-- 游戏进入时登录界面 -->
        <gameslogin></gameslogin>
        <!-- 游戏进入时登录界面 -->
        <!-- 用户协议 开始 -->
        <div class="yhxy" ref="yhxy" v-show="yhxyActive">
            <div class="yh-title">
                <h1>用户协议</h1>
                <span @click="yhxyShow"></span>
            </div>
            <div class="yh-center">
                <div class="yx-c-text">
                    <h2>立即开通本公司游戏账户，享受最优惠的各项红利！</h2>
                    <ul>
                        <li>本公司只接受年龄已满18岁的客户申请，同时我们保留客户提供其年龄证明的权利。</li>
                        <li>在公司进行注册时所提供的全部信息必须准确无误，在使用借记卡或信用卡时，持卡人的姓名必须与在网站上注册时的一致。</li>
                        <li>在开户后进行一次有效存款，即成为本公司永久有效会员！</li>
                        <li>成为本站有效会员后，客户可随时通过电邮、联系在线客服、或在本公司站点上留言、联系客服等方式，随时向本公司提供最新的个人资料。</li>
                        <li>本公司如发现个别会员有重复申请账号行为时，本公司有权将这些账户视为一个联合账户。本公司保留取消、收回会员所有优惠红利，以及优惠红利所产生的盈利之权利。本公司系统严格要求玩家、住址、电邮、电话号码、支付卡/信用卡均为唯一性，任何共享计算机环境 (例如:网吧、其他公共用计算机等)只能够拥有一个会员账号，各项优惠只适用于每位客户在本公司站点唯一的账户。</li>
                        <li>本公司是提供互联网投注服务的机构。请会员在注册前参考当地政府的法律，在博彩不被允许的地区，如有会员在本公司注册、投注，均为会员个人行为，本公司不负责、承担任何相关联带责任。</li>
                        <li>无论是个人或是团体，如有任何威胁、滥用本公司优惠的行为，本公司将保留权利取消、收回由优惠产生的红利，并保留权利追讨最高50%手续费。</li>
                        <li>所有本公司游戏娱乐站点的优惠是特别为玩家而设，在玩家注册信息有争议时，为确保双方利益、杜绝身份盗用行为，本公司保留权利要求客户向我们提供充足有效的文件， 并以各种方式辨别客户是否符合资格享有我们的任何优惠。</li>
                        <li>客户一经注册开户，将被视为接受所有颁布在本以公司互联网投注网站上的规则与条例。</li>
                    </ul>
                    <p class="star">本公司是使用东方集团所提供的在线娱乐软件，如发现个别会员在同系统的多个娱乐城上开设多个会员账户，并进行套利下注,经核实后,本公司将冻结参与的会员账号并将所有下注盈利取消！</p>
                </div>
            </div>
            <div class="yh-bot">
                <span @click="yhxyShow">我已届满合法博彩年龄，且同意各项开户条约。</span>
            </div>
        </div>
        <!-- 用户协议 结束 -->

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
            introducer:"", //介绍人
            yhxyActive: false, //用户协议 显示/隐藏
            titleList: [],
            aslide: [
                {
                    name: "MGtiger",
                    title: "MG老虎机",
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/register-img/list1.png") +
                            ") no-repeat center"
                    }
                },
                {
                    name: "MGtiger2",
                    title: "捕鱼游戏",
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/register-img/list2.png") +
                            ") no-repeat center"
                    }
                },
                {
                    name: "MGtiger3",
                    title: "电子游艺",
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/register-img/list3.png") +
                            ") no-repeat center"
                    }
                },
                {
                    name: "MGtiger4",
                    title: "MG",
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
            submit: false,
            // 验证码图片
            yzmsrc: ""
        };
    },
    components: {
        commonfooter,
        commonTitleNav,
        commonTitle,
        gameslogin
    },
    methods: {
        reg() {
            let that = this;
            let regInput = document.getElementsByClassName("reg-input");
            let regBg = document.getElementsByClassName("reg-bg");
            //登录账号
            regInput[1].onblur = function() {
                let val1 = this.value;
                let reg = /^[A-Za-z]{1}[A-Za-z0-9]{5,11}$/;
                if (!reg.test(val1) || val1.length < 6 || val1.length > 12) {
                    regBg[1].innerHTML = "账号必须为6-12位的数字和字母的组合";
                    regBg[1].style.color = "red";
                    regBg[1].style.backgroundPosition = "-6px -228px";
                    that.Isval1 = false;
                    return false;
                }
                that.$post("index/user/isuser",{
                    user: val1
                }).then(res=>{
                    if (res == 2) {
                        regBg[1].innerHTML = "用户名已被注册！";
                        regBg[1].style.color = "red";
                        regBg[1].style.backgroundPosition = "-6px -228px";
                        that.Isval1 = false;
                        return false;
                    } else {
                        regBg[1].innerHTML =
                            "账号必须为6-12位的数字和字母的组合";
                        regBg[1].style.color = "#fff";
                        regBg[1].style.backgroundPosition = "-6px -194px";
                        that.Isval1 = true;
                        return true;
                    }
                }).catch(err=>{
                    console.log(err)
                })
            };
            // 登录密码
            regInput[2].onblur = function() {
                let val2 = this.value;
                let reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
                if (val2.length < 6) {
                    regBg[2].style.color = "red";
                    regBg[2].style.backgroundPosition = "-6px -228px";
                    regBg[2].innerHTML = "密码长度不能少于6个字符！";
                    that.Isval2 = false;
                    return false;
                } else if (!reg2.test(val2) || val2.length > 12) {
                    regBg[2].style.color = "red";
                    regBg[2].style.backgroundPosition = "-6px -228px";
                    regBg[2].innerHTML = "密码必须是6-12位字母与数字的组合！";
                    that.Isval2 = false;
                    return false;
                } else {
                    regBg[2].style.color = "#fff";
                    regBg[2].style.backgroundPosition = "-6px -194px";
                    regBg[2].innerHTML = "密码必须是6-12位字母与数字的组合！";
                    that.Isval2 = true;
                    return true;
                }
            };

            // 确认密码
            regInput[3].onblur = function() {
                let val2 = regInput[2].value;
                let val3 = this.value;
                if (val3 !== val2) {
                    regBg[3].style.color = "red";
                    regBg[3].style.backgroundPosition = "-6px -228px";
                    regBg[3].innerHTML = "两次输入的的密码不一致，请仔细检查！";
                    that.Isval3 = false;
                    return false;
                } else {
                    regBg[3].style.color = "#fff";
                    regBg[3].style.backgroundPosition = "-6px -194px";
                    regBg[3].innerHTML = "";
                    that.Isval3 = true;
                    return true;
                }
            };

            // 真实姓名
            regInput[4].onblur = function() {
                let val4 = this.value;
                if (val4 == "") {
                    regBg[4].style.color = "red";
                    regBg[4].style.backgroundPosition = "-6px -228px";
                    regBg[4].innerHTML = "请输入您的真实姓名";
                    that.Isval4 = false;
                    return false;
                } else {
                    regBg[4].style.color = "#fff";
                    regBg[4].style.backgroundPosition = "-6px -194px";
                    regBg[4].innerHTML =
                        "必须与您的银行账户名称相同，否则不能出款！";
                    that.Isval4 = true;
                    return true;
                }
            };

            // 手机号码
            regInput[5].onblur = function() {
                let val5 = this.value;
                let reg5 = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
                if (val5 == "") {
                    regBg[5].style.color = "red";
                    regBg[5].style.backgroundPosition = "-6px -228px";
                    regBg[5].innerHTML = "请输入您的手机号码";
                    that.Isval5 = false;
                    return false;
                } else if (!reg5.test(val5)) {
                    regBg[5].style.color = "red";
                    regBg[5].style.backgroundPosition = "-6px -228px";
                    regBg[5].innerHTML = "手机号格式错误";
                    that.Isval5 = false;
                    return false;
                } else {
                    regBg[5].style.color = "#fff";
                    regBg[5].style.backgroundPosition = "-6px -194px";
                    regBg[5].innerHTML = "取回登入密码的唯一途径，请务必真实！";
                    that.Isval5 = true;
                    return true;
                }
            };

            // QQ
            regInput[6].onblur = function() {
                let val6 = this.value;
                let reg6 = /^[1-9][0-9]{4,11}$/;
                if (val6 == "") {
                    regBg[6].style.color = "red";
                    regBg[6].style.backgroundPosition = "-6px -228px";
                    regBg[6].innerHTML = "请输入您的QQ";
                    that.Isval6 = false;
                    return false;
                } else if (!reg6.test(val6)) {
                    regBg[6].style.color = "red";
                    regBg[6].style.backgroundPosition = "-6px -228px";
                    regBg[6].innerHTML = "QQ号格式错误";
                    that.Isval6 = false;
                    return false;
                } else {
                    regBg[6].style.color = "#fff";
                    regBg[6].style.backgroundPosition = "-6px -194px";
                    regBg[6].innerHTML = "取回登入密码的唯一途径，请务必真实！";
                    that.Isval6 = true;
                    return true;
                }
            };
            // 电子邮箱
            regInput[7].onblur = function() {
                let val7 = this.value;
                let reg7 = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                if (val7 == "") {
                    regBg[7].style.color = "red";
                    regBg[7].style.backgroundPosition = "-6px -228px";
                    regBg[7].innerHTML = "请输入您的电子邮箱";
                    that.Isval7 = false;
                    return false;
                } else if (!reg7.test(val7)) {
                    regBg[7].style.color = "red";
                    regBg[7].style.backgroundPosition = "-6px -228px";
                    regBg[7].innerHTML = "电子邮箱格式错误";
                    that.Isval7 = false;
                    return false;
                } else {
                    regBg[7].style.color = "#fff";
                    regBg[7].style.backgroundPosition = "-6px -194px";
                    regBg[7].innerHTML = "取回登入密码的唯一途径，请务必真实！";
                    that.Isval7 = true;
                    return true;
                }
            };
            // 微信
            regInput[8].onblur = function() {
                let val8 = this.value;
                let reg8 = /^[a-zA-Z0-9]([-_a-zA-Z0-9]{5,19})+$/;
                if (val8 == "") {
                    regBg[8].style.color = "red";
                    regBg[8].style.backgroundPosition = "-6px -228px";
                    regBg[8].innerHTML = "请输入您的微信号";
                    that.Isval8 = false;
                    return false;
                } else if (!reg8.test(val8)) {
                    regBg[8].style.color = "red";
                    regBg[8].style.backgroundPosition = "-6px -228px";
                    regBg[8].innerHTML = "微信号格式错误";
                    that.Isval8 = false;
                    return false;
                } else {
                    regBg[8].style.color = "#fff";
                    regBg[8].style.backgroundPosition = "-6px -194px";
                    regBg[8].innerHTML = "取回登入密码的唯一途径，请务必真实！";
                    that.Isval8 = true;
                    return true;
                }
            };

            // 取款密码
            regInput[9].onblur = function() {
                let val9 = this.value;
                let reg9 = /^\d{4}$/;
                if (!reg9.test(val9)) {
                    regBg[9].style.color = "red";
                    regBg[9].style.backgroundPosition = "-6px -228px";
                    regBg[9].innerHTML = "请输入4位纯数字作为取款密码！";
                    that.Isval9 = false;
                    return false;
                } else {
                    regBg[9].style.color = "#fff";
                    regBg[9].style.backgroundPosition = "-6px -194px";
                    regBg[9].innerHTML =
                        "取款时要用到的密码，非常重要，请务必牢记！";
                    that.Isval9 = true;
                    return true;
                }
            };
            // 验证码
            regInput[10].onblur = function() {
                let val10 = this.value;
                let reg10 = /^\d{4}$/;
                let nowyzm = window.sessionStorage.getItem("yzm");
                if (!reg10.test(val10)) {
                    regBg[10].style.color = "red";
                    regBg[10].style.backgroundPosition = "-6px -228px";
                    regBg[10].innerHTML = "验证码格式不正确";
                    that.Isval10 = false;
                    return false;
                }else if(val10 != nowyzm){
                    regBg[10].style.color = "red";
                    regBg[10].style.backgroundPosition = "-6px -228px";
                    regBg[10].innerHTML = "验证码有误，请重新输入！";
                    that.Isval10 = false;
                    return false;
                } else {
                    regBg[10].style.color = "#fff";
                    regBg[10].style.backgroundPosition = "-6px -194px";
                    regBg[10].innerHTML = "";
                    that.Isval10 = true;
                }
            };
            let checkbox = document.getElementById("checkbox");
            let num = 0;
            // checkbox
            checkbox.onclick = function() {
                num++;
                if (num % 2 == 1) {
                    that.Isval11 = true;
                } else {
                    that.Isval11 = false;
                }
            };
        },
        yhxyShow() {
            this.yhxyActive = !this.yhxyActive;
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
        yzm() {
            let random = Math.floor(Math.random() * 10000);
            let yzm = "http://148.72.206.211:803/index/yzm/index?id=" + random;
            this.yzmsrc = yzm;
            window.sessionStorage.setItem("yzm", random);
        },
        // 注册提交事件
        gosubmit() {
            let that = this,
                regInput = document.getElementsByClassName("reg-input"),
                parentname = regInput[0].value,
                user = regInput[1].value.toLowerCase(),
                pass = regInput[2].value,
                realname = regInput[4].value,
                phone = regInput[5].value,
                qq = regInput[6].value,
                email = regInput[7].value,
                wx = regInput[8].value,
                qkpass = regInput[9].value,
                yzm = regInput[10].value;
            if (yzm !== window.sessionStorage.getItem("yzm")) {
                alert("验证码输入不正确，请重新输入！");
                return;
            }

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
                this.Isval11
            ) {
                that.$post("index/user/memberAdd",{
                    parentname: parentname,
                    user: user,
                    pass: pass,
                    realname: realname,
                    phone: phone,
                    qq: qq,
                    email: email,
                    wx:wx,
                    qkpass: qkpass
                }).then(res=>{
                    //如果res为1 则注册成功
                    if (res == 1) {
                        alert("恭喜您注册成功！");
                        that.$post("index/user/userLogin",{
                            user: user,
                            pass: pass
                        }).then(res=>{
                            if(res.code){
                                alert(res.msg)
                                return
                            }else{
                                window.sessionStorage.setItem(
                                    "login_user",
                                    res.sessionid
                                ); //存储登录的用户名的sessionid
                                window.sessionStorage.setItem(
                                    "username",
                                    res.username
                                ); //存储登录的用户名
                                window.sessionStorage.removeItem("usertype"); //清除试玩账号的usertype
                                window.location.reload();
                            }
                        }).catch(err=>{
                            console.log(err)
                        })
                    }else if(res == -1){
                        alert("当前ip今日注册已达到上限！")
                    } else if (res == 2) {
                        alert("用户名已存在，请重新输入！");
                    }
                }).catch(err=>{
                    console.log(err)
                })
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
    created() {
        let that = this;
        this.common.noData(that);
        // 进入页面时 如果有？id= xxx  说明是推荐好友进入的页面 所以自动把推荐人填写上去
        let url = window.location.href;//进入网页的地址
        //获取？之后的内容
        if (url.indexOf("?") != -1) {
            // 把url按照？之后切割成数组，？之后的内容成为数组第一项，然后获取
            let strs = url.split("?")[1];
            // 把获取到的 id=xxx 按照=切割 获取=之后的内容 就是用户名
            this.introducer = strs.split("=")[1]
        }
    },
    mounted() {
        //如果 进入页面时 介绍人不为空  则介绍人不能被编辑
        if(this.introducer != ''){
            this.$refs.presenter.setAttribute("disabled",true)
        }
        this.yzm()
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
.refisterWrap {
    background-color: #1d1d1d;
}
/* 左边aslide部分 开始 */
.refister {
    margin: 0 auto;
    padding: 39px 53px 58px 56px;
    width: 950px;
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
    height: 280px;
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
.refister .right .right-top p:nth-last-child(2) {
    font-size: 16px;
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
    float: right;
    margin-top: -34px;
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

.right-bot .main fieldset ul li > img {
    margin: -10px 0 0 10px;
}
.right-bot .main fieldset:nth-of-type(3) li input {
    float: left;
    width: 154px;
}
.right-bot .main fieldset:nth-of-type(3) li input:focus {
    width: 154px;
}
.right-bot .main fieldset:nth-of-type(3) li:nth-of-type(2) span {
    float: left;
    width: 30px;
    height: 30px;
    margin-left: 70px;
}
.right-bot .main fieldset:nth-of-type(3) li:nth-of-type(2) span input {
    width: 20px;
    height: 20px;
    position: relative;
    top: 5px;
}
.right-bot .main fieldset:nth-of-type(3) li:nth-of-type(2) h6 {
    float: left;
    height: 30px;
    line-height: 30px;
    background-color: rgba(66, 64, 64, 0.5);
    border-radius: 3px;
    padding: 0 15px;
    color: #848484;
    font-weight: normal;
}
.right-bot .main fieldset:nth-of-type(3) li:nth-of-type(2) h6 em {
    font-style: normal;
    color: #ecdf05;
    cursor: pointer;
}
.right-bot .main fieldset:nth-of-type(3) li:nth-of-type(3) > a {
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
.right-bot .main fieldset:nth-of-type(3) li:nth-of-type(3) > a:hover {
    background-color: #d4ad29;
}
.right-bot .main fieldset:nth-of-type(3) li:nth-of-type(3) p {
    background: none;
}
.right-bot .main fieldset:nth-of-type(3) li:nth-of-type(3) p span {
    width: 120px;
    font-size: 12px;
    color: gray;
}
.right-bot .main fieldset:nth-of-type(3) li:nth-of-type(3) p a {
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
.right-bot .main .bg8,
.right-bot .main .bg9,
.right-bot .main .bg10,
.right-bot .main .bg11  {
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