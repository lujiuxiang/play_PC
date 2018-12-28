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
                        <li v-for="(item,index) in aslide" :key="index" ref="aslide" v-if="aslide.length>1">
                            <!-- 有模板时 -->
                            <router-link v-if="item.name" :to="item.name" :style="item.bg"></router-link>
                            <!-- 没有模板时 跳转 -->
                            <a href="" v-else target="blank" :style="item.bg"></a>
                        </li>
                    </ul>
                    <div class="bot-bg"></div>
                </div>
                <!-- 联络我们 -->
                <div class="right first">
                    <div class="txt">
                        <span>联络我们</span>
                        <p>威尼斯人娱乐场24小时竭诚为您服务，我们为您提供多种联络方式。</p>
                        <p>您有任何疑问、意见都可以通过下述方式随时与我们联系，我们期待为您服务。</p>
                        <p>通过网站24小时在线客服：在线客服</p>
                        <p>或通过电子邮件：</p>
                        <p>vns33117@gmail.com [常见问题]</p>
                        <p>请在联系客服的时候注明您的游戏账号，我们会在最短的时间内以邮件形式给您回复信息。</p>

                    </div>
                    <div class="txt-bot">
                        <ul>
                            <li>
                                <span>姓名：</span>
                                <input type='text' ref="realname" placeholder="请输入姓名">
                            </li>
                            <li>
                                <span>联络电话：</span>
                                <input type='text' ref="phone" placeholder="请输入联络电话">
                            </li>
                            <li>
                                <span>QQ：</span>
                                <input type='text' ref="qq" placeholder="请输入QQ">
                            </li>
                            <li>
                                <span>电子邮箱：</span>
                                <input type='text' ref="email" placeholder="请输入电子邮箱">
                            </li>
                            <li class="h170">
                                <span>联络事项：</span>
                                <textarea class="event_input" ref="textarea" cols="42" rows="10" wrap="logical" name="customer_text" id="customer_text" maxlength="200" placeholder="请输入的内容不超过200个字符"></textarea>
                            </li>
                            <li class="btn">
                                <input type="button" value="送出" @click="send">
                                <input type="button" value="清除" @click="clear">
                            </li>
                        </ul>

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
        },
        // 送出
        send(){
            let realname = this.$refs.realname,
                phone = this.$refs.phone,
                qq = this.$refs.qq,
                email = this.$refs.email,
                textarea = this.$refs.textarea;
                if(realname.value.trim() === ''){
                    alert("请输入您的姓名！")
                }
                if(phone.value.trim() === ''){
                    alert("请输入您的联系电话！")
                }
                if(qq.value.trim() === ''){
                    alert("请输入您的QQ！")
                }
                if(email.value.trim() === ''){
                    alert("请输入您的电子邮箱！")
                }
                if(realname.value.trim() === ''){
                    alert("请输入您的联络事项！")
                }

                alertO("发送成功！")
        },
        // 清除
        clear(){
            let realname = this.$refs.realname,
                phone = this.$refs.phone,
                qq = this.$refs.qq,
                email = this.$refs.email,
                textarea = this.$refs.textarea;
            realname.value = '';
            phone.value = '';
            qq.value = '';
            email.value = '';
            textarea.value = '';
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
<style scoped>
/* 右边 联络我们 开始 */
.right .txt-bot {
    width: 655px;
    margin: 0 auto;
}
.right .txt-bot ul {
    padding-top: 20px;
    border-top: 1px solid #aaa;
}
.right .txt-bot ul li {
    margin-bottom: 10px;
    position: relative;
    height: 44px;
}
.right .txt-bot ul li span {
    display: block;
    float: left;
    width: 100px;
    height: 42px;
    color: #fff;
    line-height: 42px;
    text-align: right;
    font-size: 14px;
}
.right .txt-bot ul li input {
    float: left;
    width: 280px;
    height: 42px;
    background: #fff;
    border-radius: 2px;
    -webkit-border-radius: 2px;
    box-shadow: inset 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
    border: none;
    border-radius: 2px;
    font-size: 14px;
    text-indent: 10px;
    outline: none;
}
.right .txt-bot ul .h170 {
    height: 170px;
}
.right .txt-bot ul .h170 textarea {
    width: 280px;
    height: 160px;
    padding: 10px;
    outline: none;
    box-sizing: border-box;
}
.right .txt-bot ul .btn {
    padding-left: 75px;
}
.right .txt-bot ul .btn input {
    margin-left: 25px;
    width: 126px;
    height: 42px;
    background: #907c57;
    font-size: 14px;
    border-radius: 2px;
    color: #343434;
    border: none;
    cursor: pointer;
    box-shadow: none;
}
.right .txt-bot ul .btn input:hover {
    background: #d4ad29;
    color: #fff;
}
/* 右边 联络我们 结束 */

/* banner下面游戏 结束 */
</style>