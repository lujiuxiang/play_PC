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
                        <img src="../../static/images/specialOffers-img/banner.jpg" alt="">
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
        <!-- 投诉建议 开始 -->
        <div class="play activity">
            <div class="playwrap complaint">
                <p>投诉建议</p>
                <form action="">
                    <fieldset>
                        <div>
                            <img src="../../static/images/complaint-img/left.gif" alt="">
                            <img src="../../static/images/complaint-img/left.png" alt="">
                        </div>
                        <div>
                            <p>投诉/建议类型:</p>
                            <p>
                                <input @click="checkedNum(1)" type="checkbox" name="checkbox" id="check1">
                                <label for="check1" ref="check1">客服态度不好</label>
                            </p>
                            <p>
                                <input @click="checkedNum(2)" type="checkbox" name="checkbox" id="check2">
                                <label for="check2" ref="check2">游戏不好玩</label>
                            </p>
                            <p>
                                <input @click="checkedNum(3)" type="checkbox" name="checkbox" id="check3">
                                <label for="check3" ref="check3">游戏太少</label>
                            </p>
                        </div>
                        <div class="clearfix">
                            <p class="title">投诉/建议内容:</p>
                            <textarea ref="textarea" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div class="form">
                            <span>账号：</span>
                            <input type="text" ref="userID">
                            <span>QQ：</span>
                            <input type="text" ref="qq">
                            <span>验证码：</span>
                            <input type="text" ref="yzm">
                            <img id="imageId" :src="yzmsrc" height="25" @click="yzmShow" alt="( 点选此处产生新验证码 )" style="vertical-align:bottom;" align="absmiddle">
                        </div>
                    </fieldset>
                </form>
                <div class="tijiao">
                    <input type="button" @click="goSubmit" value="提交">
                </div>
            </div>
        </div>
        <!-- 投诉建议 结束 -->

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
import "./../css/common.css";

export default {
    name: "index",
    data() {
        return {
            onoff: "false",
            // 用来存储投诉类型的 状态 （判断是点击还是取消）
            checked1: false,
            checked2: false,
            checked3: false,
            // 验证码
            yzmsrc: "",
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
        //   验证码
        yzmShow() {
            let random = Math.floor(Math.random() * 10000);
            let yzm = "http://148.72.206.211:803/index/yzm/index?id=" + random;
            this.yzmsrc = yzm;
            window.sessionStorage.setItem("yzm", random);
        },
        // 投诉/建议类型 选择
        checkedNum(num){
            // num = 1: 第一个原因
            // num = 2: 第二个原因
            // num = 3: 第三个原因
            if(num === 1){
               this.checked1 = !this.checked1
            }else if(num === 2){
                this.checked2 = !this.checked2
            }else if(num === 3){
                this.checked3 = !this.checked3
            }
        },
        // 提交事件
        goSubmit(){
            let check1 = this.$refs.check1, //第一个原因的内容
                check2 = this.$refs.check2, //第二个原因的内容
                check3 = this.$refs.check3, //第三个原因的内容
                textarea = this.$refs.textarea, //投诉/建议内容 
                userID = this.$refs.userID, //账号 （可不填）
                qq = this.$refs.qq, //qq （可不填）
                yzm = this.$refs.yzm, //验证码
                real_yzm = window.sessionStorage.getItem("yzm"); //session的验证码 （和输入的验证码做对比）
            let reason = []; //用于存放 投诉/建议类型 
            if(this.checked1 == true){
                reason.push(check1.innerHTML)
            }
            if(this.checked2 == true){
                reason.push(check2.innerHTML)
            }
            if(this.checked3 == true){
                reason.push(check3.innerHTML)
            }
            // 如果投诉/建议类型 没有选择 无法提交
            if(reason.length == 0){
                alert("投诉/建议类型不能为空！")
                return
            }
            // 如果投诉/建议内容 没有填写 无法提交
            if(textarea.value.trim() == ''){
                alert("投诉/建议内容不能为空！")
                return
            }
            // 验证码填写错误 重新生成验证码
            if(yzm.value != real_yzm){
                alert("验证码填写错误！")
                this.yzmShow()
                return
            }

            // 以上条件都通过 则调取接口 发送成功
            alert('提交成功')
            this.checked1 = this.checked2 = this.checked3 = false
            textarea.value = userID.value = qq.value = yzm.value = '';
            check1.parentNode.children[0].checked = check2.parentNode.children[0].checked = check3.parentNode.children[0].checked = false
            this.yzmShow()

        }
    },
    computed: {
        // 最新消息
        news() {
            return this.$store.state.news;
        }
    },
    mounted() {
        this.yzmShow()
    },
    beforeDestroy() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.play{
    padding: 20px 0;
    background-color: #1d1d1d;
}
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
.active {
    display: block !important;
}

.contentWrap > ul,
.contentWrap > ul li,
.contentWrap > ul li > a img {
    width: 100%;
    height: 100%;
}
/* 投诉  开始 */
.complaint {
    width: 1000px;
    padding: 0 10px;
    background-color: #ffffff;
    margin: 0px auto;
    font-size: 12px;
    border: 1px solid #a9a9a9;
}
.complaint p {
    font-size: 24px;
    padding-top: 10px;
    color: #545454;
    font-weight: bold;
}
.complaint form fieldset {
    display: block;
    margin: 10px 0;
    padding: 20px 120px;
    border-bottom: 1px solid #cccccc;
    border-top: 1px solid #cccccc;
    border-left: none;
    border-right: none;
    text-align: left;
}
.complaint form fieldset p {
    color: #545454;
    position: relative;
    margin: 10px 0;
    font-size: 12px;
    padding: 0;
}
.complaint form fieldset input {
    vertical-align: middle;
    margin-left: 120px;
}

.complaint form fieldset .title {
    float: left;
}
.complaint form fieldset textarea {
    margin-top: 10px;
    margin-left: 30px;
    width: 500px;
    height: 100px;
    resize: none;
    border: 1px solid #969696;
}

.complaint form .form {
    padding-left: 110px;
}
.complaint form .form input {
    margin-left: 0;
    margin-top: 10px;
    vertical-align: baseline;
    width: 120px;
    height: 22px;
}
.complaint form .form input:nth-of-type(3) {
    width: 60px;
}

.complaint .tijiao {
    text-align: center;
    padding-bottom: 10px;
}
.complaint .tijiao input {
    width: 191px;
    height: 23px;
    border: none;
    outline: none;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    background: url("../../static/images/complaint-img/btnBg.jpg") no-repeat;
}
.complaint .tijiao input:hover {
    background-position: 0 bottom;
}
/* 投诉  结束 */
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
</style>