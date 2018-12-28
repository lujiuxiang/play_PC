// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vuex
import Vuex from 'vuex'
// 引入懒加载插件
import VueLazyload from 'vue-lazyload'
// import 引入轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import store from './js/store.js'
import common from './js/common.js'
import {get, post } from './js/http' //axios封装


require('swiper/dist/css/swiper.css')
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);
Vue.prototype.common = common //公共js
Vue.prototype.$get = get //axios封装get
Vue.prototype.$post = post //axios封装post
var userAgent = window.navigator.userAgent;
if (userAgent.indexOf('NET') != -1) {
    //ie浏览器不兼容懒加载组件处理
    Vue.directive('lazy', function(el, binding) {
        el.src = binding.value
    })
} else {
    //实现图片懒加载
    Vue.use(VueLazyload, {
        preLoad: 1.3,
        error: "",
        loading: "",
        attempt: 3
    })
}



Vue.directive('title', {
    inserted: function(el, binding) {
        document.title = el.dataset.title
    }
})

// 跳转后返回顶部
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})


/* eslint-disable no-new */
let vm = new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>',

})