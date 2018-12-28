<template>
    <!-- 顶部导航 开始 -->

    <div ref="titleNav" class="title-nav" id="titleNav">
        <ul v-if="titleList.length > 0">
            <!-- 首页导航 -->
            <li class="nav">
                <router-link :to="{name:'index'}">首页</router-link>
                <!-- 二级菜单 -->
                <ul>
                    <li v-for="(item,index) in titleListFirst" :key="index">
                        <!-- 二级菜单的上部分游戏 -->
                        <div v-text="item.list1.listname"></div>
                        <p>
                            <!-- 模板 存在时 点击跳转模板 -->
                            <router-link v-for="(newitem,newindex) in item.list1.list1Content" v-if="newitem.url" :to="{name:newitem.url}" :key="newindex" v-text="newitem.title">
                            </router-link>
                            <!-- 模板不存在时 点击跳转游戏 -->
                            <a v-else @click="goin(newitem.gamename,newitem.gamecode,newitem.moneycode)" :key="newindex" v-text="newitem.title">
                            </a>
                            <!-- 模板不存在时 点击跳转游戏 -->
                        </p>
                        <!-- 二级菜单的下部分游戏 -->
                        <div v-text="item.list2.listname"></div>
                        <p>
                            <!-- 模板 存在时 点击跳转模板 -->
                            <router-link v-for="(newitem,newindex) in item.list2.list2Content" v-if="newitem.url" :to="{name:newitem.url}" :key="newindex" v-text="newitem.title">
                            </router-link>
                            <!-- 模板不存在时 点击跳转游戏 -->
                            <a v-else @click="goin(newitem.gamename,newitem.gamecode,newitem.moneycode)" :key="newindex" v-text="newitem.title">

                            </a>
                            <!-- 模板不存在时 点击跳转游戏 -->
                        </p>
                        <!-- 查看更多 -->
                        <p>
                            <em>
                                <router-link style="background:none;" :to="{name:item.list0.list0Content[0].url}" v-text="item.list0.list0Content[0].title"></router-link>
                            </em>
                        </p>
                    </li>

                </ul>
            </li>
            <!-- 首页右侧的 其他的导航 -->
            <li class="nav" v-for="(item,index) in titleList" :key="index">
                <!-- 模板 存在时 点击跳转模板 -->
                <router-link v-if="item.url != ''" :to="{name:item.url}" >
                    <span>{{item.title}}</span>
                    <i>{{item.remark}}</i>
                    <em>
                        <img v-if="item.imgurl" v-lazy="item.imgurl" alt="">
                    </em>
                </router-link>
                <!-- 模板不存在时 点击跳转游戏 -->
                <a v-else @click="goin(item.gamename,item.gamecode,item.moneycode)">
                    <span>{{item.title}}</span>
                    <i>{{item.remark}}</i>
                    <em>
                        <img v-if="item.imgurl" v-lazy="item.imgurl" alt="">
                    </em>
                </a>
                <!-- 首页导航的二级菜单 -->
                <ul class="secondMenu-wrap" v-if="item.sub">
                    <img class="img" src="../../static/images/title-nav/secondMenu/arrow.png" alt="">
                    <li class="secondMenu" v-for="(item,index) in item.sub" :key="index">
                        <p>
                            <img class="radius" v-lazy=item.imgurl alt="">
                            <!-- 模板 存在时 点击跳转模板 -->
                            <router-link to="" v-if="item.url" v-text="item.title"></router-link>
                            <!-- 模板 不存在时 点击跳转链接 -->
                            <a v-else @click="goin(item.gamename,item.gamecode,item.moneycode)" v-text="item.title"></a>
                            <img v-if="item.ico == 'price'" src="../../static/images/title-nav/price.gif" alt="">
                            <img v-else-if="item.ico == 'hot'" src="../../static/images/title-nav/hot.gif" alt="">
                        </p>
                    </li>
                </ul>
            </li>
        </ul>
        <div id="loading">
            <div class="load">
                <img src="../../static/images/title-nav/loading.gif" alt="">
            </div>
        </div>
    </div>
    <!-- 顶部导航 结束 -->
</template>

<script>
import "./../css/common.css";
import axios from "axios";
export default {
    data() {
        return {};
    },
    computed: {
        titleListFirst() {
            return this.$store.state.titleListFirst;
        },
        titleList() {
            return this.$store.state.titleList;
        }
    },
    methods: {
        // 跳转游戏
        goin(a, b, c) {
            let that = this;
            this.common.goin(a, b, c, that);
        },
        fixed() {
            let scrollTop = document.documentElement.scrollTop;
            if (scrollTop > 134) {
                this.$refs.titleNav.style.cssText = `
                                                position: fixed;
                                                top: 0;
                                                width: 100%;
                                                z-index: 3;
                                            `;
            } else if (scrollTop < 134) {
                this.$refs.titleNav.style.cssText = `
                                                position: absolute;
                                                width: 100%;
                                                height: 70px;
                                                z-index: 3;
                                            `;
            }
        }
    },
    created(){
        let that = this;
        this.common.noData(that);
    },
    mounted() {
        window.addEventListener("scroll", this.fixed);
    },
    destroyed() {
        window.removeEventListener("scroll", this.fixed);
    }
};
</script>

<style scoped>
#loading {
    display: none;
    position: fixed;
    top: -140px;
    left: 0;
    width: 100%;
    height: 1000%;
    background-color: #fff;
    z-index: 999;
}
#loading .load {
    position: fixed;
    top: 20%;
    left: 50%;
    margin-left: -480px;
}
.title-nav ul li {
    height: 100%;
}
.router-link-active {
    background: url("../../static/images/title-nav/nav-hover.png") no-repeat;
}
.radius {
    border-radius: 50%;
}
</style>
