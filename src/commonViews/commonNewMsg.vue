<template>
    <div class="wrap">
        <div class="top">
            <span class="title"></span>
        </div>
        <!-- <h4>最新消息</h4> -->
        <ul class="newMsgPop">
            <li>
                <p class="left">
                    <b>日期</b>
                </p>
                <p class="right">
                    <b>内容</b>
                </p>
            </li>
            <li v-for="(item,index) in news" :key="index">
                <p class="left">{{item.remark}}</p>
                <p class="right">{{item.mess}}</p>
            </li>
        </ul>
        <div class="foot"></div>
    </div>
</template>
<script>
import axios from "axios";
import "../css/common.css";
export default {
    data() {
        return {};
    },
    computed: {
        news() {
            return this.$store.state.news;
        }
    },
    created(){
        let that = this;
        this.common.noData(that);
    },
    mounted() {
        document.getElementsByTagName(
            "html"
        )[0].style.cssText = `background: #d4d4d4; height: 100%;`;
    },
};
</script>
<style scoped>
.wrap {
    position: fixed;
    top: 30px;
    left: 50%;
    margin-left: -360px;
    width: 720px;
    font-size: 14px;
}
.top {
    width: 720px;
    height: 58px;
    background: url("../../static/images/news/top.jpg") no-repeat left top;
}
.top .title {
    display: inline-block;
    position: relative;
    left: 23px;
    width: 180px;
    height: 58px;
    background: url("../../static/images/news/title.jpg") left top no-repeat;
}
.newMsgPop {
    margin: 0 auto;
    padding: 0 37px;
    width: 646px;
    background: url("../../static/images/news/liangce.jpg") left top repeat-y;
}
.newMsgPop li {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 0;
}
.newMsgPop li::after {
    position: absolute;
    bottom: 0;
    content: "";
    width: 645px;
    height: 3px;
    background: url("../../static/images/news/line.jpg") left center no-repeat;
}
.newMsgPop li .left {
    width: 35%;
    padding-left: 15px;
    font-weight: bold;
}
.newMsgPop li .right {
    width: 65%;
    padding-right: 15px;
}
.foot {
    padding-top: 20px;
    width: 720px;
    height: 35px;
    background: url("../../static/images/news/bot.jpg") left top no-repeat;
}
</style>
