<template>
    <div class="gamesloginWrap">
        <div class="gameslogin">
            <div class="titleBanner">
                <span id="close" @click="gamesloginClose"></span>
            </div>
            <h2>会员登录</h2>
            <form>
                <div class="gamesloginBox">
                    <input type="text" ref="gamesloginUser" class="gamesloginUser" placeholder="请输入用户名">
                </div>
                <div class="gamesloginBox">
                    <input class="gamesloginPass" ref="gamesloginPass" type="password" autocomplete="new-password" placeholder="请输入密码">
                </div>
                <div class="gamesloginBox">
                    <input type="text" class="gamesloginCode">
                </div>
                <div class="gamesloginBot">
                    <a @click="login">登录</a>
                    <router-link to="forgetPassword">忘记密码</router-link>
                    <router-link to="register">注册会员</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Browser from '../js/Browser.js'
export default {
    data() {
        return {};
    },
    methods: {
        gamesloginClose() {
            let gamesloginWrap = document.getElementsByClassName(
                "gamesloginWrap"
            )[0];
            gamesloginWrap.style.display = "none";
        },
        login() {
            let user = this.$refs.gamesloginUser.value;
            let pass = this.$refs.gamesloginPass.value;
            let that = this;
            let loginInfo = "";
            let info = new Browser(); //判断浏览器设备
            // 获取初始信息
            var app=navigator.appVersion;
        //    根据括号进行分割
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
    },
};
</script>

<style scoped>
.gamesloginWrap {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
}
.gamesloginWrap .gameslogin {
    position: fixed;
    top: 20%;
    left: 50%;
    margin-left: -155px;
    width: 310px;
    padding: 5px;
    background-color: #fff;
}
.gamesloginWrap .gameslogin .titleBanner {
    height: 140px;
    margin: 0 auto;
    background: #fff url("../../static/images/gameslogin-img/title-bg.jpg")
        no-repeat;
}
.gamesloginWrap .gameslogin .titleBanner span {
    /* display: inline-block; */
    float: right;
    width: 22px;
    height: 20px;
    background: url("../../static/images/gameslogin-img/close.png") no-repeat;
    cursor: pointer;
}
.gamesloginWrap .gameslogin .titleBanner span:hover {
    background-position: 0 -20px;
}
.gamesloginWrap .gameslogin h2 {
    font-size: 18px;
    color: #333;
    height: 35px;
    line-height: 35px;
    font-weight: normal;
    text-indent: 22px;
}
.gamesloginWrap .gameslogin form > div {
    margin: 5px 0;
}
.gamesloginWrap .gameslogin form .gamesloginBox input {
    display: block;
    margin: 0 auto;
    width: 258px;
    height: 28px;
    line-height: 28px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #333;
    text-indent: 25px;
    font-size: 13px;
    outline: none;
    box-sizing: content-box;
    background: url("../../static/images/gameslogin-img/input-bg.png") no-repeat
        4px 3px;
}
.gamesloginWrap .gameslogin form .gamesloginBox:nth-of-type(2) input {
    background-position: 3px -38px;
}
.gamesloginWrap .gameslogin form .gamesloginBox:nth-of-type(3) input {
    display: none;
    background-position: 3px -79px;
}
.gamesloginWrap .gameslogin form .gamesloginBot {
    width: 260px;
    margin: 0 auto;
}
.gamesloginWrap .gameslogin form .gamesloginBot a {
    display: inline-block;
    width: 260px;
    border-radius: 10px;
    text-align: center;
}
.gamesloginWrap .gameslogin form .gamesloginBot a:nth-of-type(1) {
    background: #ffba61;
    color: #935403;
    font-size: 16px;
    margin-top: 10px;
    height: 40px;
    line-height: 40px;
}
.gamesloginWrap .gameslogin form .gamesloginBot a:nth-of-type(2) {
    color: #666;
    height: 35px;
    line-height: 25px;
}
.gamesloginWrap .gameslogin form .gamesloginBot a:nth-of-type(3) {
    color: #fff;
    margin-bottom: 10px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background: #54b9ff url("../../static/images/gameslogin-img/register.png")
        no-repeat 85px 15px;
}
</style>
