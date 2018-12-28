<template>
    <!-- title 开始 -->
    <div class="y-title">
        <div>
            <img class="img1" v-lazy="titleLogo1" alt="">
            <img class="img2" v-lazy="titleLogo2" alt="">
            <div class="rightTop">
                <div>
                    <span ref="color1">合法拍照展示</span>
                    <p>
                        <img src="../../static/images/title/pzs.png" alt="">
                    </p>
                </div>
                <a href="javascript:;" v-for="(item,index) in headurlInfo" ref="colorChange" @click="goOthers(item.url)" target="_blank" :key="index">
                    {{item.name}}
                </a>
                <div>
                    <img src="../../static/images/title/top-img01.png" alt="">
                    <img src="../../static/images/title/top-img02.png" alt="">
                    <img src="../../static/images/title/top-img03.png" alt="">
                </div>
            </div>
            <ul class="login" v-if="islogin">
                <li>
                    <input ref="username" id="username" type="text" placeholder="账号">
                </li>
                <li>
                    <input ref="password" id="password" type="password" placeholder='密码'>
                </li>
                <!-- <li>
                        <input type="text" placeholder='验证码'>
                    </li> -->
                <li class="shiwan">
                    <p>
                        <router-link to="" @click.native="textReg">免费试玩</router-link>
                    </p>
                    <p>
                        <router-link to="forgetPassword" tag="a" target="_blank">忘记密码</router-link>
                    </p>
                </li>
                <li>
                    <router-link id="submit" @click.native="login" class="submit" to="">登录</router-link>
                </li>
                <li>
                    <router-link to="register">注册</router-link>
                </li>
            </ul>
            <!-- 登陆后的首页导航 -->
            <ul class="login logintwo" v-else>
                <li class="logined">
                    <div class="men-info">
                        <span>账号：</span>
                        <i class="colorOrange">{{loginArr.user}}</i>
                        <div>
                            <span>余额：</span>
                            <i class="colorOrange">{{loginArr.money}}</i>
                            <!-- 余额的二级菜单 -->
                            <div class="money">
                                <ul>
                                    <!-- <li class="flush">刷新余额</li> -->
                                    <li v-for="(item,index) in titleList" :key="index">
                                        <span>{{item.name}}：</span>
                                        <i>{{item.money}}</i>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 首页导航 -->
                    <div class="men-list">
                        <router-link tag="a" target="_blank" :to="{name:'memberCenter',query:{index:1,num:0}}">会员中心</router-link>
                        <router-link tag="a" target="_blank" :to="{name:'memberCenter',query:{index:2,num:1}}">线上存款</router-link>
                        <router-link tag="a" target="_blank" :to="{name:'memberCenter',query:{index:2,num:2}}">线上取款</router-link>
                        <router-link tag="a" target="_blank" :to="{name:'memberCenter',query:{index:2,num:0}}">额度转换</router-link>
                        <router-link tag="a" target="_blank" :to="{name:'memberCenter',query:{index:5,num:0}}">未读讯息
                            <i>({{noRead}})</i>
                        </router-link>
                        <router-link tag="a" target="_blank" :to="{name:'memberCenter',query:{index:6,num:0}}" class="unread"></router-link>
                        <a href="javascript:;" class="colorOrange" @click="loginOut">登出</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- title 结束 -->
</template>

