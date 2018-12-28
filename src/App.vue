<template>
    <div id="app" v-title :data-title="header_title">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>

        <!-- 首页广告 开始 -->
        <advertising v-show="commonNewMsgShow"></advertising>
        <!-- 首页广告 结束 -->
    </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex"
import advertising from "./components/advertising.vue";
export default {
    name: "App",
    data() {
        return {
            commonNewMsgShow: true
        };
    },
    components: {
        advertising
    },
    computed: {
        header_title(){
            window.document.title = this.$store.state.header_title ? this.$store.state.header_title : "weinisi"
            return this.$store.state.header_title;
        }
    },
    methods: {
        ...mapActions([
            "handle_getData"
        ])
    },
    created() {
        this.handle_getData(this);
    },
    watch: {
        // 如果打开的新窗口为 最新消息 或者是进入彩票游戏页面 的新窗口 则不显示广告
        $route(to, from) {
            if (to.name == "commonNewMsg" || to.name == "lotteryGames" || to.name == "noData") {
                this.commonNewMsgShow = false;
            }
        }
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
.clearfix::after {
    display: block;
    content: "";
    clear: both;
}
.forgetBg {
    height: 100%;
    background-color: #293242;
}
/* 去除 input type为number的上下箭头 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"] {
    -moz-appearance: textfield;
}

input[type="date"]::-webkit-inner-spin-button {
    visibility: hidden;
}

img[lazy="loading"] {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    background: url("../static/images/loading.gif") no-repeat center;
}
img[lazy="error"] {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    background: url("../static/images/error.jpg") no-repeat center;
}
</style>