<script>
import { mapActions } from 'vuex'
import Browser from '../js/Browser.js'
import "./../css/common.css";
export default {
    data() {
        return {
            isLogin: "", //是否登录
            isUser: true, //检测是否登录
            // 右上角导航
            rightTopNav: [
                {
                    href: "partner",
                    title: "代理合作"
                },
                {
                    href: "pay",
                    title: "快速充值中心"
                },
                {
                    href: "specialOffers",
                    title: "优惠活动"
                },
                {
                    href: "detection",
                    title: "线路检测"
                }
            ],
        };
    },
    computed: {
        // 头部logo
        titleLogo1() {
            return this.$store.state.titleLogo1;
        },
        titleLogo2() {
            return this.$store.state.titleLogo2;
        },
        headurlInfo() {
            // 判断headerurlInfo 是否是空数组
            let len = this.$store.state.headurlInfo.length <= 0 ? this.$store.state.headurlInfo.length : this.$store.state.headurlInfo.length - 1
            // 是否是代理用户
            if (
                window.sessionStorage.getItem("login_user") &&
                window.sessionStorage.getItem("agent")
            ) {
                if(len == 0){
                    // 空数组时
                    this.$store.state.headurlInfo.push({
                        id: "agent_1",
                        name: "下级管理",
                        url: window.location.href.split("#")[0] + "#/memberCenter?index=4&num=0"
                    })
                }else{
                    // 不是空数组时
                    this.$store.state.headurlInfo[len].id === "agent_1" 
                    ? "" 
                    : this.$store.state.headurlInfo.push({
                        id: "agent_1",
                        name: "下级管理",
                        url: window.location.href.split("#")[0] + "#/memberCenter?index=4&num=0"
                    })
                }
            }
            return this.$store.state.headurlInfo;
        },

        // 余额下拉列表
        titleList() {
            return this.$store.state.MemberCenter.myAccount;
        },
        //账号和余额
        loginArr() {
            return this.$store.state.loginArr;
        },
        //未读消息
        noRead() {
            return this.$store.state.noRead ? this.$store.state.noRead : 0;
        }
    },
    created() {
        if (window.sessionStorage.getItem("login_user")) {
            this.islogin = false;
        } else {
            this.islogin = true;
        }
    },
    methods: {
        // 登录窗口
        loginShow() {
            let gamesloginWrap = document.getElementsByClassName(
                "gamesloginWrap"
            )[0];
            gamesloginWrap.style.display = "block";
        },
        // 登录
        login() {
            let user = this.$refs.username.value;
            let pass = this.$refs.password.value;
            let that = this;
            let loginInfo = "";
            let info = new Browser(); //判断浏览器设备
            // 获取初始信息
            var app=navigator.appVersion;
            // 根据括号进行分割
            var left=app.indexOf('(');
            var right=app.indexOf(')');
            var str=app.substring(left+1,right); 
            // console.log(str+'裁剪过后的');
            var Str=str.split(";");
            // 手机型号--苹果 iPhone
            var Mobile_Iphone=Str[0];
            // 手机型号--安卓 
            var Mobile_Android=Str[2];
            // 红米手机等特殊型号处理 匹配字符
            var res=/Android/;
            var reslut=res.test(Mobile_Android);
           
            // 根据设备型号判断设备系统
            if(Mobile_Iphone=='iPhone'){
                loginInfo += Mobile_Iphone + Str[1].substring(4,19)
                // alert('访问设备型号'+Mobile_Iphone+'系统版本'+Str[1].substring(4,19));
            }else if(Mobile_Iphone=='Linux'){
                if(reslut){
                    loginInfo += Str[4].substring(0,9) + Str[2]
                    // alert('访问设备型号'+Str[4].substring(0,9)+'系统版本'+Str[2]);
                }else{
                    loginInfo += Mobile_Android.substring(0,9) + Str[1]
                    // alert('访问设备型号'+Mobile_Android.substring(0,9)+'系统版本'+Str[1]);
                }
            }else if(Mobile_Iphone=='iPad'){
                loginInfo += Str[0] + Str[1].substring(4,12)
                // alert('访问设备'+Str[0]+'系统版本'+Str[1].substring(4,12));
            }
            // 浏览器名称 + 版本
            loginInfo += " " + info.browser +" "+ info.version
            // axios 请求
            that.$post("index/user/userLogin",{
                user: user,
                pass: pass,
                logininfo: loginInfo
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
                console.log(err);
            })
        },
        // 登出
        loginOut() {
            let user = window.sessionStorage.getItem("login_user")
            // axios 请求 告诉后台已退出
            this.$post("index/user/Ext",{
                user: user
            }).then(res=>{
                window.sessionStorage.clear();
                window.location.reload();
            }).catch(err=>{
                console.log(err);
            })
        },
        // 试玩
        textReg() {
            let that = this;
            let username = window.sessionStorage.getItem("username");
            let usertype = window.sessionStorage.getItem("usertype");
            if (username || usertype) {
                alert("您已登陆或已开启试玩模式！");
                return;
            } else {
                let username = "_text"; //试玩用户名前默认+text
                let pass = "weinisi123"; //所有的试玩账号默认密码
                let x = "0123456789qwertyiuiopasdfghjklzxcvbnm"; //定义随机的字符串+text 发送到后台
                usertype = 0; //试玩账号的type
                // 默认用户名+7位字符串
                for (var i = 0; i < 7; i++) {
                    username += x.charAt(
                        Math.ceil(Math.random() * 100000000) % x.length
                    );
                }
                // 如果表单的正则都判断成功 则可以提交
                that.$post("index/user/memberAdd",{
                    user: username,
                    pass: pass,
                    usertype: usertype
                }).then(res=>{
                    if (res == 1) {
                        alert("您已开启试玩模式！");
                        window.sessionStorage.setItem("username", username);
                        window.sessionStorage.setItem("usertype", usertype);
                        that.$router.push({ path: "/" });
                        window.location.reload();
                    } else {
                        alert("开启试玩模式失败！");
                    }
                }).catch(err=>{
                    console.log(err);
                })
            }
        },
        // 跳转页面
        goOthers(href){
            let win = window.open() // 跳转游戏链接 新窗口
            win.location = href;
        },

        // 顶部a链接颜色自动变化
        colorChange() {
            let colorChange = this.$refs.colorChange;
            let color1 = this.$refs.color1; //合法拍照展示
            let color2 = colorChange[0]; //代理合作
            let color3 = colorChange[1]; //快速充值中心
            let num = 0;
            //对应的切换的颜色
            let colorArr1 = ["rgb(40,255,40)", "rgb(255,0,128)"];
            let colorArr2 = ["rgb(255,216,1)", "rgb(255,255,255)"];
            let colorArr3 = ["rgb(255,255,255)", "rgb(255,0,0)"];
            // 设置定时器 每隔0.5秒自动切换
            window.colorTitletimer = setInterval(function() {
                color1.style.color = colorArr1[num];
                color2.style.color = colorArr2[num];
                color3.style.color = colorArr3[num];
                num++;
                if (num >= colorArr1.length) num = 0;
            }, 500);
        },
        ...mapActions([
            "handle_getMemberCenter",
            "handle_getNoread",
            "handle_getAgent"
        ])
    },
    mounted() {
        let user = window.sessionStorage.getItem("login_user");
        let that = this;

        // 会员中心
        if (user) {
            this.handle_getMemberCenter({ user: user, that: that });
            // 未读消息提示 和 账号--余额
            this.handle_getNoread({ user: user, that: that });
            this.handle_getAgent({ user: user, that: that });
        }

        if(this.headurlInfo.length > 2){
            this.colorChange()
        }
    },
    watch:{
        // 头部导航链接变色
        headurlInfo(val,oldval){
            if( val != undefined){
                this.$nextTick(()=>{
                    this.colorChange()
                })
            }
        }
    },
    beforeDestroy(){
        this.colorChange = null;
    }
};
</script>

<style>
img[lazy="error"] {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    background: none;
}
.men-list i {
    font-style: normal;
    color: yellow;
}

.rightTop {
    position: absolute;
    top: 20px;
    right: 50px;
    z-index: 5;
    font-size: 12px;
}
.rightTop > div {
    float: left;
    color: #fff;
    padding: 0 5px;
}
.rightTop > div:hover > p {
    display: block;
}
.rightTop > div p {
    display: none;
    position: absolute;
    top: 5px;
    left: 0;
    z-index: 5;
}
.rightTop a {
    float: left;
    padding: 0 5px;
    color: #fff;
}
.rightTop a::before {
    position: relative;
    left: -2px;
    content: "|";
    color: #fff;
    /* position: absolute;
    top: 0;
    left: 0; */
}

.rightTop div img {
    vertical-align: middle;
}
</style>
